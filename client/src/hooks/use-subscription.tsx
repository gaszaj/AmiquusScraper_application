import { useState } from "react";
import { SubscriptionFormData, Subscription } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useAuth } from "./use-auth";
import { 
  WEBSITE_OPTIONS, 
  FREQUENCY_OPTIONS,
  BASE_PRICE,
  ADDITIONAL_WEBSITE_PRICE 
} from "@/lib/constants";

export function useSubscription() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const calculatePrice = (websiteCount: number, frequency: string): number => {
    if (websiteCount === 0) return 0;

    // Base price for one website
    let price = BASE_PRICE;
    
    // Add price for additional websites
    if (websiteCount > 1) {
      price += ADDITIONAL_WEBSITE_PRICE * (websiteCount - 1);
    }
    
    // Add price for frequency
    const frequencyOption = FREQUENCY_OPTIONS.find(option => option.id === frequency);
    if (frequencyOption && frequencyOption.additionalPrice) {
      price += frequencyOption.additionalPrice;
    }
    
    return price;
  };

  const createSubscription = async (data: SubscriptionFormData): Promise<Subscription> => {
    if (!user) {
      throw new Error("You must be logged in to create a subscription");
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await apiRequest("POST", "/api/subscriptions", data);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create subscription");
      }
      
      return await response.json();
    } catch (err: any) {
      setError(err.message || "An error occurred");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createSubscription,
    calculatePrice,
    isLoading,
    error
  };
}