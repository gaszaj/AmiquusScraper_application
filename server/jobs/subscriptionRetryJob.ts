import cron from "node-cron";
import { retryOnHoldSubscriptions } from "../helpers/payments";


export function startSubscriptionRetryJob() {
    // Runs every 6 hours
    cron.schedule("0 */6 * * *", async () => {
        console.log("[CRON] Subscription retry job started (6-hour interval)");
        try {
            await retryOnHoldSubscriptions();
        } catch (err) {
            console.error("[CRON] Subscription retry job failed:", err);
        }
    });
}
