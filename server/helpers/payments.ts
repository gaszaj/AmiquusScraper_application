import { Discount } from "dodopayments/resources/discounts.mjs";
import { amiquusDomain, client as dodoClient } from "../routes/dodo";
import { storage } from "../storage";
import { Subscription } from "dodopayments/resources/subscriptions.mjs";
import { JSON_BASE_URL } from "../routes";
import { buildJsonObject, FREQUENCY_IN_SECONDS } from "../libs/utils";
import { BEARER_TOKEN } from "../routes/dodoWebhook";
import { emailService } from "../email-service";
import { RETRIABLE_ERRORS } from "@shared/config";

export function moneyFromCents(cents: number) {
  return (cents / 100).toFixed(2);
}


export async function createOrFindCustomer(email: string, name: string, userId: number) {
  try {
    // Check if customer already exists
    for await (const customer of dodoClient.customers.list({ email })) {
      if (customer.email === email) {
        return customer; // Return existing customer
      }
    }

    // Create a new customer if not found
    const newCustomer = await dodoClient.customers.create({
      email,
      name,
      metadata: {
        userId: userId.toString(),
      },
    });

    return newCustomer;
  } catch (error: any) {
    console.error("Error in createOrFindCustomer:", error);
    throw new Error(error.message || "Failed to create or find customer");
  }
}

export async function validatePromoCode(code: string) {
  try {
    const input = code.trim();
    if (!input) return null;

    const PAGE_SIZE = 100;
    const MAX_RESULTS = 300;
    const MAX_PAGES = Math.ceil(MAX_RESULTS / PAGE_SIZE); // 3 pages: 0,1,2

    for (let page = 0; page < MAX_PAGES; page++) {
      const batch: Discount[] = [];

      // discounts.list only supports page_size + page_number
      for await (const discount of dodoClient.discounts.list({
        page_size: PAGE_SIZE,
        page_number: page,
      })) {
        batch.push(discount);
      }

      // If API returns no items, no need to keep paging
      if (batch.length === 0) return null;

      // Case-sensitive comparison (exact match)
      const found = batch.find((d) => d.code === input);
      if (found) return found;

      // If we received fewer than a full page, we've reached the end
      if (batch.length < PAGE_SIZE) return null;
    }

    // Not found within first 300
    return null;
  } catch (error: any) {
    console.error("Error in validatePromoCode:", error);
    throw new Error(error?.message || "Failed to validate promo code");
  }
}


// Webhook subscription
export async function handleSubscriptionActive(dodoSubData: Subscription) {
  const userId = dodoSubData.metadata?.userId;
  const userSubscriptionId = dodoSubData.metadata?.userSubscriptionId;
  const metaJsonId = dodoSubData.metadata?.jsonUserId;

  if (!userId || !userSubscriptionId) {
    console.error("Missing userId or userSubscriptionId in subscription metadata.");
    return;
  }

  const user = await storage.getUser(parseInt(userId));
  if (!user) {
    console.error(`User with ID ${userId} not found.`);
    return;
  }

  const dbSubscription = await storage.getSubscription(parseInt(userSubscriptionId));

  if (!dbSubscription) {
    console.error(`Subscription with ID ${userSubscriptionId} not found.`);
    return;
  }

  // Update subscription status in your database
  await storage.updateSubscription(dbSubscription.id, {
    status: 'active',
    dodoSubscriptionId: dodoSubData.subscription_id,
    invoiceAttempts: 0,
    updatedAt: new Date(),
  });

  const jsonId = dbSubscription.jsonUserId || metaJsonId;

  // create user json file
  const jsonObject = buildJsonObject(
    dbSubscription,
    user.email,
    'active',
    dbSubscription.codeApplied,
  )

  const apiUrl = `${JSON_BASE_URL}/user_json_api.php`;

  // post/update to json api
  if (!jsonId) {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonObject),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      console.error("JSON API failed:", response.status, text);
      return; // or throw if you want retries (but you already ACK'd)
    }

    console.log("User JSON created successfully for", jsonObject.username);

    // update subscription with json id
    await storage.updateSubscription(dbSubscription.id, {
      jsonUserId: jsonObject.username,
      updatedAt: new Date(),
    });

    // update dodo metadata with json id
    await dodoClient.subscriptions.update(dodoSubData.subscription_id, {
      metadata: {
        ...dodoSubData.metadata,
        jsonUserId: jsonObject.username,
      },
    });

    // Notify customer of successful activation
    await emailService.sendSubscriptionSuccessEmail(
      user.email,
      user.firstName || "",
      dbSubscription,
    )

    // notify admin
    await emailService.sendAdminNewSubscriptionAlert(
      user.email,
      dbSubscription.brand as string,
    );
  } else {
    const getUrl = `${JSON_BASE_URL}/user_json_api.php?username=${encodeURIComponent(jsonId)}`;

    const res = await fetch(getUrl, {
      method: "GET",
      headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
    });

    // ✅ If not found, create it instead of failing
    if (res.status === 404) {
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
        return;
      }

      console.log("User JSON created successfully for", jsonObject.username);

      const isSameId = jsonId === jsonObject.username;

      if (!isSameId) {
        await storage.updateSubscription(dbSubscription.id, {
          jsonUserId: jsonObject.username,
        });

        await dodoClient.subscriptions.update(dodoSubData.subscription_id, {
          metadata: {
            ...dodoSubData.metadata,
            jsonUserId: jsonObject.username,
          },
        });
      }

      await emailService.sendSubscriptionReactivatedEmail(
        user.email,
        user.firstName || "",
        dbSubscription
      );

      return;
    }

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("Fetching existing JSON failed:", res.status, text);
      return;
    }

    const existingJson = await res.json();

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
      console.error("Updating JSON failed:", putRes.status, text);
      return;
    }

    console.log("User JSON updated successfully for", jsonId);

    // Notify customer of successful reactivation
    await emailService.sendSubscriptionReactivatedEmail(
      user.email,
      user.firstName || "",
      dbSubscription,
    )
  }
}

export async function handleSubscriptionRenewed(dodoSubData: Subscription) {
  const userId = dodoSubData.metadata?.userId;
  const userSubscriptionId = dodoSubData.metadata?.userSubscriptionId;
  const metaJsonId = dodoSubData.metadata?.jsonUserId;

  if (!userId || !userSubscriptionId) {
    console.error("Missing userId or userSubscriptionId in subscription metadata.");
    return;
  }

  const user = await storage.getUser(parseInt(userId));
  if (!user) {
    console.error(`User with ID ${userId} not found.`);
    return;
  }

  const dbSubscription = await storage.getSubscription(parseInt(userSubscriptionId));

  if (!dbSubscription) {
    console.error(`Subscription with ID ${userSubscriptionId} not found.`);
    return;
  }

  // Update subscription status in your database
  await storage.updateSubscription(dbSubscription.id, {
    status: 'active',
    dodoSubscriptionId: dodoSubData.subscription_id,
    invoiceAttempts: 0,
    updatedAt: new Date(),
  });

  const jsonId = dbSubscription.jsonUserId || metaJsonId;

  // create user json file
  const jsonObject = buildJsonObject(
    dbSubscription,
    user.email,
    'active',
    dbSubscription.codeApplied,
  )

  const apiUrl = `${JSON_BASE_URL}/user_json_api.php`;

  // post/update to json api
  if (!jsonId) {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonObject),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      console.error("JSON API failed:", response.status, text);
      return; // or throw if you want retries (but you already ACK'd)
    }

    console.log("User JSON created successfully for", jsonObject.username);

    // update subscription with json id
    await storage.updateSubscription(dbSubscription.id, {
      jsonUserId: jsonObject.username,
      updatedAt: new Date(),
    });

    // update dodo metadata with json id
    await dodoClient.subscriptions.update(dodoSubData.subscription_id, {
      metadata: {
        ...dodoSubData.metadata,
        jsonUserId: jsonObject.username,
      },
    });
  } else {
    const getUrl = `${JSON_BASE_URL}/user_json_api.php?username=${encodeURIComponent(jsonId)}`;

    const res = await fetch(getUrl, {
      method: "GET",
      headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
    });

    // ✅ If not found, create it instead of failing
    if (res.status === 404) {
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
        return;
      }

      console.log("User JSON created successfully for", jsonObject.username);

      const isSameId = jsonId === jsonObject.username;

      if (!isSameId) {
        await storage.updateSubscription(dbSubscription.id, {
          jsonUserId: jsonObject.username,
        });

        await dodoClient.subscriptions.update(dodoSubData.subscription_id, {
          metadata: {
            ...dodoSubData.metadata,
            jsonUserId: jsonObject.username,
          },
        });
      }

      return;
    }

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("Fetching existing JSON failed:", res.status, text);
      return;
    }

    const existingJson = await res.json();

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
      console.error("Updating JSON failed:", putRes.status, text);
      return;
    }

    console.log("User JSON updated successfully for", jsonId);
  }
}

export async function handleSubscriptionCancelled(dodoSubData: Subscription) {
  const userId = dodoSubData.metadata?.userId;
  const userSubscriptionId = dodoSubData.metadata?.userSubscriptionId;
  const metaJsonId = dodoSubData.metadata?.jsonUserId;

  if (!userId || !userSubscriptionId) {
    console.error("Missing userId or userSubscriptionId in subscription metadata.");
    return;
  }

  const user = await storage.getUser(parseInt(userId));
  if (!user) {
    console.error(`User with ID ${userId} not found.`);
    return;
  }

  const dbSubscription = await storage.getSubscription(parseInt(userSubscriptionId));

  if (!dbSubscription) {
    console.error(`Subscription with ID ${userSubscriptionId} not found.`);
    return;
  }

  // Update subscription status in your database
  await storage.updateSubscription(dbSubscription.id, {
    // add the dodoSubscription id in case it was missing
    dodoSubscriptionId: dodoSubData.subscription_id,
    status: 'cancelled',
    updatedAt: new Date(),
  });

  const jsonId = dbSubscription.jsonUserId || metaJsonId;

  if (jsonId) {
    const deleteUrl = `${JSON_BASE_URL}/user_json_api.php?username=${jsonId}`;

    const deleteRes = await fetch(deleteUrl, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
    });

    if (!deleteRes.ok) {
      const text = await deleteRes.text().catch(() => "");
      console.error("Deleting JSON failed:", deleteRes.status, text);
      return;
    }

    console.log("User JSON updated to cancelled for", jsonId);
  }

  // email user about cancellation
  await emailService.sendSubscriptionCancelledEmail(
    user.email,
    user.firstName || "",
    dbSubscription,
  )
}

export async function handleSubscriptionfailed(dodoSubData: Subscription) {
  const userId = dodoSubData.metadata?.userId;
  const userSubscriptionId = dodoSubData.metadata?.userSubscriptionId;

  if (!userId || !userSubscriptionId) {
    console.error("Missing userId or userSubscriptionId in subscription metadata.");
    return;
  }

  const user = await storage.getUser(parseInt(userId));
  if (!user) {
    console.error(`User with ID ${userId} not found.`);
    return;
  }

  const dbSubscription = await storage.getSubscription(parseInt(userSubscriptionId));

  if (!dbSubscription) {
    console.error(`Subscription with ID ${userSubscriptionId} not found.`);
    return;
  }

  // Update subscription status in your database
  await storage.updateSubscription(dbSubscription.id, {
    // add the dodoSubscription id in case it was missing
    dodoSubscriptionId: dodoSubData.subscription_id,
    status: 'failed',
    updatedAt: new Date(),
  });

  // delete json file if exists
  const jsonId = dbSubscription.jsonUserId;

  if (jsonId) {
    const deleteUrl = `${JSON_BASE_URL}/user_json_api.php?username=${jsonId}`;

    const deleteRes = await fetch(deleteUrl, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
    });

    if (!deleteRes.ok) {
      const text = await deleteRes.text().catch(() => "");
      console.error("Deleting JSON failed:", deleteRes.status, text);
      return;
    }

    console.log("User JSON deleted for", jsonId);
  }

  // email user about failed payment
  await emailService.sendSubscriptionPaymentFailedEmail(
    user.email,
    user.firstName || "",
    dbSubscription,
  )
}

export async function retryOnHoldSubscriptions() {
  const onHoldSubs = await storage.getOnHoldSubscriptions();

  for (const sub of onHoldSubs) {
    if (sub.invoiceAttempts >= 3) {
      console.log("Retry limit reached for", sub.id);
      //if it is not cancelled, cancel it

      try {
        await dodoClient.subscriptions.update(sub.dodoSubscriptionId as string, {
          status: "cancelled",
        });

        await storage.updateSubscription(sub.id, {
          status: "cancelled",
          updatedAt: new Date(),
        });

        console.log(`Subscription ${sub.id} cancelled immediately after retries`);
      } catch (err) {
        console.error("Failed to cancel subscription after retries", sub.id, err);
      }

      continue;
    }

    // skip if the last attempt was within the last 24 hours
    if (sub.lastInvoiceAttemptAt) {
      const hoursSinceLastAttempt = (new Date().getTime() - sub.lastInvoiceAttemptAt.getTime()) / (1000 * 60 * 60);

      if (hoursSinceLastAttempt < 24) {
        console.log("Skipping retry for", sub.id, "last attempt was", hoursSinceLastAttempt.toFixed(2), "hours ago");
        continue;
      }
    }

    try {
      // Update payment method or other details if needed here
      const dodoSubscription = await dodoClient.subscriptions.retrieve(sub.dodoSubscriptionId as string);

      if (!dodoSubscription) {
        console.error("Dodo subscription not found for", sub.id);
        continue;
      }

      const user = await storage.getUser(sub.userId);
      if (!user) {
        console.error("User not found for", sub.id);
        continue;
      }

      const lastPaymentId = sub.lastPaymentId;
      const lastPayment = lastPaymentId ? await dodoClient.payments.retrieve(lastPaymentId) : null;

      const errorCode = lastPayment?.error_code ?? null;
      const paymentMethodId = dodoSubscription.payment_method_id ?? null;

      const isErrorRetriable = errorCode ? RETRIABLE_ERRORS.includes(errorCode) : false;
      const canRetry = Boolean(isErrorRetriable && paymentMethodId);
      const nextAttemptNumber = sub.invoiceAttempts + 1;

      if (canRetry) {
        // Update to existing method (if Dodo auto-retries on this, great)
        await dodoClient.subscriptions.updatePaymentMethod(dodoSubscription.subscription_id, {
          type: "existing",
          payment_method_id: paymentMethodId!,
        });
        console.log("Updated to existing payment method for", sub.id);
      } else {
        await emailService.sendPaymentRetryAttemptEmail(
          user.email,
          user.firstName || "",
          sub,
          nextAttemptNumber
        )
      }

      await storage.updateSubscription(sub.id, {
        invoiceAttempts: nextAttemptNumber,
        lastInvoiceAttemptAt: new Date(),
        updatedAt: new Date(),
      });

      console.log(`Retry attempt ${nextAttemptNumber} for`, sub.id);
    } catch (err) {
      console.error("Retry failed for", sub.id, err);

      await storage.updateSubscription(sub.id, {
        invoiceAttempts: sub.invoiceAttempts + 1,
        lastInvoiceAttemptAt: new Date(),
        updatedAt: new Date(),
      });

      //Send email to user about failed retry
      const user = await storage.getUser(sub.userId);
      const nextAttemptNumber = sub.invoiceAttempts + 1;
      if (user) {
        await emailService.sendPaymentRetryAttemptEmail(
          user.email,
          user.firstName || "",
          sub,
          nextAttemptNumber
        );

        console.log("Sent payment retry failed email to", user.email);
      }
    }
  }
}

export async function handleSubscriptionOnHold(dodoSubData: Subscription) {
  const userId = dodoSubData.metadata?.userId;
  const userSubscriptionId = dodoSubData.metadata?.userSubscriptionId;

  if (!userId || !userSubscriptionId) {
    console.error("Missing userId or userSubscriptionId in subscription metadata.");
    return;
  }

  const user = await storage.getUser(parseInt(userId));
  if (!user) {
    console.error(`User with ID ${userId} not found.`);
    return;
  }

  const dbSubscription = await storage.getSubscription(parseInt(userSubscriptionId));

  if (!dbSubscription) {
    console.error(`Subscription with ID ${userSubscriptionId} not found.`);
    return;
  }

  // Update subscription status in your database
  await storage.updateSubscription(dbSubscription.id, {
    // add the dodoSubscription id in case it was missing
    dodoSubscriptionId: dodoSubData.subscription_id,
    status: 'on_hold',
    updatedAt: new Date(),
  });

  // Notify customer of on-hold status
  await emailService.sendSubscriptionOnHoldEmail(
    user.email,
    user.firstName || "",
    dbSubscription,
  )
}