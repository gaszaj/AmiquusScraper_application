import type { Express, Request, Response } from "express";
import { storage } from "../storage";
import { insertSubscriptionSchema } from "../../shared/schema";

// Simple auth middleware for demo purposes
const isAuthenticated = (req: Request, res: Response, next: Function) => {
  if (req.user) {
    next();
  } else {
    res.status(401).json({ message: "Not authenticated" });
  }
};

export function registerSubscriptionRoutes(app: Express) {
  // Get user's subscriptions
  app.get("/api/subscriptions", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.id;
      const subscriptions = await storage.getUserSubscriptions(userId);
      res.json(subscriptions);
    } catch (error: any) {
      console.error("Error fetching subscriptions:", error);
      res.status(500).json({ message: error.message });
    }
  });
  
  // Get a specific subscription
  app.get("/api/subscriptions/:id", isAuthenticated, async (req: any, res) => {
    try {
      const subscriptionId = parseInt(req.params.id);
      const subscription = await storage.getSubscription(subscriptionId);
      
      if (!subscription) {
        return res.status(404).json({ message: "Subscription not found" });
      }
      
      // Check if subscription belongs to the user
      if (subscription.userId !== req.user.id) {
        return res.status(403).json({ message: "Not authorized to access this subscription" });
      }
      
      res.json(subscription);
    } catch (error: any) {
      console.error("Error fetching subscription:", error);
      res.status(500).json({ message: error.message });
    }
  });
  
  // Create a new subscription
  app.post("/api/subscriptions", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.id;
      const subscriptionData = req.body;
      
      // Validate subscription data
      const validationResult = insertSubscriptionSchema.safeParse({
        ...subscriptionData,
        userId
      });
      
      if (!validationResult.success) {
        return res.status(400).json({ message: "Invalid subscription data", errors: validationResult.error.errors });
      }
      
      // Create the subscription
      const subscription = await storage.createSubscription(validationResult.data);
      
      res.status(201).json(subscription);
    } catch (error: any) {
      console.error("Error creating subscription:", error);
      res.status(500).json({ message: error.message });
    }
  });
  
  // Update an existing subscription
  app.patch("/api/subscriptions/:id", isAuthenticated, async (req: any, res) => {
    try {
      const subscriptionId = parseInt(req.params.id);
      const subscription = await storage.getSubscription(subscriptionId);
      
      if (!subscription) {
        return res.status(404).json({ message: "Subscription not found" });
      }
      
      // Check if subscription belongs to the user
      if (subscription.userId !== req.user.id) {
        return res.status(403).json({ message: "Not authorized to update this subscription" });
      }
      
      // Update the subscription
      const updatedSubscription = await storage.updateSubscription(subscriptionId, req.body);
      
      res.json(updatedSubscription);
    } catch (error: any) {
      console.error("Error updating subscription:", error);
      res.status(500).json({ message: error.message });
    }
  });
  
  // Delete a subscription
  app.delete("/api/subscriptions/:id", isAuthenticated, async (req: any, res) => {
    try {
      const subscriptionId = parseInt(req.params.id);
      const subscription = await storage.getSubscription(subscriptionId);
      
      if (!subscription) {
        return res.status(404).json({ message: "Subscription not found" });
      }
      
      // Check if subscription belongs to the user
      if (subscription.userId !== req.user.id) {
        return res.status(403).json({ message: "Not authorized to delete this subscription" });
      }
      
      // Delete the subscription
      await storage.deleteSubscription(subscriptionId);
      
      res.json({ success: true });
    } catch (error: any) {
      console.error("Error deleting subscription:", error);
      res.status(500).json({ message: error.message });
    }
  });
}