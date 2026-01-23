import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
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
    answer: "We currently support major car listing platforms including Avto.net, and Facebook Marketplace. We're constantly expanding our coverage to include more websites based on user demand and regional popularity."
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
    answer: "You can cancel your subscription at any time from your account dashboard. Go to the 'Subscriptions' section, select the subscription you wish to cancel, and click the 'Cancel Subscription' button. Your service will continue until the end of your current billing period."
  }
];

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-title font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">Find answers to the most common questions about our service.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-neutral-50 rounded-xl overflow-hidden shadow-sm">
              <button
                className="w-full px-6 py-4 text-left font-medium flex justify-between items-center focus:outline-none"
                onClick={() => toggleItem(index)}
                aria-expanded={openItem === index}
              >
                <span>{faq.question}</span>
                <ChevronDownIcon
                  className={cn(
                    "h-5 w-5 text-neutral-400 transition-transform duration-200",
                    openItem === index ? "transform rotate-180" : ""
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openItem === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-6 pb-4">
                  <p className="text-neutral-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-4">Still have questions?</p>
          <a href="mailto:support@amiquus.com" className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center">
            Contact our support team
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
