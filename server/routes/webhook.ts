import express from "express";
import Stripe from "stripe";
import { storage } from "../storage"; // your DB utils
import { emailService } from "../email-service";

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : undefined;

const endpointSecret = "whsec_ztqn6TukivBY7q3uD9fZ3n9eZkhlSnPV";

const JSON_BASE_URL =
  process.env.JSON_BASE_URL ||
  "https://apiamiquus.amiquus.com/JSON_FILES_FOLDER";

const BEARER_TOKEN = process.env.BEARER_TOKEN || "";
const router = express.Router();

// Use raw body for this route
router.post(
  "/",
  express.raw({ type: "application/json" }),
  async (request, response) => {
    const sig = request.headers["stripe-signature"];

    let event;
    console.log("hello", request.body, endpointSecret, sig, "test");

    try {
      event = stripe.webhooks.constructEvent(
        request.body,
        sig as string,
        endpointSecret,
      );
    } catch (err: any) {
      response.status(400).send(`Webhook Error: ${err?.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case "customer.subscription.created": {
        const customerSubscriptionCreated = event.data.object;
        // Then define and call a function to handle the event customer.subscription.created
        const userId = customerSubscriptionCreated.metadata.userId;
        const userSubscriptionId =
          customerSubscriptionCreated.metadata.userSubscriptionId;
        if (!userId || !userSubscriptionId) {
          console.error("User ID or subscription ID not found in metadata");
          return;
        }

        const user = await storage.getUser(parseInt(userId));
        if (!user) {
          console.error("User not found in database");
          return;
        }

        const dbPlan = await storage.getSubscription(
          parseInt(userSubscriptionId),
        );

        if (!dbPlan) {
          console.error("Plan not found in database");
          return;
        }

        // update db with subscription id
        await storage.updateSubscription(parseInt(userSubscriptionId), {
          status: customerSubscriptionCreated.status,
          stripeSubscriptionId: customerSubscriptionCreated.id,
        });

        // create user json
        const jsonId = user.email + userSubscriptionId;
        const userJson = {
          username: jsonId,
          user_info: {
            user_id: userId,
            user_mail: user.email,
            payment_status: customerSubscriptionCreated.status,
          },
          running_frequency: dbPlan.updateFrequency,
          websites: {
            websites_to_scrap: dbPlan.websitesSelected,
          },
          first_run_throwback_time: "86400",
          language_tag: {
            language: [dbPlan.notificationLanguage],
          },
          filters: {
            facebook_link: dbPlan.facebookMarketplaceUrl,
            min_mileage: dbPlan.mileageMin,
            max_mileage: dbPlan.mileageMax,
            telegram_bot_token: dbPlan.telegramBotToken,
            telegram_chat_id: dbPlan.telegramChatId,
            telegram_language: dbPlan.notificationLanguage,
            min_price: dbPlan.priceMin,
            max_price: dbPlan.priceMax,
            fuel_type: dbPlan.fuelType,
            brand: dbPlan.brand,
            model: dbPlan.model,
            model_year_lower_limit: dbPlan.yearMin,
            model_year_upper_limit: dbPlan.yearMax,
          },
        };
        const apiUrl = `${JSON_BASE_URL}/user_json_api.php`;

        // post
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userJson),
        });

        // update stripe subscription metadata with json id
        await stripe.subscriptions.update(customerSubscriptionCreated.id, {
          metadata: {
            jsonId: jsonId,
            userId: userId,
            userSubscriptionId: userSubscriptionId,
          },
        });

        console.log(response);

        // send invoice email
        if (customerSubscriptionCreated.latest_invoice) {
          const invoice = await stripe.invoices.retrieve(
            customerSubscriptionCreated.latest_invoice as string,
          );

          // ✅ Only send email if payment was successful
          if (invoice.status === "paid") {
            const amountPaid = invoice.amount_paid / 100;
            const invoiceUrl = invoice.hosted_invoice_url;

            await emailService.sendInvoiceEmail(
              user.email,
              invoiceUrl as string,
              invoice.number as string,
              amountPaid,
            );
          } else {
            await emailService.sendPendingInvoiceEmail(
              user.email,
              invoice.hosted_invoice_url as string,
              invoice.number as string,
              invoice.amount_due / 100,
            );
          }
        }

        // send email
        await emailService.sendAdminNewSubscriptionAlert(
          user.email,
          dbPlan.brand as string,
        );

        break;
      }
      case "setup_intent.succeeded": {
        const setupIntentSucceded = event.data.object;
        // console.log(setupIntentSucceded);
        const customerId = setupIntentSucceded.customer;
        const metadata = setupIntentSucceded.metadata as {
          userSubscriptionId: string;
          userId: string;
        };

        if (!metadata.userId || !metadata.userSubscriptionId) {
          console.error("User ID or subscription ID not found in metadata");
          return;
        }

        const dbPlan = await storage.getSubscription(
          parseInt(metadata.userSubscriptionId),
        );

        if (!dbPlan) {
          console.error("Plan not found in database");
          return;
        }

        // Get payment methods
        const paymentMethods = await stripe.customers.listPaymentMethods(
          customerId as string,
          {
            type: "card",
            limit: 1,
          },
        );

        // create a subscription
        await stripe.subscriptions.create({
          customer: customerId as string,
          items: [{ price: dbPlan.stripePriceId as string }],
          default_payment_method: paymentMethods.data[0].id,
          collection_method: "charge_automatically",
          metadata: {
            userId: metadata.userId,
            userSubscriptionId: metadata.userSubscriptionId,
          },
        });

        break;
      }
      case "customer.subscription.updated": {
        const subscription = event.data.object;
        const userId = subscription.metadata.userId;
        const subscriptionId = subscription.metadata.userSubscriptionId;
        const metaJsonId = subscription.metadata.jsonId;

        if (!userId || !subscriptionId) {
          console.error("Missing metadata");
          return;
        }

        const user = await storage.getUser(parseInt(userId));
        const dbPlan = await storage.getSubscription(parseInt(subscriptionId));

        if (!user || !dbPlan) {
          console.error("User or subscription plan not found");
          return;
        }

        await storage.updateSubscription(parseInt(subscriptionId), {
          status: subscription.status,
        });

        const jsonId = metaJsonId ? metaJsonId : user.email + subscriptionId;
        const getUrl = `${JSON_BASE_URL}/user_json_api.php?username=${jsonId}`;

        const res = await fetch(getUrl, {
          method: "GET",
          headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
        });

        if (!res.ok) {
          console.error("Failed to fetch existing user JSON");
          return;
        }

        const existingJson = await res.json();
        existingJson.user_info.payment_status = subscription.status;
        existingJson.filters.extra_note = `Updated on ${new Date().toISOString()}`;

        const putUrl = `${JSON_BASE_URL}/user_json_api.php?username=${jsonId}`;
        const updateRes = await fetch(putUrl, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(existingJson),
        });

        if (!updateRes.ok) {
          console.error("Failed to update user JSON");
          return;
        }

        console.log("User JSON updated successfully");
        break;
      }
      case "customer.subscription.deleted": {
        const subscription = event.data.object;
        const userId = subscription.metadata.userId;
        const subscriptionId = subscription.metadata.userSubscriptionId;
        const metaJsonId = subscription.metadata.jsonId;

        if (!userId || !subscriptionId) {
          console.error("Missing metadata");
          return;
        }

        const user = await storage.getUser(parseInt(userId));
        if (!user) {
          console.error("User not found");
          return;
        }

        // // delete subscription
        // await storage.deleteSubscription(parseInt(subscriptionId));

        const jsonId = metaJsonId ? metaJsonId : user.email + subscriptionId;
        const deleteUrl = `${JSON_BASE_URL}/user_json_api.php?username=${jsonId}`;

        const deleteRes = await fetch(deleteUrl, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
        });

        if (!deleteRes.ok) {
          console.error("Failed to delete user JSON");
          return;
        }

        console.log(`User JSON deleted for ${jsonId}`);
        break;
      }
      case "invoice.payment_succeeded": {
        const invoice = event.data.object;

        // Get the associated subscription
        const subscriptionId = invoice.parent?.subscription_details?.subscription as string;
        const stripeSubscription =
          await stripe.subscriptions.retrieve(subscriptionId);

        if (stripeSubscription.status !== "active") {
          console.log("Subscription not active yet. Skipping activation.");
          return;
        }

        const userId = stripeSubscription.metadata.userId;
        const userSubscriptionId =
          stripeSubscription.metadata.userSubscriptionId;
        const jsonId =
          stripeSubscription.metadata.jsonId ||
          `${invoice.customer_email}${userSubscriptionId}`;

        const user = await storage.getUser(parseInt(userId));
        if (!user) return;

        // get db subscription
        const dbSubscription = await storage.getSubscription(
          parseInt(userSubscriptionId),
        );

        await emailService.sendInvoiceEmail(
          user.email,
          invoice.hosted_invoice_url as string,
          invoice.number as string,
          invoice.amount_paid / 100,
        );

        // Update DB and JSON status to active
        await storage.updateSubscription(parseInt(userSubscriptionId), {
          status: "active",
        });

        const getUrl = `${JSON_BASE_URL}/user_json_api.php?username=${jsonId}`;
        const res = await fetch(getUrl, {
          method: "GET",
          headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
        });

        if (res.ok) {
          const existingJson = await res.json();
          const updatedJson = {
            ...existingJson,
            user_info: {
              ...existingJson.user_info,
              payment_status: "active",
            },
            running_frequency: dbSubscription.updateFrequency,
            websites: {
              websites_to_scrap: dbSubscription.websitesSelected,
            },
            first_run_throwback_time: "86400",
            language_tag: {
              language: [dbSubscription.notificationLanguage],
            },
            filters: {
              ...existingJson.filters,
              facebook_link: dbSubscription.facebookMarketplaceUrl,
              min_mileage: dbSubscription.mileageMin,
              max_mileage: dbSubscription.mileageMax,
              telegram_bot_token: dbSubscription.telegramBotToken,
              telegram_chat_id: dbSubscription.telegramChatId,
              telegram_language: dbSubscription.notificationLanguage,
              min_price: dbSubscription.priceMin,
              max_price: dbSubscription.priceMax,
              fuel_type: dbSubscription.fuelType,
              brand: dbSubscription.brand,
              model: dbSubscription.model,
              model_year_lower_limit: dbSubscription.yearMin,
              model_year_upper_limit: dbSubscription.yearMax,
            },
          };

          await fetch(getUrl, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${BEARER_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedJson),
          });
        }

        break;
      }
      case "invoice.payment_failed": {
        const deletedInvoice = event.data.object;

        await emailService.sendCustomEmail(
          "muzardemoses@gmail.com",
          "Payment Failed Invoice Response",
          `<div style="font-family: Arial, sans-serif; padding: 20px;">
            <p>Hello moses,</p>
          

            <br/>
            <p>— The Amiquus Team</p>
            </div>
            `,
        );

        const customerId = deletedInvoice.customer as string;
        const subscriptionId = deletedInvoice.parent?.subscription_details?.subscription;
        const stripeSubscription =
          await stripe.subscriptions.retrieve(subscriptionId);
        const stripeSubscriptionMetadata =
          deletedInvoice.parent?.subscription_details?.metadata ||
          stripeSubscription.metadata;

        const userId = stripeSubscriptionMetadata.userId;
        const userSubscriptionId =
          stripeSubscriptionMetadata.userSubscriptionId;
        const jsonId =
          stripeSubscriptionMetadata.jsonId ||
          `${deletedInvoice.customer_email}${userSubscriptionId}`;

        if (!userId || !userSubscriptionId) {
          console.error("Missing metadata for user or subscription");
          return;
        }

        const attempts = deletedInvoice.attempt_count || 1;
        const invoiceUrl =
          deletedInvoice.hosted_invoice_url ||
          deletedInvoice.invoice_pdf ||
          "#";

        const user = await storage.getUser(parseInt(userId));
        if (user) {
          await emailService.sendCustomEmail(
            user.email,
            "Payment Failed",
            `<div style="font-family: Arial, sans-serif; padding: 20px;">
              <p>Hello ${user.firstName || "there"},</p>
              <p>We were unable to process your recent payment (attempt ${attempts}).</p>
              ${
                attempts < 3
                  ? `<p>We will retry your payment shortly. No action is needed for now.</p>`
                  : `<p><strong>Your subscription has now been paused after multiple failed attempts.</strong></p>
                     <p>Please update your payment details to resume your subscription.</p>`
              }
 <p style="padding:2px;"></p>
              <p>
                <a href="${invoiceUrl}" style="display:inline-block;padding:10px 16px;background:#4CAF50;color:white;text-decoration:none;border-radius:5px;">
                  View Invoice
                </a>
              </p>
<p style="padding:2px;"></p>
              <p>
                <a href="https://www.amiquus.com/dashboard/" style="display:inline-block;padding:10px 16px;background:#007bff;color:white;text-decoration:none;border-radius:5px;">
                  Manage Payment Methods
                </a>
              </p>

              <br/>
              <p>— The Amiquus Team</p>
              </div>
              `,
          );
        }

        if (attempts >= 3) {
          if (stripeSubscription && stripeSubscription.status !== "paused") {
            await stripe.subscriptions.update(subscriptionId, {
              pause_collection: { behavior: "void" },
            });
          }

          await storage.updateSubscription(parseInt(userSubscriptionId), {
            status: "paused",
          });

          const getUrl = `${JSON_BASE_URL}/user_json_api.php?username=${jsonId}`;
          const res = await fetch(getUrl, {
            method: "GET",
            headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
          });

          if (res.ok) {
            const existingJson = await res.json();
            existingJson.user_info.payment_status = "paused";

            await fetch(getUrl, {
              method: "PUT",
              headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify(existingJson),
            });
          }

          console.log("Paused subscription after 3 failed attempts");
        }
        break;
      }

      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  },
);

export default router;
