import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { Subscription, SubscriptionFormData } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export function useSubscription() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Create a new subscription
  const createSubscription = async (data: SubscriptionFormData): Promise<Subscription> => {
    setIsLoading(true);
    
    try {
      // Calculate price in cents for the backend
      const priceInCents = Math.round((data.price || 0) * 100);
      const subscriptionData = {
        ...data,
        price: priceInCents,
      };
      
      const res = await apiRequest("POST", "/api/subscriptions", subscriptionData);
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to create subscription");
      }
      
      const subscription = await res.json();
      
      toast({
        title: "Subscription created",
        description: "Your car alert has been set up successfully!",
      });
      
      return subscription;
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create subscription",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Get all subscriptions for the current user
  const getUserSubscriptions = async (): Promise<Subscription[]> => {
    setIsLoading(true);
    
    try {
      const res = await apiRequest("GET", "/api/subscriptions");
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to fetch subscriptions");
      }
      
      return await res.json();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to fetch subscriptions",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Get a specific subscription by ID
  const getSubscription = async (id: number): Promise<Subscription> => {
    setIsLoading(true);
    
    try {
      const res = await apiRequest("GET", `/api/subscriptions/${id}`);
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to fetch subscription");
      }
      
      return await res.json();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to fetch subscription",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Delete a subscription
  const deleteSubscription = async (id: number): Promise<void> => {
    setIsLoading(true);
    
    try {
      const res = await apiRequest("DELETE", `/api/subscriptions/${id}`);
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to delete subscription");
      }
      
      toast({
        title: "Subscription canceled",
        description: "Your car alert has been canceled successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to delete subscription",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate subscription price based on selected options
  const calculatePrice = (websitesCount: number, frequency: string): number => {
    // Base price
    let price = 9.99;
    
    // Add additional websites cost (first one is included in base price)
    const additionalWebsites = Math.max(0, websitesCount - 1);
    price += additionalWebsites * 4.99;
    
    // Add frequency cost
    switch (frequency) {
      case '30min':
        price += 2.99;
        break;
      case '15min':
        price += 5.99;
        break;
      case '5min':
        price += 9.99;
        break;
      case '1min':
        price += 14.99;
        break;
    }
    
    return price;
  };

  return {
    createSubscription,
    getUserSubscriptions,
    getSubscription,
    deleteSubscription,
    calculatePrice,
    isLoading,
  };
}
