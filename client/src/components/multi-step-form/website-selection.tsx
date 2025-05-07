import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubscriptionFormData } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { WEBSITE_OPTIONS, FREQUENCY_OPTIONS } from "@/lib/constants";

interface WebsiteSelectionProps {
  formData: Partial<SubscriptionFormData>;
  updateFormData: (data: Partial<SubscriptionFormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const websiteSelectionSchema = z.object({
  websitesSelected: z.array(z.string()).min(1, "Select at least one website"),
  facebookMarketplaceUrl: z.string().optional(),
  updateFrequency: z.enum(["hourly", "30min", "15min", "5min", "1min"]),
});

type WebsiteSelectionFormData = z.infer<typeof websiteSelectionSchema>;

export default function WebsiteSelection({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}: WebsiteSelectionProps) {
  const [error, setError] = useState<string | null>(null);
  const [showFacebookUrlField, setShowFacebookUrlField] = useState<boolean>(
    (formData.websitesSelected || []).includes("facebook")
  );

  const form = useForm<WebsiteSelectionFormData>({
    resolver: zodResolver(websiteSelectionSchema),
    defaultValues: {
      websitesSelected: formData.websitesSelected || [],
      facebookMarketplaceUrl: formData.facebookMarketplaceUrl || "",
      updateFrequency: formData.updateFrequency || "hourly",
    },
  });

  const onSubmit = (data: WebsiteSelectionFormData) => {
    try {
      if (data.websitesSelected.includes("facebook") && !data.facebookMarketplaceUrl) {
        form.setError("facebookMarketplaceUrl", {
          type: "manual",
          message: "Please provide a Facebook Marketplace URL",
        });
        return;
      }

      updateFormData(data);
      nextStep();
    } catch (error: any) {
      setError(error.message);
    }
  };

  // Watch the websites selected to show/hide the Facebook URL field
  const watchedWebsites = form.watch("websitesSelected");
  
  // Update Facebook URL visibility when selection changes
  if (watchedWebsites?.includes("facebook") && !showFacebookUrlField) {
    setShowFacebookUrlField(true);
  } else if (!watchedWebsites?.includes("facebook") && showFacebookUrlField) {
    setShowFacebookUrlField(false);
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">Website Selection</h2>
        <p className="text-sm text-neutral-500">
          Choose which websites you want to monitor and how frequently you want updates.
        </p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="websitesSelected"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Websites to monitor</FormLabel>
                  <FormDescription>
                    Select one or more websites to monitor for car listings.
                  </FormDescription>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {WEBSITE_OPTIONS.map((website) => (
                    <FormField
                      key={website.id}
                      control={form.control}
                      name="websitesSelected"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={website.id}
                            className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(website.id)}
                                onCheckedChange={(checked) => {
                                  const updatedValue = checked
                                    ? [...field.value, website.id]
                                    : field.value?.filter(
                                        (value) => value !== website.id
                                      );
                                  field.onChange(updatedValue);
                                }}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-medium">
                                {website.name}
                              </FormLabel>
                              {website.requiresUrl && (
                                <FormDescription>
                                  Requires search URL
                                </FormDescription>
                              )}
                            </div>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {showFacebookUrlField && (
            <FormField
              control={form.control}
              name="facebookMarketplaceUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook Marketplace URL</FormLabel>
                  <FormDescription>
                    Paste the URL of your Facebook Marketplace search results
                  </FormDescription>
                  <FormControl>
                    <Input
                      placeholder="https://www.facebook.com/marketplace/category/vehicles?..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="updateFrequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Update Frequency</FormLabel>
                <FormDescription>
                  How often should we check for new listings? Higher frequencies may cost more.
                </FormDescription>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {FREQUENCY_OPTIONS.map((option) => (
                      <SelectItem key={option.id} value={option.id}>
                        {option.name}
                        {option.additionalPrice > 0 && ` (+$${option.additionalPrice})`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
            >
              Previous
            </Button>
            <Button type="submit">Continue</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}