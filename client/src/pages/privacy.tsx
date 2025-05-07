import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden p-8">
            <h1 className="text-3xl font-title font-bold mb-6">Privacy Policy</h1>
            <p className="text-neutral-600 mb-4">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <div className="prose prose-neutral max-w-none">
              <h2>1. Introduction</h2>
              <p>
                At Amiquus ("we," "our," or "us"), we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, or any of our services (collectively, the "Services").
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
              </p>

              <h2>2. Information We Collect</h2>
              <p>
                We may collect several types of information from and about users of our Services, including:
              </p>
              <h3>2.1 Personal Information</h3>
              <p>
                We collect personal information that you voluntarily provide to us when you register for an account, express an interest in obtaining information about us or our Services, or otherwise contact us. This personal information may include:
              </p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Telephone number</li>
                <li>Billing address</li>
                <li>Payment information</li>
                <li>Telegram bot token and chat ID</li>
                <li>Car preferences and search criteria</li>
              </ul>

              <h3>2.2 Automatically Collected Information</h3>
              <p>
                When you access or use our Services, we automatically collect certain information about your device and your interaction with our Services, including:
              </p>
              <ul>
                <li>Device and usage information (such as your IP address, browser type, operating system)</li>
                <li>Location information</li>
                <li>Cookies and tracking technologies</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>
                We may use the information we collect for various purposes, including to:
              </p>
              <ul>
                <li>Provide, operate, and maintain our Services</li>
                <li>Improve, personalize, and expand our Services</li>
                <li>Understand and analyze how you use our Services</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you about our Services, updates, and customer service</li>
                <li>Process your transactions and manage your account</li>
                <li>Find and prevent fraud</li>
                <li>For other purposes such as data analysis, identifying usage trends, and enhancing our Services</li>
              </ul>

              <h2>4. Disclosure of Your Information</h2>
              <p>
                We may disclose your personal information in the following situations:
              </p>
              <h3>4.1 Third-Party Service Providers</h3>
              <p>
                We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service.
              </p>
              <h3>4.2 Business Transfers</h3>
              <p>
                We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
              </p>
              <h3>4.3 Legal Requirements</h3>
              <p>
                We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, judicial proceedings, court orders, or legal processes.
              </p>
              <h3>4.4 With Your Consent</h3>
              <p>
                We may disclose your personal information for any other purpose with your consent.
              </p>

              <h2>5. Data Security</h2>
              <p>
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
              </p>

              <h2>6. Your Data Protection Rights</h2>
              <p>
                Depending on your location, you may have the following data protection rights:
              </p>
              <ul>
                <li>The right to access, update, or delete the information we have on you</li>
                <li>The right of rectification (to have your information corrected if it is inaccurate)</li>
                <li>The right to object (to our processing of your personal information)</li>
                <li>The right of restriction (to request that we restrict the processing of your personal information)</li>
                <li>The right to data portability (to receive a copy of your personal information)</li>
                <li>The right to withdraw consent (where we rely on your consent to process your personal information)</li>
              </ul>

              <h2>7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our Services and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Services.
              </p>

              <h2>8. Children's Privacy</h2>
              <p>
                Our Services are not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
              </p>

              <h2>9. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: privacy@amiquus.com<br />
                Address: 123 Main Street, New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
