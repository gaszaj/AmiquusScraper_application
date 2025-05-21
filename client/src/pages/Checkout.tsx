import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useAuth } from "@/hooks/use-auth";
import { Loader2 } from "lucide-react";

// Load Stripe outside of component to avoid recreating Stripe object on renders
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || "");

// Plan options
const PLANS = [
  { id: "monthly", name: "Monthly Plan", price: 29.99, period: "monthly" },
  { id: "annual", name: "Annual Plan", price: 287.88, period: "yearly", discount: "20%" },
];

// Payment method options - only using card payments as requested
const PAYMENT_METHODS = [
  { id: "card", name: "Credit Card", icons: [
    "https://cdn-icons-png.flaticon.com/512/349/349221.png", // Visa
    "https://cdn-icons-png.flaticon.com/512/349/349228.png", // Mastercard
    "https://cdn-icons-png.flaticon.com/512/349/349230.png", // Amex
  ]},
];

// The form that appears inside the Stripe Elements
function CheckoutForm({ selectedPlan }: { selectedPlan: typeof PLANS[0] }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { toast } = useToast();
  const [location, navigate] = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");

    if (!stripe || !elements) {
      // Stripe.js hasn't loaded yet. Make sure to disable form submission until Stripe.js has loaded
      toast({
        title: "Payment system loading",
        description: "Please wait a moment and try again",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    setErrorMessage(null);

    try {
      // Confirm the payment with Stripe
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: `${window.location.origin}/dashboard`,
        },
        redirect: 'if_required'
      });

      if (error) {
        // This point will only be reached if there's an immediate error when confirming the payment
        setErrorMessage(error.message || "An unknown error occurred");
        toast({
          title: "Payment failed",
          description: error.message || "An error occurred with your payment",
          variant: "destructive",
        });
        setIsProcessing(false);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        // The payment has succeeded
        toast({
          title: "Payment successful!",
          description: `Your ${selectedPlan.period} subscription is now active`,
        });
        
        // Redirect to dashboard after short delay to show success message
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else {
        // Payment requires additional action or is processing
        setIsProcessing(false);
        toast({
          title: "Payment processing",
          description: "Your payment is being processed. You'll be notified when it completes.",
        });
      }
    } catch (err: any) {
      setErrorMessage(err.message || "An unknown error occurred");
      toast({
        title: "Payment failed",
        description: err.message || "An error occurred with your payment",
        variant: "destructive",
      });
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="py-2">
        <PaymentElement 
          options={{
            layout: {
              type: 'tabs',
              defaultCollapsed: false,
            }
          }} 
        />
      </div>

      {errorMessage && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-500 p-4 rounded-lg text-sm">
          {errorMessage}
        </div>
      )}

      <div className="pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-neutral-400">Total:</span>
          <span className="text-xl font-bold text-white">${selectedPlan.price} <span className="text-sm font-normal text-neutral-400">/ {selectedPlan.period}</span></span>
        </div>

        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className="w-full py-4 rounded-lg bg-yellow-400 text-black font-semibold text-lg hover:bg-yellow-300 transition-colors disabled:opacity-70"
        >
          {isProcessing ? (
            <div className="flex items-center justify-center">
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Processing payment...
            </div>
          ) : (
            "Complete Purchase"
          )}
        </button>
        
        <p className="text-center text-sm text-neutral-400 mt-4">
          By completing your purchase, you agree to our <a href="/terms" className="text-yellow-400 hover:underline">Terms of Service</a> 
          and acknowledge our <a href="/privacy" className="text-yellow-400 hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </form>
  );
}

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(PLANS[0]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(PAYMENT_METHODS[0].id);
  const { isAuthenticated, isLoading } = useAuth();
  const [location, navigate] = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    // If user is not authenticated, redirect to login
    if (!isLoading && !isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please log in to continue with checkout",
        variant: "destructive",
      });
      navigate("/login?returnUrl=/checkout", { replace: true });
      return;
    }

    if (isAuthenticated) {
      // Create PaymentIntent as soon as the page loads
      const fetchPaymentIntent = async () => {
        try {
          const response = await apiRequest("POST", "/api/create-payment-intent", {
            amount: selectedPlan.price,
          });
          
          const data = await response.json();
          setClientSecret(data.clientSecret);
        } catch (error) {
          console.error("Error fetching payment intent:", error);
          toast({
            title: "Payment setup failed",
            description: "Unable to initialize payment process. Please try again.",
            variant: "destructive",
          });
        }
      };

      fetchPaymentIntent();
    }
  }, [isAuthenticated, isLoading, navigate, selectedPlan.price, toast]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] bg-neutral-900">
        <Loader2 className="w-8 h-8 animate-spin text-yellow-400" />
      </div>
    );
  }

  return (
    <section id="checkout" className="bg-neutral-900 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black p-4 rounded-xl mb-12 shadow-lg">
          <div className="flex items-center justify-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p className="font-semibold">This Thursday 12,342 push notifications were sent to car dealers who know being first means money!</p>
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-white">Set Up Your Car Alerts</h1>
          <p className="mt-4 text-xl text-neutral-400">Complete your subscription to start receiving instant car notifications</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Checkout Section */}
          <div className="bg-neutral-800/50 border border-neutral-700 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white">Secure Checkout</h2>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
                <span className="text-green-500 font-medium">Secure Payment</span>
              </div>
            </div>

            {/* Payment Options */}
            <div className="space-y-6">
              {/* Plan Selection */}
              <div className="bg-neutral-700/30 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Choose Your Plan</h3>
                <div className="space-y-4">
                  {PLANS.map((plan) => (
                    <label 
                      key={plan.id}
                      className={`flex items-center justify-between p-4 bg-neutral-700/50 rounded-lg cursor-pointer hover:bg-neutral-700/70 transition ${
                        selectedPlan.id === plan.id ? 'ring-2 ring-yellow-400' : ''
                      }`}
                      onClick={() => setSelectedPlan(plan)}
                    >
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          name="plan" 
                          className="form-radio text-yellow-400" 
                          checked={selectedPlan.id === plan.id}
                          onChange={() => {}}
                        />
                        <span className="ml-3 text-white">{plan.name}</span>
                        {plan.discount && (
                          <span className="ml-2 bg-green-500 text-xs font-bold px-2 py-1 rounded-full text-white">SAVE {plan.discount}</span>
                        )}
                      </div>
                      <span className="text-2xl font-bold text-white">${plan.price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Credit Card Payment Section */}
              <div className="bg-neutral-700/30 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">Card Payment</h3>
                  <div className="flex space-x-2">
                    {PAYMENT_METHODS[0].icons.map((icon, idx) => (
                      <img key={idx} src={icon} className="h-8" alt={`Card type ${idx + 1}`} />
                    ))}
                  </div>
                </div>
                
                {/* Stripe Payment Element */}
                {clientSecret ? (
                  <Elements stripe={stripePromise} options={{ 
                    clientSecret, 
                    appearance: { 
                      theme: 'night',
                      variables: {
                        colorPrimary: '#facc15',
                        colorBackground: '#374151',
                        colorText: '#ffffff',
                        colorDanger: '#ef4444',
                        fontFamily: 'Inter, system-ui, sans-serif',
                        borderRadius: '8px',
                      }
                    } 
                  }}>
                    <CheckoutForm selectedPlan={selectedPlan} />
                  </Elements>
                ) : (
                  <div className="flex justify-center p-8">
                    <div className="flex flex-col items-center">
                      <Loader2 className="w-8 h-8 animate-spin text-yellow-400 mb-2" />
                      <p className="text-neutral-400">Preparing secure payment form...</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Removed duplicate loader */}
              
              {/* Secure badge and guarantees */}
              <div className="mt-8 p-6 bg-neutral-700/30 rounded-xl">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                    <span className="text-neutral-300">Secure Payment</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    <span className="text-neutral-300">Money-back Guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <span className="text-neutral-300">Instant Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}