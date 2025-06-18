import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/components/language-provider";

export default function Support() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t("support.metaTitle")}</title>
        <meta name="description" content={t("support.metaDescription")} />
      </Helmet>

      <div className="container mx-auto px-4 mt-16 py-16 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">{t("support.title")}</h1>
        <p className="text-lg text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl mx-auto">
          {t("support.subtitle")}
        </p>

        <div className="grid grid-cols-1 gap-8 mb-16">
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md dark:shadow-neutral-900 text-center">
            <div className="w-16 h-16 bg-primary/10 dark:bg-[#ff0]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-primary dark:text-[#ff0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">{t("support.emailSupport.title")}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">{t("support.emailSupport.description")}</p>
            <a href="mailto:support@amiquus.com" className="text-primary dark:text-[#ff0] font-medium hover:underline">
              {t("support.emailSupport.email")}
            </a>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">{t("support.faqHeading")}</h2>

        <Accordion type="single" collapsible className="mb-12">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">{t("support.faqs.telegram.question")}</AccordionTrigger>
            <AccordionContent className="text-neutral-600 dark:text-neutral-400">
              <p className="mb-2">{t("support.faqs.telegram.intro")}</p>
              <ol className="list-decimal list-inside ml-4 space-y-2">
                {t("support.faqs.telegram.steps", { returnObjects: true }).map((step: string, i: number) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
              <p className="mt-2">{t("support.faqs.telegram.outro")}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg">{t("support.faqs.updates.question")}</AccordionTrigger>
            <AccordionContent className="text-neutral-600 dark:text-neutral-400">
              {t("support.faqs.updates.answer")}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg">{t("support.faqs.facebook.question")}</AccordionTrigger>
            <AccordionContent className="text-neutral-600 dark:text-neutral-400">
              {t("support.faqs.facebook.answer")}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg">{t("support.faqs.cancel.question")}</AccordionTrigger>
            <AccordionContent className="text-neutral-600 dark:text-neutral-400">
              {t("support.faqs.cancel.answer")}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg">{t("support.faqs.full.question")}</AccordionTrigger>
            <AccordionContent className="text-neutral-600 dark:text-neutral-400">
              {t("support.faqs.full.answer")}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">{t("support.stillNeedHelp.heading")}</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
            {t("support.stillNeedHelp.description")}
          </p>
          <button className="px-6 py-3 bg-primary dark:bg-[#ff0] text-white dark:text-black rounded-md font-medium hover:opacity-90 transition-opacity">
            {t("support.stillNeedHelp.button")}
          </button>
        </div>
      </div>
    </>
  );
}
