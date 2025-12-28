import { Helmet } from "react-helmet";
import { useLanguage } from "@/components/language-provider";

export default function Terms() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t("terms.metaTitle")}</title>
        <meta name="description" content={t("terms.metaDescription")} />
      </Helmet>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          {t("terms.title")}
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-center">
          {t("terms.lastUpdated")}
        </p>

         <div className="callout">
            <p>
              <strong>{t("terms.callout.title")}</strong> {t("terms.callout.description")}
            </p>
         </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {Array.from({ length: 19 }).map((_, i) => {
            const sectionKey = `terms.sections.${i + 1}`;
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
