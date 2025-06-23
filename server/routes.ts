import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import session from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

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
  getSubscriptionStats,
} from "./libs/utils";
import { emailService } from "./email-service";
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  console.warn(
    "Missing STRIPE_SECRET_KEY - Stripe functionality will be limited",
  );
}

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : undefined;

// const stripe = new Stripe(
//   "sk_test_51R7GaAKTt4KB6Gxyd5O4LaQXsU7DzgMeb67B6rE7yQXWycIXrgDL3WPeERnYKXvFDWQWkle8HdMJekxnZO1CZW9c00bXzlIHDs",
// );

const RECAPTCHA_SITE_SECRET = process.env.RECAPTCHA_SITE_SECRET || "";

const JSON_BASE_URL =
  process.env.JSON_BASE_URL ||
  "https://apiamiquus.amiquus.com/JSON_FILES_FOLDER";

const BEARER_TOKEN = process.env.BEARER_TOKEN || "";

export async function registerRoutes(app: Express): Promise<Server> {
  // Session setup
  // app.use(
  //   session({
  //     secret: process.env.SESSION_SECRET || "amiquus-secret-key",
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: {
  //       secure: process.env.NODE_ENV === "production",
  //       maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  //     },
  //     store: storage.sessionStore, // Use PostgreSQL to store sessions
  //   }),
  // );
  app.set("trust proxy", 1);

  app.use(
    session({
      secret: process.env.SESSION_SECRET || "amiquus-secret-key",
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: true,
        sameSite: "lax",
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      },
      store: storage.sessionStore,
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

                if (user) {
                  // create stipe customer
                  const stripeCustomer = await stripe.customers.create({
                    email: user.email,
                    name: `${user.firstName} ${user.lastName}`,
                    metadata: {
                      userId: user.id.toString(),
                    },
                  });

                  await storage.updateUserStripeCustomerId(
                    user.id,
                    stripeCustomer.id,
                  );
                }
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
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${RECAPTCHA_SITE_SECRET}&response=${token}`,
      },
    );

    const data = await response.json();
    console.log("Captcha verification result:", data);
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

      // create stipe customer
      const stripeCustomer = await stripe.customers.create({
        email: user.email,
        name: `${user.firstName} ${user.lastName}`,
        metadata: {
          userId: user.id.toString(),
        },
      });

      // Send email with code
      await emailService.sendVerificationEmail(user.email, verificationCode);

      // update user with stripe customer id
      await storage.updateUserStripeCustomerId(user.id, stripeCustomer.id);

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
  app.get("/api/auth/google", (req, res, next) => {
    const redirectRaw = req.query.redirect;
    const redirect = typeof redirectRaw === "string" ? redirectRaw : undefined;

    console.log("Redirect via state param:", redirect);

    passport.authenticate("google", {
      scope: ["profile", "email"],
      state: redirect,
    })(req, res, next);
  });

  // Handle OAuth callback
  app.get(
    "/api/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
      const state = req.query.state;
      const redirectTo =
        typeof state === "string" && state.startsWith("/")
          ? state
          : `/${state || "dashboard"}`;

      console.log("Redirecting to:", redirectTo);
      res.redirect(redirectTo);
    },
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
      const hasPassword = !!password;
      return res.json({ user: { ...userWithoutPassword, hasPassword } });
    }
    return res.status(401).json({ message: "Not authenticated" });
  });

  // Change password route
  app.post("/api/user/change-password", async (req, res) => {
    try {
      if (!req.isAuthenticated?.()) {
        return res.status(401).json({ message: "Authentication required" });
      }

      const user = req.user as any;
      const { currentPassword, newPassword, confirmPassword } = req.body;

      if (!newPassword || !confirmPassword) {
        return res
          .status(400)
          .json({ message: "New password fields are required" });
      }

      if (newPassword !== confirmPassword) {
        return res.status(400).json({ message: "New passwords do not match" });
      }

      // If user has a password, verify current password
      if (user.password) {
        const isValid = await bcrypt.compare(currentPassword, user.password);
        if (!isValid) {
          return res
            .status(400)
            .json({ message: "Current password is incorrect" });
        }
      }

      // Hash and update the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await storage.updateUser(user.id, { password: hashedPassword });

      return res.status(200).json({ message: "Password updated successfully" });
    } catch (error: any) {
      console.error("Error changing password:", error);
      return res.status(500).json({ message: "Failed to change password" });
    }
  });

  app.post("/api/user/update-profile", async (req, res) => {
    try {
      if (!req.isAuthenticated?.()) {
        return res.status(401).json({ message: "Authentication required" });
      }

      const userId = (req.user as any).id;
      const existingUser = await storage.getUser(userId);
      const { email, username, firstName, lastName } = req.body;

      // Prevent email update if Google user with no password
      const isGoogleOnlyUser =
        !!existingUser.googleId && !existingUser.password;
      const emailChanged = email && email !== existingUser.email;

      if (isGoogleOnlyUser && emailChanged) {
        return res.status(400).json({
          message:
            "You signed in with Google. Please set a password before changing your email.",
        });
      }

      await storage.updateUser(userId, {
        email,
        username,
        firstName,
        lastName,
      });

      return res.status(200).json({ message: "Profile updated successfully." });
    } catch (err: any) {
      console.error("Profile update failed:", err);
      return res.status(500).json({ message: "Failed to update profile." });
    }
  });

  app.post("/api/waitlist", async (req, res) => {
    try {
      const { email, firstName, lastName } = req.body;

      if (!email || !firstName || !lastName) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const userName = `${firstName} ${lastName}`;

      await emailService.sendAdminNewWaitlistAlert(email, userName);
      await emailService.sendUserWaitlistConfirmation(email, userName);

      return res
        .status(200)
        .json({ message: "Added to waitlist successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Failed to add to waitlist" });
    }
  });

  // Subscription routes
  // list payment methods
  app.get("/api/customer/payment-methods", async (req, res) => {
    const { customerId } = req.query;

    if (!stripe) {
      return res.status(500).json({ message: "Stripe is not configured" });
    }

    if (!customerId || typeof customerId !== "string") {
      return res.status(400).json({ error: "Customer ID is required" });
    }

    const paymentMethods = await stripe.customers.listPaymentMethods(
      customerId,
      { limit: 1 },
    );
    if (!paymentMethods) {
      return res.status(200).json({ hasPaymentMethod: false });
    }
    if (paymentMethods.data.length === 0) {
      return res.status(200).json({ hasPaymentMethod: false });
    }
    const paymentMethod = paymentMethods.data[0];
    if (!paymentMethod) {
      return res.status(200).json({ hasPaymentMethod: false });
    }
    return res.status(200).json({
      hasPaymentMethod: true,
      paymentMethod,
    });
  });

  app.post("/api/set-alerts-intent", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Authentication required" });
      }

      const data = req.body;
      const userId = (req.user as any).id;

      const stats = await getSubscriptionStats();
      if (stats.full) {
        return res.status(403).json({
          message:
            "Subscription capacity has been reached. Please join the waitlist.",
        });
      }

      if (!stripe) {
        return res.status(500).json({ message: "Stripe is not configured" });
      }
      // Create Stripe customer if not exists

      const user = req.user as any;
      let customerId = user.stripeCustomerId;

      if (!customerId) {
        const customer = await stripe.customers.create({
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
          metadata: {
            userId: user.id.toString(),
          },
        });

        customerId = customer.id;
        await storage.updateUserStripeCustomerId(userId, customerId);
      }
      // Convert dollars to cents
      const unitAmountInCents = Math.round(data.price * 100);

      const price = await stripe.prices.create({
        currency: "usd",
        unit_amount: unitAmountInCents,
        recurring: {
          interval: "day",
        },
        product_data: {
          name: `Amiquus Subscription - ${data.brand}`,
        },
        metadata: {
          userId: userId.toString(),
        },
      });

      if (!price) {
        return res.status(500).json({ message: "Failed to create price" });
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
        price: unitAmountInCents,
        status: "pending",
        stripePriceId: price.id,
      });

      if (!subscription) {
        return res
          .status(500)
          .json({ message: "Failed to create subscription" });
      }

      // get User
      const updatedUser = await storage.getUser(userId);

      if (!updatedUser || !updatedUser.stripeCustomerId) {
        return res.status(404).json({ message: "User not found" });
      }

      // Create payment intent
      const setupIntent = await stripe.setupIntents.create({
        customer: updatedUser.stripeCustomerId,
        automatic_payment_methods: {
          enabled: true,
        },
        metadata: {
          userId,
          userSubscriptionId: subscription.id,
        },
      });

      res.status(200).json({ clientSecret: setupIntent.client_secret });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      return res.status(500).json({ message: "Failed to create subscription" });
    }
  });

  // if user has payment method
  app.post("/api/subscriptions", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Authentication required" });
      }

      const data = req.body;
      const userId = (req.user as any).id;

      if (!stripe) {
        return res.status(500).json({ message: "Stripe is not configured" });
      }

      // 🚫 Capacity Check First
      const stats = await getSubscriptionStats();

      if (stats.full) {
        return res.status(403).json({
          message:
            "Subscription capacity has been reached. Please join the waitlist.",
        });
      }

      // Create Stripe customer if not exists
      const user = req.user as any;
      let customerId = user.stripeCustomerId;

      if (!customerId) {
        const customer = await stripe.customers.create({
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
          metadata: {
            userId: user.id.toString(),
          },
        });

        customerId = customer.id;
        await storage.updateUserStripeCustomerId(userId, customerId);
      }

      // Convert dollars to cents
      const unitAmountInCents = Math.round(data.price * 100);

      const price = await stripe.prices.create({
        currency: "usd",
        unit_amount: unitAmountInCents,
        recurring: {
          interval: "day",
        },
        product_data: {
          name: `Amiquus Subscription - ${data.brand}`,
        },
        metadata: {
          userId: userId.toString(),
        },
      });

      if (!price) {
        return res.status(500).json({ message: "Failed to create price" });
      }

      // Get payment methods
      const paymentMethods = await stripe.customers.listPaymentMethods(
        customerId,
        {
          type: "card",
          limit: 1,
        },
      );

      if (!paymentMethods.data.length) {
        return res.status(400).json({
          message:
            "No payment method found. Please add a payment method before subscribing.",
        });
      }

      // Create subscription
      const dbSubscription = await storage.createSubscription({
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
        price: unitAmountInCents,
        status: "pending",
        stripePriceId: price.id,
      });

      if (!dbSubscription) {
        return res
          .status(500)
          .json({ message: "Failed to create subscription" });
      }

      // Create Stripe subscription with default payment method
      const stripeRes = await stripe.subscriptions.create({
        customer: customerId,
        items: [{ price: price.id }],
        default_payment_method: paymentMethods.data[0].id,
        metadata: {
          userId: userId.toString(),
          userSubscriptionId: dbSubscription.id.toString(),
        },
      });

      return res.status(201).json(stripeRes);
    } catch (error) {
      console.log("Error creating subscription:", error);
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

      // Exclude subscriptions with status 'pending'
      const activeSubscriptions = subscriptions.filter(
        (sub) => sub.status !== "pending",
      );

      return res.json(activeSubscriptions);
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

  app.put("/api/subscriptions/:id", async (req, res) => {
    try {
      // ─── Authorization ───────────────────────────────
      if (!req.isAuthenticated?.()) {
        return res.status(401).json({ message: "Authentication required" });
      }

      // 🚫 Capacity Check First
      const stats = await getSubscriptionStats();

      const user = req.user as any;
      const userId = user.id;
      const subscriptionId = parseInt(req.params.id);
      const { id, createdAt, updatedAt, ...data } = req.body;

      // ─── Subscription Retrieval ──────────────────────
      const subscription = await storage.getSubscription(subscriptionId);
      if (!subscription || subscription.userId !== userId) {
        return res.status(404).json({ message: "Subscription not found" });
      }

      if (!stripe) {
        return res.status(500).json({ message: "Stripe is not configured" });
      }

      if (
        (subscription.websitesSelected as string[]).length <
          data.websitesSelected.length &&
        stats.full
      ) {
        return res.status(403).json({
          message:
            "Subscription capacity has been reached. Please join the waitlist.",
        });
      }

      if (subscription.status !== "active" && data.status === "active") {
        if (stats.full) {
          return res.status(403).json({
            message:
              "Subscription capacity has been reached. Please join the waitlist.",
          });
        }
      }

      // ─── Stripe Price Update (if price changed) ──────
      let priceId = subscription.stripePriceId;
      const isPriceSame = subscription.price === data.price;

      if (!isPriceSame) {
        const newPrice = await stripe.prices.create({
          currency: "usd",
          unit_amount: data.price,
          recurring: { interval: "day" },
          product_data: { name: `Amiquus Subscription - ${data.brand}` },
          metadata: { userId: userId.toString() },
        });

        if (!newPrice) {
          return res
            .status(500)
            .json({ message: "Failed to create new Stripe price" });
        }

        priceId = newPrice.id;
      }

      // ─── Update Subscription in Database ─────────────
      await storage.updateSubscription(subscriptionId, {
        ...data,
        stripePriceId: priceId,
      });

      // ─── Update Stripe Subscription ──────────────────
      const stripeSubId =
        subscription.stripeSubscriptionId || data.stripeSubscriptionId;
      if (!stripeSubId) {
        return res
          .status(400)
          .json({ message: "Stripe subscription ID is missing" });
      }

      const stripeSubscription =
        await stripe.subscriptions.retrieve(stripeSubId);
      const subscriptionItemId = stripeSubscription.items.data[0]?.id;

      if (!subscriptionItemId) {
        return res
          .status(500)
          .json({ message: "Stripe subscription item not found" });
      }

      if (isPriceSame) {
        if (data.status === "active" && subscription.status === "paused") {
          await stripe.subscriptions.resume(stripeSubId);
        } else if (
          data.status === "paused" &&
          subscription.status === "active"
        ) {
          await stripe.subscriptions.update(stripeSubId, {
            pause_collection: { behavior: "void" },
          });
        }
      } else {
        // update price
        if (data.status === "active" && subscription.status === "paused") {
          await stripe.subscriptions.update(stripeSubId, {
            items: [{ id: subscriptionItemId, price: priceId as string }],
            pause_collection: null,
          });

          // } else if (data.status === "paused" && subscription.status === "active") {
          //   await stripe.subscriptions.update(stripeSubId,
        } else {
          await stripe.subscriptions.update(stripeSubId, {
            items: [{ id: subscriptionItemId, price: priceId as string }],
          });
        }
      }

      // ─── Sync JSON with External System ───────────────
      const jsonId =
        stripeSubscription.metadata.jsonId || `${user.email}${subscriptionId}`;
      const getUrl = `${JSON_BASE_URL}/user_json_api.php?username=${jsonId}`;
      const jsonRes = await fetch(getUrl, {
        method: "GET",
        headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
      });

      if (!jsonRes.ok) {
        console.error("[JSON Sync] Failed to fetch existing JSON");
        return res
          .status(500)
          .json({ message: "Failed to fetch existing JSON" });
      }

      const existingJson = await jsonRes.json();
      const putUrl = `${JSON_BASE_URL}/user_json_api.php?username=${jsonId}`;

      const updatedJson = {
        ...existingJson,
        user_info: {
          ...existingJson.user_info,
          payment_status: data.status,
        },
        running_frequency: data.updateFrequency,
        websites: {
          websites_to_scrap: data.websitesSelected,
        },
        first_run_throwback_time: "86400",
        language_tag: {
          language: [data.notificationLanguage],
        },
        filters: {
          ...existingJson.filters,
          facebook_link: data.facebookMarketplaceUrl,
          min_mileage: data.mileageMin,
          max_mileage: data.mileageMax,
          telegram_bot_token: data.telegramBotToken,
          telegram_chat_id: data.telegramChatId,
          telegram_language: data.notificationLanguage,
          min_price: data.priceMin,
          max_price: data.priceMax,
          fuel_type: data.fuelType,
          brand: data.brand,
          model: data.model,
          model_year_lower_limit: data.yearMin,
          model_year_upper_limit: data.yearMax,
        },
      };

      const updateRes = await fetch(putUrl, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedJson),
      });

      if (!updateRes.ok) {
        console.error("[JSON Sync] Failed to update JSON for", jsonId);
        return res
          .status(500)
          .json({ message: "Failed to update external JSON data" });
      }

      console.log(
        `[✅] Subscription #${subscriptionId} updated & synced for user ${user.email}`,
      );
      return res
        .status(200)
        .json({ message: "Subscription updated successfully" });
    } catch (error: any) {
      console.error("❌ Error updating subscription:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // api fetches
  app.get("/api/newcommer", async (req, res) => {
    if (!BEARER_TOKEN) {
      return res.status(500).json({ error: "BEARER_TOKEN is not configured" });
    }
    try {
      const response = await fetch(
        `${JSON_BASE_URL}/newcommer_json_api.php?name=newcommer`,
        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`, // your token
          },
        },
      );

      const text = await response.text();

      try {
        const data = JSON.parse(text);
        // console.log("Newcommer data:", data)
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

  app.get("/api/subscription-stats", async (req, res) => {
    // Count active subscriptions
    // const count = await storage.getActiveSubscriptionCount()
    try {
      const capacity = 30;

      // Step 1: Get all usernames
      const usernameRes = await fetch(`${JSON_BASE_URL}/user_json_api.php`, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      const { users }: { users: string[] } = await usernameRes.json();

      // Step 2: Fetch each user's JSON data
      const userJsons = await Promise.all(
        users.map(async (username) => {
          try {
            const res = await fetch(
              `${JSON_BASE_URL}/user_json_api.php?username=${username}`,
              {
                headers: {
                  Authorization: `Bearer ${BEARER_TOKEN}`,
                  "Content-Type": "application/json",
                },
              },
            );
            if (!res.ok) return null;
            return await res.json();
          } catch (err) {
            console.error(`Error fetching JSON for ${username}:`, err);
            return null;
          }
        }),
      );

      // Step 3: Count subscriptions (each website = 1 slot)
      let activeCount = 0;

      userJsons.forEach((user) => {
        if (user?.user_info?.payment_status === "active") {
          const websites = user.websites?.websites_to_scrap;
          if (Array.isArray(websites)) {
            activeCount += websites.length;
          }
        }
      });

      // Step 4: Send response
      res.json({
        active: activeCount,
        capacity,
        remaining: Math.max(0, capacity - activeCount),
        full: activeCount >= capacity,
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

      const stats = await getSubscriptionStats();
      if (stats.full) {
        return res.status(403).json({
          message:
            "Subscription capacity has been reached. Please join the waitlist.",
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
