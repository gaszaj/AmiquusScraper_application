import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function FaqSection() {
  const { t } = useLanguage();

  const faqs = Array.from({ length: 6 }, (_, i) => ({
    question: t(`faq.questions.${i}.question`),
    answer: t(`faq.questions.${i}.answer`),
  }));

  return (
    <section id="faq" className="py-16 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-title font-bold mb-4 text-neutral-900 dark:text-white">
            {t("faq.title")}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            {t("faq.subtitle")}
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
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            {t("faq.contactPrompt")}
          </p>
          <a
            href="mailto:support@amiquus.com"
            className="text-primary dark:text-primary font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center justify-center"
          >
            {t("faq.contactLink")} <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
