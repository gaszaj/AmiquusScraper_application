import { useState, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSelector } from "@/components/language-selector";
import { UserProfile } from "@/components/user-profile";
import { SubscriptionCounter } from "@/components/SubscriptionCounter";
import { useToast } from "@/hooks/use-toast";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { isAuthenticated, login } = useAuth();
  const { toast } = useToast();
  
  // Test login for development purposes - removing actual login attempt
  const handleTestLogin = () => {
    // Navigate directly to test profile instead of trying to log in
    toast({
      title: "Development mode",
      description: "Use the Test Profile button to see profile functionality without login",
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Handle navigation with scroll to top
  const handleNavigation = useCallback((path: string) => {
    // If it's a hash link for the home page sections
    if (path.startsWith('/#')) {
      // First navigate to home
      window.location.href = '/';
      
      // Then after a small delay, scroll to the section
      setTimeout(() => {
        const sectionId = path.substring(2); // Remove /# to get just the ID
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If section not found, scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
      
      // Close mobile menu if open
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
      
      return true; // Indicate that we handled navigation
    }
    
    // For regular pages, just scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    
    return false; // Let wouter handle regular navigation
  }, [mobileMenuOpen]);

  return (
    <header className="bg-white dark:bg-neutral-900 fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-1 sm:gap-2">
              <div className="flex items-center">
                <svg className="size-6 sm:size-8 text-primary dark:text-[#ff0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>
                </svg>
                <svg className="size-3 sm:size-4 text-primary dark:text-[#ff0] -mt-3 -ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <span className="text-neutral-900 dark:text-white font-bold text-lg sm:text-xl">Amiquus</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/#features" 
              className={`text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-[#ff0] transition ${location === "/#features" ? "text-primary dark:text-[#ff0]" : ""}`}
              onClick={(e) => { e.preventDefault(); handleNavigation("/#features"); }}
            >
              Features
            </Link>
            <Link 
              href="/#how-it-works" 
              className={`text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-[#ff0] transition ${location === "/#how-it-works" ? "text-primary dark:text-[#ff0]" : ""}`}
              onClick={(e) => { e.preventDefault(); handleNavigation("/#how-it-works"); }}
            >
              How It Works
            </Link>
            <Link 
              href="/#pricing" 
              className={`text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-[#ff0] transition ${location === "/#pricing" ? "text-primary dark:text-[#ff0]" : ""}`}
              onClick={(e) => { e.preventDefault(); handleNavigation("/#pricing"); }}
            >
              Pricing
            </Link>
            <Link 
              href="/setup-alerts" 
              className={`text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-[#ff0] transition ${location === "/setup-alerts" ? "text-primary dark:text-[#ff0]" : ""}`}
              onClick={(e) => { e.preventDefault(); handleNavigation("/setup-alerts"); }}
            >
              Get Alerts
            </Link>
            <Link 
              href="/waitlist" 
              className={`text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-[#ff0] transition ${location === "/waitlist" ? "text-primary dark:text-[#ff0]" : ""}`}
              onClick={(e) => { e.preventDefault(); handleNavigation("/waitlist"); }}
            >
              Waitlist
            </Link>
            <Link 
              href="/faq" 
              className={`text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-[#ff0] transition ${location === "/faq" ? "text-primary dark:text-[#ff0]" : ""}`}
              onClick={(e) => { e.preventDefault(); handleNavigation("/faq"); }}
            >
              FAQ
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button type="button" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white" onClick={toggleMobileMenu}>
              <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* User menu and options */}
          <div className="hidden md:flex items-center gap-2">
            {/* Subscription Counter - moved to more prominent position */}
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-md px-2 sm:px-3 py-1 mr-2 sm:mr-3 flex items-center">
              <span className="hidden sm:inline text-xs mr-2 text-neutral-600 dark:text-neutral-400">Subscribers:</span>
              <SubscriptionCounter />
            </div>
            
            <ThemeToggle />
            <LanguageSelector />

            {/* Development test button - always visible */}
            <Link href="/test-profile">
              <Button
                variant="outline"
                size="sm"
                className="border-dashed border-green-500 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-950 hover:text-green-700 dark:hover:text-green-300 mr-2"
              >
                DEV: Test Profile
              </Button>
            </Link>

            {!isAuthenticated && (
              <>
                <div className="mx-2">
                  <Link href="/login" className="text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-[#ff0] transition">
                    Log in
                  </Link>
                </div>
                <Link href="/register">
                  <Button className="bg-primary hover:bg-primary-600 dark:bg-[#ff0] dark:hover:bg-yellow-300 text-white dark:text-neutral-900 font-medium">
                    Get Started
                  </Button>
                </Link>
              </>
            )}

            <UserProfile />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 border-t border-neutral-200 dark:border-neutral-700">
          <Link 
            href="/#features" 
            className="block px-3 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-[#ff0] transition" 
            onClick={(e) => { e.preventDefault(); handleNavigation("/#features"); }}
          >
            Features
          </Link>
          <Link 
            href="/#how-it-works" 
            className="block px-3 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-[#ff0] transition" 
            onClick={(e) => { e.preventDefault(); handleNavigation("/#how-it-works"); }}
          >
            How It Works
          </Link>
          <Link 
            href="/#pricing" 
            className="block px-3 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-[#ff0] transition" 
            onClick={(e) => { e.preventDefault(); handleNavigation("/#pricing"); }}
          >
            Pricing
          </Link>
          <Link 
            href="/setup-alerts" 
            className="block px-3 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-[#ff0] transition" 
            onClick={(e) => { e.preventDefault(); handleNavigation("/setup-alerts"); }}
          >
            Get Alerts
          </Link>
          <Link 
            href="/waitlist" 
            className="block px-3 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-[#ff0] transition" 
            onClick={(e) => { e.preventDefault(); handleNavigation("/waitlist"); }}
          >
            Waitlist
          </Link>
          <Link 
            href="/faq" 
            className="block px-3 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-[#ff0] transition" 
            onClick={(e) => { e.preventDefault(); handleNavigation("/faq"); }}
          >
            FAQ
          </Link>

          {/* Mobile subscription counter */}
          <div className="flex items-center px-3 py-2">
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-md px-3 py-2 flex items-center w-full">
              <span className="text-neutral-600 dark:text-neutral-400 text-sm mr-2">Subscribers:</span>
              <SubscriptionCounter />
            </div>
          </div>
          
          {/* Theme and Language in mobile menu */}
          <div className="flex items-center px-3 py-2 gap-2">
            <span className="text-neutral-600 dark:text-neutral-400 text-sm">Theme:</span>
            <ThemeToggle />
          </div>
          <div className="flex items-center px-3 py-2 gap-2">
            <span className="text-neutral-600 dark:text-neutral-400 text-sm">Language:</span>
            <LanguageSelector />
          </div>
          
          {!isAuthenticated && (
            <>
              <Link 
                href="/login" 
                className="block px-3 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-[#ff0] transition" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <Link 
                href="/register" 
                className="block px-3 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-[#ff0] transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
