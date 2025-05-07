import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: "/#features", label: "Features" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#faq", label: "FAQ" },
  ];

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
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className={`text-neutral-600 hover:text-primary-600 transition-colors font-medium`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link href="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <Button 
                  variant="default" 
                  onClick={() => logout()}
                >
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Link href="/login" className="hidden md:inline-block text-neutral-700 font-medium hover:text-primary-600 transition-colors">
                  Log in
                </Link>
                <Link href="/signup">
                  <Button className="bg-primary-600 hover:bg-primary-700">Get Started</Button>
                </Link>
              </>
            )}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="pt-6 pb-4 space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 text-neutral-600 font-medium hover:bg-neutral-100 rounded-md"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </a>
                  ))}
                  {!user && (
                    <Link href="/login" className="block px-3 py-2 text-neutral-600 font-medium hover:bg-neutral-100 rounded-md"
                      onClick={closeMobileMenu}>
                      Log in
                    </Link>
                  )}
                  {user && (
                    <>
                      <Link href="/dashboard" className="block px-3 py-2 text-neutral-600 font-medium hover:bg-neutral-100 rounded-md"
                        onClick={closeMobileMenu}>
                        Dashboard
                      </Link>
                      <a
                        href="#"
                        className="block px-3 py-2 text-neutral-600 font-medium hover:bg-neutral-100 rounded-md"
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
        </div>
      </div>
    </header>
  );
}
