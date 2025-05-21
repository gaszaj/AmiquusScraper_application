import { Helmet } from "react-helmet";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Amiquus</title>
        <meta name="description" content="Read the Amiquus Terms of Service that govern your use of our car listing monitoring and notification service." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Terms of Service</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-center">
          Last updated: May 21, 2025
        </p>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2 id="agreement">1. Agreement to Terms</h2>
          <p>
            These Terms of Service constitute a legally binding agreement made between you and Amiquus, concerning your access to and use of our website and services.
          </p>
          <p>
            By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
          </p>
          
          <h2 id="changes">2. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect.
          </p>
          <p>
            By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the service.
          </p>
          
          <h2 id="account">3. Account Terms</h2>
          <p>
            To use our services, you must:
          </p>
          <ul>
            <li>Be at least 18 years of age</li>
            <li>Complete the registration process</li>
            <li>Provide accurate, complete, and up-to-date information</li>
            <li>Be responsible for maintaining the security of your account and password</li>
            <li>Be responsible for all activities that occur under your account</li>
            <li>Notify us immediately upon becoming aware of any breach of security or unauthorized use of your account</li>
          </ul>
          
          <h2 id="payment">4. Payment Terms</h2>
          <p>
            Amiquus offers subscription-based services with the following terms:
          </p>
          <ul>
            <li>All fees are exclusive of taxes, which will be added when applicable</li>
            <li>Subscription prices are subject to change with 30 days' notice</li>
            <li>Subscriptions automatically renew unless canceled before the next billing cycle</li>
            <li>Refunds are handled on a case-by-case basis according to our refund policy</li>
            <li>We use Stripe for secure payment processing, and all payment information is stored by Stripe</li>
          </ul>
          
          <h2 id="capacity">5. Capacity Limits</h2>
          <p>
            In order to maintain service quality and reliability, Amiquus limits the number of active subscriptions to 30. When this limit is reached:
          </p>
          <ul>
            <li>New users may join our waitlist</li>
            <li>Waitlist position is determined on a first-come, first-served basis</li>
            <li>When capacity becomes available, waitlisted users will be notified in order</li>
            <li>We reserve the right to modify capacity limits at any time</li>
          </ul>
          
          <h2 id="scraping">6. Web Scraping Limitations</h2>
          <p>
            Our service accesses and processes data from multiple car listing websites. By using our service, you acknowledge that:
          </p>
          <ul>
            <li>Amiquus respects the terms of service of the websites we monitor</li>
            <li>We implement rate limiting and respectful crawling practices</li>
            <li>The availability of certain websites may change based on their terms and technical measures</li>
            <li>We make no guarantees regarding the completeness or timeliness of scraped data</li>
          </ul>
          
          <h2 id="intellectual">7. Intellectual Property</h2>
          <p>
            The Amiquus service, including its original content, features, and functionality, are and will remain the exclusive property of Amiquus. Our service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
          </p>
          <p>
            Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Amiquus.
          </p>
          
          <h2 id="termination">8. Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including, without limitation, if you breach the Terms.
          </p>
          <p>
            Upon termination, your right to use the service will immediately cease. If you wish to terminate your account, you may simply discontinue using the service or contact us to request account deletion.
          </p>
          
          <h2 id="limitations">9. Limitation of Liability</h2>
          <p>
            In no event shall Amiquus, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul>
            <li>Your access to or use of or inability to access or use the service</li>
            <li>Any conduct or content of any third party on the service</li>
            <li>Any content obtained from the service</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>
          
          <h2 id="disclaimer">10. Disclaimer</h2>
          <p>
            Your use of the service is at your sole risk. The service is provided on an "AS IS" and "AS AVAILABLE" basis. The service is provided without warranties of any kind, whether express or implied.
          </p>
          <p>
            Amiquus does not warrant that the service will be uninterrupted, timely, secure, or error-free, or that the results that may be obtained from the use of the service will be accurate or reliable.
          </p>
          
          <h2 id="cookies">11. Cookies Policy</h2>
          <p>
            Our Cookies Policy explains what cookies are, how we use cookies, how third parties we may partner with may use cookies on our service, your choices regarding cookies, and further information about cookies. Please refer to the Cookies section in our Privacy Policy.
          </p>
          
          <h2 id="governing-law">12. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>
          <p>
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
          </p>
          
          <h2 id="contact">13. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <ul>
            <li>By email: legal@amiquus.com</li>
            <li>By visiting the contact page on our website</li>
          </ul>
        </div>
      </div>
    </>
  );
}