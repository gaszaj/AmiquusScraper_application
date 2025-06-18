import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/components/language-provider";


const SetupForm = () => {
  const { t } = useLanguage();
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return null;
    }
    setSubmitting(true);

    const { error } = await stripe.confirmSetup({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/dashboard`, // ✅ corrected
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      toast({
        variant: "destructive",
        title: t("payment.toast.error.title"),
        description: error.message || t("payment.toast.error.fallback")
      });
      setErrorMessage(error.message || t("payment.toast.error.fallback"));
      setSubmitting(false);
    } else {
      toast({
        title: t("payment.toast.success.title"),
        description: t("payment.toast.success.description")
      });
      setErrorMessage(null);
      setSubmitting(false);
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form className="min-h-[calc(100vh-90px)] flex flex-col items-center justify-center px-4 py-8" onSubmit={handleSubmit}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center w-full max-w-lg mx-auto space-y-8"
      >
        <PaymentElement />
        {/* Show error message to your customers */}
        {errorMessage && <div>{errorMessage}</div>}
        <Button disabled={!stripe || submitting} type="submit">
          {submitting ? t("payment.button.processing") : t("payment.button.submit")}
        </Button>
      </motion.div>
    </form>
  );
};

export default SetupForm;
