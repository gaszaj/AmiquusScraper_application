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

export class DrizzleStorage implements IStorage {
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
    const result = await db.insert(subscriptions).values(sub).returning();
    return result[0];
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