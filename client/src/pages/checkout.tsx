import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useStripe, Elements, PaymentElement, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import PageWrapper from "@/components/layout/PageWrapper";
import { useAuth } from "@/hooks/use-auth";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, AlertCircle, CheckCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

if (!import.meta.env.VITE_STRIPE_PUBLIC_KEY) {
  throw new Error('Missing required Stripe key: VITE_STRIPE_PUBLIC_KEY');
}

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function CheckoutForm({ 
  onSuccess, 
  amount, 
  subscription 
}: { 
  onSuccess: () => void; 
  amount: number;
  subscription: any;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.origin + '/dashboard',
        },
        redirect: 'if_required',
      });

      if (error) {
        setErrorMessage(error.message || 'An unexpected error occurred');
        toast({
          title: "Payment Failed",
          description: error.message || "There was an issue processing your payment",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Payment Successful",
          description: "Thank you for your purchase!",
        });
        onSuccess();
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Payment failed');
      toast({
        title: "Payment Error",
        description: err.message || 'An unexpected error occurred',
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {errorMessage && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-4">
        <PaymentElement />
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        disabled={isLoading || !stripe || !elements}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          `Pay ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)}`
        )}
      </Button>
    </form>
  );
}

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [location, setLocation] = useLocation();
  const [subscription, setSubscription] = useState<any>(null);
  const { user } = useAuth();
  const amount = subscription?.price || 9.99;

  useEffect(() => {
    // Guard: redirect to login if not authenticated
    if (!user) {
      setLocation(`/login?redirect=${encodeURIComponent('/checkout')}`);
      return;
    }

    // Get subscription info from URL or localStorage
    const searchParams = new URLSearchParams(window.location.search);
    const subscriptionId = searchParams.get('id');
    
    if (!subscriptionId) {
      setError('No subscription selected. Please select a subscription first.');
      setIsLoading(false);
      return;
    }

    // Create or retrieve Stripe payment intent
    async function initializeCheckout() {
      try {
        const response = await apiRequest('POST', '/api/create-payment-intent', { 
          subscriptionId,
          amount
        });
        
        const data = await response.json();
        setClientSecret(data.clientSecret);
        setSubscription(data.subscription);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message || 'Error initializing checkout');
        setIsLoading(false);
      }
    }

    initializeCheckout();
  }, [user, setLocation, amount]);

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
    // Redirect to dashboard after 3 seconds
    setTimeout(() => {
      setLocation('/dashboard');
    }, 3000);
  };

  if (paymentSuccess) {
    return (
      <PageWrapper>
        <div className="flex items-center justify-center py-12">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
              <CardTitle>Payment Successful!</CardTitle>
              <CardDescription>Thank you for your purchase</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                Your subscription has been activated successfully. You will be redirected to your dashboard in a moment.
              </p>
              <Button onClick={() => setLocation('/dashboard')}>
                Go to Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="bg-neutral-50 dark:bg-neutral-900 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-title font-bold mb-4">Complete Your Purchase</h1>
              <p className="text-neutral-600 dark:text-neutral-400">
                Your car alert subscription will be activated immediately after payment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                    <CardDescription>
                      Secure payment processing by Stripe
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isLoading ? (
                      <div className="flex justify-center items-center py-12">
                        <Loader2 className="mr-2 h-8 w-8 animate-spin text-primary" />
                        <span>Loading payment form...</span>
                      </div>
                    ) : error ? (
                      <Alert variant="destructive" className="mb-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    ) : clientSecret ? (
                      <Elements stripe={stripePromise} options={{ clientSecret }}>
                        <CheckoutForm 
                          onSuccess={handlePaymentSuccess} 
                          amount={amount}
                          subscription={subscription}
                        />
                      </Elements>
                    ) : null}
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {subscription ? (
                      <>
                        <div className="flex justify-between">
                          <span>Subscription</span>
                          <span>Car alerts for {subscription.brand} {subscription.model}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Websites</span>
                          <span>{subscription.websitesSelected?.length || 1}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Frequency</span>
                          <span>{subscription.updateFrequency}</span>
                        </div>
                        <div className="border-t pt-4 font-medium flex justify-between">
                          <span>Total</span>
                          <span>${amount.toFixed(2)}/month</span>
                        </div>
                      </>
                    ) : (
                      <div className="py-4 text-center text-neutral-500 dark:text-neutral-400">
                        Loading subscription details...
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="text-sm text-neutral-500 dark:text-neutral-400">
                    You can cancel your subscription at any time from your profile page.
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}