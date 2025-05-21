import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSelector } from "@/components/language-selector";
import { UserProfile } from "@/components/user-profile";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { isAuthenticated } = useAuth();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-neutral-900 dark:bg-neutral-900 fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center">
                <svg className="size-8 text-[#ff0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>
                </svg>
                <svg className="size-4 text-[#ff0] -mt-3 -ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <span className="text-white font-bold text-xl">Amiquus</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/#features" 
              className={`text-neutral-300 hover:text-[#ff0] transition ${location === "/#features" ? "text-[#ff0]" : ""}`}
            >
              Features
            </Link>
            <Link 
              href="/#how-it-works" 
              className={`text-neutral-300 hover:text-[#ff0] transition ${location === "/#how-it-works" ? "text-[#ff0]" : ""}`}
            >
              How It Works
            </Link>
            <Link 
              href="/#pricing" 
              className={`text-neutral-300 hover:text-[#ff0] transition ${location === "/#pricing" ? "text-[#ff0]" : ""}`}
            >
              Pricing
            </Link>
            <Link 
              href="/setup-alerts" 
              className={`text-neutral-300 hover:text-[#ff0] transition ${location === "/setup-alerts" ? "text-[#ff0]" : ""}`}
            >
              Get Alerts
            </Link>
            <Link 
              href="/faq" 
              className={`text-neutral-300 hover:text-[#ff0] transition ${location === "/faq" ? "text-[#ff0]" : ""}`}
            >
              FAQ
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button type="button" className="text-neutral-300 hover:text-white" onClick={toggleMobileMenu}>
              <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* User menu and options */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <LanguageSelector />

            {!isAuthenticated && (
              <>
                <div className="mx-2">
                  <Link href="/login" className="text-neutral-300 hover:text-[#ff0] transition">
                    Log in
                  </Link>
                </div>
                <Link href="/register">
                  <Button className="bg-[#ff0] text-neutral-900 hover:bg-yellow-300 font-medium">
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
        <div className="px-2 pt-2 pb-3 space-y-1 border-t border-neutral-700">
          <Link 
            href="/#features" 
            className="block px-3 py-2 text-neutral-300 hover:text-[#ff0] transition" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            href="/#how-it-works" 
            className="block px-3 py-2 text-neutral-300 hover:text-[#ff0] transition" 
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link 
            href="/#pricing" 
            className="block px-3 py-2 text-neutral-300 hover:text-[#ff0] transition" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            href="/setup-alerts" 
            className="block px-3 py-2 text-neutral-300 hover:text-[#ff0] transition" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Alerts
          </Link>
          <Link 
            href="/faq" 
            className="block px-3 py-2 text-neutral-300 hover:text-[#ff0] transition" 
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </Link>

          {/* Theme and Language in mobile menu */}
          <div className="flex items-center px-3 py-2 gap-2">
            <span className="text-neutral-400 text-sm">Theme:</span>
            <ThemeToggle />
          </div>
          <div className="flex items-center px-3 py-2 gap-2">
            <span className="text-neutral-400 text-sm">Language:</span>
            <LanguageSelector />
          </div>
          
          {!isAuthenticated && (
            <>
              <Link 
                href="/login" 
                className="block px-3 py-2 text-neutral-300 hover:text-[#ff0] transition" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <Link 
                href="/register" 
                className="block px-3 py-2 text-neutral-300 hover:text-[#ff0] transition"
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
