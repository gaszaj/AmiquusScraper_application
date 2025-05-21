import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";

export default function FaqSection() {
  const faqs = [
    {
      question: "How quickly will I receive notifications after a new listing is posted?",
      answer: "The notification speed depends on your chosen update frequency. With the default hourly plan, you'll receive notifications within an hour of a new listing being posted. For near real-time notifications (within minutes of posting), you can upgrade to our more frequent update plans."
    },
    {
      question: "Can I track multiple different types of cars at once?",
      answer: "Yes! You can create multiple search profiles with different criteria. Each profile counts as a separate subscription, but you can manage them all from a single account. This is perfect if you're looking for different types of vehicles simultaneously."
    },
    {
      question: "What websites do you currently support?",
      answer: "We currently support major car listing platforms including AutoTrader, CarGurus, Cars.com, and Facebook Marketplace. We're constantly expanding our coverage to include more websites based on user demand and regional popularity."
    },
    {
      question: "Do I need technical knowledge to use the Telegram bot?",
      answer: "Not at all! We provide step-by-step instructions with both text and video guides to help you set up the Telegram bot. Most users complete the setup in less than 5 minutes, even without any technical background."
    },
    {
      question: "Can I change my search criteria after setting up my subscription?",
      answer: "Yes, you can modify your search criteria at any time from your account dashboard. Changes take effect immediately, and your notifications will update accordingly without any interruption to your service."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time from your account dashboard. Go to the \"Subscriptions\" section, select the subscription you wish to cancel, and click the \"Cancel Subscription\" button. Your service will continue until the end of your current billing period."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-title font-bold mb-4 text-neutral-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Find answers to the most common questions about our service.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-neutral-50 dark:bg-neutral-800 rounded-xl overflow-hidden shadow-sm dark:shadow-md mb-4 border border-neutral-200 dark:border-neutral-700"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-neutral-900 dark:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-neutral-600 dark:text-neutral-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">Still have questions?</p>
          <a 
            href="mailto:support@amiquus.com" 
            className="text-primary dark:text-primary font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center justify-center"
          >
            Contact our support team <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
