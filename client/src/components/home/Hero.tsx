import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BellRing, Search, Bell, Car, MessageSquare } from "lucide-react";

interface HeroProps {
  onGetStarted?: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-neutral-950 via-neutral-900 to-primary-950 text-white pt-24 pb-16 md:py-32 overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-primary-600/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-40 h-40 rounded-full bg-accent/10 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-6">
              <span className="mr-2">⚡</span> Track used car listings in real-time
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-300">
              Never Miss Your Perfect Car Deal Again
            </h1>
            <p className="text-lg md:text-xl mb-8 text-neutral-300 max-w-xl">
              Amiquus alerts you instantly when your dream car becomes available across multiple car listing websites. Get notifications via Telegram the moment a match is found.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {onGetStarted ? (
                <Button 
                  onClick={onGetStarted} 
                  size="rounded-xl" 
                  variant="accent" 
                  className="shadow-lg shadow-accent/20 w-full sm:w-auto"
                >
                  Start Free Trial
                </Button>
              ) : (
                <Link href="/service">
                  <Button size="rounded-xl" variant="accent" className="shadow-lg shadow-accent/20 w-full sm:w-auto">
                    Start Free Trial
                  </Button>
                </Link>
              )}
              <Link href="/#how-it-works">
                <Button size="rounded-xl" variant="outline" className="border-neutral-700 text-white hover:bg-neutral-800 w-full sm:w-auto">
                  See How It Works
                </Button>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-neutral-400 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>15+ websites tracked</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Real-time alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>No setup required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
          
          {/* Image & notification section */}
          <div className="relative hidden lg:block">
            {/* Main image */}
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border border-neutral-800">
              <img 
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800&q=80" 
                alt="Luxury sports car in showroom" 
                className="w-full h-auto object-cover rounded-lg" 
                loading="lazy"
              />
              
              {/* Notification card previews */}
              <div className="absolute -bottom-6 -left-6 bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 p-4 rounded-lg shadow-xl max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="bg-accent/20 text-accent p-2 rounded-full">
                    <Bell size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">New Match!</h4>
                    <p className="text-sm text-neutral-300 mt-1">BMW 3 Series, 2019, $32,500 - Just listed on AutoTrader</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-5 -right-5 bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 p-4 rounded-lg shadow-xl max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="bg-primary-600/20 text-primary-400 p-2 rounded-full">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Telegram Alert</h4>
                    <p className="text-sm text-neutral-300 mt-1">Mercedes C-Class, 2020, 30,000 miles - Price dropped by $2,000</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-accent/30 to-accent/5 blur-3xl rounded-full"></div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-gradient-to-br from-primary-600/20 to-primary-800/5 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="#111111"></path>
        </svg>
      </div>
    </section>
  );
}
