# Subscription Guide

## Overview

This guide provides information on managing your subscription, including how to update payment methods, cancel subscriptions, and handle subscription holds.

- When a subscription goes on hold, it will not renew automatically until the payment method is updated.

## Handling Subscription On Hold

When a subscription enters `on_hold` state, you need to update the payment method to reactivate it. This section explains when subscriptions go on hold and how to handle them.

### When Subscriptions Go On Hold

A subscription is placed on hold when:

- **Renewal payment fails**: The automatic renewal charge fails due to insufficient funds, expired card, or bank decline
- **Plan change charge fails**: An immediate charge during plan upgrade/downgrade fails
- **Payment method authorization fails**: The payment method cannot be authorized for recurring charges

### Reactivating Subscriptions from On Hold

To reactivate a subscription from `on_hold` state, use the Update Payment Method API. This automatically:

- Creates a charge for remaining dues
- Generates an invoice for the charge
- Processes the payment using the new payment method
- Reactivates the subscription to `active` state upon successful payment

Status cannot be cancelled when subscription is failed when trying to change status from `failed` to `cancelled` directly.

I don't trhink we can do something regarding failed and cancelled subscription
We update on_hold payment method

<!-- const APP_NAME = "Amiquus";
const SUPPORT_EMAIL = "support@amiquushq.com"; // change if needed
const DASHBOARD_URL = `${amiquusDomain}/dashboard`; // you already have amiquusDomain somewhere

function moneyFromCents(cents: number) {
  return (cents / 100).toFixed(2);
}

function basicEmailLayout(title: string, bodyHtml: string) {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.5;">
      <h2 style="margin:0 0 12px;">${title}</h2>
      ${bodyHtml}
      <br />
      <p style="margin:16px 0 0;">Thanks,<br/>${APP_NAME} Team</p>
    </div>
  `;
}

export const emailService = {
  async sendSubscriptionSuccessEmail(email: string, name: string, sub: any) {
    try {
      const subject = "Subscription activated ✅";

      const html = basicEmailLayout(
        `Your subscription is active, ${name}!`,
        `
          <p>Your ${APP_NAME} subscription has been successfully activated.</p>
          <p><strong>Plan:</strong> Monthly</p>
          <p><strong>Vehicle:</strong> ${sub.brand ?? "-"} ${sub.model ?? ""}</p>
          <p><strong>Update frequency:</strong> ${sub.updateFrequency}</p>
          <p><strong>Amount:</strong> €${moneyFromCents(sub.price)}</p>

          <a href="${DASHBOARD_URL}" style="display:inline-block;padding:10px 16px;background:#111827;color:white;text-decoration:none;border-radius:8px;margin-top:10px;">
            Open Dashboard
          </a>

          <p style="color:#6b7280;margin-top:14px;">
            Need help? Reply to this email or contact us at ${SUPPORT_EMAIL}.
          </p>
        `
      );

      await transporter.sendMail({
        from: `"${APP_NAME}" <${SENDER_EMAIL}>`,
        to: email,
        subject,
        html,
      });
    } catch (error) {
      console.error("❌ Error sending subscription success email:", error);
    }
  },

  async sendSubscriptionReactivatedEmail(email: string, name: string, sub: any) {
    try {
      const subject = "Subscription reactivated ✅";

      const html = basicEmailLayout(
        `Welcome back, ${name}!`,
        `
          <p>Your ${APP_NAME} subscription is active again.</p>
          <p>You will continue receiving alerts based on your saved preferences.</p>

          <p><strong>Vehicle:</strong> ${sub.brand ?? "-"} ${sub.model ?? ""}</p>
          <p><strong>Update frequency:</strong> ${sub.updateFrequency}</p>

          <a href="${DASHBOARD_URL}" style="display:inline-block;padding:10px 16px;background:#111827;color:white;text-decoration:none;border-radius:8px;margin-top:10px;">
            Open Dashboard
          </a>
        `
      );

      await transporter.sendMail({
        from: `"${APP_NAME}" <${SENDER_EMAIL}>`,
        to: email,
        subject,
        html,
      });
    } catch (error) {
      console.error("❌ Error sending subscription reactivated email:", error);
    }
  },

  async sendSubscriptionOnHoldEmail(
    email: string,
    name: string,
    sub: any,
    attempts: number
  ) {
    try {
      const subject = "Subscription paused — payment issue";

      const retryText =
        attempts >= 3
          ? `We attempted to process your payment 3 times, but it didn’t go through.`
          : `We attempted to process your payment ${attempts} time${attempts === 1 ? "" : "s"}. We’ll retry up to 3 times.`;

      const html = basicEmailLayout(
        `Your subscription is on hold, ${name}`,
        `
          <p>${retryText}</p>
          <p>Your subscription has been temporarily paused to prevent interruption of service issues.</p>

          <p><strong>Vehicle:</strong> ${sub.brand ?? "-"} ${sub.model ?? ""}</p>
          <p><strong>Amount:</strong> €${moneyFromCents(sub.price)}</p>

          <p style="margin-top:10px;">
            To reactivate, please update your payment method / complete payment from your dashboard.
          </p>

          <a href="${DASHBOARD_URL}" style="display:inline-block;padding:10px 16px;background:#111827;color:white;text-decoration:none;border-radius:8px;margin-top:10px;">
            Fix payment in Dashboard
          </a>

          <p style="color:#6b7280;margin-top:14px;">
            If you think this is a mistake, reply to this email or contact ${SUPPORT_EMAIL}.
          </p>
        `
      );

      await transporter.sendMail({
        from: `"${APP_NAME}" <${SENDER_EMAIL}>`,
        to: email,
        subject,
        html,
      });
    } catch (error) {
      console.error("❌ Error sending subscription on-hold email:", error);
    }
  },

  async sendSubscriptionCancelledEmail(email: string, name: string, sub: any) {
    try {
      const subject = "Subscription cancelled";

      const html = basicEmailLayout(
        `Your subscription has been cancelled, ${name}`,
        `
          <p>Your ${APP_NAME} subscription has been cancelled and alerts have been stopped.</p>

          <p><strong>Vehicle:</strong> ${sub.brand ?? "-"} ${sub.model ?? ""}</p>
          <p><strong>Update frequency:</strong> ${sub.updateFrequency}</p>

          <p style="margin-top:10px;">
            You can resubscribe anytime from your dashboard.
          </p>

          <a href="${DASHBOARD_URL}" style="display:inline-block;padding:10px 16px;background:#111827;color:white;text-decoration:none;border-radius:8px;margin-top:10px;">
            Resubscribe
          </a>
        `
      );

      await transporter.sendMail({
        from: `"${APP_NAME}" <${SENDER_EMAIL}>`,
        to: email,
        subject,
        html,
      });
    } catch (error) {
      console.error("❌ Error sending subscription cancelled email:", error);
    }
  },
};
 -->

 <!-- const prev = dbSubscription.status;

await storage.updateSubscription(dbSubscription.id, { status: "active" });

if (prev === "on_hold" || prev === "paused") {
  await emailService.sendSubscriptionReactivatedEmail(user.email, user.firstName, dbSubscription);
} else {
  await emailService.sendSubscriptionSuccessEmail(user.email, user.firstName, dbSubscription);
}
 -->