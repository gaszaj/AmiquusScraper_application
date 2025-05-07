import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Settings, BellRing, MousePointer, Radio, CarFront, Mail } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Set Your Preferences",
      description: "Select car brands, models, price range, and other criteria you're interested in monitoring.",
      imageUrl: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      icon: <Radio className="h-6 w-6" />,
      title: "Connect Telegram",
      description: "Link your Telegram account to receive instant notifications about new listings.",
      imageUrl: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      icon: <BellRing className="h-6 w-6" />,
      title: "Get Instant Notifications",
      description: "Receive alerts the moment a car matching your criteria appears on any of our monitored websites.",
      imageUrl: "https://images.unsplash.com/photo-1615706245682-e498e1900602?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      icon: <CarFront className="h-6 w-6" />,
      title: "Find Your Perfect Car",
      description: "Be the first to know about new listings and secure the best deals before anyone else.",
      imageUrl: "https://images.unsplash.com/photo-1549399542-7e8d2b0c6781?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-neutral-100 dark:bg-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">How Amiquus Works</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Set up once and let our automated system find the perfect car deal for you
          </p>
        </div>

        {/* Steps for medium and larger screens */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-neutral-900 shadow-md dark:shadow-none dark:border dark:border-neutral-800 transition-all duration-300 hover:shadow-xl dark:hover:border-neutral-700"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={step.imageUrl}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="relative p-6">
                {/* Step number */}
                <div className="absolute -top-8 left-6 bg-accent text-neutral-900 font-bold rounded-full w-10 h-10 flex items-center justify-center border-4 border-white dark:border-neutral-900">
                  {index + 1}
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full text-primary-600 dark:text-accent">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold dark:text-white">{step.title}</h3>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Timeline view for mobile */}
        <div className="md:hidden space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-accent/30 before:ml-0.5">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-10">
              <div className="absolute left-0 p-1 bg-accent text-neutral-900 font-bold rounded-full flex items-center justify-center text-xs w-7 h-7">
                {index + 1}
              </div>
              <div className="bg-white dark:bg-neutral-900 p-4 rounded-lg shadow dark:shadow-none dark:border dark:border-neutral-800">
                <h3 className="text-lg font-bold flex items-center gap-2 dark:text-white">
                  <span className="text-accent">{step.icon}</span>
                  {step.title}
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features highlight */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Why Choose Amiquus?
              </h3>
              <ul className="space-y-4">
                {[
                  "Track over 15 car listing websites simultaneously",
                  "Customizable search criteria with advanced filtering",
                  "Real-time notifications via Telegram",
                  "Automatic price drop and new listing alerts",
                  "Easy setup process that takes less than 5 minutes",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 bg-accent/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-primary-50">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/service">
                  <Button size="lg" variant="accent" className="shadow-lg shadow-accent/20">
                    Start Your Free Trial
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative h-80 overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600705722074-a5bd385dcc1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="Person receiving car notification on phone" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                <div className="flex items-start gap-3">
                  <div className="bg-accent p-2 rounded-full">
                    <Mail className="h-5 w-5 text-neutral-900" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">New Match Found!</h4>
                    <p className="text-sm text-white/80 mt-1">Audi A4, 2021, 15,000 miles, $29,900</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}