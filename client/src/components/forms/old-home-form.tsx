import { useState } from "react";
import { Link, useLocation } from "wouter";
import PageWrapper from "@/components/layout/PageWrapper";
import PersonalInfo from "@/components/multi-step-form/personal-info";
import WebsiteSelection from "@/components/multi-step-form/website-selection";
import CarDetails from "@/components/multi-step-form/car-details";
import TelegramSetup from "@/components/multi-step-form/telegram-setup";
import ReviewPayment from "@/components/multi-step-form/review-payment";
import FormProgress from "@/components/multi-step-form/form-progress";
import { useAuth } from "@/hooks/use-auth";
import { useSubscription } from "@/hooks/use-subscription";
import { SubscriptionFormData } from "@shared/schema";

interface SignupProps {
  embedded?: boolean;
}

export default function Signup({ embedded = false }: SignupProps) {
  const [location, setLocation] = useLocation();
  const { user } = useAuth();

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<SubscriptionFormData>>({
    websitesSelected: [],
    updateFrequency: 'hourly',
    notificationLanguage: 'en',
  });

  // console.log('formData', formData)

  const { createSubscription, calculatePrice } = useSubscription();

  const updateFormData = (data: Partial<SubscriptionFormData>) => {
    setFormData(prev => {
      const updated = { ...prev, ...data };

      // Calculate price when relevant fields change
      if (
        data.websitesSelected !== undefined || 
        data.updateFrequency !== undefined
      ) {
        const price = calculatePrice(
          updated.websitesSelected?.length || 0,
          updated.updateFrequency || 'hourly'
        );
        return { ...updated, price };
      }

      return updated;
    });
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (user) {
      try {
        await createSubscription(formData as SubscriptionFormData);
        setLocation('/dashboard');
      } catch (error) {
        console.error('Failed to create subscription:', error);
      }
    } else {
      // Save form data in session storage and redirect to login/register
      sessionStorage.setItem('pendingSubscription', JSON.stringify(formData));
      setLocation('/login');
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
          />
        );
      case 3:
        return (
          <CarDetails 
            formData={formData} 
            updateFormData={updateFormData} 
            nextStep={nextStep} 
            prevStep={prevStep} 
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
          <h2 className="text-3xl md:text-4xl font-title font-bold mb-4">Create Your Car Alert</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-4">
            Set up your personalized car listing notifications in just a few steps.
          </p>
          <Link href="/setup-alerts" className="inline-block px-6 py-3 bg-primary dark:bg-[#ff0] text-white dark:text-neutral-900 hover:bg-primary/90 dark:hover:bg-yellow-300 transition font-semibold rounded-xl shadow-md hover:shadow-lg">
            Get Alerts Now
          </Link>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <FormProgress currentStep={currentStep} totalSteps={5} />
            {renderStep()}
          </div>
        </div>
      </div>
    </section>
  );

  if (embedded) {
    return content;
  }

  return (
    <PageWrapper>
      {content}
    </PageWrapper>
  );
}
