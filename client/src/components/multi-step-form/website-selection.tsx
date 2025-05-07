import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { SubscriptionFormData } from "@shared/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { HelpCircle } from "lucide-react";

interface WebsiteSelectionProps {
  formData: Partial<SubscriptionFormData>;
  updateFormData: (data: Partial<SubscriptionFormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const websiteSelectionSchema = z.object({
  websitesSelected: z.array(z.string()).min(1, "Select at least one website"),
  facebookMarketplaceUrl: z.string().optional(),
  updateFrequency: z.enum(['hourly', '30min', '15min', '5min', '1min']),
});

type WebsiteSelectionFormData = z.infer<typeof websiteSelectionSchema>;

export default function WebsiteSelection({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}: WebsiteSelectionProps) {
  const [showFacebookUrlField, setShowFacebookUrlField] = useState(
    formData.websitesSelected?.includes("facebook") || false
  );
  const [fbInstructionsOpen, setFbInstructionsOpen] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch } = useForm<WebsiteSelectionFormData>({
    resolver: zodResolver(websiteSelectionSchema),
    defaultValues: {
      websitesSelected: formData.websitesSelected || [],
      facebookMarketplaceUrl: formData.facebookMarketplaceUrl || "",
      updateFrequency: formData.updateFrequency || 'hourly',
    },
  });

  const watchWebsites = watch("websitesSelected");

  const onSubmit = (data: WebsiteSelectionFormData) => {
    updateFormData(data);
    nextStep();
  };

  const handleWebsiteChange = (checked: boolean, value: string) => {
    let updatedWebsites = [...(watchWebsites || [])];
    
    if (checked) {
      updatedWebsites.push(value);
    } else {
      updatedWebsites = updatedWebsites.filter(site => site !== value);
    }

    if (value === "facebook") {
      setShowFacebookUrlField(checked);
    }
  };

  return (
    <div className="form-step">
      <h3 className="text-xl font-title font-semibold mb-6">Select Websites to Monitor</h3>
      <p className="text-neutral-600 mb-6">
        Choose which websites you want us to monitor for new car listings.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4 mb-8">
          <div className="flex items-center p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
            <Checkbox 
              id="website-autotrader" 
              {...register("websitesSelected")} 
              value="autotrader"
              onCheckedChange={(checked) => handleWebsiteChange(checked as boolean, "autotrader")}
              defaultChecked={formData.websitesSelected?.includes("autotrader")}
              className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500" 
            />
            <Label htmlFor="website-autotrader" className="ml-3 flex-1 text-neutral-700 cursor-pointer">
              AutoTrader
            </Label>
            <span className="text-neutral-500 text-sm">Included</span>
          </div>

          <div className="flex items-center p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
            <Checkbox 
              id="website-cargurus" 
              {...register("websitesSelected")} 
              value="cargurus"
              onCheckedChange={(checked) => handleWebsiteChange(checked as boolean, "cargurus")}
              defaultChecked={formData.websitesSelected?.includes("cargurus")}
              className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500" 
            />
            <Label htmlFor="website-cargurus" className="ml-3 flex-1 text-neutral-700 cursor-pointer">
              CarGurus
            </Label>
            <span className="text-neutral-500 text-sm">+$4.99/mo</span>
          </div>

          <div className="flex items-center p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
            <Checkbox 
              id="website-cars" 
              {...register("websitesSelected")} 
              value="cars"
              onCheckedChange={(checked) => handleWebsiteChange(checked as boolean, "cars")}
              defaultChecked={formData.websitesSelected?.includes("cars")}
              className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500" 
            />
            <Label htmlFor="website-cars" className="ml-3 flex-1 text-neutral-700 cursor-pointer">
              Cars.com
            </Label>
            <span className="text-neutral-500 text-sm">+$4.99/mo</span>
          </div>

          <div className="flex items-center p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
            <Checkbox 
              id="website-facebook" 
              {...register("websitesSelected")} 
              value="facebook"
              onCheckedChange={(checked) => handleWebsiteChange(checked as boolean, "facebook")}
              defaultChecked={formData.websitesSelected?.includes("facebook")}
              className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500" 
            />
            <Label htmlFor="website-facebook" className="ml-3 flex-1 text-neutral-700 cursor-pointer">
              Facebook Marketplace
            </Label>
            <span className="text-neutral-500 text-sm">+$4.99/mo</span>
          </div>

          {showFacebookUrlField && (
            <div className="mt-4 p-4 border border-neutral-200 rounded-lg bg-neutral-50">
              <Label htmlFor="facebook-url" className="block text-sm font-medium text-neutral-700 mb-1">
                Facebook Marketplace URL
              </Label>
              <Input
                id="facebook-url"
                type="url"
                {...register("facebookMarketplaceUrl")}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                placeholder="Paste your Facebook Marketplace search URL"
              />
              <div className="mt-2">
                <Collapsible open={fbInstructionsOpen} onOpenChange={setFbInstructionsOpen}>
                  <CollapsibleTrigger asChild>
                    <Button variant="link" className="text-primary-600 text-sm flex items-center p-0 h-auto">
                      <HelpCircle className="mr-1 h-4 w-4" /> How to get this URL
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 text-sm text-neutral-600 p-3 bg-neutral-100 rounded-md">
                    <p className="font-medium">To get your Facebook Marketplace URL:</p>
                    <ol className="list-decimal pl-5 mt-2 space-y-1">
                      <li>Go to Facebook Marketplace</li>
                      <li>Search for cars with your desired filters</li>
                      <li>Copy the entire URL from your browser's address bar</li>
                    </ol>
                    <p className="mt-2">
                      <a href="#" className="text-primary-600 underline">
                        Watch video tutorial
                      </a>
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          )}
        </div>

        {errors.websitesSelected && (
          <p className="mt-1 mb-4 text-sm text-red-500">{errors.websitesSelected.message}</p>
        )}

        <div className="mb-8">
          <h4 className="text-lg font-medium mb-3">Update Frequency</h4>
          <p className="text-neutral-600 mb-4">
            How often would you like us to check for new listings?
          </p>

          <RadioGroup 
            defaultValue={formData.updateFrequency || "hourly"}
            {...register("updateFrequency")}
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <RadioGroupItem id="freq-60" value="hourly" className="w-4 h-4 text-primary-600 focus:ring-primary-500" />
                <Label htmlFor="freq-60" className="ml-3 text-neutral-700">Every hour (Default)</Label>
              </div>
              <span className="text-neutral-500 text-sm">Included</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <RadioGroupItem id="freq-30" value="30min" className="w-4 h-4 text-primary-600 focus:ring-primary-500" />
                <Label htmlFor="freq-30" className="ml-3 text-neutral-700">Every 30 minutes</Label>
              </div>
              <span className="text-neutral-500 text-sm">+$2.99/mo</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <RadioGroupItem id="freq-15" value="15min" className="w-4 h-4 text-primary-600 focus:ring-primary-500" />
                <Label htmlFor="freq-15" className="ml-3 text-neutral-700">Every 15 minutes</Label>
              </div>
              <span className="text-neutral-500 text-sm">+$5.99/mo</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <RadioGroupItem id="freq-5" value="5min" className="w-4 h-4 text-primary-600 focus:ring-primary-500" />
                <Label htmlFor="freq-5" className="ml-3 text-neutral-700">Every 5 minutes</Label>
              </div>
              <span className="text-neutral-500 text-sm">+$9.99/mo</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <RadioGroupItem id="freq-1" value="1min" className="w-4 h-4 text-primary-600 focus:ring-primary-500" />
                <Label htmlFor="freq-1" className="ml-3 text-neutral-700">Every minute (Near real-time)</Label>
              </div>
              <span className="text-neutral-500 text-sm">+$14.99/mo</span>
            </div>
          </RadioGroup>
        </div>

        <div className="flex justify-between">
          <Button 
            type="button" 
            onClick={prevStep}
            variant="outline"
            className="bg-neutral-200 text-neutral-700 hover:bg-neutral-300 border-0"
          >
            Previous
          </Button>
          <Button type="submit" className="bg-primary-600 hover:bg-primary-700">
            Next Step
          </Button>
        </div>
      </form>
    </div>
  );
}
