import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "wouter";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { PriceCalculator, PriceItem } from "@/components/ui/price-calculator";
import { Helmet } from "react-helmet";

if (!import.meta.env.VITE_STRIPE_PUBLIC_KEY) {
  throw new Error('Missing required Stripe key: VITE_STRIPE_PUBLIC_KEY');
}

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.origin + "/dashboard",
        },
      });

      if (error) {
        toast({
          title: "Payment Failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Payment Successful",
          description: "Your subscription is now active!",
        });
        navigate("/dashboard");
      }
    } catch (err) {
      toast({
        title: "Payment Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      
      <div className="pt-4">
        <Button 
          type="submit" 
          disabled={!stripe || isProcessing} 
          className="w-full"
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Subscribe Now"
          )}
        </Button>
      </div>
      
      <div className="text-sm text-neutral-500 text-center">
        <p>You will be charged monthly until you cancel your subscription.</p>
        <p>You can manage your subscription from your dashboard at any time.</p>
      </div>
    </form>
  );
};

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState<string>("");
  const [subscriptionDetails, setSubscriptionDetails] = useState<{
    basePrice: number;
    additionalItems: PriceItem[];
    total: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const [_, params] = useLocation();

  useEffect(() => {
    const getPaymentIntent = async () => {
      try {
        setIsLoading(true);
        const response = await apiRequest("POST", "/api/get-or-create-subscription");
        const data = await response.json();
        
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
          setSubscriptionDetails({
            basePrice: data.basePrice || 9.99,
            additionalItems: data.additionalItems || [],
            total: data.total || 9.99,
          });
        } else {
          setError("Could not initialize payment. Please try again.");
        }
      } catch (err) {
        setError("An error occurred while setting up your payment. Please try again.");
        toast({
          title: "Payment Setup Failed",
          description: err instanceof Error ? err.message : "Please try again",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    getPaymentIntent();
  }, [toast]);

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Loader2 className="h-12 w-12 text-primary-600 animate-spin" />
          <p className="mt-4 text-neutral-600">Setting up your subscription...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-md">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
        <div className="mt-6 text-center">
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Complete Your Subscription - Amiquus</title>
        <meta 
          name="description" 
          content="Secure checkout page for your Amiquus car alert subscription service." 
        />
      </Helmet>
      <div className="container mx-auto px-4 py-16 max-w-lg">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Complete Your Subscription</CardTitle>
            <CardDescription>Enter your payment details to start your car alert service</CardDescription>
          </CardHeader>
          
          <CardContent>
            {subscriptionDetails && (
              <>
                <PriceCalculator 
                  basePrice={subscriptionDetails.basePrice}
                  additionalItems={subscriptionDetails.additionalItems}
                  className="mb-6"
                />
                
                <Separator className="my-6" />
                
                {clientSecret ? (
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm />
                  </Elements>
                ) : (
                  <div className="text-center py-4">
                    <Loader2 className="h-8 w-8 text-primary-600 animate-spin mx-auto" />
                    <p className="mt-2 text-neutral-600">Preparing payment form...</p>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
