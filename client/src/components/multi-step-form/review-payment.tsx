import { useState, useEffect } from "react";
import { AlertFormSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { AlertCircle, Check } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { 
  WEBSITE_OPTIONS, 
  FREQUENCY_OPTIONS, 
  FREQUENCY_LABELS,
  LANGUAGE_OPTIONS,
  FUEL_TYPE_OPTIONS
} from "@/lib/constants";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/hooks/use-auth";

interface ReviewPaymentProps {
  formData: Partial<AlertFormSchema>;
  updateFormData: (data: Partial<AlertFormSchema>) => void;
  prevStep: () => void;
  onSubmit: () => void;
}

function calculateBasePrice(formData: Partial<AlertFormSchema>): number {
  if (!formData.websitesSelected || formData.websitesSelected.length === 0) {
    return 0;
  }

  // Get websites count
  const websitesCount = formData.websitesSelected.length;
  
  // Get frequency option
  const frequency = formData.updateFrequency || 'hourly';
  
  // Calculate price using useSubscription hook's calculatePrice function
  const calculatePrice = (count: number, freq: string) => {
    // Base price for one website
    let price = 9.99;
    
    // Add price for additional websites
    if (count > 1) {
      price += 4.99 * (count - 1);
    }
    
    // Add price for frequency
    const frequencyOption = FREQUENCY_OPTIONS.find(option => option.id === freq);
    if (frequencyOption && frequencyOption.additionalPrice) {
      price += frequencyOption.additionalPrice;
    }
    
    return price;
  };

  return calculatePrice(websitesCount, frequency);
}

export default function ReviewPayment({
  formData,
  updateFormData,
  prevStep,
  onSubmit,
}: ReviewPaymentProps) {
  const { user, isAuthenticated } = useAuth();
  
  const [error, setError] = useState<string | null>(null);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  useEffect(() => {
    // Calculate price based on selections
    const price = calculateBasePrice(formData);
    setCalculatedPrice(price);
    
    // Update the price in the form data
    updateFormData({ price });
  }, [formData, updateFormData]);

  const handleSubmit = () => {
    if (!termsAgreed) {
      setError("You must agree to the terms and conditions");
      return;
    }
    
    try {
      onSubmit();
    } catch (error: any) {
      setError(error.message);
    }
  };

  const getLanguageName = (code: string) => {
    const language = LANGUAGE_OPTIONS.find(lang => lang.id === code);
    return language ? language.name : code;
  };

  const getFuelTypeName = (code: string | undefined) => {
    if (!code) return "Any";
    const fuelType = FUEL_TYPE_OPTIONS.find(fuel => fuel.id === code);
    return fuelType ? fuelType.name : code;
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">Review Your Subscription</h2>
        <p className="text-sm text-neutral-500">
          Please review your subscription details before proceeding to payment.
        </p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <span className="font-medium">Name:</span>{" "}
              {user?.firstName} {user?.lastName}
            </div>
            <div>
              <span className="font-medium">Email:</span> {user?.email}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Monitoring Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <span className="font-medium">Websites:</span>{" "}
              <ul className="list-disc ml-5 mt-1">
                {formData.websitesSelected?.map(websiteId => {
                  const website = WEBSITE_OPTIONS.find(w => w.id === websiteId);
                  return (
                    <li key={websiteId}>{website?.name || websiteId}</li>
                  );
                })}
              </ul>
            </div>
            {formData.facebookMarketplaceUrl && (
              <div>
                <span className="font-medium">Facebook URL:</span>{" "}
                <span className="break-all text-sm">{formData.facebookMarketplaceUrl}</span>
              </div>
            )}
            <div>
              <span className="font-medium">Update Frequency:</span>{" "}
              {FREQUENCY_LABELS[formData.updateFrequency || 'hourly']}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Car Specifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {formData.carBrand && (
              <div>
                <span className="font-medium">Brand:</span> {formData.carBrand}
              </div>
            )}
            {formData.carModel && (
              <div>
                <span className="font-medium">Model:</span> {formData.carModel}
              </div>
            )}
            {formData.fuelType && (
              <div>
                <span className="font-medium">Fuel Type:</span> {getFuelTypeName(formData.fuelType)}
              </div>
            )}
            {(formData.yearMin || formData.yearMax) && (
              <div>
                <span className="font-medium">Year Range:</span>{" "}
                {formData.yearMin || "Any"} - {formData.yearMax || "Any"}
              </div>
            )}
            {(formData.maxKilometers || formData.maxKilometers) && (
              <div>
                <span className="font-medium">Mileage Range (km):</span>{" "}
                {formData.maxKilometers || "Any"}
              </div>
            )}
            {(formData.priceMin || formData.priceMax) && (
              <div>
                <span className="font-medium">Price Range (€):</span>{" "}
                {formData.priceMin || "Any"} - {formData.priceMax || "Any"}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Notification Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <span className="font-medium">Telegram Bot:</span> Connected
            </div>
            <div>
              <span className="font-medium">Notification Language:</span>{" "}
              {getLanguageName(formData.notificationLanguage || 'en')}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-primary-50 border-primary-200">
        <CardHeader>
          <CardTitle className="text-xl">Subscription Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span>Base Subscription:</span>
            <span>${(9.99).toFixed(2)}</span>
          </div>
          
          {formData.websitesSelected && formData.websitesSelected.length > 1 && (
            <div className="flex justify-between">
              <span>Additional Websites ({formData.websitesSelected.length - 1}):</span>
              <span>${((formData.websitesSelected.length - 1) * 4.99).toFixed(2)}</span>
            </div>
          )}
          
          {formData.updateFrequency && formData.updateFrequency !== 'hourly' && (
            <div className="flex justify-between">
              <span>Frequency Upgrade ({FREQUENCY_LABELS[formData.updateFrequency]}):</span>
              <span>
                ${(FREQUENCY_OPTIONS.find(f => f.id === formData.updateFrequency)?.additionalPrice || 0).toFixed(2)}
              </span>
            </div>
          )}
          
          <div className="flex justify-between pt-4 border-t border-primary-200 font-bold">
            <span>Total (Monthly):</span>
            <span>${calculatedPrice.toFixed(2)}</span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <div className="flex items-center space-x-2 mb-4">
            <Checkbox 
              id="terms" 
              checked={termsAgreed} 
              onCheckedChange={(checked) => setTermsAgreed(checked === true)}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the{" "}
              <a href="/terms" className="text-primary-600 hover:underline" target="_blank">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-primary-600 hover:underline" target="_blank">
                Privacy Policy
              </a>
            </label>
          </div>
          <p className="text-sm text-neutral-500">
            Your subscription will renew automatically each month. You can cancel anytime.
          </p>
        </CardFooter>
      </Card>

      <div className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={prevStep}
        >
          Previous
        </Button>
        <Button 
          onClick={handleSubmit} 
          disabled={!termsAgreed}
        >
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
}