import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { SubscriptionFormData } from "@shared/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "wouter";
import { useStripe, Elements, PaymentElement, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { FREQUENCY_LABELS } from "@/lib/constants";

interface ReviewPaymentProps {
  formData: Partial<SubscriptionFormData>;
  updateFormData: (data: Partial<SubscriptionFormData>) => void;
  prevStep: () => void;
  onSubmit: () => void;
}

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || "pk_test_placeholder");

function calculateBasePrice(formData: Partial<SubscriptionFormData>): number {
  const basePrice = 9.99;
  
  // Add additional websites cost (first one is included in base price)
  const additionalWebsites = Math.max(0, (formData.websitesSelected?.length || 0) - 1);
  const websitesPrice = additionalWebsites * 4.99;
  
  // Add frequency cost
  let frequencyPrice = 0;
  switch (formData.updateFrequency) {
    case '30min':
      frequencyPrice = 2.99;
      break;
    case '15min':
      frequencyPrice = 5.99;
      break;
    case '5min':
      frequencyPrice = 9.99;
      break;
    case '1min':
      frequencyPrice = 14.99;
      break;
    default:
      frequencyPrice = 0;
  }
  
  return basePrice + websitesPrice + frequencyPrice;
}

const CheckoutForm = ({ onSubmitComplete, formData }: { onSubmitComplete: () => void, formData: Partial<SubscriptionFormData> }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    if (!agreedToTerms) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the terms of service before proceeding.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + '/dashboard',
      },
    });

    setIsSubmitting(false);

    if (error) {
      toast({
        title: "Payment Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Payment Successful",
        description: "Your subscription has been set up!",
      });
      onSubmitComplete();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-neutral-50 p-6 rounded-lg mb-8">
        <h4 className="text-lg font-medium mb-4">Subscription Summary</h4>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-neutral-600">Base package (1 website)</span>
            <span className="font-medium">$9.99/month</span>
          </div>
          
          {(formData.websitesSelected?.length || 0) > 1 && (
            <div>
              <div className="flex justify-between">
                <span className="text-neutral-600">
                  Additional websites ({(formData.websitesSelected?.length || 0) - 1})
                </span>
                <span className="font-medium">
                  ${(((formData.websitesSelected?.length || 0) - 1) * 4.99).toFixed(2)}/month
                </span>
              </div>
            </div>
          )}
          
          {formData.updateFrequency && formData.updateFrequency !== 'hourly' && (
            <div>
              <div className="flex justify-between">
                <span className="text-neutral-600">
                  Update frequency ({FREQUENCY_LABELS[formData.updateFrequency]})
                </span>
                <span className="font-medium">
                  ${formData.updateFrequency === '30min' ? '2.99' : 
                     formData.updateFrequency === '15min' ? '5.99' :
                     formData.updateFrequency === '5min' ? '9.99' :
                     formData.updateFrequency === '1min' ? '14.99' : '0.00'}/month
                </span>
              </div>
            </div>
          )}
          
          <div className="border-t border-neutral-300 pt-3 flex justify-between">
            <span className="font-medium">Total</span>
            <span className="font-bold text-lg">${calculateBasePrice(formData).toFixed(2)}/month</span>
          </div>
        </div>
        
        <div className="text-sm text-neutral-500">
          <p>Your subscription will begin immediately after payment is processed. You can cancel or modify it at any time from your account dashboard.</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h4 className="text-lg font-medium mb-4">Payment Information</h4>
        <PaymentElement />
      </div>
      
      <div className="mb-8">
        <div className="flex items-start">
          <Checkbox
            id="terms-agree"
            checked={agreedToTerms}
            onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
            className="mt-1 w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
          />
          <Label htmlFor="terms-agree" className="ml-3 text-sm text-neutral-600">
            I agree to the <Link href="/terms" className="text-primary-600 underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary-600 underline">Privacy Policy</Link>, and authorize Amiquus to charge my card monthly for this subscription.
          </Label>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Button
          type="button"
          onClick={() => {
            if (!isSubmitting) {
              onSubmitComplete(); // Just for demo purposes
            }
          }}
          variant="outline"
          className="bg-neutral-200 text-neutral-700 hover:bg-neutral-300 border-0"
          disabled={isSubmitting}
        >
          Previous
        </Button>
        <Button 
          type="submit" 
          className="bg-primary-600 hover:bg-primary-700"
          disabled={!stripe || !elements || isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Complete Subscription"}
        </Button>
      </div>
    </form>
  );
};

export default function ReviewPayment({
  formData,
  updateFormData,
  prevStep,
  onSubmit,
}: ReviewPaymentProps) {
  const [clientSecret, setClientSecret] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    // Calculate the total price
    const totalPrice = calculateBasePrice(formData);
    
    // Create PaymentIntent as soon as the component mounts
    apiRequest("POST", "/api/create-payment-intent", { amount: totalPrice })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          toast({
            title: "Error",
            description: data.message || "Could not initialize payment. Please try again.",
            variant: "destructive",
          });
        }
      })
      .catch(error => {
        toast({
          title: "Error",
          description: "Could not initialize payment. Please try again.",
          variant: "destructive",
        });
        console.error("Payment intent error:", error);
      });
  }, []);

  if (!clientSecret) {
    return (
      <div className="h-64 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" aria-label="Loading"/>
      </div>
    );
  }

  return (
    <div className="form-step">
      <h3 className="text-xl font-title font-semibold mb-6">Review & Complete Setup</h3>
      <p className="text-neutral-600 mb-6">
        Review your selections and complete your subscription setup.
      </p>

      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <CheckoutForm onSubmitComplete={onSubmit} formData={formData} />
      </Elements>
    </div>
  );
}
