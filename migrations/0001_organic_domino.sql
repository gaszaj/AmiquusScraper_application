ALTER TABLE "subscriptions" ADD COLUMN "promo_code" text;--> statement-breakpoint
ALTER TABLE "subscriptions" ADD COLUMN "code_applied" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "subscriptions" ADD COLUMN "dodo_price_id" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "dodo_customer_id" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "json_user_id" text;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_dodo_customer_id_unique" UNIQUE("dodo_customer_id");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_json_user_id_unique" UNIQUE("json_user_id");