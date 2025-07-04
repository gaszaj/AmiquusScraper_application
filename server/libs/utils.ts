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
