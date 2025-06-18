import { Search, Bell, Sliders, Clock, Globe, UserCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";


export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Search className="text-xl" />,
      title: t("features.multiSite.title"),
      description: t("features.multiSite.description")
    },
    {
      icon: <Bell className="text-xl" />,
      title: t("features.notifications.title"),
      description: t("features.notifications.description")
    },
    {
      icon: <Sliders className="text-xl" />,
      title: t("features.filters.title"),
      description: t("features.filters.description")
    },
    {
      icon: <Clock className="text-xl" />,
      title: t("features.frequency.title"),
      description: t("features.frequency.description")
    },
    {
      icon: <Globe className="text-xl" />,
      title: t("features.languages.title"),
      description: t("features.languages.description")
    },
    {
      icon: <UserCircle className="text-xl" />,
      title: t("features.account.title"),
      description: t("features.account.description")
    }
  ];


  return (
    <section id="features" className="py-16 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-title font-bold mb-4 text-neutral-900 dark:text-white">{t("features.heading")}</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            {t("features.subheading")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-neutral-200 dark:border-neutral-700"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary/20 text-primary dark:text-primary rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-title font-semibold mb-3 text-neutral-900 dark:text-white">{feature.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
