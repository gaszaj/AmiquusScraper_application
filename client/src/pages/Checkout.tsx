import { useEffect, useState } from "react";
import { useNavigate } from "wouter";
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

// Load Stripe outside of component to avoid recreating Stripe object on renders
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || "");

// Plan options
const PLANS = [
  { id: "monthly", name: "Monthly Plan", price: 29.99, period: "monthly" },
  { id: "annual", name: "Annual Plan", price: 287.88, period: "yearly", discount: "20%" },
];

// Payment method options
const PAYMENT_METHODS = [
  { id: "card", name: "Credit Card", icons: [
    "https://cdn-icons-png.flaticon.com/512/349/349221.png", // Visa
    "https://cdn-icons-png.flaticon.com/512/349/349228.png", // Mastercard
    "https://cdn-icons-png.flaticon.com/512/349/349230.png", // Amex
  ]},
  { id: "apple_pay", name: "Apple Pay", icon: "https://cdn-icons-png.flaticon.com/512/349/349237.png" },
  { id: "google_pay", name: "Google Pay", icon: "https://cdn-icons-png.flaticon.com/512/349/349241.png" },
];

// The form that appears inside the Stripe Elements
function CheckoutForm() {
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
          // Make sure to change this to your payment completion page
          return_url: window.location.origin + "/dashboard",
        },
      });

      if (error) {
        toast({
          title: "Payment failed",
          description: error.message || "An error occurred with your payment",
          variant: "destructive",
        });
      } else {
        // The payment has been processed! Show a success message
        toast({
          title: "Payment successful",
          description: "Your subscription is now active",
        });
        navigate("/dashboard");
      }
    } catch (err: any) {
      toast({
        title: "Payment failed",
        description: err.message || "An error occurred with your payment",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement className="mb-6" />

      <div className="mt-8">
        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold text-lg hover:from-amber-600 hover:to-yellow-600 transition-colors disabled:opacity-70"
        >
          {isProcessing ? "Processing..." : "Subscribe Now"}
        </button>
      </div>
    </form>
  );
}

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(PLANS[0]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(PAYMENT_METHODS[0].id);
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // If user is not authenticated, redirect to login
    if (!isLoading && !isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please log in to continue with checkout",
        variant: "destructive",
      });
      navigate("/login", { replace: true });
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
      <div className="flex items-center justify-center min-h-screen bg-neutral-900">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section id="checkout" className="bg-neutral-900 py-24">
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
          <h1 className="text-4xl font-bold text-white">Secure Checkout</h1>
          <p className="mt-4 text-xl text-neutral-400">Complete your subscription to start receiving car alerts</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Checkout Section */}
          <div className="bg-neutral-800/50 border border-neutral-700 rounded-2xl p-8">
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
                      className="flex items-center justify-between p-4 bg-neutral-700/50 rounded-lg cursor-pointer hover:bg-neutral-700/70 transition"
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

              {/* Payment Methods */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">Select Payment Method</h3>
                
                {/* Credit Card */}
                {PAYMENT_METHODS.map((method) => (
                  <div key={method.id} className="bg-neutral-700/30 p-6 rounded-xl">
                    <label className="flex items-center space-x-3 cursor-pointer w-full">
                      <input 
                        type="radio" 
                        name="payment" 
                        className="form-radio text-yellow-400" 
                        checked={selectedPaymentMethod === method.id}
                        onChange={() => setSelectedPaymentMethod(method.id)}
                      />
                      <span className="text-white">{method.name}</span>
                      
                      {method.icons ? (
                        <div className="flex space-x-2 ml-auto">
                          {method.icons.map((icon, idx) => (
                            <img key={idx} src={icon} className="h-8" alt={`${method.name} icon ${idx + 1}`} />
                          ))}
                        </div>
                      ) : method.icon ? (
                        <img src={method.icon} className="h-8 ml-auto" alt={`${method.name} icon`} />
                      ) : null}
                    </label>
                  </div>
                ))}
              </div>

              {/* Stripe Payment Element */}
              {clientSecret && (
                <div className="bg-neutral-700/30 p-6 rounded-xl mt-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Enter Payment Details</h3>
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm />
                  </Elements>
                </div>
              )}
              
              {!clientSecret && (
                <div className="flex justify-center p-6">
                  <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              {/* Secure badge and guarantees */}
              <div className="mt-8 p-6 bg-neutral-700/30 rounded-xl">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                    <span className="text-gray-300">Secure Payment</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    <span className="text-gray-300">Money-back Guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <span className="text-gray-300">Instant Access</span>
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