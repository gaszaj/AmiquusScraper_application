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
import PaymentScreen from "@/components/subscription/PaymentScreen";

interface SignupProps {
  embedded?: boolean;
}

export default function Signup({ embedded = false }: SignupProps) {
  const [location, setLocation] = useLocation();
  const { user } = useAuth();
  const [jsonData, setJsonData] = useState<NewComerResponse | null>(null);
  const [loadingJson, setLoadingJson] = useState(false);

  const { toast } = useToast();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [showWaitList, setShowWaitList] = useState(false);

  // form fields
  const [carBrands, setCarBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [fuelTypes, setFuelTypes] = useState<string[]>([]);
  const [websites, setWebsites] = useState<string[]>([]);

  const [currentStep, setCurrentStep] = useState(1);

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
    notificationLanguage: "en",
  });

  const { createSubscription, calculatePrice } = useSubscription();

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

  const handleSubmit = async () => {
    if (user) {
      const subscriptionData = {
        userId: user.id,
        websitesSelected: formData.websitesSelected,
        facebookMarketplaceUrl: formData.facebookMarketplaceUrl || "",
        updateFrequency: formData.updateFrequency,
        brand: formData.carBrand,
        model: formData.carModel,
        fuelType: formData.fuelType,
        yearMin: parseNullableNumber(formData.yearMin),
        yearMax: parseNullableNumber(formData.yearMax),
        mileageMin: null,
        mileageMax: parseNullableNumber(formData.maxKilometers) ,
        priceMin: parseNullableNumber(formData.priceMin),
        priceMax: parseNullableNumber(formData.priceMax),
        telegramBotToken: formData.telegramToken,
        telegramChatId: formData.telegramChatId,
        notificationLanguage: formData.notificationLanguage,
        price: formData.price || 9.99,
      };

      try {
        if (user.stripeCustomerId) {
          const customerResponse = await fetch(
            `/api/customer/payment-methods?customerId=${user.stripeCustomerId}`,
          );

          if (!customerResponse.ok) {
            throw new Error("Failed to fetch payment methods");
          }

          const data = await customerResponse.json();

          if (!data.hasPaymentMethod) {
            // use "/api/set-alerts-intent"
            const response = await apiRequest(
              "POST",
              "/api/set-alerts-intent",
              subscriptionData,
            );

            if (response.ok) {
              const data = await response.json();
              setClientSecret(data.clientSecret);
            } else {
              const errorData = await response.json();
              throw new Error(
                errorData.message || "Failed to create subscription",
              );
            }
          } else {
            //subscribe direct
            const response = await apiRequest(
              "POST",
              "/api/subscriptions",
              subscriptionData,
            );

            if (response.ok) {
              const data = await response.json();
              toast({
                title: "Subscription created",
                description: "Your subscription has been created successfully",
                variant: "default",
              });
              // go to dashboard
              window.location.href = "/dashboard";
            }
          }
        } else {
          // post to "/api/set-alerts-intent"
          const response = await apiRequest(
            "POST",
            "/api/set-alerts-intent",
            subscriptionData,
          );

          if (response.ok) {
            const data = await response.json();
            setClientSecret(data.clientSecret);
          } else {
            const errorData = await response.json();
            throw new Error(
              errorData.message || "Failed to create subscription",
            );
          }
        }
      } catch (error) {
        console.error("Failed to create subscription:", error);
      }
    } else {
      // Save form data in session storage and redirect to login/register
      sessionStorage.setItem("pendingSubscription", JSON.stringify(formData));
      setLocation("/login");
    }
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
            Create Your Car Alert
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-4">
            Set up your personalized car listing notifications in just a few
            steps.
          </p>
          <Link
            href="/setup-alerts"
            className="inline-block px-6 py-3 bg-primary dark:bg-[#ff0] text-white dark:text-neutral-900 hover:bg-primary/90 dark:hover:bg-yellow-300 transition font-semibold rounded-xl shadow-md hover:shadow-lg"
          >
            Get Alerts Now
          </Link>
        </div>
        {showWaitList && (
          <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
            <div className="space-y-6 p-4 flex flex-col gap-4 justify-center items-center">
              <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-4">
                We are currently at full capacity. Please join our waitlist to
                be notified when a spot opens up.
              </p>
              <Link
                href="/waitlist"
                className="inline-block px-6 py-3 bg-primary dark:bg-[#ff0] text-white dark:text-neutral-900 hover:bg-primary/90 dark:hover:bg-yellow-300 transition font-semibold rounded-xl shadow-md hover:shadow-lg"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        )}
        {!showWaitList && (
          <>
            {user && (
              <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
                {clientSecret && <PaymentScreen clientSecret={clientSecret} />}
                {!clientSecret && (
                  <div className="p-8">
                    <FormProgress currentStep={currentStep} totalSteps={5} />
                    {renderStep()}
                  </div>
                )}
              </div>
            )}
            {!user && (
              <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
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
