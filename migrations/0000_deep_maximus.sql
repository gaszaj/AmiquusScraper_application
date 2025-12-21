CREATE TYPE "public"."frequency" AS ENUM('hourly', '30min', '15min', '5min', '1min');--> statement-breakpoint
CREATE TYPE "public"."language" AS ENUM('en', 'es', 'fr', 'de', 'it', 'pt', 'ru');--> statement-breakpoint
-- CREATE TABLE "session" (
-- 	"sid" text PRIMARY KEY NOT NULL,
-- 	"sess" json NOT NULL,
-- 	"expire" timestamp NOT NULL
-- );
--> statement-breakpoint
CREATE TABLE "subscriptions" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"stripe_subscription_id" text,
	"websites_selected" json NOT NULL,
	"facebook_marketplace_url" text,
	"update_frequency" "frequency" DEFAULT 'hourly' NOT NULL,
	"brand" text,
	"model" text,
	"fuel_type" text,
	"year_min" integer,
	"year_max" integer,
	"mileage_min" integer,
	"mileage_max" integer,
	"price_min" integer,
	"price_max" integer,
	"telegram_username" text NOT NULL,
	"notification_language" "language" DEFAULT 'en' NOT NULL,
	"price" integer NOT NULL,
	"stripe_price_id" text,
	"status" text DEFAULT 'active' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"email" text NOT NULL,
	"password" text,
	"google_id" text,
	"first_name" text,
	"last_name" text,
	"stripe_customer_id" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"is_email_verified" boolean DEFAULT false NOT NULL,
	"reset_token" text,
	"reset_token_expiry" timestamp,
	"verification_code" text,
	"verification_code_expiry" timestamp,
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_google_id_unique" UNIQUE("google_id"),
	CONSTRAINT "users_stripe_customer_id_unique" UNIQUE("stripe_customer_id")
);
--> statement-breakpoint
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;