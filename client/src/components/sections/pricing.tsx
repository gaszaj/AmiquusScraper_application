import { Check, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { currencySymbol, globalAddons } from "@shared/pricing";

interface PricingProps {
  onGetStarted: () => void;
}

type TranslatedAddon = { name: string; price?: number }; // price is ignored if present

export default function Pricing({ onGetStarted }: PricingProps) {
  const { t } = useLanguage();
  
  const includedFeatures = [
    "One website monitoring",
    "Hourly updates",
    "Unlimited filters",
    "Telegram notifications",
  ];

  const translatedAddons = t("pricing.addons", { returnObjects: true }) as TranslatedAddon[];

  // Merge addon names from translations with prices from globalAddons (by index/order)
  const addons = translatedAddons.map((addon, index) => {
    const price = globalAddons[index]?.price;

    return {
      name: addon.name,
      price: typeof price === "number" ? price : 0, // safe fallback
    };
  });

  return (
    <section id="pricing" className="py-16 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-title font-bold mb-4 text-neutral-900 dark:text-white">
            {t("pricing.title")}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-neutral-50 dark:bg-neutral-800 rounded-xl shadow-md dark:shadow-xl dark:shadow-black/10 overflow-hidden border border-neutral-200 dark:border-neutral-700">
          <div className="p-8">
            <h3 className="text-2xl font-title font-bold mb-6 text-neutral-900 dark:text-white">
              {t("pricing.baseTitle")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-neutral-900 dark:text-white">
                  {t("pricing.includedTitle")}
                </h4>
                <ul className="space-y-2">
                  {(
                    t("pricing.includedFeatures", {
                      returnObjects: true,
                    }) as string[]
                  ).map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start text-neutral-700 dark:text-neutral-300"
                    >
                      <Check className="text-primary dark:text-primary mt-1 mr-2 h-5 w-5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-neutral-900 dark:text-white">
                  {t("pricing.addonsTitle")}
                </h4>
                <ul className="space-y-3">
                  {addons.map((addon, index) => (
                    <li
                      key={index}
                      className="flex items-start justify-between text-neutral-700 dark:text-neutral-300"
                    >
                      <div className="flex items-start">
                        <Plus className="text-primary dark:text-primary mt-1 mr-2 h-5 w-5" />
                        <span>{addon.name}</span>
                      </div>
                      <span className="font-medium">
                      {currencySymbol}{addon.price.toFixed(2)}/mo
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-700/50 p-4 rounded-lg">
              <p className="text-center text-neutral-600 dark:text-neutral-400 text-sm">
                {t("pricing.footerNote")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button
            onClick={onGetStarted}
            className="bg-primary hover:bg-primary-600 text-white dark:bg-primary dark:hover:bg-primary-600 dark:text-neutral-900 px-8 py-3"
            size="lg"
          >
            {t("pricing.button")}
          </Button>
        </div>
      </div>
    </section>
  );
}
