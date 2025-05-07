import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/hooks/useSubscription";

interface Website {
  id: string;
  name: string;
  price: number;
}

interface UpdateFrequency {
  id: string;
  name: string;
  minutes: number;
  price: number;
}

const websites: Website[] = [
  { id: "autotrader", name: "AutoTrader", price: 0 }, // Included in base price
  { id: "cargurus", name: "CarGurus", price: 4.99 },
  { id: "cars", name: "Cars.com", price: 4.99 },
  { id: "facebook", name: "Facebook Marketplace", price: 4.99 },
];

const updateFrequencies: UpdateFrequency[] = [
  { id: "60", name: "Every hour (Default)", minutes: 60, price: 0 },
  { id: "30", name: "Every 30 minutes", minutes: 30, price: 2.99 },
  { id: "15", name: "Every 15 minutes", minutes: 15, price: 5.99 },
  { id: "5", name: "Every 5 minutes", minutes: 5, price: 9.99 },
  { id: "1", name: "Every minute (Near real-time)", minutes: 1, price: 14.99 },
];

export interface WebsiteSelectionFormData {
  selectedWebsites: string[];
  facebookUrl?: string;
  updateFrequency: string;
}

interface WebsiteSelectionFormProps {
  onDataChange: (data: WebsiteSelectionFormData) => void;
  initialData?: Partial<WebsiteSelectionFormData>;
}

export default function WebsiteSelectionForm({ 
  onDataChange, 
  initialData
}: WebsiteSelectionFormProps) {
  const [selectedWebsites, setSelectedWebsites] = useState<string[]>(
    initialData?.selectedWebsites || ["autotrader"]
  );
  const [facebookUrl, setFacebookUrl] = useState<string>(
    initialData?.facebookUrl || ""
  );
  const [updateFrequency, setUpdateFrequency] = useState<string>(
    initialData?.updateFrequency || "60"
  );
  const [showFacebookField, setShowFacebookField] = useState<boolean>(
    selectedWebsites.includes("facebook")
  );
  
  const { updatePriceCalculation } = useSubscription();

  useEffect(() => {
    setShowFacebookField(selectedWebsites.includes("facebook"));
  }, [selectedWebsites]);

  useEffect(() => {
    // Calculate additional websites (first one is included in base price)
    const additionalWebsites = selectedWebsites.length > 1 
      ? selectedWebsites.slice(1).map(id => {
          const website = websites.find(w => w.id === id);
          return {
            id,
            price: website ? website.price : 0
          };
        })
      : [];
    
    // Find selected frequency
    const frequency = updateFrequencies.find(f => f.id === updateFrequency);
    
    // Update pricing in subscription context
    updatePriceCalculation({
      websites: additionalWebsites,
      frequency: frequency ? {
        id: frequency.id,
        name: frequency.name,
        price: frequency.price
      } : undefined
    });

    // Notify parent component of data changes
    onDataChange({
      selectedWebsites,
      facebookUrl: showFacebookField ? facebookUrl : undefined,
      updateFrequency
    });
  }, [selectedWebsites, facebookUrl, updateFrequency, showFacebookField, onDataChange, updatePriceCalculation]);

  const handleWebsiteChange = (websiteId: string, checked: boolean) => {
    if (checked) {
      setSelectedWebsites(prev => [...prev, websiteId]);
    } else {
      setSelectedWebsites(prev => prev.filter(id => id !== websiteId));
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h4 className="text-lg font-medium mb-3">Select Websites to Monitor</h4>
        <p className="text-neutral-600 mb-4">Choose which websites you want us to monitor for new car listings.</p>
        
        <div className="space-y-4">
          {websites.map((website) => (
            <div 
              key={website.id} 
              className="flex items-center p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
            >
              <Checkbox 
                id={`website-${website.id}`} 
                checked={selectedWebsites.includes(website.id)}
                onCheckedChange={(checked) => handleWebsiteChange(website.id, checked as boolean)}
              />
              <Label 
                htmlFor={`website-${website.id}`} 
                className="ml-3 flex-1 text-neutral-700 cursor-pointer"
              >
                {website.name}
              </Label>
              <span className="text-neutral-500 text-sm">
                {website.price === 0 ? "Included" : `+$${website.price.toFixed(2)}/mo`}
              </span>
            </div>
          ))}
        </div>
        
        {showFacebookField && (
          <div className="mt-4 p-4 border border-neutral-200 rounded-lg bg-neutral-50">
            <Label htmlFor="facebook-url" className="block text-sm font-medium text-neutral-700 mb-1">
              Facebook Marketplace URL
            </Label>
            <Input 
              id="facebook-url" 
              type="url" 
              placeholder="Paste your Facebook Marketplace search URL"
              value={facebookUrl}
              onChange={(e) => setFacebookUrl(e.target.value)}
              className="mb-2"
            />
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="facebook-instructions">
                <AccordionTrigger className="text-primary-600 text-sm py-2">
                  How to get this URL
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-sm text-neutral-600 p-3 bg-neutral-100 rounded-md">
                    <p className="font-medium">To get your Facebook Marketplace URL:</p>
                    <ol className="list-decimal pl-5 mt-2 space-y-1">
                      <li>Go to Facebook Marketplace</li>
                      <li>Search for cars with your desired filters</li>
                      <li>Copy the entire URL from your browser's address bar</li>
                    </ol>
                    <Button variant="link" className="mt-2 p-0 h-auto text-primary-600">
                      Watch video tutorial
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}
      </div>
      
      <div>
        <h4 className="text-lg font-medium mb-3">Update Frequency</h4>
        <p className="text-neutral-600 mb-4">How often would you like us to check for new listings?</p>
        
        <RadioGroup 
          value={updateFrequency} 
          onValueChange={setUpdateFrequency}
          className="space-y-3"
        >
          {updateFrequencies.map((frequency) => (
            <div key={frequency.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <RadioGroupItem id={`freq-${frequency.id}`} value={frequency.id} />
                <Label htmlFor={`freq-${frequency.id}`} className="ml-3 text-neutral-700">
                  {frequency.name}
                </Label>
              </div>
              <span className="text-neutral-500 text-sm">
                {frequency.price === 0 ? "Included" : `+$${frequency.price.toFixed(2)}/mo`}
              </span>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
