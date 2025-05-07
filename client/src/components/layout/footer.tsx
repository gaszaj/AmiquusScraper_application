import { Link } from "wouter";
import { 
  Facebook, 
  Twitter, 
  Linkedin,
  Mail, 
  Phone, 
  MapPin
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-24 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg className="size-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>
              </svg>
              <span className="text-2xl font-bold">
                Ami<span className="text-accent">quus</span>
              </span>
            </Link>
            <p className="text-neutral-400 mb-6">
              Automated car listing monitoring service for dealerships across South-Eastern Europe. Get instant notifications for new listings matching your criteria.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-accent transition">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent transition">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent transition">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/#features" className="text-neutral-400 hover:text-accent transition">Features</a>
              </li>
              <li>
                <a href="/#pricing" className="text-neutral-400 hover:text-accent transition">Pricing</a>
              </li>
              <li>
                <a href="/#testimonials" className="text-neutral-400 hover:text-accent transition">Testimonials</a>
              </li>
              <li>
                <a href="/#faq" className="text-neutral-400 hover:text-accent transition">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy" className="text-neutral-400 hover:text-accent transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-neutral-400 hover:text-accent transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-accent transition">Cookie Policy</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/#contact" className="text-neutral-400 hover:text-accent transition">Contact</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-accent transition">Knowledge Base</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-accent transition">System Status</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Amiquus. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <img src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png" alt="PayPal" className="h-6 opacity-75 hover:opacity-100 transition" />
              <img src="https://www.mastercard.com/content/dam/public/mastercardcom/na/us/en/homepage/Home/mc-logo-52.svg" alt="Mastercard" className="h-6 opacity-75 hover:opacity-100 transition" />
              <img src="https://www.visa.com/images/merchantoffers/card-image.png" alt="Visa" className="h-6 opacity-75 hover:opacity-100 transition" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
