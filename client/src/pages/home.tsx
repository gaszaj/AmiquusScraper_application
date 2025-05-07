import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import HowItWorks from "@/components/sections/how-it-works";
import Pricing from "@/components/sections/pricing";
import FaqSection from "@/components/sections/faq-section";
import Signup from "@/pages/signup";
import { useLocation } from "wouter";
import { useEffect, useRef } from "react";

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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero onGetStarted={scrollToSignup} />
        <Features />
        <HowItWorks />
        <Pricing onGetStarted={scrollToSignup} />
        <div id="signup-form" ref={signupRef}>
          <Signup embedded={true} />
        </div>
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
