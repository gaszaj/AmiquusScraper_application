import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function FAQ() {
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
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover) for subscription payments. All payments are processed securely through Stripe, a leading payment processor."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we take data security very seriously. All personal information is encrypted and stored securely. We never share your data with third parties except as outlined in our Privacy Policy. For more details on how we protect your information, please review our Privacy Policy."
    },
    {
      question: "What happens if I don't receive any notifications?",
      answer: "If you haven't received any notifications, it could be because there haven't been any new listings matching your criteria. You might want to consider broadening your search criteria or checking your Telegram settings to ensure notifications are enabled. If you believe there's a technical issue, please contact our support team."
    },
    {
      question: "Can I use Amiquus in my country?",
      answer: "Amiquus currently supports car listings primarily in the United States, Canada, the United Kingdom, and the European Union. However, our notification system works worldwide, so you can receive alerts regardless of your location. We're constantly expanding our coverage to include more regions."
    },
    {
      question: "How accurate are the notifications?",
      answer: "Our system is designed to be highly accurate, only sending notifications for listings that match your specified criteria. However, since we rely on data from third-party websites, there might occasionally be discrepancies. We continuously improve our algorithms to ensure maximum accuracy."
    },
    {
      question: "Do you offer a free trial?",
      answer: "We currently don't offer a free trial, but we do have a satisfaction guarantee. If you're not satisfied with our service within the first 7 days, contact our support team for a full refund."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-title font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Find answers to the most common questions about our service.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-neutral-200 last:border-0">
                    <AccordionTrigger className="px-6 py-4 text-left font-medium hover:bg-neutral-50">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-neutral-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="mt-12 text-center bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-title font-semibold mb-4">Still have questions?</h2>
              <p className="text-neutral-600 mb-6">
                Our support team is always ready to help with any other questions you might have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-primary-600 hover:bg-primary-700">
                  <a href="mailto:support@amiquus.com">
                    Contact Support
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/signup">
                    Try Amiquus <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
