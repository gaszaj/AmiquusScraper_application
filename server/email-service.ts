import { t } from "./utils/serverI18n";
import { transporter } from "./emailit-setup";
import { Subscription } from "@shared/schema";
import { basicEmailLayout } from "./libs/utils";
import { APP_NAME, DASHBOARD_URL, SENDER_EMAIL, SUPPORT_EMAIL } from "@shared/config";
import { moneyFromCents } from "./helpers/payments";
import { currencySymbol } from "@shared/pricing";
import { amiquusDomain } from "./routes/dodo";

// Interface for email service
interface IEmailService {
  sendVerificationEmail: (
    email: string,
    code: string,
    language: string | undefined,
  ) => Promise<void>;
}

// Implementation of the email service
class EmailService implements IEmailService {
  async sendVerificationEmail(
    email: string,
    code: string,
    language: string | undefined,
  ): Promise<void> {
    const subject = t("emails.verification.subject", language);
    const greeting = t("emails.verification.greeting", language);
    const message = t("emails.verification.message", language);
    const expiration = t("emails.verification.expiration", language);
    const team = t("emails.common.signature", language);

    try {
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>${subject}</h2>
          <p>${greeting}</p>
          <p>${message}</p>
          <h1 style="background: #f3f3f3; padding: 10px; text-align: center; letter-spacing: 2px;">${code}</h1>
          <p>${expiration}</p>
          <br/>
          <p>${team}</p>
        </div>
      `;

      const mailOptions = {
        from: `"Amiquus" <${SENDER_EMAIL}>`,
        to: email,
        subject: subject,
        html: htmlContent,
      };

      const fullResponse = await transporter.sendMail(mailOptions);
      console.log(
        `[EMAIL] Verification code sent to ${email}:`,
        fullResponse.response,
      );
    } catch (error) {
      console.error("❌ Error sending verification email:", error);
    }
  }
  async sendInvoiceEmail(
    email: string,
    invoiceUrl: string,
    invoiceId: string,
    amountPaid: number,
    language: string | undefined,
  ): Promise<void> {
    try {
      const subject = t("emails.invoice.success.subject", language);
      const h2Message = t("emails.invoice.success.h2Message", language);
      const greeting = t("emails.invoice.success.greeting", language);
      const paymentMessage = t(
        "emails.invoice.success.paymentMessage",
        language,
      );
      const downloadMessage = t(
        "emails.invoice.success.downloadMessage",
        language,
      );
      const viewInvoice = t("emails.invoice.success.viewInvoice", language);
      const invoiceNumber = t("emails.invoice.success.invoiceNumber", language);
      const thanksMessage = t("emails.common.thanksMessage", language);
      const team = t("emails.common.signature", language);

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>${h2Message}</h2>
          <p>${greeting}</p>
          <p>${paymentMessage} <strong>$${amountPaid.toFixed(2)}</strong>.</p>
          <p>${downloadMessage}</p>
          <a href="${invoiceUrl}" style="display:inline-block;padding:10px 16px;background:#4CAF50;color:white;text-decoration:none;border-radius:5px;">
            ${viewInvoice}
          </a>
          <p>${invoiceNumber} <strong>${invoiceId}</strong></p>
          <br />
          <p>${thanksMessage}</p>
          <p>${team}</p>
        </div>
      `;

      const mailOptions = {
        from: `"Amiquus" <${SENDER_EMAIL}>`,
        to: email,
        subject: `${subject} #${invoiceId}`,
        html: htmlContent,
      };

      const fullResponse = await transporter.sendMail(mailOptions);
      console.log(
        `[EMAIL] Invoice email sent to ${email}:`,
        fullResponse.response,
      );
    } catch (error) {
      console.error("❌ Error sending invoice email:", error);
    }
  }
  async sendPendingInvoiceEmail(
    email: string,
    invoiceUrl: string,
    invoiceId: string,
    amountDue: number,
    language: string | undefined,
  ): Promise<void> {
    const subjectA = t("emails.invoice.pending.subjectA", language);
    const subjectB = t("emails.invoice.pending.subjectB", language);
    const h2Message = t("emails.invoice.pending.h2Message", language);
    const greeting = t("emails.invoice.pending.greeting", language);
    const messageA = t("emails.invoice.pending.messageA", language);
    const messageB = t("emails.invoice.pending.messageB", language);
    const paymentMessage = t("emails.invoice.pending.paymentMessage", language);
    const payInvoice = t("emails.invoice.pending.payInvoice", language);
    const ignoreEmail = t("emails.invoice.pending.ignoreEmail", language);
    const needHelp = t("emails.common.needHelp", language);
    const team = t("emails.common.team", language);

    try {
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>${h2Message}</h2>
          <p>${greeting}</p>
          <p>${messageA} <strong>#${invoiceId}</strong> ${messageB} <strong>$${amountDue.toFixed(2)}</strong>.</p>
          <p>${paymentMessage}</p>
          <a href="${invoiceUrl}" style="display:inline-block;padding:10px 16px;background:#f44336;color:white;text-decoration:none;border-radius:5px;">
              ${payInvoice}
          </a>
          <br /><br />
          <p>${ignoreEmail}</p>
          <p>${needHelp} <a href="https://amiquus.com/support">Contact Support</a>.</p>
          <br />
          <p>${team}</p>
        </div>
      `;

      const mailOptions = {
        from: `"Amiquus" <${SENDER_EMAIL}>`,
        to: email,
        subject: `${subjectA} #${invoiceId} f${subjectB}`,
        html: htmlContent,
      };

      const fullResponse = await transporter.sendMail(mailOptions);
      console.log(`[EMAIL] Pending invoice email sent to ${email}:`, fullResponse.response);
    } catch (error) {
      console.error("❌ Error sending pending invoice email:", error);
    }
  }

  async sendAdminNewSubscriptionAlert(
    userEmail: string,
    planName: string,
  ): Promise<void> {
    try {
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>📥 New Subscription Alert</h2>
          <p>A new customer has subscribed to <strong>${planName}</strong>.</p>
          <p><strong>Email:</strong> ${userEmail}</p>
          <br/>
          <p>— Amiquus System</p>
        </div>
      `;

      const mailOptions = {
        from: `"Amiquus" <${SENDER_EMAIL}>`,
        to: `Gasper <gasper.zajc@gmail.com>`,
        subject: `🚀 New Subscription - ${userEmail}`,
        html: htmlContent,
      };

      const fullResponse = await transporter.sendMail(mailOptions);
      console.log(
        `[EMAIL] Admin notified of new subscription from ${userEmail}`,
        fullResponse.response,
      );
    } catch (error) {
      console.error("❌ Error sending admin subscription alert:", error);
    }
  }
  async sendAdminNewWaitlistAlert(
    userEmail: string,
    userName: string,
    language: string | undefined,
  ): Promise<void> {
    try {
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>📥 New Waitlist Signup</h2>
          <p><strong>Name:</strong> ${userName}</p>
          <p><strong>Email:</strong> ${userEmail}</p>
          <p><strong>Language:</strong> ${language}</p>
          <p>A new user has joined the waitlist. You may want to contact them if a slot becomes available.</p>
          <br/>
          <p>— Amiquus System</p>
        </div>
      `;

      const mailOptions = {
        from: `"Amiquus" <${SENDER_EMAIL}>`,
        to: `Gasper <gasper.zajc@gmail.com>`,
        subject: `🚀 New Waitlist Entry – ${userName}`,
        html: htmlContent,
      };

      const fullResponse = await transporter.sendMail(mailOptions);
      console.log(
        `[EMAIL] Admin notified of new waitlist signup: ${userEmail}`,
        fullResponse.response,
      );
    } catch (error) {
      console.error("❌ Error sending admin waitlist email:", error);
    }
  }

  async sendCustomEmail(email: string, subject: string, htmlContent: string) {

    const mailOptions = {
      from: `"Amiquus" <${SENDER_EMAIL}>`,
      to: email,
      subject: subject,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
  }

  async sendUserWaitlistConfirmation(
    userEmail: string,
    userName: string,
    language: string | undefined,
  ): Promise<void> {
    try {
      const subject = t("emails.waitlist.subject", language);
      const h2Message = t("emails.waitlist.h2Message", language);
      const hi = t("emails.waitlist.hi", language);
      const message = t("emails.waitlist.message", language);
      const anyQuestions = t("emails.waitlist.anyQuestions", language);
      const team = t("emails.common.signature", language);

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>${h2Message}</h2>
          <p>${hi} ${userName},</p>
          <p>${message}</p>
          <p>${anyQuestions}</p>
          <br/>
          <p>${team}</p>
        </div>
      `;

      const mailOptions = {
        from: `"Amiquus" <${SENDER_EMAIL}>`,
        to: `${userName} <${userEmail}>`,
        subject: subject,
        html: htmlContent,
      };

      const fullResponse = await transporter.sendMail(mailOptions);
      console.log(
        `[EMAIL] Waitlist confirmation sent to ${userEmail}`,
        fullResponse.response,
      );
    } catch (error) {
      console.error("❌ Error sending user waitlist confirmation:", error);
    }
  }

  //New emails
  // Subscription success email
  async sendSubscriptionSuccessEmail(email: string, name: string, sub: Subscription) {
    try {
      const subject = `Your ${APP_NAME} Subscription is Active!`;

      const html = basicEmailLayout(
        `Your subscription is active, ${name}!`,
        `
          <p>Your ${APP_NAME} car alerts subscription has been successfully activated.</p>
          <p><strong>Plan:</strong> Monthly</p>
          <p><strong>Vehicle:</strong> ${sub.brand ?? "-"} ${sub.model ?? ""}</p>
          <p><strong>Update frequency:</strong> ${sub.updateFrequency}</p>
          <p><strong>Amount:</strong> ${currencySymbol}${moneyFromCents(sub.price)}</p>

          <a href="${DASHBOARD_URL}" style="display:inline-block;padding:10px 16px;background:#111827;color:white;text-decoration:none;border-radius:8px;margin-top:10px;">
            Open Dashboard
          </a>

          <p style="color:#6b7280;margin-top:14px;">
            Need help? Reply to this email or contact us at ${SUPPORT_EMAIL}.
          </p>
        `
      );

      const fullResponse = await transporter.sendMail({
        from: `"${APP_NAME}" <${SENDER_EMAIL}>`,
        to: email,
        subject,
        html,
      });

      console.log(
        `[EMAIL] Subscription success email sent to ${email}:`,
        fullResponse.response,
      );
    } catch (error) {
      console.error("❌ Error sending subscription success email:", error);
    }
  }

  //Subscription reactivated email
  async sendSubscriptionReactivatedEmail(email: string, name: string, sub: Subscription) {
    try {
      const subject = `Your ${APP_NAME} Subscription is Reactivated!`;

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

      const fullResponse = await transporter.sendMail({
        from: `"${APP_NAME}" <${SENDER_EMAIL}>`,
        to: email,
        subject,
        html,
      });

      console.log(
        `[EMAIL] Subscription reactivated email sent to ${email}:`,
        fullResponse.response,
      );
    } catch (error) {
      console.error("❌ Error sending subscription reactivated email:", error);
    }
  }
  //for cancelled subscription and payment failed webhook attempts 3
  async sendSubscriptionCancelledEmail(email: string, name: string, sub: Subscription) {
    try {
      const subject = "Your Subscription has been Cancelled";

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

      const fullResponse = await transporter.sendMail({
        from: `"${APP_NAME}" <${SENDER_EMAIL}>`,
        to: email,
        subject,
        html,
      });

      console.log(
        `[EMAIL] Subscription cancelled email sent to ${email}:`,
        fullResponse.response,
      );
    } catch (error) {
      console.error("❌ Error sending subscription cancelled email:", error);
    }
  }

  async sendSubscriptionPaymentFailedEmail(
    email: string,
    name: string,
    sub: Subscription
  ) {
    try {
      const subject = "Subscription Payment Failed - Action Required";
      const setupLink = `${amiquusDomain}/setup-alerts`;

      const html = basicEmailLayout(
        `Hi ${name || "there"},`,
        `
          <p>
            We couldn’t complete your ${APP_NAME} subscription because the payment didn’t go through.
          </p>
  
          <p>
            To start receiving alerts, please sort out your payment and complete your alert setup.
          </p>
  
          <a href="${setupLink}" style="display:inline-block;padding:10px 16px;background:#111827;color:white;text-decoration:none;border-radius:8px;margin-top:10px;">
            Set up alerts
          </a>
  
          <p style="margin-top:14px;color:#6b7280;">
            If you need any help, feel free to reach out.
          </p>
        `
      );

      const fullResponse = await transporter.sendMail({
        from: `"${APP_NAME}" <${SENDER_EMAIL}>`,
        to: email,
        subject,
        html,
      });

      console.log(
        `[EMAIL] First-time subscription payment failed email sent to ${email}:`,
        fullResponse.response
      );
    } catch (error) {
      console.error("❌ Error sending subscription payment failed email:", error);
    }
  }

  // for payment failed webhook attempts 1 and 2
  async sendSubscriptionRenewalFailedEmail(email: string, name: string, sub: Subscription, currentAttempt: number) {
    try {
      const attemptsLeft = Math.max(0, 3 - currentAttempt);

      const subject =
        currentAttempt === 1
          ? `Action needed: Payment failed (${attemptsLeft} attempts left)`
          : currentAttempt === 2
            ? `Urgent: Payment failed (${attemptsLeft} attempt left)`
            : `Subscription cancelled: Payment failed 3 times`;

      const updateLink = `${amiquusDomain}/api/subscriptions/${sub.dodoSubscriptionId}/update-payment-method`;

      const intro =
        currentAttempt === 1
          ? `<p>We tried to renew your ${APP_NAME} subscription, but the payment didn’t go through.</p>`
          : currentAttempt === 2
            ? `<p>Your ${APP_NAME} subscription renewal payment failed again.</p>`
            : `<p>We couldn’t renew your ${APP_NAME} subscription because the payment failed three times.</p>`;

      const html = basicEmailLayout(
        `Hi ${name},`,
        `
            ${intro}
        <p><strong>Attempts left:</strong> ${attemptsLeft} of 3</p>
        <a href="${updateLink}" style="display:inline-block;padding:10px 16px;background:#111827;color:white;text-decoration:none;border-radius:8px;margin-top:10px;">
          Update payment method
        </a>
        <p><strong>Vehicle:</strong> ${sub.brand ?? "-"} ${sub.model ?? ""}</p>
        <p><strong>Update frequency:</strong> ${sub.updateFrequency}</p>
        ${currentAttempt >= 3 ? `<p>If you update your payment method, you can resubscribe from your dashboard.</p>` : `<p>If the third attempt fails, your subscription will be cancelled automatically.</p>`}
      `
      );

      const fullResponse = await transporter.sendMail({
        from: `"${APP_NAME}" <${SENDER_EMAIL}>`,
        to: email,
        subject,
        html,
      });

      console.log(
        `[EMAIL] Subscription renewal failed email sent to ${email}:`,
        fullResponse.response,
      );
    } catch (error) {
      console.error("❌ Error sending subscription renewal failed email:", error);
    }
  }

  // for payment retry attempt emails
  async sendPaymentRetryAttemptEmail(
    email: string,
    name: string,
    sub: Subscription,
    nextAttemptNumber: number
  ) {
    try {
      const attemptsLeft = Math.max(0, 3 - nextAttemptNumber);
      const updateLink = `${amiquusDomain}/api/subscriptions/${sub.dodoSubscriptionId}/update-payment-method`;

      // NOTE: attempt 3 message must mention straight cancellation on failure
      const subject =
        nextAttemptNumber === 1
          ? `Action needed: Payment failed (${attemptsLeft} attempts left)`
          : nextAttemptNumber === 2
            ? `Urgent: Payment failed (${attemptsLeft} attempt left)`
            : `Final notice: Payment retry #3 — subscription will be cancelled if it fails`;

      const intro =
        nextAttemptNumber === 1
          ? `<p>We attempted to retry your ${APP_NAME} subscription payment, but it didn’t go through.</p>`
          : nextAttemptNumber === 2
            ? `<p>We retried your ${APP_NAME} subscription payment again, and it still didn’t go through.</p>`
            : `<p>We’re about to make the <strong>third and final</strong> payment attempt for your ${APP_NAME} subscription.</p>`;

      const warning =
        nextAttemptNumber >= 3
          ? `
            <p style="margin-top:10px;">
              <strong>Important:</strong> If this third attempt fails, your subscription will be <strong>cancelled immediately</strong> and alerts will stop.
            </p>
          `
          : `
            <p style="margin-top:10px;color:#6b7280;">
              We retry at least once every 24 hours. If the third attempt fails, your subscription will be cancelled automatically.
            </p>
          `;

      const actionLine =
        nextAttemptNumber >= 3
          ? `<p style="margin-top:10px;">To avoid cancellation, please update your payment method now:</p>`
          : `<p style="margin-top:10px;">To keep your subscription active, please update your payment method:</p>`;

      const html = basicEmailLayout(
        `Hi ${name || "there"},`,
        `
          ${intro}
  
          <p><strong>Attempts left:</strong> ${attemptsLeft} of 3</p>
  
          ${actionLine}
  
          <a href="${updateLink}" style="display:inline-block;padding:10px 16px;background:#111827;color:white;text-decoration:none;border-radius:8px;margin-top:10px;">
            Update payment method
          </a>
  
          <p style="margin-top:14px;">
            <strong>Subscription details</strong><br/>
            <strong>Vehicle:</strong> ${sub.brand ?? "-"} ${sub.model ?? ""}<br/>
            <strong>Update frequency:</strong> ${sub.updateFrequency}
          </p>
  
          ${warning}
        `
      );

      const fullResponse = await transporter.sendMail({
        from: `"${APP_NAME}" <${SENDER_EMAIL}>`,
        to: email,
        subject,
        html,
      });

      console.log(`[EMAIL] Payment retry attempt email sent to ${email}:`, fullResponse.response);
    } catch (error) {
      console.error("❌ Error sending payment retry attempt email:", error);
    }
  }

  async sendSubscriptionOnHoldEmail(email: string, name: string, sub: Subscription) {
    try {
      const subject = "Action needed: Your subscription is on hold";
  
      const updateLink = `${amiquusDomain}/api/subscriptions/${sub.dodoSubscriptionId}/update-payment-method`;
  
      const html = basicEmailLayout(
        `Hi ${name || "there"},`,
        `
          <p>
            Your ${APP_NAME} subscription is currently <strong>on hold</strong> because we couldn’t process your latest payment.
          </p>
  
          <p>
            To restore your subscription, please update your payment method:
          </p>
  
          <a href="${updateLink}" style="display:inline-block;padding:10px 16px;background:#111827;color:white;text-decoration:none;border-radius:8px;margin-top:10px;">
            Update payment method
          </a>
  
          <p style="margin-top:14px;">
            <strong>Subscription details</strong><br/>
            <strong>Vehicle:</strong> ${sub.brand ?? "-"} ${sub.model ?? ""}<br/>
            <strong>Update frequency:</strong> ${sub.updateFrequency}
          </p>
  
          <p style="margin-top:14px;color:#6b7280;">
            We’ll automatically retry the payment (at most once every 24 hours). If payment fails 3 times in total, your subscription will be cancelled and alerts will stop.
          </p>
        `
      );
  
      const fullResponse = await transporter.sendMail({
        from: `"${APP_NAME}" <${SENDER_EMAIL}>`,
        to: email,
        subject,
        html,
      });
  
      console.log(`[EMAIL] Subscription on-hold email sent to ${email}:`, fullResponse.response);
    } catch (error) {
      console.error("❌ Error sending subscription on-hold email:", error);
    }
  }
  
}

// Export a singleton instance
export const emailService = new EmailService();
