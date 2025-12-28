import { Helmet } from "react-helmet";
import { useLanguage } from "@/components/language-provider";

export default function Refund() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t("refunds.metaTitle")}</title>
        <meta name="description" content={t("refunds.metaDescription")} />
      </Helmet>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          {t("refunds.title")}
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-center">
          {t("refunds.lastUpdated")}
        </p>

         <div className="callout">
            <p>
              <strong>{t("refunds.callout.title")}</strong> {t("refunds.callout.description")}
            </p>
         </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {Array.from({ length: 6 }).map((_, i) => {
            const sectionKey = `refunds.sections.${i + 1}`;
            return (
              <section key={i}>
                <h2 id={t(`${sectionKey}.id`)}>
                  {i + 1}. {t(`${sectionKey}.heading`)}
                </h2>
                {t(`${sectionKey}.paragraphs`, { returnObjects: true })?.map(
                  (para: string, idx: number) => (
                    <p
                      key={idx}
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  )
                )}
                {t(`${sectionKey}.list`, { returnObjects: true })?.length > 0 && (
                  <ul>
                    {t(`${sectionKey}.list`, { returnObjects: true })?.map(
                      (item: string, idx: number) => <li key={idx}>{item}</li>
                    )}
                  </ul>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
