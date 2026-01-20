ALTER TABLE "users" DROP CONSTRAINT "users_json_user_id_unique";--> statement-breakpoint
ALTER TABLE "subscriptions" ADD COLUMN "json_user_id" text;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "json_user_id";--> statement-breakpoint
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_json_user_id_unique" UNIQUE("json_user_id");