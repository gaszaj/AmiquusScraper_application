import { useState } from "react";
import { useNavigate } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { MultiStepForm, FormStep } from "@/components/ui/multi-step-form";
import { PriceCalculator } from "@/components/ui/price-calculator";
import WebsiteSelectionForm, { WebsiteSelectionFormData } from "@/components/forms/WebsiteSelectionForm";
import CarDetailsForm, { CarDetailsFormData } from "@/components/forms/CarDetailsForm";
import TelegramSetupForm, { TelegramSetupFormData } from "@/components/forms/TelegramSetupForm";
import CheckoutForm, { CheckoutFormData } from "@/components/forms/CheckoutForm";
import UserInfoForm, { UserInfoFormData } from "@/components/forms/UserInfoForm";
import { useSubscription } from "@/hooks/useSubscription";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Helmet } from "react-helmet";

export default function Service() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user: {} as UserInfoFormData,
    websites: {} as WebsiteSelectionFormData,
    carDetails: {} as CarDetailsFormData,
    telegramSetup: {} as TelegramSetupFormData,
    checkout: {} as CheckoutFormData,
  });
  
  const { calculatedPrice, items } = useSubscription();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };
  
  const handleUserInfoChange = (data: UserInfoFormData) => {
    setFormData(prev => ({ ...prev, user: data }));
  };
  
  const handleWebsiteSelectionChange = (data: WebsiteSelectionFormData) => {
    setFormData(prev => ({ ...prev, websites: data }));
  };
  
  const handleCarDetailsChange = (data: CarDetailsFormData) => {
    setFormData(prev => ({ ...prev, carDetails: data }));
  };
  
  const handleTelegramSetupChange = (data: TelegramSetupFormData) => {
    setFormData(prev => ({ ...prev, telegramSetup: data }));
  };
  
  const handleCheckoutChange = (data: CheckoutFormData) => {
    setFormData(prev => ({ ...prev, checkout: data }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate checkout data
    if (!formData.checkout.cardName || 
        !formData.checkout.cardNumber || 
        !formData.checkout.cardExpiry || 
        !formData.checkout.cardCvc) {
      toast({
        title: "Missing information",
        description: "Please fill in all payment details",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.checkout.termsAgreed) {
      toast({
        title: "Terms not accepted",
        description: "You must agree to the terms of service to continue",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create subscription through API
      const response = await apiRequest("POST", "/api/subscriptions", {
        user: formData.user,
        websites: formData.websites,
        carDetails: formData.carDetails,
        telegramSetup: formData.telegramSetup,
        totalPrice: calculatedPrice,
      });
      
      if (response.ok) {
        toast({
          title: "Subscription created!",
          description: "Your car tracking subscription has been set up successfully",
        });
        navigate("/dashboard");
      }
    } catch (error) {
      toast({
        title: "Error creating subscription",
        description: error instanceof Error ? error.message : "Please try again",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const steps: FormStep[] = [
    {
      id: "user-info",
      title: "Your Information",
      description: "Tell us about yourself so we can set up your account",
      component: <UserInfoForm onDataChange={handleUserInfoChange} initialData={formData.user} />,
    },
    {
      id: "website-selection",
      title: "Website Selection",
      description: "Choose which websites you want us to monitor",
      component: <WebsiteSelectionForm onDataChange={handleWebsiteSelectionChange} initialData={formData.websites} />,
    },
    {
      id: "car-details",
      title: "Car Details",
      description: "Tell us what type of car you're looking for",
      component: <CarDetailsForm onDataChange={handleCarDetailsChange} initialData={formData.carDetails} />,
    },
    {
      id: "telegram-setup",
      title: "Telegram Setup",
      description: "Connect Telegram to receive instant notifications",
      component: <TelegramSetupForm onDataChange={handleTelegramSetupChange} initialData={formData.telegramSetup} />,
    },
    {
      id: "review-checkout",
      title: "Review & Checkout",
      description: "Review your selections and complete your subscription",
      component: (
        <div className="space-y-8">
          <PriceCalculator 
            basePrice={9.99} 
            additionalItems={items}
          />
          <CheckoutForm onDataChange={handleCheckoutChange} initialData={formData.checkout} />
        </div>
      ),
    },
  ];
  
  return (
    <>
      <Helmet>
        <title>Set Up Your Car Alert - Amiquus</title>
        <meta 
          name="description" 
          content="Configure your personalized car alert service. Select websites to monitor, set your car criteria, and get notified when your dream car is available." 
        />
      </Helmet>
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-title font-bold mb-4">Create Your Car Alert</h1>
            <p className="text-neutral-600 max-w-2xl mx-auto">Set up your personalized car listing notifications in just a few steps.</p>
          </div>
          
          <Card className="max-w-4xl mx-auto shadow-md">
            <CardContent className="p-8">
              <MultiStepForm
                steps={steps}
                currentStep={currentStep}
                onStepChange={handleStepChange}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                submitLabel="Complete Subscription"
              />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
