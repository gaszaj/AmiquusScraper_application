import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/sections/features";
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
      <main className="flex-grow pt-16"> {/* Added top padding to account for fixed header height */}
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
