import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import Stripe from "stripe";
import session from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import MemoryStore from "memorystore";
import bcrypt from "bcrypt";
import { subscriptionFormSchema, userLoginSchema, userRegisterSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

if (!process.env.STRIPE_SECRET_KEY) {
  console.warn('Missing STRIPE_SECRET_KEY - Stripe functionality will be limited');
}

const stripe = process.env.STRIPE_SECRET_KEY ? 
  new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2023-10-16" }) : 
  undefined;

const MemorySessionStore = MemoryStore(session);

export async function registerRoutes(app: Express): Promise<Server> {
  // Session setup
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "amiquus-secret-key",
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      },
      store: new MemorySessionStore({
        checkPeriod: 86400000, // prune expired entries every 24h
      }),
    })
  );

  // Initialize passport
  app.use(passport.initialize());
  app.use(passport.session());

  // Passport local strategy configuration
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          const user = await storage.getUserByEmail(email);
          if (!user) {
            return done(null, false, { message: "Incorrect email or password" });
          }
          if (!user.password) {
            return done(null, false, { message: "Please log in with Google" });
          }
          
          const match = await bcrypt.compare(password, user.password);
          if (!match) {
            return done(null, false, { message: "Incorrect email or password" });
          }
          
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  // Google OAuth configuration (if env variables are present)
  if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: "/api/auth/google/callback",
        },
        async (accessToken, refreshToken, profile, done) => {
          try {
            let user = await storage.getUserByGoogleId(profile.id);
            
            if (!user) {
              // Check if a user with this email already exists
              const email = profile.emails?.[0]?.value;
              if (email) {
                user = await storage.getUserByEmail(email);
                
                if (user) {
                  // Link Google account to existing user
                  user = await storage.updateUserGoogleId(user.id, profile.id);
                } else {
                  // Create new user from Google profile
                  user = await storage.createUser({
                    username: profile.displayName.replace(/\s+/g, "").toLowerCase() || `user${Date.now()}`,
                    email: email,
                    googleId: profile.id,
                    firstName: profile.name?.givenName,
                    lastName: profile.name?.familyName,
                  });
                }
              }
            }
            
            return done(null, user);
          } catch (error) {
            return done(error);
          }
        }
      )
    );
  }

  // Passport serialization
  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await storage.getUser(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });

  // Auth routes
  app.post("/api/auth/register", async (req, res) => {
    try {
      const data = userRegisterSchema.parse(req.body);
      
      // Check if user exists
      const existingUser = await storage.getUserByEmail(data.email);
      if (existingUser) {
        return res.status(400).json({ message: "Email already in use" });
      }
      
      // Hash password
      const hashedPassword = await bcrypt.hash(data.password, 10);
      
      // Create user
      const user = await storage.createUser({
        ...data,
        password: hashedPassword,
      });
      
      // Remove password from response
      const { password, ...userWithoutPassword } = user;
      
      // Auto-login
      req.login(user, (err) => {
        if (err) {
          return res.status(500).json({ message: "Login failed after registration" });
        }
        return res.status(201).json(userWithoutPassword);
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      return res.status(500).json({ message: "Registration failed" });
    }
  });

  app.post("/api/auth/login", (req, res, next) => {
    try {
      // Validate request body
      userLoginSchema.parse(req.body);
      
      passport.authenticate("local", (err, user, info) => {
        if (err) {
          return next(err);
        }
        if (!user) {
          return res.status(401).json({ message: info.message });
        }
        
        req.login(user, (err) => {
          if (err) {
            return next(err);
          }
          
          const { password, ...userWithoutPassword } = user;
          return res.json(userWithoutPassword);
        });
      })(req, res, next);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      return res.status(500).json({ message: "Login failed" });
    }
  });

  app.get("/api/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

  app.get(
    "/api/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
      res.redirect("/dashboard");
    }
  );

  app.post("/api/auth/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed" });
      }
      res.status(200).json({ message: "Logged out successfully" });
    });
  });

  app.get("/api/auth/session", (req, res) => {
    if (req.isAuthenticated()) {
      const { password, ...userWithoutPassword } = req.user as any;
      return res.json({ user: userWithoutPassword });
    }
    return res.status(401).json({ message: "Not authenticated" });
  });

  // Subscription routes
  app.post("/api/subscriptions", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Authentication required" });
      }
      
      const data = subscriptionFormSchema.parse(req.body);
      const userId = (req.user as any).id;
      
      // Create Stripe customer if not exists
      if (stripe) {
        const user = req.user as any;
        let customerId = user.stripeCustomerId;
        
        if (!customerId) {
          const customer = await stripe.customers.create({
            email: user.email,
            name: `${data.firstName} ${data.lastName}`,
          });
          
          customerId = customer.id;
          await storage.updateUserStripeCustomerId(userId, customerId);
        }
      }
      
      // Create subscription
      const subscription = await storage.createSubscription({
        userId,
        websitesSelected: data.websitesSelected,
        facebookMarketplaceUrl: data.facebookMarketplaceUrl,
        updateFrequency: data.updateFrequency,
        brand: data.brand,
        model: data.model,
        fuelType: data.fuelType,
        yearMin: data.yearMin,
        yearMax: data.yearMax,
        mileageMin: data.mileageMin,
        mileageMax: data.mileageMax,
        priceMin: data.priceMin,
        priceMax: data.priceMax,
        telegramBotToken: data.telegramBotToken,
        telegramChatId: data.telegramChatId,
        notificationLanguage: data.notificationLanguage,
        price: data.price,
      });
      
      return res.status(201).json(subscription);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      return res.status(500).json({ message: "Failed to create subscription" });
    }
  });

  app.get("/api/subscriptions", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Authentication required" });
      }
      
      const userId = (req.user as any).id;
      const subscriptions = await storage.getUserSubscriptions(userId);
      
      return res.json(subscriptions);
    } catch (error) {
      return res.status(500).json({ message: "Failed to fetch subscriptions" });
    }
  });

  app.get("/api/subscriptions/:id", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Authentication required" });
      }
      
      const userId = (req.user as any).id;
      const subscriptionId = parseInt(req.params.id);
      
      const subscription = await storage.getSubscription(subscriptionId);
      
      if (!subscription || subscription.userId !== userId) {
        return res.status(404).json({ message: "Subscription not found" });
      }
      
      return res.json(subscription);
    } catch (error) {
      return res.status(500).json({ message: "Failed to fetch subscription" });
    }
  });

  app.delete("/api/subscriptions/:id", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Authentication required" });
      }
      
      const userId = (req.user as any).id;
      const subscriptionId = parseInt(req.params.id);
      
      const subscription = await storage.getSubscription(subscriptionId);
      
      if (!subscription || subscription.userId !== userId) {
        return res.status(404).json({ message: "Subscription not found" });
      }
      
      // Cancel on Stripe if integrated
      if (stripe && subscription.stripeSubscriptionId) {
        await stripe.subscriptions.cancel(subscription.stripeSubscriptionId);
      }
      
      await storage.deleteSubscription(subscriptionId);
      
      return res.status(200).json({ message: "Subscription canceled successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Failed to cancel subscription" });
    }
  });

  // Stripe payment intent creation
  app.post("/api/create-payment-intent", async (req, res) => {
    try {
      if (!stripe) {
        return res.status(500).json({ message: "Stripe is not configured" });
      }
      
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Authentication required" });
      }
      
      const { amount } = req.body;
      
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: "usd",
      });
      
      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
      res.status(500).json({ message: "Error creating payment intent: " + error.message });
    }
  });

  // Stripe subscription creation
  app.post("/api/create-subscription", async (req, res) => {
    try {
      if (!stripe) {
        return res.status(500).json({ message: "Stripe is not configured" });
      }
      
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Authentication required" });
      }
      
      const user = req.user as any;
      const { subscriptionId, priceId } = req.body;
      
      if (!priceId) {
        return res.status(400).json({ message: "Price ID is required" });
      }
      
      // Get or create a Stripe customer
      let customerId = user.stripeCustomerId;
      
      if (!customerId) {
        const customer = await stripe.customers.create({
          email: user.email,
          name: user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : user.username,
        });
        
        customerId = customer.id;
        await storage.updateUserStripeCustomerId(user.id, customerId);
      }
      
      // Create subscription
      const subscription = await stripe.subscriptions.create({
        customer: customerId,
        items: [{ price: priceId }],
        payment_behavior: 'default_incomplete',
        expand: ['latest_invoice.payment_intent'],
      });
      
      // Update subscription in storage with Stripe ID
      if (subscriptionId) {
        await storage.updateSubscriptionStripeId(parseInt(subscriptionId), subscription.id);
      }
      
      // @ts-ignore - Type issues with expanded fields
      res.json({
        subscriptionId: subscription.id,
        clientSecret: subscription.latest_invoice?.payment_intent?.client_secret,
      });
    } catch (error: any) {
      res.status(500).json({ message: "Error creating subscription: " + error.message });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);
  return httpServer;
}
