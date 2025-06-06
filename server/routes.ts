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
import {
  subscriptionFormSchema,
  userLoginSchema,
  userRegisterSchema,
} from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import {
  generateVerificationCode,
  getVerificationCodeExpiry,
} from "./libs/utils";
import { emailService } from "./email-service";

if (!process.env.STRIPE_SECRET_KEY) {
  console.warn(
    "Missing STRIPE_SECRET_KEY - Stripe functionality will be limited",
  );
}

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2023-10-16" })
  : undefined;

const RECAPTCHA_SITE_SECRET = process.env.RECAPTCHA_SITE_SECRET || ""

const JSON_BASE_URL = process.env.JSON_BASE_URL || "https://apiamiquus.amiquus.com/JSON_FILES_FOLDER"

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
    }),
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
            return done(null, false, {
              message: "Incorrect email or password",
            });
          }
          if (!user.password) {
            return done(null, false, { message: "Please log in with Google" });
          }

          const match = await bcrypt.compare(password, user.password);
          if (!match) {
            return done(null, false, {
              message: "Incorrect email or password",
            });
          }

          return done(null, user);
        } catch (error) {
          return done(error);
        }
      },
    ),
  );

  // Google OAuth configuration (if env variables are present)
  if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: "/api/auth/google/callback/",
        },
        async (accessToken, refreshToken, profile, done) => {
          try {
            const googleId = profile.id;
            const email = profile.emails?.[0]?.value;

            // Check if user already exists by Google ID
            let user = await storage.getUserByGoogleId(googleId);

            if (!user && email) {
              // Check if a user with this email already exists
              user = await storage.getUserByEmail(email);

              if (user) {
                // Link Google ID to existing user
                user = await storage.updateUserGoogleId(user.id, googleId);
              } else {
                // Create a new user
                const generatedUsername =
                  profile.displayName?.replace(/\\s+/g, "").toLowerCase() ||
                  `user${Date.now()}`;

                user = await storage.createUser({
                  googleId,
                  email,
                  username: generatedUsername,
                  firstName: profile.name?.givenName || undefined,
                  lastName: profile.name?.familyName || undefined,
                  isEmailVerified: true,
                });
              }
            }

            if (!user) {
              return done(
                new Error("Google login failed: no user created or found"),
              );
            }

            return done(null, user);
          } catch (err) {
            console.error("Google OAuth error:", err);
            return done(err as Error);
          }
        },
      ),
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

  async function verifyCaptcha(token: string): Promise<boolean> {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${RECAPTCHA_SITE_SECRET}&response=${token}`,
    });

    const data = await response.json();
    console.log("Captcha verification result:",data)
    return data.success;
  }


  // Auth routes
  app.post("/api/auth/register", async (req, res) => {
    try {
      const data = userRegisterSchema.parse(req.body);

      // Check if user exists
      const existingUser = await storage.getUserByEmail(data.email);
      if (existingUser) {
        return res.status(400).json({ message: "Email already taken" });
      }

      // Check if username exists
      const existingUsername = await storage.getUserByUsername(data.username);
      if (existingUsername) {
        return res.status(400).json({ message: "Username already taken" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(data.password, 10);

      // Generate verification code and expiry
      const verificationCode = generateVerificationCode();
      const verificationCodeExpiry = getVerificationCodeExpiry();

      // Create user
      const user = await storage.createUser({
        ...data,
        password: hashedPassword,
        verificationCode,
        verificationCodeExpiry,
        isEmailVerified: false,
      });

      if (!user) {
        return res.status(500).json({ message: "Registration failed" });
      }

      // Send email with code
      await emailService.sendVerificationEmail(user.email, verificationCode);

      // Remove password from response
      const {
        password,
        verificationCode: _,
        verificationCodeExpiry: __,
        ...userWithoutPassword
      } = user;

      // Auto-login
      req.login(user, (err) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Login failed after registration" });
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

  app.post("/api/auth/verify-code", async (req, res) => {
    const { code } = req.body;

    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Authentication required" });
      }

      const userId = (req.user as any).id;

      const user = await storage.getUser(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (user.isEmailVerified) {
        return res.status(400).json({
          message: "Email is already verified",
        });
      }

      if (
        !user.verificationCode ||
        user.verificationCode !== code ||
        !user.verificationCodeExpiry ||
        new Date() > new Date(user.verificationCodeExpiry)
      ) {
        return res
          .status(400)
          .json({ message: "Invalid or expired verification code" });
      }

      // Update user to mark email as verified
      await storage.updateUser(userId, {
        isEmailVerified: true,
        verificationCode: null,
        verificationCodeExpiry: null,
      });

      return res.status(200).json({
        message: "Email verified successfully",
      });
    } catch (error) {
      console.error("Error verifying code:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/auth/resend-code", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Authentication required" });
      }

      const userId = (req.user as any).id;
      const user = await storage.getUser(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (user.isEmailVerified) {
        return res.status(400).json({ message: "Email is already verified" });
      }

      // Generate new code and expiry
      const verificationCode = generateVerificationCode();
      const verificationCodeExpiry = getVerificationCodeExpiry();

      // Update in DB
      await storage.updateUser(userId, {
        verificationCode,
        verificationCodeExpiry,
      });

      // Send email
      await emailService.sendVerificationEmail(user.email, verificationCode);

      return res.status(200).json({ message: "Verification code resent" });
    } catch (error) {
      console.error("Error resending code:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/auth/change-email", async (req, res) => {
    const { newEmail } = req.body;

    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Authentication required" });
      }

      const userId = (req.user as any).id;
      const user = await storage.getUser(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (user.isEmailVerified) {
        return res.status(400).json({ message: "Email is already verified" });
      }

      const existingEmail = await storage.getUserByEmail(newEmail);
      if (existingEmail) {
        return res.status(400).json({ message: "New email already used" });
      }

      // Generate new code and expiry
      const verificationCode = generateVerificationCode();
      const verificationCodeExpiry = getVerificationCodeExpiry();

      // Update user with new email and code
      await storage.updateUser(userId, {
        email: newEmail,
        verificationCode,
        verificationCodeExpiry,
      });

      // Send new verification email
      await emailService.sendVerificationEmail(newEmail, verificationCode);

      return res
        .status(200)
        .json({ message: "Email updated and new verification code sent" });
    } catch (error) {
      console.error("Error changing email:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/auth/login", async (req, res, next) => {
    try {
      // Validate request body
      userLoginSchema.parse(req.body);

      const { captchaToken } = req.body;
      if (!captchaToken) {
        return res.status(400).json({ message: "Captcha token missing" });
      }

      const isValidCaptcha = await verifyCaptcha(captchaToken);
        if (!isValidCaptcha) {
          return res.status(400).json({ message: "Captcha verification failed" });
        }

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

          const {
            password,
            verificationCode,
            verificationCodeExpiry,
            ...userWithoutPassword
          } = user;
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

  // Start OAuth flow
  app.get(
    "/api/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  // Handle OAuth callback
  app.get(
    "/api/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
      // You can dynamically redirect based on query string if needed
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
      const {
        password,
        verificationCode,
        verificationCodeExpiry,
        ...userWithoutPassword
      } = req.user as any;
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

      return res
        .status(200)
        .json({ message: "Subscription canceled successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Failed to cancel subscription" });
    }
  });

  // api fetches
  app.get("/api/newcommer", async (req, res) => {
    try {
      const response = await fetch(
        `${JSON_BASE_URL}/newcommer_json_api.php?name=newcommer`
      );
      const text = await response.text(); // Read raw text

      try {
        const data = JSON.parse(text); // Try parsing it as JSON
        res.json(data);
      } catch (jsonError) {
        console.error("Not valid JSON. Response was:", text);
        throw new Error("Invalid JSON response from remote server.");
      }
    } catch (error) {
      console.error("Error fetching newcommer data:", error);
      res.status(500).json({ error: "Failed to fetch from remote server" });
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

      // Get the user for metadata
      const user = req.user as any;
      const customerName =
        user.firstName && user.lastName
          ? `${user.firstName} ${user.lastName}`
          : user.username;

      // Get or create Stripe customer for this user
      let customerId = user.stripeCustomerId;
      if (!customerId) {
        const customer = await stripe.customers.create({
          email: user.email,
          name: customerName,
        });

        customerId = customer.id;
        await storage.updateUserStripeCustomerId(user.id, customerId);
      }

      // Create payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: "usd",
        customer: customerId,
        metadata: {
          userId: user.id.toString(),
          userName: customerName,
          productType: "subscription",
        },
        receipt_email: user.email,
        // Enable saving payment methods with automatic_payment_methods
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
      console.error("Stripe payment intent error:", error);
      res
        .status(500)
        .json({ message: "Error creating payment intent: " + error.message });
    }
  });

  // Get active subscription count
  app.get("/api/subscription-stats", async (req, res) => {
    try {
      // Count active subscriptions
      const count = await storage.getActiveSubscriptionCount();

      // Capacity is set to 30 as per requirements
      const capacity = 30;

      res.json({
        active: count,
        capacity: capacity,
        remaining: Math.max(0, capacity - count),
        full: count >= capacity,
      });
    } catch (error: any) {
      console.error("Error getting subscription stats:", error);
      res.status(500).json({ message: "Error getting subscription stats" });
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

      // Check if we've reached the subscription limit
      const stats = await storage.getActiveSubscriptionCount();
      if (stats >= 30) {
        return res.status(400).json({
          message:
            "We've reached our capacity for new subscriptions. Please check back later.",
          code: "CAPACITY_REACHED",
        });
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
          name:
            user.firstName && user.lastName
              ? `${user.firstName} ${user.lastName}`
              : user.username,
        });

        customerId = customer.id;
        await storage.updateUserStripeCustomerId(user.id, customerId);
      }

      // Create subscription
      const subscription = await stripe.subscriptions.create({
        customer: customerId,
        items: [{ price: priceId }],
        payment_behavior: "default_incomplete",
        expand: ["latest_invoice.payment_intent"],
      });

      // Update subscription in storage with Stripe ID
      if (subscriptionId) {
        await storage.updateSubscriptionStripeId(
          parseInt(subscriptionId),
          subscription.id,
        );
      }

      // @ts-ignore - Type issues with expanded fields
      res.json({
        subscriptionId: subscription.id,
        clientSecret:
          subscription.latest_invoice?.payment_intent?.client_secret,
      });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Error creating subscription: " + error.message });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);
  return httpServer;
}
