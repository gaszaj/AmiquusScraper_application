import crypto from "crypto";

export function generateVerificationCode(): string {
  const code = crypto.randomInt(100000, 999999).toString();
  return code;
}

export function getVerificationCodeExpiry(): Date {
  const expiry = new Date();
  expiry.setMinutes(expiry.getMinutes() + 10); // Code expires in 10 minutes
  return expiry;
}
