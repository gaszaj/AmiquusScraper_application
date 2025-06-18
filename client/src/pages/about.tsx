import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { useLanguage } from "@/components/language-provider";

export default function About() {
   const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>{t("about.meta.title")}</title>
        <meta name="description" content={t("about.meta.description")} />
      </Helmet>
      
      <div className="container mx-auto px-4 mt-16 py-16 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">{t("about.title")}</h1>
        <p className="text-lg text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl mx-auto">
          {t("about.description")}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6"> {t("about.story.heading")}</h2>
            {t("about.story.paragraphs", { returnObjects: true }).map(
              (paragraph: string, idx: number) => (
                <p
                  key={idx}
                  className="text-neutral-600 dark:text-neutral-400 mb-4"
                >
                  {paragraph}
                </p>
              )
            )}
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg h-80 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary/10 dark:bg-[#ff0]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary dark:text-[#ff0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <p className="text-xl font-medium">Image Placeholder</p>
              <p className="text-neutral-600 dark:text-neutral-400 mt-2">Our company timeline illustration will appear here</p>
            </div>
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">{t("about.mission.heading")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t("about.mission.items", { returnObjects: true }).map(
              (item: { title: string; description: string }, index: number) => (
                <div
                  key={index}
                  className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md dark:shadow-neutral-900 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 dark:bg-[#ff0]/10 rounded-full flex items-center justify-center mb-4">
                    {/* Optional: Use a different icon per item based on index */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary dark:text-[#ff0]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          index === 0
                            ? "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            : index === 1
                            ? "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            : "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        }
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">
            {t("about.team.heading")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t("about.team.members", { returnObjects: true }).map(
              (
                member: {
                  name: string;
                  role: string;
                  bio: string;
                },
                index: number
              ) => (
                <div
                  key={index}
                  className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md dark:shadow-neutral-900 flex flex-col items-center text-center"
                >
                  <div className="w-32 h-32 bg-neutral-200 dark:bg-neutral-700 rounded-full mb-4 overflow-hidden flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-neutral-400 dark:text-neutral-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 mb-3">
                    {member.role}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    {member.bio}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-8 text-center mb-12">
          <h2 className="text-3xl font-semibold mb-6">{t("about.join.heading")}</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            {t("about.join.description")}
          </p>
          <Link href="/careers">
            <a className="px-6 py-3 bg-primary dark:bg-[#ff0] text-white dark:text-black rounded-md font-medium hover:opacity-90 transition-opacity inline-block">
              {t("about.join.cta")}
            </a>
          </Link>
        </div>

        
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">{t("about.questions.heading")}</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            {t("about.questions.description")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/faq">
              <a className="px-5 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
                {t("about.questions.links.faq")}
              </a>
            </Link>
            <Link href="/#pricing">
              <a className="px-5 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
                {t("about.questions.links.pricing")}
              </a>
            </Link>
            <Link href="/support">
              <a className="px-5 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
                {t("about.questions.links.support")}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}