import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import PageWrapper from "@/components/layout/PageWrapper";
import PersonalInfo from "@/components/multi-step-form/personal-info";
import WebsiteSelection from "@/components/multi-step-form/website-selection";
import CarDetails from "@/components/multi-step-form/car-details";
import TelegramSetup from "@/components/multi-step-form/telegram-setup";
import ReviewPayment from "@/components/multi-step-form/review-payment";
import FormProgress from "@/components/multi-step-form/form-progress";
import { useAuth } from "@/hooks/use-auth";
import { useSubscription } from "@/hooks/use-subscription";
import {
  SubscriptionFormData,
  alertSchema,
  AlertFormSchema,
} from "@shared/schema";
import { newcomerDefault } from "@/data/newcomer-default";
import type { NewComerResponse } from "@/components/forms/TelegramCarAlertForm";
import { useLanguage } from "@/components/language-provider";
import { globalBasePrice } from "@shared/pricing";
import { PaymentModalHome } from "@/components/subscription/PaymentModalHome";

interface StepsSetupAlertProps {
  embedded?: boolean;
}

export default function StepsSetupAlert({ embedded = false }: StepsSetupAlertProps) {
  const { t, language } = useLanguage();
  const [location, setLocation] = useLocation();
  const { user } = useAuth();
  const [jsonData, setJsonData] = useState<NewComerResponse | null>(null);
  const [loadingJson, setLoadingJson] = useState(false);

  const { toast } = useToast();
   const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showWaitList, setShowWaitList] = useState(false);

  // form fields
  const [carBrands, setCarBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [fuelTypes, setFuelTypes] = useState<string[]>([]);
  const [websites, setWebsites] = useState<string[]>([]);

  const [currentStep, setCurrentStep] = useState(1);

  const [referralId, setReferralId] = useState<string | undefined>(undefined);

  useEffect(() => {
    setReferralId(window.affonso_referral);
  }, []);

  useEffect(() => {
    async function checkStats() {
      try {
        const response = await apiRequest("GET", "/api/subscription-stats");
        const stats = await response.json();

        if (stats.active >= 30) {
          setShowWaitList(true);
        } else {
          setShowWaitList(false);
        }
      } catch (err) {
        console.error("Failed to fetch subscription stats:", err);
      }
    }

    checkStats();
  }, []);

  useEffect(() => {
    if (!loadingJson) {
      if (jsonData) {
        setCarBrands(Object.keys(jsonData.brands_and_models));
        setFuelTypes(jsonData.fuel_types);
        setWebsites(jsonData.websites.website_names);
      } else {
        setCarBrands(Object.keys(newcomerDefault.brands_and_models));
        setFuelTypes(newcomerDefault.fuel_types);
        setWebsites(newcomerDefault.websites.website_names);
      }
    }
  }, [jsonData, loadingJson]);

  // Function to load car models based on selected brand
  const loadModels = (brand: string) => {
    return (
      jsonData?.brands_and_models[brand] ||
      newcomerDefault.brands_and_models[
      brand as keyof typeof newcomerDefault.brands_and_models
      ] ||
      []
    );
  };

  const [formData, setFormData] = useState<Partial<AlertFormSchema>>({
    websitesSelected: [],
    updateFrequency: "hourly",
    notificationLanguage: language,
  });

  const { calculatePrice } = useSubscription();

  const updateFormData = (data: Partial<AlertFormSchema>) => {
    setFormData((prev) => {
      const updated = { ...prev, ...data };

      // Calculate price when relevant fields change
      if (
        data.websitesSelected !== undefined ||
        data.updateFrequency !== undefined
      ) {
        const price = calculatePrice(
          updated.websitesSelected?.length || 0,
          updated.updateFrequency || "hourly",
        );
        return { ...updated, price };
      }

      return updated;
    });
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const parseNullableNumber = (val: string | number | undefined) => {
    const num = Number(val);
    return !val || num === 0 ? null : num;
  };


  const form = {
    carBrand: formData.carBrand || "",
    carModel: formData.carModel || "",
    fuelType: formData.fuelType || "",
    priceMin: formData.priceMin || "",
    priceMax: formData.priceMax || "",
    yearMin: formData.yearMin || "",
    yearMax: formData.yearMax || "",
    maxKilometers: formData.maxKilometers || "",
    telegramUsername: formData.telegramUsername || "",
    websitesSelected: formData.websitesSelected || [],
    facebookMarketplaceUrl: formData.facebookMarketplaceUrl || "",
    updateFrequency: formData.updateFrequency || "hourly",
    notificationLanguage: formData.notificationLanguage || language,
  }

  const formPrice = formData.price || globalBasePrice;

  const rawTitle = t("setupAlerts.baseTitle");

  const fixedTitle = rawTitle.replace(/(\d+[.,]\d{2})/, globalBasePrice);

  const handleSubmit = async () => {
    setShowPaymentModal(true);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfo
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <WebsiteSelection
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            setJsonData={setJsonData}
            setLoadingJson={setLoadingJson}
            websites={websites}
          />
        );
      case 3:
        return (
          <CarDetails
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            carBrands={carBrands}
            models={models}
            fuelTypes={fuelTypes}
            loadModels={loadModels}
            setModels={setModels}
          />
        );
      case 4:
        return (
          <TelegramSetup
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 5:
        return (
          <ReviewPayment
            formData={formData}
            updateFormData={updateFormData}
            prevStep={prevStep}
            onSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  const content = (
    <section className="py-8 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-title font-bold mb-4">
            {t("signup.heading")}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-4">
            {t("signup.subheading")}
          </p>
          <Link
            href="/setup-alerts"
            className="inline-block px-6 py-3 bg-primary dark:bg-[#ff0] text-white dark:text-neutral-900 hover:bg-primary/90 dark:hover:bg-yellow-300 transition font-semibold rounded-xl shadow-md hover:shadow-lg"
          >
            {t("signup.cta")}
          </Link>
        </div>
        {showWaitList && (
          <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
            <div className="space-y-6 p-4 flex flex-col gap-4 justify-center items-center">
              <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-4">
                {t("signup.waitlist.message")}
              </p>
              <Link
                href="/waitlist"
                className="inline-block px-6 py-3 bg-primary dark:bg-[#ff0] text-white dark:text-neutral-900 hover:bg-primary/90 dark:hover:bg-yellow-300 transition font-semibold rounded-xl shadow-md hover:shadow-lg"
              >
                {t("signup.waitlist.cta")}
              </Link>
            </div>
          </div>
        )}
        {!showWaitList && (
          <>
            {user && (
              <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
                <div className="sm:p-8 p-4">
                  <FormProgress currentStep={currentStep} totalSteps={5} />
                  {renderStep()}
                </div>
                <PaymentModalHome
                  paymentForm={form}
                  showModal={showPaymentModal}
                  setShowModal={setShowPaymentModal}
                  totalPrice={formPrice}
                  userId={user.id}
                  fixedTitle={fixedTitle}
                  referralId={referralId}
                />
              </div>
            )}
            {!user && (
              <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
                <div className="sm:p-8 p-4">
                  <FormProgress currentStep={currentStep} totalSteps={5} />
                  {renderStep()}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );

  if (embedded) {
    return content;
  }

  return <PageWrapper>{content}</PageWrapper>;
}
