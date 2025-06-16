import { Helmet } from "react-helmet";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export default function Support() {
  
  return (
    <>
      <Helmet>
        <title>Support | Amiquus - Help Center</title>
        <meta name="description" content="Get help with your Amiquus account, subscription, or car alerts. Browse our help center or contact our support team for assistance." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Support Center</h1>
        <p className="text-lg text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl mx-auto">
          Find answers to common questions or get in touch with our support team
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-16">
          {/* <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md dark:shadow-neutral-900 text-center">
            <div className="w-16 h-16 bg-primary/10 dark:bg-[#ff0]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary dark:text-[#ff0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Chat Support</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Get real-time assistance through our chat system during business hours
            </p>
            <button className="text-primary dark:text-[#ff0] font-medium hover:underline">Start Chat</button>
          </div> */}
          
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md dark:shadow-neutral-900 text-center">
            <div className="w-16 h-16 bg-primary/10 dark:bg-[#ff0]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary dark:text-[#ff0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Email Support</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Send us an email and we'll get back to you within 24 hours
            </p>
            <a href="mailto:support@amiquus.com" className="text-primary dark:text-[#ff0] font-medium hover:underline">support@amiquus.com</a>
          </div>
          
          {/* <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md dark:shadow-neutral-900 text-center">
            <div className="w-16 h-16 bg-primary/10 dark:bg-[#ff0]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary dark:text-[#ff0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Telegram Support</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Contact us directly through our Telegram support channel
            </p>
            <a href="https://t.me/AmiquusSupport" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-[#ff0] font-medium hover:underline">@AmiquusSupport</a>
          </div> */}
        </div>
        
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="mb-12">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">How do I set up Telegram notifications?</AccordionTrigger>
            <AccordionContent className="text-neutral-600 dark:text-neutral-400">
              <p className="mb-2">To set up Telegram notifications, follow these steps:</p>
              <ol className="list-decimal list-inside ml-4 space-y-2">
                <li>Create a Telegram bot using BotFather (instructions in our dashboard)</li>
                <li>Copy your API token and chat ID</li>
                <li>Enter these details in your account settings under "Notification Preferences"</li>
                <li>Test your connection using the "Send Test Message" button</li>
              </ol>
              <p className="mt-2">If you need more help, our detailed guide is available in your dashboard.</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg">How often are car listings updated?</AccordionTrigger>
            <AccordionContent className="text-neutral-600 dark:text-neutral-400">
              The update frequency depends on your subscription plan. Basic plans receive updates every 6 hours, while Premium plans can get updates as frequently as every 30 minutes. You can view and modify your current update frequency in your subscription settings.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg">Can I monitor Facebook Marketplace?</AccordionTrigger>
            <AccordionContent className="text-neutral-600 dark:text-neutral-400">
              Yes, we support Facebook Marketplace monitoring. To set this up, you'll need to provide the URL to the Facebook Marketplace search results page with your desired filters applied. Our system will then monitor that specific search for new listings that match your criteria.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg">How do I cancel my subscription?</AccordionTrigger>
            <AccordionContent className="text-neutral-600 dark:text-neutral-400">
              You can cancel your subscription at any time from your account profile page. Click on the "Subscriptions" tab, locate the subscription you wish to cancel, and click the "Cancel Subscription" button. Your service will continue until the end of your current billing period.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg">What happens if all subscription slots are full?</AccordionTrigger>
            <AccordionContent className="text-neutral-600 dark:text-neutral-400">
              To maintain our high quality of service, we limit the number of active subscriptions. If all slots are full, you can join our waitlist. We'll notify you as soon as a slot becomes available, and you'll have priority to claim it before we open it to the general public.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Still need help?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
            If you couldn't find the answer to your question, feel free to reach out to our support team. We're here to help!
          </p>
          <button className="px-6 py-3 bg-primary dark:bg-[#ff0] text-white dark:text-black rounded-md font-medium hover:opacity-90 transition-opacity">
            Contact Support
          </button>
        </div>
      </div>
    </>
  );
}