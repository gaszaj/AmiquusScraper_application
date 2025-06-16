import type { Express, Request, Response } from "express";
import Stripe from "stripe";
import { storage } from "../storage";

// Initialize Stripe
const stripe = process.env.STRIPE_SECRET_KEY
? new Stripe(process.env.STRIPE_SECRET_KEY)
: undefined;

// Simple auth middleware for demo purposes
const isAuthenticated = (req: Request, res: Response, next: Function) => {
  if (req.user) {
    next();
  } else {
    res.status(401).json({ message: "Not authenticated" });
  }
};

export function registerStripeRoutes(app: Express) {
  // Create a setup intent for adding a payment method
  app.post("/api/create-setup-intent", isAuthenticated, async (req: any, res) => {
    try {
      const user = req.user;
      
      // Get or create a customer
      let customerId = user.stripeCustomerId;
      
      if (!customerId) {
        // Create a new customer
        const customer = await stripe.customers.create({
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
          metadata: {
            userId: user.id.toString(),
          },
        });
        
        customerId = customer.id;
        
        // Update user with Stripe customer ID
        await storage.updateUserStripeCustomerId(user.id, customerId);
      }
      
      // Create a setup intent
      const setupIntent = await stripe.setupIntents.create({
        customer: customerId,
        payment_method_types: ["card"],
        metadata: {
          userId: user.id.toString(),
        },
      });

      console.log("Setup intent created:", setupIntent)
      res.json({ clientSecret: setupIntent.client_secret });
    } catch (error: any) {
      console.error("Error creating setup intent:", error);
      res.status(500).json({ message: error.message });
    }
  });
  
  // Get user's payment methods
  app.get("/api/payment-methods", isAuthenticated, async (req: any, res) => {
    try {
      const user = req.user;
      
      if (!user.stripeCustomerId) {
        return res.json([]);
      }
      
      const paymentMethods = await stripe.paymentMethods.list({
        customer: user.stripeCustomerId,
        type: "card",
      });
      
      // Get the default payment method from the customer
      const customer = await stripe.customers.retrieve(user.stripeCustomerId);
      const defaultPaymentMethodId = typeof customer !== 'string' ? customer.invoice_settings?.default_payment_method : null;
      
      // Format the payment methods
      const formattedPaymentMethods = paymentMethods.data.map(method => {
        const card = method.card!;
        return {
          id: method.id,
          brand: card.brand,
          last4: card.last4,
          expMonth: card.exp_month,
          expYear: card.exp_year,
          isDefault: method.id === defaultPaymentMethodId,
        };
      });
      
      res.json(formattedPaymentMethods);
    } catch (error: any) {
      console.error("Error getting payment methods:", error);
      res.status(500).json({ message: error.message });
    }
  });
  
  // Set default payment method
  app.post("/api/payment-methods/:id/default", isAuthenticated, async (req: any, res) => {
    try {
      const user = req.user;
      const paymentMethodId = req.params.id;
      
      if (!user.stripeCustomerId) {
        return res.status(400).json({ message: "User has no Stripe customer ID" });
      }
      
      // Update the customer's default payment method
      await stripe.customers.update(user.stripeCustomerId, {
        invoice_settings: {
          default_payment_method: paymentMethodId,
        },
      });
      
      res.json({ success: true });
    } catch (error: any) {
      console.error("Error setting default payment method:", error);
      res.status(500).json({ message: error.message });
    }
  });
  
  // Remove payment method
  app.delete("/api/payment-methods/:id", isAuthenticated, async (req, res) => {
    try {
      const paymentMethodId = req.params.id;
      
      // Detach the payment method from the customer
      await stripe.paymentMethods.detach(paymentMethodId);
      
      res.json({ success: true });
    } catch (error: any) {
      console.error("Error removing payment method:", error);
      res.status(500).json({ message: error.message });
    }
  });
  
  // Create a payment intent
  app.post("/api/create-payment-intent", isAuthenticated, async (req: any, res) => {
    try {
      const { amount } = req.body;
      const user = req.user;
      
      // Get or create a customer
      let customerId = user.stripeCustomerId;
      
      if (!customerId) {
        // Create a new customer
        const customer = await stripe.customers.create({
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
          metadata: {
            userId: user.id.toString(),
          },
        });
        
        customerId = customer.id;
        
        // Update user with Stripe customer ID
        await storage.updateUserStripeCustomerId(user.id, customerId);
      }
      
      // Create a payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: "usd",
        customer: customerId,
        metadata: {
          userId: user.id.toString(),
        },
      });
      
      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
      console.error("Error creating payment intent:", error);
      res.status(500).json({ message: error.message });
    }
  });
}