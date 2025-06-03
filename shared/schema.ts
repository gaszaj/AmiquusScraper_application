import { pgTable, text, serial, integer, boolean, timestamp, json, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password"),
  googleId: text("google_id").unique(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  stripeCustomerId: text("stripe_customer_id").unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  // 👇 New fields for email verification
  isEmailVerified: boolean("is_email_verified").default(false).notNull(),
  resetToken: text("reset_token"),
  resetTokenExpiry: timestamp("reset_token_expiry", { mode: 'date' }),
  verificationCode: text("verification_code"),
  verificationCodeExpiry: timestamp("verification_code_expiry", { mode: 'date' }),
});

export const updateUserSchema = createInsertSchema(users).pick({
  firstName: true,
  lastName: true,
  email: true,
});

export const userLoginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const userRegisterSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

export const frequencyEnum = pgEnum('frequency', [
  'hourly', 
  '30min', 
  '15min', 
  '5min', 
  '1min'
]);

export const languageEnum = pgEnum('language', [
  'en', 'es', 'fr', 'de', 'it', 'pt', 'ru'
]);

export const fuelTypeEnum = pgEnum('fuel_type', [
  'gasoline', 'diesel', 'electric', 'hybrid', 'plugin_hybrid'
]);

export const subscriptions = pgTable("subscriptions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  stripeSubscriptionId: text("stripe_subscription_id"),
  websitesSelected: json("websites_selected").notNull(),
  facebookMarketplaceUrl: text("facebook_marketplace_url"),
  updateFrequency: frequencyEnum("update_frequency").notNull().default('hourly'),
  brand: text("brand"),
  model: text("model"),
  fuelType: fuelTypeEnum("fuel_type"),
  yearMin: integer("year_min"),
  yearMax: integer("year_max"),
  mileageMin: integer("mileage_min"),
  mileageMax: integer("mileage_max"),
  priceMin: integer("price_min"),
  priceMax: integer("price_max"),
  telegramBotToken: text("telegram_bot_token").notNull(),
  telegramChatId: text("telegram_chat_id").notNull(),
  notificationLanguage: languageEnum("notification_language").notNull().default('en'),
  price: integer("price").notNull(),
  status: text("status").notNull().default("active"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const subscriptionFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  websitesSelected: z.array(z.string()).min(1, "Select at least one website"),
  facebookMarketplaceUrl: z.string().optional(),
  updateFrequency: z.enum(['hourly', '30min', '15min', '5min', '1min']),
  brand: z.string().optional(),
  model: z.string().optional(),
  fuelType: z.enum(['gasoline', 'diesel', 'electric', 'hybrid', 'plugin_hybrid']).optional(),
  yearMin: z.number().optional(),
  yearMax: z.number().optional(),
  mileageMin: z.number().optional(),
  mileageMax: z.number().optional(),
  priceMin: z.number().optional(),
  priceMax: z.number().optional(),
  telegramBotToken: z.string().min(1, "Telegram bot token is required"),
  telegramChatId: z.string().min(1, "Telegram chat ID is required"),
  notificationLanguage: z.enum(['en', 'es', 'fr', 'de', 'it', 'pt', 'ru']),
  price: z.number().min(1, "Price calculation failed"),
});

export const insertSubscriptionSchema = createInsertSchema(subscriptions).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type Subscription = typeof subscriptions.$inferSelect;
export type InsertSubscription = typeof subscriptions.$inferInsert;
export type SubscriptionFormData = z.infer<typeof subscriptionFormSchema>;
export type UserLogin = z.infer<typeof userLoginSchema>;
export type UserRegister = z.infer<typeof userRegisterSchema>;
