import { db } from "./db";
import { eq } from "drizzle-orm";
import {
  users,
  User,
  InsertUser,
  subscriptions,
  Subscription,
  InsertSubscription,
  lower
} from "@shared/schema";
import session from "express-session";
import connectPg from "connect-pg-simple";

// Interface for all storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  getUserByGoogleId(googleId: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, data: Partial<InsertUser>): Promise<User>;
  updateUserGoogleId(userId: number, googleId: string): Promise<User>;
  getUserByStripeCustomerId(stripeCustomerId: string): Promise<User | undefined>;
  updateUserStripeCustomerId(userId: number, customerId: string): Promise<User>;

  // Subscription operations
  createSubscription(subscription: InsertSubscription): Promise<Subscription>;
  getSubscription(id: number): Promise<Subscription | undefined>;
  getUserSubscriptions(userId: number): Promise<Subscription[]>;
  updateSubscription(
    id: number,
    data: Partial<InsertSubscription>,
  ): Promise<Subscription>;
  updateSubscriptionStripeId(
    id: number,
    stripeSubscriptionId: string,
  ): Promise<Subscription>;
  deleteSubscription(id: number): Promise<void>;
  getActiveSubscriptionCount(): Promise<number>;
}

// Import required modules for session storage
import { sessionPool } from "./session-pool";
const PostgresStore = connectPg(session);

export class DrizzleStorage implements IStorage {
  sessionStore: session.Store;

  constructor() {
    console.log("Initialized DatabaseStorage for persistent data storage");
    try {
      // Create session store using PostgreSQL
      // Cast the pool to pg.Pool since connect-pg-simple expects that type
      this.sessionStore = new PostgresStore({
        pool: sessionPool,
        tableName: "session",
        createTableIfMissing: true,
        schemaName: "public",
      });
      console.log("PostgreSQL session store initialized successfully");
    } catch (error) {
      console.error("Error initializing PostgreSQL session store:", error);
      // Fallback to memory store if PostgreSQL store fails
      const MemoryStore = session.MemoryStore;
      this.sessionStore = new MemoryStore();
      console.log("Fallback to memory session store");
    }
  }
  
  async getUser(id: number) {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.id, id))
      .limit(1);
    return result[0];
  }

  async getUserByUsername(username: string) {
    const result = await db
      .select()
      .from(users)
      .where(eq(lower(users.username), username.toLowerCase()))
      .limit(1);
    return result[0];
  }

  async getUserByEmail(email: string) {
    const result = await db
      .select()
      .from(users)
      .where(eq(lower(users.email), email.toLowerCase()))
      .limit(1);
    return result[0];
  }

  async getUserByGoogleId(googleId: string) {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.googleId, googleId))
      .limit(1);
    return result[0];
  }

  async createUser(user: InsertUser) {
    const result = await db.insert(users).values(user).returning();
    return result[0];
  }

  async updateUser(id: number, data: Partial<InsertUser>) {
    const result = await db
      .update(users)
      .set(data)
      .where(eq(users.id, id))
      .returning();
    return result[0];
  }

  async updateUserGoogleId(userId: number, googleId: string): Promise<User> {
    const [updated] = await db
      .update(users)
      .set({ googleId })
      .where(eq(users.id, userId))
      .returning();
    return updated;
  }

  async getUserByStripeCustomerId(stripeCustomerId: string): Promise<User | undefined> {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.stripeCustomerId, stripeCustomerId))
      .limit(1);
    return result[0];
  }

  async updateUserStripeCustomerId(
    userId: number,
    customerId: string,
  ): Promise<User> {
    const [updated] = await db
      .update(users)
      .set({ stripeCustomerId: customerId })
      .where(eq(users.id, userId))
      .returning();

    return updated;
  }

  async createSubscription(sub: InsertSubscription) {
    try {
      const [result] = await db
        .insert(subscriptions)
        .values(sub)
        .returning();

      return result;
    } catch (error) {
      console.error("Error creating subscription:", {
        message: (error as any)?.message,
        details: error,
        data: sub,
      });

      throw new Error("Failed to create subscription");
    }
  }


  async getSubscription(id: number) {
    const result = await db
      .select()
      .from(subscriptions)
      .where(eq(subscriptions.id, id))
      .limit(1);
    return result[0];
  }

  async getUserSubscriptions(userId: number) {
    return db
      .select()
      .from(subscriptions)
      .where(eq(subscriptions.userId, userId));
  }

  async updateSubscription(id: number, data: Partial<InsertSubscription>) {
    const result = await db
      .update(subscriptions)
      .set(data)
      .where(eq(subscriptions.id, id))
      .returning();
    return result[0];
  }

  async updateSubscriptionStripeId(id: number, stripeSubscriptionId: string): Promise<Subscription> {
     const [updated] = await db
      .update(subscriptions)
      .set({ stripeSubscriptionId })
      .where(eq(subscriptions.id, id))
      .returning()

    return updated;
  }

  async deleteSubscription(id: number) {
    await db
      .delete(subscriptions)
      .where(eq(subscriptions.id, id));
  }

  async getActiveSubscriptionCount() {
    const result = await db
      .select()
      .from(subscriptions)
      .where(eq(subscriptions.status, "active"));
    return result.length;
  }
}

export const storage = new DrizzleStorage();