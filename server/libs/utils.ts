import { APP_NAME } from "@shared/config";
import { Subscription } from "@shared/schema";
import crypto from "crypto";
import fetch from "node-fetch";

const JSON_BASE_URL =
  process.env.JSON_BASE_URL ||
  "https://apiamiquus.amiquus.com/JSON_FILES_FOLDER";
const BEARER_TOKEN = process.env.BEARER_TOKEN || "";
const CAPACITY = 30;

export const FREQUENCY_IN_SECONDS: Record<string, number> = {
  hourly: 3600,
  "30min": 1800,
  "15min": 900,
  "5min": 300,
  "1min": 60,
};


export async function getSubscriptionStats() {
  const res = await fetch(`${JSON_BASE_URL}/user_json_api.php`, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  const { users }: { users: string[] } = await res.json();

  const userJsons = await Promise.all(
    users.map(async (username) => {
      try {
        const res = await fetch(`${JSON_BASE_URL}/user_json_api.php?username=${username}`, {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) return null;
        return await res.json();
      } catch {
        return null;
      }
    })
  );

  let active = 0;
  userJsons.forEach((user) => {
    if (user?.user_info?.payment_status === "active") {
      const websites = user.websites?.websites_to_scrap;
      if (Array.isArray(websites)) {
        active += websites.length;
      }
    }
  });

  return {
    active,
    capacity: CAPACITY,
    remaining: Math.max(0, CAPACITY - active),
    full: active >= CAPACITY,
  };
}

export function generateVerificationCode(): string {
  const code = crypto.randomInt(100000, 999999).toString();
  return code;
}

export function getVerificationCodeExpiry(): Date {
  const expiry = new Date();
  expiry.setMinutes(expiry.getMinutes() + 10); // Code expires in 10 minutes
  return expiry;
}

export function buildJsonObject(
  subscription: Subscription,
  email: string,
  paymentStatus: string,
  isDiscountApplied: boolean,
) {
  const jsonId = email + subscription.id;
  const runningFrequency =
  FREQUENCY_IN_SECONDS[subscription.updateFrequency] || 3600;

  return {
    username: jsonId,
    user_info: {
      user_id: subscription.userId.toString(),
      user_mail: email,
      payment_status: paymentStatus,
    },
    running_frequency: runningFrequency,
    websites: {
      websites_to_scrap: subscription.websitesSelected,
    },
    first_run_throwback_time: "86400",
    language_tag: {
      language: [subscription.notificationLanguage],
    },
    // promo_code: subscription.promoCode || "",
    promo_code: isDiscountApplied ? subscription.promoCode || "" : "",
    filters: {
      facebook_link: subscription.facebookMarketplaceUrl,
      min_mileage: subscription.mileageMin,
      max_mileage: subscription.mileageMax,
      telegram_username: subscription.telegramUsername,
      telegram_language: subscription.notificationLanguage,
      min_price: subscription.priceMin,
      max_price: subscription.priceMax,
      fuel_type: subscription.fuelType,
      brand: subscription.brand,
      model: subscription.model,
      model_year_lower_limit: subscription.yearMin,
      model_year_upper_limit: subscription.yearMax,
    },
  };
}

export function basicEmailLayout(title: string, bodyHtml: string) {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.5;">
      <h2 style="margin:0 0 12px;">${title}</h2>
      ${bodyHtml}
      <br />
      <p style="margin:16px 0 0;">Thanks,<br/>${APP_NAME} Team</p>
    </div>
  `;
}
