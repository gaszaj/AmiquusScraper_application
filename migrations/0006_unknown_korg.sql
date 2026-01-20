ALTER TABLE "subscriptions" ADD COLUMN "last_invoice_attempt_at" timestamp;--> statement-breakpoint
ALTER TABLE "subscriptions" ADD COLUMN "last_payment_id" text;