import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/sections/features";
import Pricing from "@/components/sections/pricing";
import FaqSection from "@/components/sections/faq-section";
import LimitedAvailability from "@/components/home/LimitedAvailability";
import Signup from "@/pages/signup";
import { useLocation } from "wouter";
import { useEffect, useRef } from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import { useLanguage } from "@/components/language-provider";

export default function Home() {
  const { t } = useLanguage();
  const [location] = useLocation();
  const signupRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);

  // Handle hash-based navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location]);

  // Scroll to signup form when clicking on CTA buttons
  const scrollToSignup = () => {
    if (signupRef.current) {
      signupRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHowItWorks = () => {
    if (howItWorksRef.current) {
      howItWorksRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // run /api/test/invoice-payment-failed

  // const testInvoicePaymentFailed = async () => {
  //   const response = await fetch("/api/test/invoice-payment-failed", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // }

  return (
    <PageWrapper noPadding>
      <Hero onGetStarted={scrollToSignup} onHowItWorks={scrollToHowItWorks} />
      {/* <button
        onClick={testInvoicePaymentFailed}
        className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
        Test Invoice Payment Failed
      </button> */}
      <div className="container mx-auto px-4 py-8">
        <LimitedAvailability />
      </div>
      <Features />
      <div id="how-it-works" ref={howItWorksRef}>
        <HowItWorks />
      </div>
      <Pricing onGetStarted={scrollToSignup} />
      <div id="signup-form" ref={signupRef}>
        <Signup embedded={true} />
      </div>
      <FaqSection />
    </PageWrapper>
  );
}
