import { Helmet } from "react-helmet";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Amiquus</title>
        <meta name="description" content="Find answers to the most common questions about Amiquus car listing monitoring service, subscriptions, notification setup, and more." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20 md:pt-24">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl mx-auto">
              Find quick answers to common questions about our car listing monitoring service
            </p>
            
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">General Questions</h2>
              <Accordion type="single" collapsible className="mb-8">
                <AccordionItem value="what-is-amiquus">
                  <AccordionTrigger className="text-lg">What is Amiquus?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                    Amiquus is a service that monitors multiple car listing websites for vehicles that match your specific criteria. When a matching listing appears, you receive an instant notification via Telegram, allowing you to be among the first to contact sellers and secure great deals.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="how-it-works">
                  <AccordionTrigger className="text-lg">How does it work?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                    <ol className="list-decimal list-inside space-y-2 ml-2">
                      <li>You set up your search criteria (make, model, price range, etc.)</li>
                      <li>You select which websites to monitor</li>
                      <li>You connect your Telegram account for notifications</li>
                      <li>Our system continuously monitors your selected websites for new listings</li>
                      <li>When a matching car appears, you receive an instant Telegram notification with all details and a direct link</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="which-websites">
                  <AccordionTrigger className="text-lg">Which car listing websites do you monitor?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                    We currently monitor the following major car listing platforms:
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>AutoTrader</li>
                      <li>Cars.com</li>
                      <li>CarGurus</li>
                      <li>TrueCar</li>
                      <li>Facebook Marketplace (via URL)</li>
                      <li>Craigslist</li>
                      <li>eBay Motors</li>
                    </ul>
                    We're continuously adding more platforms to provide the most comprehensive coverage possible.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <h2 className="text-2xl font-semibold mb-6">Subscription Questions</h2>
              <Accordion type="single" collapsible className="mb-8">
                <AccordionItem value="subscription-cost">
                  <AccordionTrigger className="text-lg">How much does a subscription cost?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                    <p className="mb-2">Our pricing starts at $9.99 per month for monitoring one website with updates every 6 hours. Additional websites cost $4.99 each per month. You can also upgrade your update frequency for faster notifications.</p>
                    <p className="mb-2">For specific pricing details, please view our <a href="/#pricing" onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/';
                      setTimeout(() => {
                        const section = document.getElementById('pricing');
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }, 100);
                    }} className="text-primary dark:text-[#ff0] hover:underline">pricing section</a> on the homepage.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="subscription-cancel">
                  <AccordionTrigger className="text-lg">How do I cancel my subscription?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                    <p className="mb-2">You can cancel your subscription at any time from your account profile page:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Log in to your account</li>
                      <li>Navigate to the "Profile" page</li>
                      <li>Select the "Subscriptions" tab</li>
                      <li>Click the "Cancel Subscription" button next to the subscription you wish to cancel</li>
                    </ol>
                    <p className="mt-2">Your subscription will remain active until the end of your current billing period.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="multiple-subscriptions">
                  <AccordionTrigger className="text-lg">Can I have multiple subscriptions for different car models?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                    Yes, you can create multiple subscriptions under a single account. Each subscription can track different car models, brands, or price ranges. This is particularly useful if you're searching for multiple vehicles or helping friends and family with their car search.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="limited-subscribers">
                  <AccordionTrigger className="text-lg">Why is there a limit on the number of subscribers?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                    <p className="mb-2">We limit our service to 30 active subscribers to ensure:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>The highest quality of service and data accuracy</li>
                      <li>Personalized support for each subscriber</li>
                      <li>Faster notification delivery during peak listing times</li>
                      <li>Ethical scraping that doesn't overload the target websites</li>
                    </ul>
                    <p className="mt-2">If we've reached capacity, you can join our waitlist to be notified when a spot becomes available.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <h2 className="text-2xl font-semibold mb-6">Technical Questions</h2>
              <Accordion type="single" collapsible className="mb-8">
                <AccordionItem value="telegram-setup">
                  <AccordionTrigger className="text-lg">How do I set up Telegram notifications?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                    <p className="mb-2">To set up Telegram notifications:</p>
                    <ol className="list-decimal list-inside space-y-2 ml-2">
                      <li>Create a Telegram bot using BotFather (instructions provided during setup)</li>
                      <li>Copy your bot token from BotFather</li>
                      <li>Start a conversation with your new bot</li>
                      <li>Get your chat ID (instructions provided during setup)</li>
                      <li>Enter your bot token and chat ID in your Amiquus subscription settings</li>
                      <li>Test your notification setup using the "Send Test Message" button</li>
                    </ol>
                    <p className="mt-2">Detailed step-by-step instructions with screenshots are provided during the subscription setup process.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="notifications-frequency">
                  <AccordionTrigger className="text-lg">How often will I receive notifications?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                    <p className="mb-2">The frequency of notifications depends on:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Your chosen update frequency package (from every 6 hours to every 30 minutes)</li>
                      <li>How many new listings match your criteria</li>
                      <li>How active the market is for your selected make/model</li>
                    </ol>
                    <p className="mt-2">You'll only receive notifications when new listings that match your criteria are found.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="data-privacy">
                  <AccordionTrigger className="text-lg">How is my personal data protected?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                    <p className="mb-2">We take data privacy very seriously and implement the following measures:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>All personal data is encrypted in transit and at rest</li>
                      <li>Payment information is handled securely by Stripe and not stored on our servers</li>
                      <li>We never sell or share your personal information with third parties</li>
                      <li>You can request a copy or deletion of your data at any time</li>
                    </ul>
                    <p className="mt-2">For full details, please review our <a href="/privacy" className="text-primary dark:text-[#ff0] hover:underline" onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/privacy';
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}>Privacy Policy</a>.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
                If you couldn't find the answer to your question, our support team is here to help!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/support" className="px-6 py-3 bg-primary dark:bg-[#ff0] text-white dark:text-black rounded-md font-medium hover:opacity-90 transition-opacity" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/support';
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}