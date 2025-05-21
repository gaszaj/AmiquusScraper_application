import { Search, Bell, Sliders, Clock, Globe, UserCircle } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Search className="text-xl" />,
      title: "Multi-Site Tracking",
      description: "Monitor multiple car listing websites simultaneously without having to check each one manually."
    },
    {
      icon: <Bell className="text-xl" />,
      title: "Instant Notifications",
      description: "Receive immediate alerts via Telegram when a car matching your criteria is listed for sale."
    },
    {
      icon: <Sliders className="text-xl" />,
      title: "Custom Filters",
      description: "Set precise criteria including brand, model, year, mileage, and price range to find exactly what you want."
    },
    {
      icon: <Clock className="text-xl" />,
      title: "Customizable Frequency",
      description: "Choose how often we check for new listings, from hourly updates to real-time monitoring."
    },
    {
      icon: <Globe className="text-xl" />,
      title: "Multiple Language Support",
      description: "Receive notifications in your preferred language for easier understanding of listings."
    },
    {
      icon: <UserCircle className="text-xl" />,
      title: "Easy Account Management",
      description: "Manage multiple search profiles and modify your subscription settings with a few clicks."
    }
  ];

  return (
    <section id="features" className="py-16 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-title font-bold mb-4 text-neutral-900 dark:text-white">Why Choose Amiquus?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Save time and never miss out on your perfect car with our automated tracking service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-neutral-200 dark:border-neutral-700"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary/20 text-primary dark:text-primary rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-title font-semibold mb-3 text-neutral-900 dark:text-white">{feature.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
