
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/components/language-provider";
import { useEffect, useState } from "react";
import { NewComerResponse } from "@/components/forms/TelegramCarAlertForm";
import { newcomerDefault } from "@/data/newcomer-default";


export default function FAQ() {
  const { t } = useLanguage();

  const [data, setData] = useState<NewComerResponse | null>(null);
  const [loading, setLoading] = useState(true);
   const [carBrands, setCarBrands] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/newcommer")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading) {
      if (data) {
        setCarBrands(Object.keys(data.brands_and_models));
      } else {
    setCarBrands(Object.keys(newcomerDefault.brands_and_models));
      }
    }
  }, [data, loading]);

  const renderList = (items: string[]) =>
    items.map((item, idx) => <li key={idx}>{item}</li>);

  return (
    <>
      <Helmet>
        <title>{t("faqs.metaTitle")}</title>
        <meta name="description" content={t("faqs.metaDescription")} />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <main className="flex-grow pt-20 md:pt-24">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              {t("faqs.title")}
            </h1>
            <p className="text-lg text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl mx-auto">
              {t("faqs.subtitle")}
            </p>

            {/* GENERAL */}
            <h2 className="text-2xl font-semibold mb-6">
              {t("faqs.general.heading")}
            </h2>
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="what-is">
                 <AccordionTrigger className="text-lg">{t("faqs.general.whatIs.question")}</AccordionTrigger>
                 <AccordionContent className="text-neutral-600 dark:text-neutral-400">{t("faqs.general.whatIs.answer")}</AccordionContent>
              </AccordionItem>

              <AccordionItem value="how-it-works">
                 <AccordionTrigger className="text-lg">{t("faqs.general.howItWorks.question")}</AccordionTrigger>
                 <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    {renderList(t("faqs.general.howItWorks.answer", { returnObjects: true }))}
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="which-websites">
                 <AccordionTrigger className="text-lg">{t("faqs.general.whichWebsites.question")}</AccordionTrigger>
                 <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                  <p>{t("faqs.general.whichWebsites.answerIntro")}</p>
                  <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                    {carBrands.map((brand, idx) => (
                      <li key={idx}>{brand}</li>
                    ))}
                  </ul>
                  <p className="mt-2">{t("faqs.general.whichWebsites.outro")}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* SUBSCRIPTION */}
            <h2 className="text-2xl font-semibold mb-6">{t("faqs.subscription.heading")}</h2>
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="subscription-cost">
                 <AccordionTrigger className="text-lg">{t("faqs.subscription.cost.question")}</AccordionTrigger>
                 <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                  {t("faqs.subscription.cost.answer", { returnObjects: true }).map((p: string, idx: number) => (
                    <p className="mb-2" key={idx}>{p}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cancel-subscription">
                 <AccordionTrigger className="text-lg">{t("faqs.subscription.cancel.question")}</AccordionTrigger>
                 <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                  <p className="mb-2">{t("faqs.subscription.cancel.stepsIntro")}</p>
                  <ol className="list-decimal list-inside space-y-1 ml-2">
                    {renderList(t("faqs.subscription.cancel.steps", { returnObjects: true }))}
                  </ol>
                  <p className="mt-2">{t("faqs.subscription.cancel.note")}</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="multiple-subscriptions">
                 <AccordionTrigger className="text-lg">{t("faqs.subscription.multiple.question")}</AccordionTrigger>
                 <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                  {t("faqs.subscription.multiple.answer")}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="limit">
                 <AccordionTrigger className="text-lg">{t("faqs.subscription.limit.question")}</AccordionTrigger>
                 <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                  <p>{t("faqs.subscription.limit.intro")}</p>
                  <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                    {renderList(t("faqs.subscription.limit.list", { returnObjects: true }))}
                  </ul>
                  <p className="mt-2">{t("faqs.subscription.limit.outro")}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* TECHNICAL */}
            <h2 className="text-2xl font-semibold mb-6">{t("faqs.technical.heading")}</h2>
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="telegram-setup">
                 <AccordionTrigger className="text-lg">{t("faqs.technical.telegram.question")}</AccordionTrigger>
                 <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                  <p className="mb-2">{t("faqs.technical.telegram.stepsIntro")}</p>
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    {renderList(t("faqs.technical.telegram.steps", { returnObjects: true }))}
                  </ol>
                  <p className="mt-2">{t("faqs.technical.telegram.note")}</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="notifications-frequency">
                 <AccordionTrigger className="text-lg">{t("faqs.technical.frequency.question")}</AccordionTrigger>
                 <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                  <p className="mb-2">{t("faqs.technical.frequency.intro")}</p>
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    {renderList(t("faqs.technical.frequency.list", { returnObjects: true }))}
                  </ol>
                  <p className="mt-2">{t("faqs.technical.frequency.outro")}</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="data-privacy">
                 <AccordionTrigger className="text-lg">{t("faqs.technical.privacy.question")}</AccordionTrigger>
                 <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                  <p className="mb-2">{t("faqs.technical.privacy.intro")}</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    {renderList(t("faqs.technical.privacy.list", { returnObjects: true }))}
                  </ul>
                  <p className="mt-2">{t("faqs.technical.privacy.outro")}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* SUPPORT */}
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">{t("faqs.support.heading")}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
                {t("faqs.support.description")}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/support"
                  className="px-6 py-3 bg-primary dark:bg-[#ff0] text-white dark:text-black rounded-md font-medium hover:opacity-90 transition-opacity"
                >
                  {t("faqs.support.button")}
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}