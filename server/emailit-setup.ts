import { SENDER_EMAIL } from "@shared/config";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.emailit.com",
  port: 465,
  secure: true, // ✅ SSL on 465
  auth: {
    user: SENDER_EMAIL,
    pass: process.env.EMAILIT_API_KEY,
  },
});


// Test connection
transporter.verify((error, success) => {
  // sendTestEmail()
  if (error) {
    console.error("SMTP connection error:", error);
  } else {
    console.log("✅ SMTP server is ready to send messages");
  }
});

export async function sendTestEmail() {
  // ✉️ Send test email
  try {
    const mailOptions = {
      from: `"Amiquus" <${SENDER_EMAIL}>`,
      to: `Gasper <gasper.zajc@gmail.com>`,
      subject: "Test Email from Nodemailer",
      html: `<h3>Hello!</h3><p>This is a test email sent using <strong>Nodemailer</strong>.</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Test email sent:", info.response);

    return info;
  } catch (error) {
    console.error("Error sending test email:", error);
    throw error;
  }
}
