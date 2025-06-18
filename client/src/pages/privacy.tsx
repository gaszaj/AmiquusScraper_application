import { Helmet } from "react-helmet";
import { useLanguage } from "@/components/language-provider";

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t("privacy.metaTitle")}</title>
        <meta name="description" content={t("privacy.metaDescription")} />
      </Helmet>

      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          {t("privacy.title")}
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-center">
          {t("privacy.lastUpdated")}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {Object.entries(t("privacy.sections", { returnObjects: true })).map(
            ([_, section]: any, idx: number) => (
              <section key={idx}>
                <h2 id={section.id}>{section.heading}</h2>
                {section.paragraphs?.map((para: string, i: number) => (
                  <p key={i}>{para}</p>
                ))}
                {section.list?.length > 0 && (
                  <ul>
                    {section.list.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            )
          )}
        </div>
      </div>
    </>
  );
}
