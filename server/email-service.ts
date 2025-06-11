import * as brevo from "@getbrevo/brevo";

// Interface for email service
interface IEmailService {
  sendVerificationEmail: (email: string, code: string) => Promise<void>;
}

// Initialize Brevo API
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY as string,
);

// Implementation of the email service
class EmailService implements IEmailService {
  async sendVerificationEmail(email: string, code: string): Promise<void> {
    try {
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Email Verification Code</h2>
          <p>Hi there,</p>
          <p>Use the verification code below to complete your sign-up:</p>
          <h1 style="background: #f3f3f3; padding: 10px; text-align: center; letter-spacing: 2px;">${code}</h1>
          <p>This code will expire in 10 minutes.</p>
          <p>If you did not create this account, you can ignore this email.</p>
          <br/>
          <p>Best regards,<br/>The Amiquus Team</p>
        </div>
      `;

      const sendEmail: brevo.SendSmtpEmail = {
        subject: "Your Amiquus Email Verification Code",
        htmlContent: emailHtml,
        sender: {
          name: "Amiquus",
          email: "info@amiquus.com", // Make sure this domain is authorized
        },
        to: [
          {
            email,
            // name: "", // Optional
          },
        ],
        headers: {
          "X-Mailin-custom": "verification_code_email",
        },
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
  ): Promise<void> {
    try {
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2> Your Amiquus Subscription Payment Was Successful!</h2>
          <p>Hi there,</p>
          <p>We’ve received your payment of <strong>$${amountPaid.toFixed(2)}</strong>.</p>
          <p>You can view or download your invoice using the link below:</p>
          <a href="${invoiceUrl}" style="display:inline-block;padding:10px 16px;background:#4CAF50;color:white;text-decoration:none;border-radius:5px;">
            View Invoice
          </a>
          <p>Invoice #: <strong>${invoiceId}</strong></p>
          <br />
          <p>Thank you for choosing Amiquus!</p>
          <p>— The Amiquus Team</p>
        </div>
      `;

      const sendEmail: brevo.SendSmtpEmail = {
        subject: `Your Amiquus Payment Receipt – Invoice #${invoiceId}`,
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
}

// Export a singleton instance
export const emailService = new EmailService();
