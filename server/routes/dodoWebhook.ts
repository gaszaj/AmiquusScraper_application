import express from "express";
import DodoPayments from 'dodopayments';
import { storage } from "../storage";
import { client as dodoClient } from "./dodo";
import { JSON_BASE_URL } from "../routes";
import { handleSubscriptionActive, handleSubscriptionCancelled, handleSubscriptionfailed, handleSubscriptionOnHold, handleSubscriptionRenewed } from "../helpers/payments";


export const BEARER_TOKEN = process.env.BEARER_TOKEN || "";
const router = express.Router();

const processedWebhooks = new Set();

// Use raw body for this route
router.post('/', express.raw({ type: "application/json" }),
    async (request, response) => {
        try {
            const unwrapped = dodoClient.webhooks.unwrap(request.body.toString(), {
                headers: {
                    'webhook-id': request.headers['webhook-id'] as string,
                    'webhook-signature': request.headers['webhook-signature'] as string,
                    'webhook-timestamp': request.headers['webhook-timestamp'] as string,
                },
            });

            const webhookId = request.headers['webhook-id'];
            const id = Array.isArray(webhookId) ? webhookId[0] : webhookId;

            if (id && processedWebhooks.has(id)) {
                return response.status(200).json({ received: true });
            }

            if (id) processedWebhooks.add(id);

            if (unwrapped.type === 'subscription.active') {
                //Subscription is successfully activated.
                const subscription = unwrapped.data;
                console.log('Subscription active webhook received:', subscription.status);

                // Update subscription status in your database and json
                await handleSubscriptionActive(subscription);
            } else if (unwrapped.type === 'subscription.updated') {
                //Subscription object was updated (fires on any field change).

            } else if (unwrapped.type === 'subscription.on_hold') {
                //Subscription is put on hold due to failed renewal.
                console.log('Subscription on hold webhook received', unwrapped.data.subscription_id);

                const onHoldData = unwrapped.data;

                // Update subscription status in your database
                await handleSubscriptionOnHold(onHoldData);
            } else if (unwrapped.type === 'subscription.failed') {
                //Subscription creation failed during mandate creation.
                console.log('Subscription failed webhook received', unwrapped.data.subscription_id);
                const failedData = unwrapped.data;

                // Update subscription status in your database
                await handleSubscriptionfailed(failedData);
            } else if (unwrapped.type === 'subscription.renewed') {
                //Subscription is renewed for the next billing period.
                console.log('Subscription renewed webhook received', unwrapped.data.subscription_id);

                const renewalData = unwrapped.data;

                // Update subscription status in your database
                await handleSubscriptionRenewed(renewalData);
            } else if (unwrapped.type === 'subscription.cancelled') {
                //Subscription is cancelled either by the customer or by the merchant.
                const cancellationData = unwrapped.data;
                console.log('Subscription cancelled webhook received', cancellationData.subscription_id);

                // Update subscription status in your database
                await handleSubscriptionCancelled(cancellationData);
            } else if (unwrapped.type === 'subscription.expired') {
                //Subscription has expired at the end of its billing period.
            } else if (unwrapped.type === 'subscription.plan_changed') {
                //Subscription plan has been changed.

                const planChangeData = unwrapped.data;
                console.log('Subscription plan changed webhook received', planChangeData.subscription_id);

                //  Update subscription plan in your database
                
            } else if (unwrapped.type === 'payment.succeeded') {
                //Payment was successful.
                console.log('Payment succeeded webhook received', unwrapped.data.payment_id);

                const payment = unwrapped.data;
                const userSubscriptionId = payment.metadata?.userSubscriptionId;

                // update paymentId in database
                if (userSubscriptionId) {
                    // Update subscription status in your database
                    await storage.updateSubscription(parseInt(userSubscriptionId), {
                        lastPaymentId: payment.payment_id,
                        updatedAt: new Date(),
                    });
                }
            } else if (unwrapped.type === 'payment.failed') {
                //Payment failed.
                console.log('Payment failed webhook received', unwrapped.data.payment_id);

                const failedPayment = unwrapped.data;
                const userSubscriptionId = failedPayment.metadata?.userSubscriptionId;

                // update paymentId in database
                if (userSubscriptionId) {
                    // Update subscription status in your database
                    await storage.updateSubscription(parseInt(userSubscriptionId), {
                        lastPaymentId: failedPayment.payment_id,
                        updatedAt: new Date(),
                    });
                }
            }

            response.status(200).json({ received: true });
        } catch (err: any) {
            response.status(400).send(`Webhook Error: ${err?.message}`);
            return;
        }
    }
)

export default router;