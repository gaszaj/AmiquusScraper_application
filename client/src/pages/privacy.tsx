import { Helmet } from "react-helmet";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Amiquus</title>
        <meta name="description" content="Learn about how Amiquus handles your personal data, privacy rights, and data collection practices." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Privacy Policy</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-center">
          Last updated: May 21, 2025
        </p>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2 id="introduction">Introduction</h2>
          <p>
            Welcome to Amiquus. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>
          
          <h2 id="data-we-collect">Information We Collect</h2>
          <p>
            We collect several different types of information for various purposes to provide and improve our service to you:
          </p>
          <ul>
            <li><strong>Personal Data</strong>: Email address, first name, last name, and profile picture (if provided through third-party authentication).</li>
            <li><strong>Account Data</strong>: Your login credentials and account preferences.</li>
            <li><strong>Usage Data</strong>: Information on how you use our website and services.</li>
            <li><strong>Car Search Preferences</strong>: The vehicle criteria you set for monitoring (brand, model, price range, etc.).</li>
            <li><strong>Telegram Information</strong>: If you choose to receive notifications via Telegram, we store your Telegram chat ID and bot token.</li>
            <li><strong>Payment Information</strong>: When you make a purchase, our payment processor collects payment details necessary to process your transaction. Amiquus does not store your full credit card information.</li>
          </ul>
          
          <h2 id="how-we-use-data">How We Use Your Data</h2>
          <p>
            We use your personal data for the following purposes:
          </p>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To allow you to participate in interactive features of our service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our service</li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent and address technical issues</li>
            <li>To process payments and prevent fraudulent transactions</li>
            <li>To send car listings that match your preferences via your chosen notification method</li>
          </ul>
          
          <h2 id="data-storage">Data Storage and Security</h2>
          <p>
            We implement appropriate security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All data is stored on secure servers with encryption in transit and at rest.
          </p>
          <p>
            We retain your personal data only for as long as necessary for the purposes set out in this privacy policy, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements.
          </p>
          
          <h2 id="gdpr">Your GDPR Rights</h2>
          <p>
            If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Amiquus aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal data.
          </p>
          <p>
            You have the following data protection rights:
          </p>
          <ul>
            <li>The right to access, update or delete the information we have on you</li>
            <li>The right of rectification</li>
            <li>The right to object</li>
            <li>The right of restriction</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          
          <h2 id="cookies">Cookies Policy</h2>
          <p>
            Cookies are small pieces of data stored on your device. We use cookies to:
          </p>
          <ul>
            <li>Keep you signed in</li>
            <li>Understand how you use our website</li>
            <li>Remember your preferences</li>
            <li>Customize your experience</li>
          </ul>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
          </p>
          <p>
            We use the following types of cookies:
          </p>
          <ul>
            <li><strong>Essential Cookies</strong>: Required for the basic functionality of the website.</li>
            <li><strong>Functionality Cookies</strong>: Allow us to remember choices you make and provide enhanced features.</li>
            <li><strong>Analytics Cookies</strong>: Help us understand how visitors interact with our website.</li>
            <li><strong>Advertising Cookies</strong>: Used to deliver advertisements relevant to you and your interests.</li>
          </ul>
          
          <h2 id="third-party">Third-Party Services</h2>
          <p>
            We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, perform service-related tasks, or assist us in analyzing how our service is used.
          </p>
          <p>
            These third parties include:
          </p>
          <ul>
            <li>Payment processors (Stripe)</li>
            <li>Analytics providers</li>
            <li>Customer support services</li>
            <li>Hosting and cloud infrastructure providers</li>
          </ul>
          <p>
            These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
          
          <h2 id="changes">Changes to This Privacy Policy</h2>
          <p>
            We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
          </p>
          <p>
            You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
          </p>
          
          <h2 id="contact">Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us:
          </p>
          <ul>
            <li>By email: privacy@amiquus.com</li>
            <li>By visiting the contact page on our website</li>
          </ul>
        </div>
      </div>
    </>
  );
}