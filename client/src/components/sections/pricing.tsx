import { Check, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingProps {
  onGetStarted: () => void;
}

export default function Pricing({ onGetStarted }: PricingProps) {
  const includedFeatures = [
    "One website monitoring",
    "Hourly updates",
    "Unlimited filters",
    "Telegram notifications"
  ];

  const addOns = [
    { name: "Each additional website", price: 4.99 },
    { name: "30-minute updates", price: 2.99 },
    { name: "15-minute updates", price: 5.99 },
    { name: "5-minute updates", price: 9.99 },
    { name: "1-minute updates", price: 14.99 }
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-title font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Our pricing is based on your specific needs. Start with a base package and customize it to fit your requirements.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-neutral-50 rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-title font-bold mb-6">Base Package: $9.99/month</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {includedFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-secondary-500 mt-1 mr-2 h-5 w-5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Add-ons:</h4>
                <ul className="space-y-3">
                  {addOns.map((addon, index) => (
                    <li key={index} className="flex items-start justify-between">
                      <div className="flex items-start">
                        <Plus className="text-accent-500 mt-1 mr-2 h-5 w-5" />
                        <span>{addon.name}</span>
                      </div>
                      <span className="font-medium">${addon.price.toFixed(2)}/mo</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-neutral-100 p-4 rounded-lg">
              <p className="text-center text-neutral-600 text-sm">
                All plans include unlimited search configurations and easy subscription management.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Button 
            onClick={onGetStarted}
            className="bg-primary-600 hover:bg-primary-700 px-8 py-3"
            size="lg"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
}
