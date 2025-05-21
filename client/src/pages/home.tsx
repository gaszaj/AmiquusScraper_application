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

export default function Home() {
  const [location] = useLocation();
  const signupRef = useRef<HTMLDivElement>(null);

  // Handle hash-based navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);

  // Scroll to signup form when clicking on CTA buttons
  const scrollToSignup = () => {
    if (signupRef.current) {
      signupRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <main>
        <Hero onGetStarted={scrollToSignup} />
        <div className="container mx-auto px-4 py-8">
          <LimitedAvailability />
        </div>
        <Features />
        <HowItWorks />
        <Pricing onGetStarted={scrollToSignup} />
        <div id="signup-form" ref={signupRef}>
          <Signup embedded={true} />
        </div>
        <FaqSection />
      </main>
    </>
  );
}
