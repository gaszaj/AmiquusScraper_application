import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-neutral-900 fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <svg className="size-8 text-[#ff0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
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

          {/* User menu */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Link href="/dashboard" className="text-neutral-300 hover:text-[#ff0] transition">
                  Dashboard
                </Link>
                <div className="h-6 w-px bg-neutral-700"></div>
                <button onClick={logout} className="flex items-center gap-2 text-neutral-300 hover:text-[#ff0] transition">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <span>{user?.username || "My Account"}</span>
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-neutral-300 hover:text-[#ff0] transition">
                  Log in
                </Link>
                <div className="h-6 w-px bg-neutral-700"></div>
                <Link href="/register">
                  <button className="bg-[#ff0] text-neutral-900 hover:bg-yellow-300 px-4 py-2 rounded font-medium transition">
                    Get Started
                  </button>
                </Link>
              </>
            )}
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
          
          {isAuthenticated ? (
            <>
              <Link 
                href="/dashboard" 
                className="block px-3 py-2 text-neutral-300 hover:text-[#ff0] transition" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <button 
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-neutral-300 hover:text-[#ff0] transition"
              >
                Log out
              </button>
            </>
          ) : (
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
