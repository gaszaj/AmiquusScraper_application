import { ServiceCard } from "@/components/ui/service-card";
import { 
  Search, 
  Bell, 
  Sliders, 
  Clock, 
  Globe, 
  UserCircle 
} from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-title font-bold mb-4">Why Choose Amiquus?</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">Save time and never miss out on your perfect car with our automated tracking service.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Search className="h-6 w-6" />}
            title="Multi-Site Tracking"
            description="Monitor multiple car listing websites simultaneously without having to check each one manually."
          />
          
          <ServiceCard 
            icon={<Bell className="h-6 w-6" />}
            title="Instant Notifications"
            description="Receive immediate alerts via Telegram when a car matching your criteria is listed for sale."
          />
          
          <ServiceCard 
            icon={<Sliders className="h-6 w-6" />}
            title="Custom Filters"
            description="Set precise criteria including brand, model, year, mileage, and price range to find exactly what you want."
          />
          
          <ServiceCard 
            icon={<Clock className="h-6 w-6" />}
            title="Customizable Frequency"
            description="Choose how often we check for new listings, from hourly updates to real-time monitoring."
          />
          
          <ServiceCard 
            icon={<Globe className="h-6 w-6" />}
            title="Multiple Language Support"
            description="Receive notifications in your preferred language for easier understanding of listings."
          />
          
          <ServiceCard 
            icon={<UserCircle className="h-6 w-6" />}
            title="Easy Account Management"
            description="Manage multiple search profiles and modify your subscription settings with a few clicks."
          />
        </div>
      </div>
    </section>
  );
}
