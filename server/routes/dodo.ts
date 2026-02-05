import type { Express, Request, Response } from "express";
import DodoPayments from 'dodopayments';
import { storage } from "../storage";
import { createOrFindCustomer, validatePromoCode } from "../helpers/payments";
import { buildJsonObject, getSubscriptionStats } from "../libs/utils";
import { currencyCode, payment_frequency_count, payment_frequency_interval, subscription_period_count, subscription_period_interval } from "@shared/pricing";
import { JSON_BASE_URL } from "../routes";
import { RETRIABLE_ERRORS } from "@shared/config";
import { Discount } from "dodopayments/resources/index.mjs";

const DODO_PAYMENTS_API_KEY = process.env['DODO_PAYMENTS_API_KEY'];
const DODO_PAYMENTS_ENVIRONMENT = process.env['DODO_PAYMENTS_ENVIRONMENT'] || "test_mode";
const DODO_PAYMENTS_WEBHOOK_KEY = process.env['DODO_PAYMENTS_WEBHOOK_KEY'] || "";

const BEARER_TOKEN = process.env.BEARER_TOKEN || "";

export const client = new DodoPayments({
    bearerToken: DODO_PAYMENTS_API_KEY || "",
    environment: DODO_PAYMENTS_ENVIRONMENT as 'test_mode' | 'live_mode',
    webhookKey: DODO_PAYMENTS_WEBHOOK_KEY,
});

const isAuthenticated = (req: Request, res: Response, next: Function) => {
    if (req.user) {
        next();
    } else {
        res.status(401).json({ message: "Not authenticated" });
    }
};

export const amiquusDomain = process.env.NODE_ENV === "development" ?
    "http://localhost:5050" :
    "https://www.amiquus.com";


export function registerDodoRoutes(app: Express) {
    // validate discount
    app.get("/api/validate-discount", isAuthenticated, async (req: any, res) => {
        try {
            const userId = (req.user as any).id;

            if (!userId) {
                return res.status(401).json({ message: "User not authenticated." });
            }

            const code = String(req.query.code ?? "").trim();

            if (!code || code.length < 3) {
                return res.status(400).json({ message: "Promo code is required." });
            }

            const discount = await validatePromoCode(code);

            if (!discount) {
                return res.status(404).json({ message: "Invalid promo code." });
            }

            // check if discount has been used by other users
            // const taken = await storage.isPromoCodeUsedByAnotherUser(userId, code);

            // if (taken) {
            //     return res.status(400).json({ message: "This promo code can’t be used on your account." });
            // }

            return res.status(200).json(discount);
        } catch (error: any) {
            console.error("Validate discount error:", error);
            return res.status(500).json({ message: error?.message || "Server error" });
        }
    });

    // Get discount details
    app.get("/api/discounts/:discountId", isAuthenticated, async (req: any, res) => {
        try {
            const userId = (req.user as any).id;

            if (!userId) {
                return res.status(401).json({ message: "User not authenticated." });
            }

            const { discountId } = req.params;


            if (!discountId) {
                return res.status(400).json({ message: "Promo code is required." });
            }

            const discount = await client.discounts.retrieve(discountId);

            if (!discount) {
                return res.status(404).json({ message: "Discount not found." });
            }

            return res.status(200).json(discount);
        } catch (error: any) {
            console.error("Get discount details error:", error);
            return res.status(500).json({ message: error?.message || "Server error" });
        }
    });

    //subscription checkout route
    app.post("/api/create-checkout-session", isAuthenticated, async (req: any, res) => {
        try {
            const data = req.body;
            const userId = (req.user as any).id || data.userId;

            if (!userId) {
                return res.status(401).json({ message: "User not authenticated." });
            }

            const stats = await getSubscriptionStats();
            if (stats.full) {
                return res.status(403).json({
                    message:
                        "Subscription capacity has been reached. Please join the waitlist.",
                });
            }

            const user = await storage.getUser(userId);
            if (!user) {
                return res.status(404).json({ message: "User not found." });
            }

            let customerId = user.dodoCustomerId;

            if (!customerId) {
                const dodoCustomer = await createOrFindCustomer(user.email, `${user.firstName} ${user.lastName}`, user.id);

                customerId = dodoCustomer.customer_id; // ✅ set it

                await storage.updateUserDodoCustomerId(
                    user.id,
                    dodoCustomer.customer_id,
                )
            }

            // Convert to cents
            const amountCents = data.totalBeforeDiscount
                ? Math.round(Number(data.totalBeforeDiscount) * 100)
                : 0;

            if (!amountCents || amountCents <= 0) {
                return res.status(400).json({ message: "Invalid amount." });
            }

            const referralId = typeof data.referralId === "string" ? data.referralId : undefined;

            // ✅ Promo code validation
            let isValidCode = false;
            let priceDiscount: number | undefined;
            let bpsDiscount: number | undefined;
            let priceAfterDiscount = amountCents;
            let dodoDiscountId: string | undefined;

            if (data.promoCode) {
                const discount = await validatePromoCode(data.promoCode);

                if (!discount) {
                    return res.status(400).json({
                        message: "Invalid promo code.",
                    });
                }

                if (discount.type !== "percentage") {
                    return res.status(400).json({
                        message: "Only percentage promo codes are supported at the moment.",
                    });
                }

                // const taken = await storage.isPromoCodeUsedByAnotherUser(userId, data.promoCode);
                // if (taken) return res.status(400).json({ message: "Promo code already used." });

                isValidCode = true;
                dodoDiscountId = discount.discount_id; // ✅
                bpsDiscount = discount.amount;

                const pct = discount.amount / 100; // bps -> %
                // clamp to [0, 100]
                priceDiscount = Math.max(0, Math.min(100, pct));
            }

            if (isValidCode && typeof bpsDiscount === "number") {
                const discountAmount = Math.round((amountCents * bpsDiscount) / 10000);
                priceAfterDiscount = Math.max(0, amountCents - discountAmount);
            }

            // create product
            const product = await client.products.create({
                name: `Amiquus Subscription - ${data.brand}`,
                description: `${user.firstName} ${user.lastName} - ${data.brand} and ${data.model} subscription`,
                price: {
                    currency: currencyCode,
                    discount: 0,
                    payment_frequency_count: payment_frequency_count,
                    payment_frequency_interval: payment_frequency_interval,
                    price: amountCents,
                    purchasing_power_parity: false,
                    subscription_period_count: subscription_period_count,
                    subscription_period_interval: subscription_period_interval,
                    type: "recurring_price",
                },
                //taxcategory is digital_products, saas, e_book, edtech etc based on your product type
                tax_category: "saas",
                metadata: {
                    userId: user.id.toString(),
                    ...(referralId ? { affonso_referral: referralId } : {}),
                },
            });

            // Create subscription in the db
            const subscription = await storage.createSubscription({
                userId,
                websitesSelected: data.websitesSelected,
                facebookMarketplaceUrl: data.facebookMarketplaceUrl,
                updateFrequency: data.updateFrequency,
                brand: data.brand,
                model: data.model,
                fuelType: data.fuelType,
                yearMin: data.yearMin,
                yearMax: data.yearMax,
                mileageMin: data.mileageMin,
                mileageMax: data.mileageMax,
                priceMin: data.priceMin,
                priceMax: data.priceMax,
                telegramUsername: data.telegramUsername,
                notificationLanguage: data.notificationLanguage,
                promoCode: isValidCode ? data.promoCode : null,
                discountId: isValidCode ? dodoDiscountId : null,
                codeApplied: isValidCode,
                price: amountCents,
                dodoPriceId: product.product_id,
                priceAfterDiscount,
                discountValue: isValidCode ? bpsDiscount : null, // better than 0
                status: "pending",
            });

            if (!subscription) {
                return res.status(500).json({ message: "Failed to create subscription." });
            }

            // create checkout session
            const session = await client.checkoutSessions.create({
                product_cart: [
                    {
                        product_id: product.product_id,
                        quantity: 1,
                    },
                ],
                allowed_payment_method_types: ["apple_pay", "credit", "google_pay", "debit"],
                billing_currency: currencyCode,
                customer: {
                    customer_id: customerId!,
                },
                discount_code: isValidCode ? data.promoCode : undefined,
                feature_flags: {
                    allow_discount_code: isValidCode ? true : false,
                    redirect_immediately: true,
                },
                metadata: {
                    userSubscriptionId: subscription.id.toString(),
                    userId: user.id.toString(),
                    ...(referralId ? { affonso_referral: referralId } : {}),
                },
                return_url: `${amiquusDomain}/dashboard`,
            });

            return res.status(200).json({
                message: "Checkout session created successfully. You will be redirected shortly.",
                checkoutUrl: session.checkout_url,
                // checkoutUrl: referralId ? `${session.checkout_url}?metadata_affonso_referral=referralId` : session.checkout_url,
                sessionId: session.session_id,
            });
        } catch (error: any) {
            console.error("Create checkout session error:", error);
            return res.status(500).json({ message: error?.message || "Server error" });
        }
    });

    // Update payment method (email-click friendly)
    app.post("/api/subscriptions/:subscriptionId/update-payment-method", async (req: any, res) => {
        try {
            const { subscriptionId } = req.params;

            // fetch subscription from dodo
            const dodoSubscription = await client.subscriptions.retrieve(subscriptionId);

            if (!dodoSubscription) {
                console.error("Dodo subscription not found:", subscriptionId);
                return res.status(404).json({ message: "Subscription not found" });
            }

            const response = await client.subscriptions.updatePaymentMethod(subscriptionId, {
                type: 'new',
                return_url: `${amiquusDomain}/dashboard`,
            });

            if (response.payment_id) {
                console.log('Charge created for remaining dues:', response.payment_id);
            }

            const paymentLink = response.payment_link;

            if (!paymentLink) {
                return res.status(500).send("Unable to start payment update.");
            }

            // ✅ Redirect user straight to Dodo checkout
            return res.redirect(302, paymentLink);
        } catch (error: any) {
            console.error("Error creating Dodo setup intent:", error);
            res.status(500).json({ message: error.message });
        }
    });

    // Update payment method  dashboard friendly
    app.post("/api/subscriptions/:subscriptionId/update-payment-method-in", async (req: any, res) => {
        try {
            const { subscriptionId } = req.params;

            // fetch subscription from dodo
            const dodoSubscription = await client.subscriptions.retrieve(subscriptionId);

            if (!dodoSubscription) {
                console.error("Dodo subscription not found:", subscriptionId);
                return res.status(404).json({ message: "Subscription not found" });
            }

            const response = await client.subscriptions.updatePaymentMethod(subscriptionId, {
                type: 'new',
                return_url: `${amiquusDomain}/dashboard`,
            });

            if (response.payment_id) {
                console.log('Charge created for remaining dues:', response.payment_id);
            }

            const paymentLink = response.payment_link;

            if (!paymentLink) {
                return res.status(500).send("Unable to start payment update.");
            }
            return res.status(200).json({ paymentLink });
        } catch (error: any) {
            console.error("Error creating Dodo setup intent:", error);
            res.status(500).json({ message: error.message });
        }
    });

    // retry payment
    app.post("/api/subscriptions/:subscriptionId/retry-payment", async (req: any, res) => {
        try {
            const { subscriptionId } = req.params;

            const dodoSubscription = await client.subscriptions.retrieve(subscriptionId);
            if (!dodoSubscription) return res.status(404).json({ message: "Subscription not found" });

            const userSubscriptionId = dodoSubscription.metadata?.userSubscriptionId;
            if (!userSubscriptionId) return res.status(404).json({ message: "User subscription ID not found" });

            const userSubscription = await storage.getSubscription(parseInt(userSubscriptionId, 10));
            if (!userSubscription) return res.status(404).json({ message: "User subscription not found" });

            const lastPaymentId = userSubscription.lastPaymentId;
            const lastPayment = lastPaymentId ? await client.payments.retrieve(lastPaymentId) : null;

            const errorCode = lastPayment?.error_code ?? null;
            const paymentMethodId = dodoSubscription.payment_method_id ?? null;

            const isErrorRetriable = errorCode ? RETRIABLE_ERRORS.includes(errorCode) : false;
            const canRetry = Boolean(isErrorRetriable && paymentMethodId);

            if (canRetry) {
                // Update to existing method (if Dodo auto-retries on this, great)
                await client.subscriptions.updatePaymentMethod(subscriptionId, {
                    type: "existing",
                    payment_method_id: paymentMethodId!,
                });

                // If Dodo requires an explicit retry endpoint, it should be called here.
                return res.status(200).json({ message: "Payment retry initiated successfully." });
            }

            // Otherwise: create "new payment method" flow and redirect user to checkout
            const response = await client.subscriptions.updatePaymentMethod(subscriptionId, {
                type: "new",
                return_url: `${amiquusDomain}/dashboard`,
            });

            const paymentLink = response.payment_link;
            if (!paymentLink) return res.status(500).send("Unable to start payment retry.");

            return res.redirect(302, paymentLink);
        } catch (error: any) {
            console.error("Error retrying payment:", error);
            return res.status(500).json({ message: error?.message || "Unknown error" });
        }
    });

    // edit subscription
    app.put("/api/subscriptions/:id", isAuthenticated, async (req, res) => {
        try {
            const user = req.user as any;
            const userId = user.id;
            const subscriptionId = parseInt(req.params.id, 10);

            // 🚫 Capacity Check First
            const stats = await getSubscriptionStats();

            if (!userId) {
                return res.status(401).json({ message: "User not authenticated." });
            }

            const { id, ...data } = req.body;

            const subscription = await storage.getSubscription(subscriptionId);

            if (!subscription || subscription.userId !== userId) {
                return res.status(404).json({ message: "Subscription not found." });
            }

            const dodoSubscriptionId = subscription.dodoSubscriptionId;

            if (!dodoSubscriptionId) {
                return res.status(400).json({ message: "Dodo subscription ID not found." });
            }

            if (
                (subscription.websitesSelected as string[]).length <
                data.websitesSelected.length &&
                stats.full
            ) {
                return res.status(403).json({
                    message:
                        "You cannot add more websites to scrape as the subscription capacity has been reached. Please remove some websites or join the waitlist.",
                });
            }

            const isPriceChanged = typeof data.price === "number" && data.price !== subscription.price;

            let discountValueBps = subscription.discountValue;
            let priceAfterDiscountCents: number = subscription.price;

            // --- compute priceAfterDiscount (server-side)
            const basePrice = typeof data.price === "number" ? data.price : subscription.price;

            priceAfterDiscountCents = basePrice;

            if (typeof discountValueBps === "number") {
                const discountAmount = Math.round((basePrice * discountValueBps) / 10000);
                priceAfterDiscountCents = Math.max(0, basePrice - discountAmount);
            }

            // --- Dodo product / plan update
            let priceId = subscription.dodoPriceId;
            let isPriceUpdated = false;

            // If price changed: create a new product with discount baked in
            if (isPriceChanged) {
                const product = await client.products.create({
                    name: `Amiquus Subscription - ${data.brand}`,
                    description: `${user.firstName} ${user.lastName} - ${data.brand} and ${data.model} subscription`,
                    price: {
                        currency: currencyCode,
                        discount: 0,
                        payment_frequency_count,
                        payment_frequency_interval,
                        price: basePrice,
                        purchasing_power_parity: false,
                        subscription_period_count,
                        subscription_period_interval,
                        type: "recurring_price",
                    },
                    tax_category: "saas",
                    metadata: {
                        userId: userId.toString(),
                        isUpdatedPrice: "true",
                        userSubscriptionId: subscription.id.toString(),
                    },
                });

                if (!product) {
                    return res.status(500).json({ message: "Failed to create updated product price." });
                }

                priceId = product.product_id;
                isPriceUpdated = true;
            }

            // --- DB update
            const updatedSub = await storage.updateSubscription(subscriptionId, {
                ...data,
                dodoPriceId: priceId,
                priceAfterDiscount: priceAfterDiscountCents, // cents
                updatedAt: new Date(),
            });

            if (!updatedSub) {
                return res.status(500).json({ message: "Failed to update subscription." });
            }

            // --- ensure Dodo subscription plan reflects new product if price changed
            if (isPriceUpdated && priceId) {
                await client.subscriptions.changePlan(dodoSubscriptionId, {
                    product_id: priceId,
                    proration_billing_mode: 'prorated_immediately',
                    quantity: 1,
                });
            } else {
                // update json
                const jsonId = subscription.jsonUserId || user.email + subscription.id;
                const getUrl = `${JSON_BASE_URL}/user_json_api.php?username=${encodeURIComponent(jsonId)}`;
                const apiUrl = `${JSON_BASE_URL}/user_json_api.php`;

                // create user json file
                const jsonObject = buildJsonObject(
                    updatedSub,
                    user.email,
                    'active',
                    updatedSub.codeApplied,
                )

                const getRes = await fetch(getUrl, {
                    method: "GET",
                    headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
                });

                // ✅ If not found, create it instead of failing
                if (getRes.status === 404) {
                    const createRes = await fetch(apiUrl, {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${BEARER_TOKEN}`,
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(jsonObject),
                    });

                    if (!createRes.ok) {
                        const text = await createRes.text().catch(() => "");
                        console.error("JSON API create failed:", createRes.status, text);
                        return res.status(500).json({ message: "Failed to create user JSON." });
                    }

                    console.log("User JSON created successfully for", jsonObject.username);

                    return res
                        .status(200)
                        .json({ message: "Subscription updated successfully" });
                }

                if (!getRes.ok) {
                    const text = await getRes.text().catch(() => "");
                    console.error("JSON API fetch failed:", getRes.status, text);
                    return res.status(500).json({ message: "Failed to fetch existing user JSON." });
                }

                const existingJson = await getRes.json();

                // Merge existing data with new data
                const mergedJson = {
                    ...existingJson,
                    user_info: {
                        ...existingJson.user_info,
                        payment_status: "active",
                    },
                    running_frequency: jsonObject.running_frequency,
                    websites: jsonObject.websites,
                    first_run_throwback_time: "86400",
                    language_tag: jsonObject.language_tag,
                    filters: jsonObject.filters,
                    promo_code: jsonObject.promo_code || "",
                };

                const putRes = await fetch(getUrl, {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${BEARER_TOKEN}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(mergedJson),
                });

                if (!putRes.ok) {
                    const text = await putRes.text().catch(() => "");
                    console.error("JSON API update failed:", putRes.status, text);
                    return res.status(500).json({ message: "Failed to update user JSON." });
                }

                console.log("User JSON updated successfully for", jsonObject.username);
            }

            console.log(
                `[✅] Subscription #${subscriptionId} updated & synced for user ${user.email}`,
            );

            return res
                .status(200)
                .json({ message: "Subscription updated successfully" });
        } catch (error: any) {
            console.error("❌ Error updating subscription:", error);
            return res.status(500).json({ message: error?.message || "Server error" });
        }
    })

    // cancel subscription
    app.post("/api/subscriptions/:id/cancel", isAuthenticated, async (req, res) => {
        try {
            const user = req.user as any;
            const userId = user.id;
            const subscriptionId = parseInt(req.params.id, 10);

            const { cancelMethod } = req.body as {
                cancelMethod?: "now" | "billing_end";
            };

            if (!userId) {
                return res.status(401).json({ message: "User not authenticated." });
            }

            if (!cancelMethod || !["now", "billing_end"].includes(cancelMethod)) {
                return res.status(400).json({ message: "Invalid cancel method." });
            }

            const subscription = await storage.getSubscription(subscriptionId);

            if (!subscription || subscription.userId !== userId) {
                return res.status(404).json({ message: "Subscription not found." });
            }

            const dodoSubscriptionId = subscription.dodoSubscriptionId;

            if (!dodoSubscriptionId) {
                return res.status(400).json({ message: "Dodo subscription ID not found." });
            }

            if (cancelMethod === "now") {
                // Cancel immediately in Dodo
                await client.subscriptions.update(dodoSubscriptionId, {
                    status: "cancelled",
                });

                // Update DB immediately
                await storage.updateSubscription(subscriptionId, {
                    status: "cancelled",
                    updatedAt: new Date(),
                });

                console.log(
                    `[✅] Subscription #${subscriptionId} cancelled for user ${user.email}`,
                );

                return res.status(200).json({
                    message: "Subscription cancelled immediately.",
                    cancelMethod,
                });
            }

            await client.subscriptions.update(dodoSubscriptionId, {
                cancel_at_next_billing_date: true
            });

            // Update DB immediately
            await storage.updateSubscription(subscriptionId, {
                status: "cancelled_on",
                updatedAt: new Date(),
            });

            return res.status(200).json({
                message: "Cancellation scheduled for end of billing period.",
                cancelMethod,
            });
        } catch (error: any) {
            console.error("❌ Error canceling subscription:", error);
            return res.status(500).json({ message: error?.message || "Server error" });
        }
    });

    // GET customer wallet(s)
    app.get("/api/customer/wallets", isAuthenticated, async (req, res) => {
        try {
            const authUser = req.user as any;
            const userId = authUser?.id;

            if (!userId) return res.status(401).json({ message: "User not authenticated." });

            const user = await storage.getUser(userId);
            if (!user) return res.status(404).json({ message: "User not found." });

            const customerId = user.dodoCustomerId;
            if (!customerId) {
                return res.status(400).json({ message: "No Dodo customer ID found for this user." });
            }

            const wallets = await client.customers.wallets.list(customerId);

            return res.status(200).json({
                items: wallets?.items ?? [],
                total_balance_usd: wallets?.total_balance_usd ?? null,
            });
        } catch (error: any) {
            console.error("❌ Error fetching wallets:", error);
            return res.status(500).json({ message: error?.message || "Server error" });
        }
    });
}