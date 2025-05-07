import { useState } from "react";
import { useLocation } from "wouter";
import { z } from "zod";
import { SubscriptionFormData } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/hooks/use-subscription";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

// Import the multi-step form components
import FormProgress from "./form-progress";
import PersonalInfo from "./personal-info";
import WebsiteSelection from "./website-selection";
import CarDetails from "./car-details";
import TelegramSetup from "./telegram-setup";
import ReviewPayment from "./review-payment";

const steps = [
  "Personal Information",
  "Website Selection",
  "Car Details",
  "Telegram Setup",
  "Review & Payment"
];

export default function SubscriptionForm() {
  const [location, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<SubscriptionFormData>>({
    notificationLanguage: 'en',
    updateFrequency: 'hourly',
    websitesSelected: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { createSubscription, calculatePrice } = useSubscription();
  const { toast } = useToast();

  const updateFormData = (data: Partial<SubscriptionFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      // Calculate price based on selections
      const websitesCount = formData.websitesSelected?.length || 0;
      const frequency = formData.updateFrequency || 'hourly';
      const price = calculatePrice(websitesCount, frequency);

      // Add the price to the form data
      const completeFormData: SubscriptionFormData = {
        ...formData as SubscriptionFormData,
        price
      };

      // Create the subscription
      const subscription = await createSubscription(completeFormData);

      // Redirect to checkout with the subscription ID and amount
      setLocation(`/checkout?subscription=${subscription.id}&amount=${price}`);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create subscription",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-neutral-200 shadow-sm">
        <CardContent className="pt-6">
          <FormProgress currentStep={currentStep} totalSteps={steps.length} />
          <div className="mt-8">
            {renderStep()}
          </div>
        </CardContent>
      </Card>

      {isSubmitting && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <Loader2 className="h-12 w-12 animate-spin text-primary-600 mb-4" />
            <p className="text-lg font-medium">Creating your subscription...</p>
          </div>
        </div>
      )}
    </div>
  );
}