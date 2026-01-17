import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BellRing, Search, Bell, Car, MessageSquare } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import heroImage from "@/images/hero-image.webp"
import { currencySymbol } from "@shared/pricing";

interface HeroProps {
  onGetStarted?: () => void;
  onHowItWorks: () => void
}

export default function Hero({ onGetStarted, onHowItWorks }: HeroProps) {
   const { t } = useLanguage();
  
  return (
    <section className="relative bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white pt-24 pb-16 md:py-32 overflow-hidden">

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-primary/10 dark:bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:text-primary mb-6">
              <span className="mr-2">⚡</span>{t("hero.label")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-neutral-900 dark:text-white">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-neutral-600 dark:text-neutral-300 max-w-xl">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {onGetStarted ? (
                <Button 
                  onClick={onGetStarted} 
                  size="rounded-xl" 
                  className="bg-primary hover:bg-primary-600 text-white dark:bg-primary dark:hover:bg-primary-600 dark:text-neutral-900 shadow-lg shadow-primary/20 w-full sm:w-auto"
                >
                   {t("hero.button1")}
                </Button>
              ) : (
                <Link href="/setup-alerts">
                  <Button size="rounded-xl" className="bg-primary hover:bg-primary-600 text-white dark:bg-primary dark:hover:bg-primary-600 dark:text-neutral-900 shadow-lg shadow-primary/20 w-full sm:w-auto">
                     {t("hero.subtitle")}
                  </Button>
                </Link>
              )}
              
              <Link href="/#how-it-works">
                <Button size="rounded-xl" variant="outline" className="border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 w-full sm:w-auto"
                  onClick={onHowItWorks}  
                  >
                  {t("hero.button2")}
                </Button>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-neutral-600 dark:text-neutral-400 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{t("hero.trustIndicators.websites")}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{t("hero.trustIndicators.realtime")}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{t("hero.trustIndicators.noSetup")}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{t("hero.trustIndicators.cancelAnytime")}</span>
              </div>
            </div>
          </div>
          
          {/* Image & notification section */}
          <div className="relative mt-8 lg:mt-0">
            {/* Mobile notification cards - visible only on small screens */}
            <div className="lg:hidden space-y-4 mb-8">
              <div className="bg-white dark:bg-neutral-900/90 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 p-4 rounded-lg shadow-xl">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/20 dark:bg-primary/20 text-primary dark:text-primary p-2 rounded-full shrink-0">
                    <Bell size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-white">New Match!</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">BMW 3 Series, 2019, {currencySymbol}32,500 - Just listed on AutoTrader</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-neutral-900/90 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 p-4 rounded-lg shadow-xl">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600/20 dark:bg-primary-600/20 text-blue-600 dark:text-primary-400 p-2 rounded-full shrink-0">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-white">Telegram Alert</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">Mercedes C-Class, 2020, 30,000 miles - Price dropped by {currencySymbol}2,000</p>
                  </div>
                </div>
              </div>
            </div>
          
            {/* Desktop image and notification cards - hidden on small screens */}
            <div className="relative hidden lg:block">
              {/* Main image */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800">
                <img 
                  src={heroImage} 
                  alt="Hero image" 
                  className="w-full h-auto object-cover rounded-lg" 
                  loading="lazy"
                />
                
                {/* Notification card previews */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-neutral-900/90 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 p-4 rounded-lg shadow-xl max-w-xs">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/20 dark:bg-primary/20 text-primary dark:text-primary p-2 rounded-full">
                      <Bell size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-900 dark:text-white">New Match!</h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">BMW 3 Series, 2019, {currencySymbol}32,500 - Just listed on AutoTrader</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-5 -right-5 bg-white dark:bg-neutral-900/90 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 p-4 rounded-lg shadow-xl max-w-xs">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600/20 dark:bg-primary-600/20 text-blue-600 dark:text-primary-400 p-2 rounded-full">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-900 dark:text-white">Telegram Alert</h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">Mercedes C-Class, 2020, 30,000 miles - Price dropped by {currencySymbol}2,000</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-primary/30 to-primary/5 dark:from-primary/30 dark:to-primary/5 blur-3xl rounded-full"></div>
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-gradient-to-br from-blue-600/20 to-blue-800/5 dark:from-primary-600/20 dark:to-primary-800/5 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="#f9fafb" className="dark:fill-[#111111]"></path>
        </svg>
      </div>
    </section>
  );
}
