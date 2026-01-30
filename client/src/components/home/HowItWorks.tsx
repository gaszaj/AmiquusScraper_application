import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Check, Sparkles, Settings, BellRing,
  MousePointer, Radio, CarFront, Mail,
  Search, ListFilter, Bell, MessageSquare
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import whyChooseUsImage from "@/images/why-choose-img.webp"
import { NewComerResponse } from "@/components/forms/TelegramCarAlertForm";


export default function HowItWorks() {
  const [data, setData] = useState<NewComerResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const websitesCount = data?.websites.website_names.length ?? 0;

  const { t } = useLanguage();
  const steps = [
    {
      icon: <Settings className="h-10 w-10" />,
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      title: t("howItWorks.steps.preferences.title"),
      description: t("howItWorks.steps.preferences.description")
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      title: t("howItWorks.steps.telegram.title"),
      description: t("howItWorks.steps.telegram.description")
    },
    {
      icon: <Bell className="h-10 w-10" />,
      color: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
      title: t("howItWorks.steps.notifications.title"),
      description: t("howItWorks.steps.notifications.description")
    },
    {
      icon: <CarFront className="h-10 w-10" />,
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      title: t("howItWorks.steps.findCar.title"),
      description: t("howItWorks.steps.findCar.description")
    },
  ];

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

  return (
    <section id="how-it-works" className="py-20 bg-neutral-100 dark:bg-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl text-black md:text-4xl font-bold mb-4 dark:text-white">{t("howItWorks.title")}</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        {/* Steps for all screen sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-neutral-900 shadow-md dark:shadow-none dark:border dark:border-neutral-800 transition-all duration-300 hover:shadow-xl dark:hover:border-neutral-700 p-6"
            >
              {/* Step number */}
              <div className="absolute top-4 right-4 bg-accent text-white dark:text-neutral-900 font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm">
                {index + 1}
              </div>

              <div className="flex flex-col items-start gap-4">
                <div className={`p-4 rounded-2xl ${step.color}`}>
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold dark:text-white mb-2">{step.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features highlight */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl text-black md:text-3xl font-bold dark:text-white mb-6">
                {t("howItWorks.whyTitle")}
              </h3>
              <ul className="space-y-4">
                {t("howItWorks.features", { returnObjects: true }).map(
                  (feature: string, index: number) => {
                    const text =
                      websitesCount && typeof feature === "string"
                        ? feature.replace(/\b15\b/g, websitesCount.toString())
                        : feature;

                    return (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 bg-accent/20 p-1 rounded-full">
                          <Check className="h-4 w-4 text-accent" />
                        </div>
                        <span className="text-primary-50">{text}</span>
                      </li>
                    );
                  }
                )}
              </ul>
              <div className="mt-8">
                <Link href="/setup-alerts">
                  <Button size="lg" variant="accent" className="shadow-lg shadow-accent/20 text-white dark:text-black">
                    {t("howItWorks.setAlerts")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Notification mockup */}
            <div className="relative">
              <div className="relative mx-auto max-w-sm">
                <div className="rounded-xl bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 p6 shadow-2xl">
                  {/* <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/20 text-accent p-3 rounded-full">
                        <Bell size={24} />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg text-white">   {t("howItWorks.notificationMockup1.title")}</h4>
                        <p className="text-neutral-300 mt-1">{t("howItWorks.notificationMockup1.description")}</p>
                      </div>
                    </div>
                    
                    <div className="border-t border-neutral-800 pt-5 mt-5">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent/20 text-accent p-3 rounded-full">
                          <MessageSquare size={24} />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg text-white">{t("howItWorks.notificationMockup2.title")}</h4>
                          <p className="text-neutral-300 mt-1">{t("howItWorks.notificationMockup2.description")}</p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <img src={whyChooseUsImage} alt="Why Choose Us" className="rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}