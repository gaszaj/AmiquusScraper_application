import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Amiquus</title>
        <meta name="description" content="Find answers to the most common questions about Amiquus car listing monitoring service, subscriptions, notification setup, and more." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
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
              <AccordionTrigger className="text-lg">How does Amiquus work?</AccordionTrigger>
              <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li>You create a subscription with your specific car search criteria (brand, model, price range, etc.)</li>
                  <li>You set up your Telegram notifications by connecting your Telegram bot</li>
                  <li>Our system continuously monitors multiple car listing websites according to your selected frequency</li>
                  <li>When a matching listing is found, you receive an instant Telegram notification with all the details</li>
                  <li>You can contact the seller directly through the listing link provided in the notification</li>
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
            
            <AccordionItem value="different-from-alerts">
              <AccordionTrigger className="text-lg">How is Amiquus different from built-in alerts on car websites?</AccordionTrigger>
              <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                <p className="mb-2">Amiquus offers several key advantages over built-in alerts:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Multi-platform monitoring in one place (rather than setting up alerts on each individual site)</li>
                  <li>Faster notifications (many built-in alerts only send daily or weekly updates)</li>
                  <li>More detailed search criteria</li>
                  <li>Consistent alert format across all platforms</li>
                  <li>Telegram integration for instant mobile notifications</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="mb-16">
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
            
            <AccordionItem value="subscription-capacity">
              <AccordionTrigger className="text-lg">Why is there a subscription capacity limit?</AccordionTrigger>
              <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                <p className="mb-2">We limit our active subscriptions to 30 in order to maintain:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>High-quality, reliable service for all users</li>
                  <li>Fast notification delivery</li>
                  <li>Responsible web scraping practices</li>
                  <li>Optimal server performance</li>
                </ul>
                <p className="mt-2">If all subscription slots are full, you can join our waitlist to be notified when space becomes available.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="mb-16">
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
                <p className="mb-2">You'll receive a notification whenever a new listing that matches your criteria appears. The frequency depends on:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Your selected update frequency (how often we check for new listings)</li>
                  <li>How frequently new listings matching your criteria are posted</li>
                  <li>How specific or broad your search criteria are</li>
                </ul>
                <p className="mt-2">You can adjust your update frequency in your subscription settings. Options range from every 6 hours to as frequent as every 30 minutes (premium plan).</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="facebook-marketplace">
              <AccordionTrigger className="text-lg">How do I monitor Facebook Marketplace?</AccordionTrigger>
              <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                <p className="mb-2">To monitor Facebook Marketplace:</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>Log into Facebook in your browser</li>
                  <li>Go to Marketplace and set up your search filters (location, price range, etc.)</li>
                  <li>Once you have your filtered search results, copy the URL from your browser</li>
                  <li>Paste this URL into the "Facebook Marketplace URL" field when creating your Amiquus subscription</li>
                </ol>
                <p className="mt-2">Our system will then monitor that specific search for new listings.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="missed-listings">
              <AccordionTrigger className="text-lg">Will I miss any listings?</AccordionTrigger>
              <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                <p className="mb-2">While we strive for complete coverage, there are a few scenarios where listings might be missed:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>If a listing appears and is sold between our scanning intervals</li>
                  <li>If a website changes its structure and our system needs to be updated</li>
                  <li>If a listing uses unusual terminology that doesn't match standard search patterns</li>
                </ul>
                <p className="mt-2">Choosing a more frequent update interval (available in higher-tier plans) minimizes the chance of missing fast-selling listings.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Account Questions</h2>
          <Accordion type="single" collapsible className="mb-8">
            <AccordionItem value="payment-methods">
              <AccordionTrigger className="text-lg">What payment methods do you accept?</AccordionTrigger>
              <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                We accept all major credit and debit cards, including Visa, Mastercard, American Express, and Discover. All payments are securely processed through Stripe, a leading payment processor.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="refund-policy">
              <AccordionTrigger className="text-lg">What is your refund policy?</AccordionTrigger>
              <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                <p className="mb-2">We handle refund requests on a case-by-case basis. If you're experiencing issues with our service, please contact our support team first so we can attempt to resolve the problem.</p>
                <p className="mb-2">If you've just subscribed and decide our service isn't the right fit for you, contact us within 7 days for a full refund.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="delete-account">
              <AccordionTrigger className="text-lg">How do I delete my account?</AccordionTrigger>
              <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                <p className="mb-2">To delete your account:</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>Log in to your account</li>
                  <li>Navigate to the "Profile" page</li>
                  <li>Select the "Settings" tab</li>
                  <li>Scroll to the bottom and click "Delete Account"</li>
                  <li>Confirm your decision</li>
                </ol>
                <p className="mt-2">Please note that account deletion is permanent and will cancel any active subscriptions.</p>
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
                <p className="mt-2">For full details, please review our <Link href="/privacy"><a className="text-primary dark:text-[#ff0] hover:underline">Privacy Policy</a></Link>.</p>
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
            <Link href="/support">
              <a className="px-6 py-3 bg-primary dark:bg-[#ff0] text-white dark:text-black rounded-md font-medium hover:opacity-90 transition-opacity">
                Contact Support
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}