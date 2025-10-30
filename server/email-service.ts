import * as brevo from "@getbrevo/brevo";
import { t } from "./utils/serverI18n";

// Interface for email service
interface IEmailService {
  sendVerificationEmail: (
    email: string,
    code: string,
    language: string | undefined,
  ) => Promise<void>;
}

// Initialize Brevo API
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY as string,
);

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

      const sendEmail: brevo.SendSmtpEmail = {
        subject,
        htmlContent,
        sender: { name: "Amiquus", email: "info@amiquus.com" },
        to: [{ email }],
      };

      const response = await apiInstance.sendTransacEmail(sendEmail);
      console.log(`[EMAIL] Verification code sent to ${email}:`, response);
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

      const sendEmail: brevo.SendSmtpEmail = {
        subject: `${subject} #${invoiceId}`,
        htmlContent,
        sender: {
          name: "Amiquus",
          email: "info@amiquus.com",
        },
        to: [{ email }],
        headers: {
          "X-Mailin-custom": "invoice_email",
        },
      };

      const response = await apiInstance.sendTransacEmail(sendEmail);
      console.log(`[EMAIL] Invoice email sent to ${email}:`, response);
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

      const sendEmail: brevo.SendSmtpEmail = {
        subject: `${subjectA} #${invoiceId} f${subjectB}`,
        htmlContent,
        sender: {
          name: "Amiquus",
          email: "info@amiquus.com",
        },
        to: [{ email }],
        headers: {
          "X-Mailin-custom": "pending_invoice_email",
        },
      };

      const response = await apiInstance.sendTransacEmail(sendEmail);
      console.log(`[EMAIL] Pending invoice email sent to ${email}:`, response);
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

      const sendEmail: brevo.SendSmtpEmail = {
        subject: `🚀 New Subscription - ${userEmail}`,
        htmlContent,
        sender: {
          name: "Amiquus",
          email: "info@amiquus.com",
        },
        to: [
          {
            email: "gasper.zajc@gmail.com",
            name: "Gasper",
          },
        ],
        headers: {
          "X-Mailin-custom": "admin_subscription_alert",
        },
      };

      const response = await apiInstance.sendTransacEmail(sendEmail);
      console.log(
        `[EMAIL] Admin notified of new subscription from ${userEmail}`,
        response,
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

      const sendEmail: brevo.SendSmtpEmail = {
        subject: `🚀 New Waitlist Entry – ${userName}`,
        htmlContent,
        sender: {
          name: "Amiquus",
          email: "info@amiquus.com",
        },
        to: [
          {
            email: "gasper.zajc@gmail.com",
            name: "Gasper",
          },
        ],
        headers: {
          "X-Mailin-custom": "admin_waitlist_alert",
        },
      };

      const response = await apiInstance.sendTransacEmail(sendEmail);
      console.log(
        `[EMAIL] Admin notified of new waitlist signup: ${userEmail}`,
        response,
      );
    } catch (error) {
      console.error("❌ Error sending admin waitlist email:", error);
    }
  }

  async sendCustomEmail(email: string, subject: string, htmlContent: string) {
    const sendEmail: brevo.SendSmtpEmail = {
      subject,
      htmlContent,
      sender: { name: "Amiquus", email: "info@amiquus.com" },
      to: [{ email }],
    };

    await apiInstance.sendTransacEmail(sendEmail);
  }

  async sendUserWaitlistConfirmation(
    userEmail: string,
    userName: string,
    language: string | undefined
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

      const sendEmail: brevo.SendSmtpEmail = {
        subject: subject,
        htmlContent,
        sender: {
          name: "Amiquus",
          email: "info@amiquus.com",
        },
        to: [
          {
            email: userEmail,
          },
        ],
        headers: {
          "X-Mailin-custom": "user_waitlist_confirmation",
        },
      };

      const response = await apiInstance.sendTransacEmail(sendEmail);
      console.log(
        `[EMAIL] Waitlist confirmation sent to ${userEmail}`,
        response,
      );
    } catch (error) {
      console.error("❌ Error sending user waitlist confirmation:", error);
    }
  }
}

// Export a singleton instance
export const emailService = new EmailService();
