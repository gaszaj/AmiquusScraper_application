import * as brevo from "@getbrevo/brevo";

// Interface for email service
interface IEmailService {
  sendVerificationEmail: (email: string, code: string) => Promise<void>;
}

// Initialize Brevo API
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY as string
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
          email: "verify@academia-assistant.com", // Make sure this domain is authorized
        },
        to: [
          {
            email,
            name: "", // Optional
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
}

// Export a singleton instance
export const emailService = new EmailService();
