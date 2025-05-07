import { Link } from "wouter";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-title font-bold mb-4">Amiquus</h4>
            <p className="text-neutral-400 mb-4">
              Your personal assistant for finding the perfect used car deal at the perfect time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-medium mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="/#features" className="text-neutral-400 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="/#pricing" className="text-neutral-400 hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="/#faq" className="text-neutral-400 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="/signup" className="text-neutral-400 hover:text-white transition-colors">Get Started</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-medium mb-4">Legal</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">GDPR Compliance</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-medium mb-4">Contact</h5>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex items-start">
                <Mail className="mt-1 mr-3 w-5" />
                <span>support@amiquus.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="mt-1 mr-3 w-5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 w-5" />
                <span>
                  123 Main Street<br />New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Amiquus. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="/about" className="text-neutral-400 hover:text-white transition-colors text-sm">
              About Us
            </Link>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Blog</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Careers</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
