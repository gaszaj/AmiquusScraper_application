import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden p-8">
            <h1 className="text-3xl font-title font-bold mb-6">Terms of Service</h1>
            <p className="text-neutral-600 mb-4">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <div className="prose prose-neutral max-w-none">
              <h2>1. Introduction</h2>
              <p>
                Welcome to Amiquus ("we," "our," or "us"). By accessing or using our website, mobile application, or any of our services, you agree to be bound by these Terms of Service ("Terms"). Please read these Terms carefully before using Amiquus.
              </p>
              <p>
                These Terms govern your access to and use of the Amiquus platform, which provides car listing monitoring and notification services. By accessing or using our Services, you agree to be bound by these Terms.
              </p>

              <h2>2. Services Description</h2>
              <p>
                Amiquus provides a platform that monitors selected car listing websites for new listings matching your specified criteria and sends notifications via Telegram when matching listings are found.
              </p>
              <p>
                We do not guarantee that our Services will always be available or be uninterrupted. We may suspend, withdraw, discontinue or change all or any part of our Services without notice.
              </p>

              <h2>3. Account Registration</h2>
              <p>
                To use our Services, you must register an account with us. You must provide accurate, current, and complete information during the registration process and keep your account information updated.
              </p>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>

              <h2>4. Subscription and Payment</h2>
              <p>
                Our Services are available on a subscription basis. You agree to pay all fees associated with your subscription plan.
              </p>
              <p>
                Subscription fees are billed in advance on a monthly basis. Your subscription will automatically renew unless you cancel it at least 24 hours before the end of the current billing period.
              </p>
              <p>
                No refunds or credits will be provided for partial months of service, downgrade refunds, or refunds for months unused with an active subscription.
              </p>

              <h2>5. User Conduct</h2>
              <p>
                You agree not to use our Services to:
              </p>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe the intellectual property rights of others</li>
                <li>Attempt to probe, scan, or test the vulnerability of our system</li>
                <li>Interfere with or disrupt the integrity or performance of our Services</li>
                <li>Attempt to gain unauthorized access to our Services or related systems</li>
              </ul>

              <h2>6. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of Amiquus or its licensors.
              </p>
              <p>
                Our Services are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, modify, create derivative works from, display, perform, distribute, sell, or exploit our Services without our prior written consent.
              </p>

              <h2>7. Disclaimer of Warranties</h2>
              <p>
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p>
                We do not warrant that our Services will be uninterrupted or error-free, that defects will be corrected, or that our Services or the servers that make them available are free of viruses or other harmful components.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                IN NO EVENT SHALL AMIQUUS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE OUR SERVICES.
              </p>

              <h2>9. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Amiquus and its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses arising from your use of our Services or your violation of these Terms.
              </p>

              <h2>10. Termination</h2>
              <p>
                We may terminate or suspend your account and access to our Services at our sole discretion, without notice, for any reason, including but not limited to your breach of these Terms.
              </p>
              <p>
                Upon termination, your right to use our Services will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive termination.
              </p>

              <h2>11. Amendments</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the amended Terms on our website or by sending you an email. Your continued use of our Services after such notification constitutes your acceptance of the amended Terms.
              </p>

              <h2>12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>

              <h2>13. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at support@amiquus.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
