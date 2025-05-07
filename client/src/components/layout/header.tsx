import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bell, ChevronDown, Menu, Search, User } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: "/search", label: "Search Cars" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#faq", label: "FAQ" },
  ];

  return (
    <header className="bg-neutral-900 border-b border-neutral-800 fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <svg className="size-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>
              </svg>
              <span className="text-white font-bold text-xl">Amiquus</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-300 hover:text-accent transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-neutral-300 hover:text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-neutral-900 text-white border-neutral-800">
                <div className="pt-6 pb-4 space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 text-neutral-300 hover:text-accent transition"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  ))}
                  {!user && (
                    <>
                      <Link 
                        href="/login" 
                        className="block px-3 py-2 text-neutral-300 hover:text-accent transition"
                        onClick={closeMobileMenu}
                      >
                        Log in
                      </Link>
                      <Link 
                        href="/signup" 
                        className="block mt-4 bg-accent text-neutral-900 text-center px-3 py-2 rounded-md font-medium"
                        onClick={closeMobileMenu}
                      >
                        Get Started
                      </Link>
                    </>
                  )}
                  {user && (
                    <>
                      <Link 
                        href="/dashboard" 
                        className="block px-3 py-2 text-neutral-300 hover:text-accent transition"
                        onClick={closeMobileMenu}
                      >
                        Dashboard
                      </Link>
                      <a
                        href="#"
                        className="block px-3 py-2 text-neutral-300 hover:text-accent transition"
                        onClick={() => {
                          logout();
                          closeMobileMenu();
                        }}
                      >
                        Log out
                      </a>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* User menu */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <Button variant="ghost" size="icon" className="text-neutral-300 hover:text-accent transition">
                  <Bell className="size-6" />
                </Button>
                <div className="h-6 w-px bg-neutral-700"></div>
                <div className="flex items-center gap-2">
                  <Link href="/dashboard" className="text-neutral-300 hover:text-accent transition flex items-center gap-2">
                    <User className="size-6" />
                    <span>{user.firstName || user.username}</span>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link href="/login" className="text-neutral-300 hover:text-accent transition">
                  Login
                </Link>
                <Link href="/signup">
                  <Button className="bg-accent hover:bg-accent/90 text-neutral-900 font-medium">
                    Start Free Trial
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
