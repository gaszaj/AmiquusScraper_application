import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckIcon, PlusIcon } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-title font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">Our pricing is based on your specific needs. Start with a base package and customize it to fit your requirements.</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-neutral-50 rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-title font-bold mb-6">Base Package: $9.99/month</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckIcon className="text-secondary-500 h-5 w-5 mt-0.5 mr-2" />
                    <span>One website monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="text-secondary-500 h-5 w-5 mt-0.5 mr-2" />
                    <span>Hourly updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="text-secondary-500 h-5 w-5 mt-0.5 mr-2" />
                    <span>Unlimited filters</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="text-secondary-500 h-5 w-5 mt-0.5 mr-2" />
                    <span>Telegram notifications</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Add-ons:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start justify-between">
                    <div className="flex items-start">
                      <PlusIcon className="text-yellow-500 h-5 w-5 mt-0.5 mr-2" />
                      <span>Each additional website</span>
                    </div>
                    <span className="font-medium">$4.99/mo</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <div className="flex items-start">
                      <PlusIcon className="text-yellow-500 h-5 w-5 mt-0.5 mr-2" />
                      <span>30-minute updates</span>
                    </div>
                    <span className="font-medium">$2.99/mo</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <div className="flex items-start">
                      <PlusIcon className="text-yellow-500 h-5 w-5 mt-0.5 mr-2" />
                      <span>15-minute updates</span>
                    </div>
                    <span className="font-medium">$5.99/mo</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <div className="flex items-start">
                      <PlusIcon className="text-yellow-500 h-5 w-5 mt-0.5 mr-2" />
                      <span>5-minute updates</span>
                    </div>
                    <span className="font-medium">$9.99/mo</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <div className="flex items-start">
                      <PlusIcon className="text-yellow-500 h-5 w-5 mt-0.5 mr-2" />
                      <span>1-minute updates</span>
                    </div>
                    <span className="font-medium">$14.99/mo</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-neutral-100 p-4 rounded-lg">
              <p className="text-center text-neutral-600 text-sm">All plans include unlimited search configurations and easy subscription management.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/service">
            <Button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-6 rounded-lg">
              Get Started Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
