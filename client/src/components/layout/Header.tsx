import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-primary-600 font-title font-bold text-2xl">Amiquus</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/#features" className={`text-neutral-600 hover:text-primary-600 transition-colors font-medium ${location === "/#features" ? "text-primary-600" : ""}`}>
              Features
            </Link>
            <Link href="/#how-it-works" className={`text-neutral-600 hover:text-primary-600 transition-colors font-medium ${location === "/#how-it-works" ? "text-primary-600" : ""}`}>
              How It Works
            </Link>
            <Link href="/#pricing" className={`text-neutral-600 hover:text-primary-600 transition-colors font-medium ${location === "/#pricing" ? "text-primary-600" : ""}`}>
              Pricing
            </Link>
            <Link href="/faq" className={`text-neutral-600 hover:text-primary-600 transition-colors font-medium ${location === "/faq" ? "text-primary-600" : ""}`}>
              FAQ
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link href="/dashboard" className="hidden md:inline-block text-neutral-700 font-medium hover:text-primary-600 transition-colors">
                  Dashboard
                </Link>
                <Button 
                  onClick={logout} 
                  variant="ghost"
                  className="hidden md:inline-block text-neutral-700 font-medium hover:text-primary-600 transition-colors"
                >
                  Log out
                </Button>
              </>
            ) : (
              <Link href="/login" className="hidden md:inline-block text-neutral-700 font-medium hover:text-primary-600 transition-colors">
                Log in
              </Link>
            )}
            
            <Link href={isAuthenticated ? "/service" : "/register"}>
              <Button className="bg-primary-600 text-white hover:bg-primary-700 transition-colors">
                {isAuthenticated ? "New Subscription" : "Get Started"}
              </Button>
            </Link>
            
            <button className="md:hidden text-neutral-700" onClick={toggleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-4 space-y-1 border-t border-neutral-200">
            <Link href="/#features" className="block px-3 py-2 text-neutral-600 font-medium hover:bg-neutral-100 rounded-md" onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>
            <Link href="/#how-it-works" className="block px-3 py-2 text-neutral-600 font-medium hover:bg-neutral-100 rounded-md" onClick={() => setMobileMenuOpen(false)}>
              How It Works
            </Link>
            <Link href="/#pricing" className="block px-3 py-2 text-neutral-600 font-medium hover:bg-neutral-100 rounded-md" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="/faq" className="block px-3 py-2 text-neutral-600 font-medium hover:bg-neutral-100 rounded-md" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link href="/dashboard" className="block px-3 py-2 text-neutral-600 font-medium hover:bg-neutral-100 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                  Dashboard
                </Link>
                <button 
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-neutral-600 font-medium hover:bg-neutral-100 rounded-md"
                >
                  Log out
                </button>
              </>
            ) : (
              <Link href="/login" className="block px-3 py-2 text-neutral-600 font-medium hover:bg-neutral-100 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                Log in
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
