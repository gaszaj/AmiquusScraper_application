import { 
  users, User, InsertUser, 
  subscriptions, Subscription, InsertSubscription 
} from "@shared/schema";

// Interface for all storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  getUserByGoogleId(googleId: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUserGoogleId(userId: number, googleId: string): Promise<User>;
  updateUserStripeCustomerId(userId: number, customerId: string): Promise<User>;

  // Subscription operations
  createSubscription(subscription: InsertSubscription): Promise<Subscription>;
  getSubscription(id: number): Promise<Subscription | undefined>;
  getUserSubscriptions(userId: number): Promise<Subscription[]>;
  updateSubscription(id: number, data: Partial<InsertSubscription>): Promise<Subscription>;
  updateSubscriptionStripeId(id: number, stripeSubscriptionId: string): Promise<Subscription>;
  deleteSubscription(id: number): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private subscriptions: Map<number, Subscription>;
  private userIdCounter: number;
  private subscriptionIdCounter: number;

  constructor() {
    this.users = new Map();
    this.subscriptions = new Map();
    this.userIdCounter = 1;
    this.subscriptionIdCounter = 1;
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username.toLowerCase() === username.toLowerCase()
    );
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
  }

  async getUserByGoogleId(googleId: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.googleId === googleId
    );
  }

  async createUser(userData: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const now = new Date();
    const user: User = { 
      ...userData, 
      id,
      createdAt: now
    };
    this.users.set(id, user);
    return user;
  }

  async updateUserGoogleId(userId: number, googleId: string): Promise<User> {
    const user = this.users.get(userId);
    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }
    
    const updatedUser = { ...user, googleId };
    this.users.set(userId, updatedUser);
    return updatedUser;
  }

  async updateUserStripeCustomerId(userId: number, customerId: string): Promise<User> {
    const user = this.users.get(userId);
    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }
    
    const updatedUser = { ...user, stripeCustomerId: customerId };
    this.users.set(userId, updatedUser);
    return updatedUser;
  }

  // Subscription operations
  async createSubscription(subscriptionData: InsertSubscription): Promise<Subscription> {
    const id = this.subscriptionIdCounter++;
    const now = new Date();
    const subscription: Subscription = {
      ...subscriptionData,
      id,
      createdAt: now,
      updatedAt: now
    };
    this.subscriptions.set(id, subscription);
    return subscription;
  }

  async getSubscription(id: number): Promise<Subscription | undefined> {
    return this.subscriptions.get(id);
  }

  async getUserSubscriptions(userId: number): Promise<Subscription[]> {
    return Array.from(this.subscriptions.values()).filter(
      (subscription) => subscription.userId === userId
    );
  }

  async updateSubscription(id: number, data: Partial<InsertSubscription>): Promise<Subscription> {
    const subscription = this.subscriptions.get(id);
    if (!subscription) {
      throw new Error(`Subscription with ID ${id} not found`);
    }
    
    const now = new Date();
    const updatedSubscription = { 
      ...subscription, 
      ...data,
      updatedAt: now 
    };
    
    this.subscriptions.set(id, updatedSubscription);
    return updatedSubscription;
  }

  async updateSubscriptionStripeId(id: number, stripeSubscriptionId: string): Promise<Subscription> {
    return this.updateSubscription(id, { stripeSubscriptionId });
  }

  async deleteSubscription(id: number): Promise<void> {
    if (!this.subscriptions.has(id)) {
      throw new Error(`Subscription with ID ${id} not found`);
    }
    
    this.subscriptions.delete(id);
  }
}

export const storage = new MemStorage();
