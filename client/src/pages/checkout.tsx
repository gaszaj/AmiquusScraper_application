import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useStripe, Elements, PaymentElement, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
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

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
if (!import.meta.env.VITE_STRIPE_PUBLIC_KEY) {
  throw new Error('Missing required Stripe key: VITE_STRIPE_PUBLIC_KEY');
}
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutForm = ({ amount, onSuccess }: { amount: number, onSuccess: () => void }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
        setErrorMessage(error.message || 'Payment failed');
        toast({
          title: "Payment Failed",
          description: error.message || 'Something went wrong with your payment',
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
    <form onSubmit={handleSubmit} className="space-y-6">
      {errorMessage && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
      
      <PaymentElement />
      
      <Button 
        type="submit" 
        className="w-full bg-primary-600 hover:bg-primary-700 mt-4"
        disabled={!stripe || !elements || isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          `Pay $${(amount / 100).toFixed(2)}`
        )}
      </Button>
    </form>
  );
};

export default function Checkout() {
  const [location, setLocation] = useLocation();
  const { user, isLoading: authLoading } = useAuth();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [amount, setAmount] = useState(0);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { toast } = useToast();

  // Get subscription ID from URL query params
  const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const subscriptionId = params.get('subscription');
  const amountParam = params.get('amount');

  useEffect(() => {
    // Redirect to login if user isn't authenticated
    if (!authLoading && !user) {
      setLocation("/login?redirect=/checkout");
      return;
    }

    if (user && amountParam) {
      const parsedAmount = parseFloat(amountParam);
      if (!isNaN(parsedAmount)) {
        // Convert dollars to cents for Stripe
        const amountInCents = Math.round(parsedAmount * 100);
        setAmount(amountInCents);
        
        // Create a payment intent
        setIsLoading(true);
        apiRequest("POST", "/api/create-payment-intent", { amount: amountInCents })
          .then((res) => res.json())
          .then((data) => {
            setClientSecret(data.clientSecret);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Failed to create payment intent:", error);
            toast({
              title: "Error",
              description: "Failed to initialize payment. Please try again.",
              variant: "destructive",
            });
            setIsLoading(false);
          });
      } else {
        toast({
          title: "Invalid Amount",
          description: "The payment amount is invalid.",
          variant: "destructive",
        });
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  }, [user, authLoading, setLocation, amountParam, subscriptionId, toast]);

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
    // Redirect to dashboard after 3 seconds
    setTimeout(() => {
      setLocation('/dashboard');
    }, 3000);
  };

  if (authLoading || isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center py-16 bg-neutral-50">
          <div className="flex flex-col items-center justify-center">
            <Loader2 className="h-12 w-12 animate-spin text-primary-600 mb-4" />
            <p className="text-lg text-neutral-600">Preparing your checkout...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (paymentSuccess) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center py-16 bg-neutral-50">
          <Card className="w-full max-w-lg">
            <CardHeader className="text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <CardTitle className="text-2xl">Payment Successful!</CardTitle>
              <CardDescription>Thank you for your purchase</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-neutral-600 mb-4">
                Your subscription has been activated successfully. You will be redirected to your dashboard in a moment.
              </p>
              <Button onClick={() => setLocation('/dashboard')}>
                Go to Dashboard
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-title font-bold mb-4">Complete Your Purchase</h1>
              <p className="text-neutral-600">
                Your car alert subscription will be activated immediately after payment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Details</CardTitle>
                    <CardDescription>
                      All transactions are secure and encrypted
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {clientSecret ? (
                      <Elements 
                        stripe={stripePromise} 
                        options={{ 
                          clientSecret,
                          appearance: {
                            theme: 'stripe',
                            variables: {
                              colorPrimary: '#3B82F6',
                              colorBackground: '#ffffff',
                              colorText: '#1f2937',
                            },
                          },
                        }}
                      >
                        <CheckoutForm amount={amount} onSuccess={handlePaymentSuccess} />
                      </Elements>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-8">
                        <Loader2 className="h-8 w-8 animate-spin text-primary-600 mb-4" />
                        <p className="text-neutral-600">Loading payment form...</p>
                      </div>
                    )}
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
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Subscription</span>
                      <span className="font-medium">${(amount / 100).toFixed(2)}</span>
                    </div>
                    <div className="border-t border-neutral-200 pt-4 flex justify-between">
                      <span className="font-medium">Total</span>
                      <span className="font-bold text-lg">${(amount / 100).toFixed(2)}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="text-sm text-neutral-500">
                    <p>
                      By completing this purchase, you agree to our{" "}
                      <a href="/terms" className="text-primary-600 hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="/privacy" className="text-primary-600 hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}