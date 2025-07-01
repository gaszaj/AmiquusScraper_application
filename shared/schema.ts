import { pgTable, text, serial, integer, boolean, timestamp, json, pgEnum, 	AnyPgColumn, } from "drizzle-orm/pg-core";
import { SQL, sql } from "drizzle-orm";
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
  captchaToken: z.string().optional(),
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
  telegramUsername: text("telegram_username").notNull(),
  notificationLanguage: languageEnum("notification_language").notNull().default('en'),
  price: integer("price").notNull(),
  stripePriceId: text("stripe_price_id"),
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
  telegramUsername: z.string().min(1, "Telegram username is required"),
  notificationLanguage: z.enum(['en', 'es', 'fr', 'de', 'it', 'pt', 'ru']),
  price: z.number().min(1, "Price calculation failed"),
  stripePriceId: z.string().optional(),
});

export const alertSchema = z.object({
  carBrand: z.string().min(1, "Car brand is required"),
  carModel: z.string().min(1, "Car model is required"),
  fuelType: z.string().min(1, "Fuel type is required"),

  priceMin: z
    .string()
    .regex(/^\d*$/, "Minimum price must be a number")
    .optional()
    .or(z.literal("")),
  priceMax: z
    .string()
    .regex(/^\d*$/, "Maximum price must be a number")
    .optional()
    .or(z.literal("")),

  yearMin: z
    .string()
    .regex(/^\d{4}$/, "Minimum year must be a valid year")
    .optional()
    .or(z.literal("")),
  yearMax: z
    .string()
    .regex(/^\d{4}$/, "Maximum year must be a valid year")
    .optional()
    .or(z.literal("")),

  maxKilometers: z
    .string()
    .regex(/^\d*$/, "Max kilometers must be a number")
    .optional()
    .or(z.literal("")),

  telegramUsername: z.string().min(1, "Telegram username is required"),

  websitesSelected: z
    .array(z.string())
    .min(1, "At least one website must be selected"),

  facebookMarketplaceUrl: z
    .string()
    .optional()
    .or(z.literal("")),

  updateFrequency: z.enum(["hourly", "30min", "15min", "5min", "1min"]),

  notificationLanguage: z
    .string()
    .min(1, "Notification language is required"),
}).superRefine((data, ctx) => {
  if (
    data.websitesSelected.includes("facebook") &&
    !data.facebookMarketplaceUrl
  ) {
    ctx.addIssue({
      path: ["facebookMarketplaceUrl"],
      message: "Facebook Marketplace URL is required when Facebook is selected",
      code: z.ZodIssueCode.custom,
    });
  }
});

export const insertSubscriptionSchema = createInsertSchema(subscriptions).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export function lower(column: AnyPgColumn): SQL {
  return sql`lower(${column})`;
}


export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type Subscription = typeof subscriptions.$inferSelect;
export type InsertSubscription = typeof subscriptions.$inferInsert;
export type SubscriptionFormData = z.infer<typeof subscriptionFormSchema>;
export type UserLogin = z.infer<typeof userLoginSchema>;
export type UserRegister = z.infer<typeof userRegisterSchema>;
export type AlertFormSchema = z.infer<typeof alertSchema>;
