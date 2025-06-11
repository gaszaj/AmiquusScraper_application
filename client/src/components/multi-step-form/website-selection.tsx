import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertFormSchema } from "@shared/schema";
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
import type { NewComerResponse } from "@/components/forms/TelegramCarAlertForm";

interface WebsiteSelectionProps {
  formData: Partial<AlertFormSchema>;
  updateFormData: (data: Partial<AlertFormSchema>) => void;
  nextStep: () => void;
  prevStep: () => void;
  setJsonData: Dispatch<SetStateAction<NewComerResponse | null>>;
  setLoadingJson: Dispatch<SetStateAction<boolean>>;
  websites: string[];
}

const websiteSelectionSchema = z
  .object({
    websitesSelected: z
      .array(z.string())
      .min(1, "At least one website must be selected"),

    facebookMarketplaceUrl: z.string().optional().or(z.literal("")),
    updateFrequency: z.enum(["hourly", "30min", "15min", "5min", "1min"]),
  })
  .superRefine((data, ctx) => {
    if (
      data.websitesSelected.includes("facebook") &&
      !data.facebookMarketplaceUrl
    ) {
      ctx.addIssue({
        path: ["facebookMarketplaceUrl"],
        message:
          "Facebook Marketplace URL is required when Facebook is selected",
        code: z.ZodIssueCode.custom,
      });
    }
  });

type WebsiteSelectionFormData = z.infer<typeof websiteSelectionSchema>;

export default function WebsiteSelection({
  formData,
  updateFormData,
  nextStep,
  prevStep,
  setJsonData,
  setLoadingJson,
  websites,
}: WebsiteSelectionProps) {
  useEffect(() => {
    fetch("/api/newcommer")
      .then((res) => res.json())
      .then((json) => {
        setJsonData(json);
        setLoadingJson(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoadingJson(false);
      });
  }, []);

  const [error, setError] = useState<string | null>(null);

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
      updateFormData(data);
      nextStep();
    } catch (error: any) {
      setError(error.message);
    }
  };

  // // Watch the websites selected to show/hide the Facebook URL field
  // const watchedWebsites = form.watch("websitesSelected");

  // // Update Facebook URL visibility when selection changes
  // if (watchedWebsites?.includes("facebook") && !showFacebookUrlField) {
  //   setShowFacebookUrlField(true);
  // } else if (!watchedWebsites?.includes("facebook") && showFacebookUrlField) {
  //   setShowFacebookUrlField(false);
  // }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          Website Selection
        </h2>
        <p className="text-sm text-neutral-500">
          Choose which websites you want to monitor and how frequently you want
          updates.
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
          {/* Websites to monitor */}
          <FormField
            control={form.control}
            name="websitesSelected"
            render={({ field }) => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel>Websites to monitor</FormLabel>
                  <FormDescription>
                    Select one or more websites to monitor for car listings.
                  </FormDescription>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {websites.map((site) => (
                    <FormField
                      key={site}
                      control={form.control}
                      name="websitesSelected"
                      render={({ field }) => {
                        return (
                          <FormItem className="flex items-center gap-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(site)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, site])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== site,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-neutral-700 dark:text-neutral-300">
                              {site.charAt(0).toUpperCase() + site.slice(1)}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormField
                    control={form.control}
                    name="websitesSelected"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes("facebook")}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, "facebook"])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== "facebook",
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-neutral-700 dark:text-neutral-300">
                          Facebook Marketplace
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Facebook Marketplace URL */}
          {form.watch("websitesSelected")?.includes("facebook") && (
            <>
              <FormField
                control={form.control}
                name="facebookMarketplaceUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Facebook Marketplace URL</FormLabel>
                    <FormDescription>
                      Paste the URL of your Facebook Marketplace search results
                      here.
                    </FormDescription>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="https://www.facebook.com/marketplace/..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-2">
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Need help finding your Facebook Marketplace search link?
                </p>
                <p className="text-sm text-muted-foreground">
                  Watch the video below for step-by-step instructions.
                </p>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/jNQXAC9IVRw?si=68o2DzZ_OjDcvKEM"
                    title="How to copy Facebook Marketplace search link"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </>
          )}

          {/* Update Frequency */}
          <FormField
            control={form.control}
            name="updateFrequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Update Frequency</FormLabel>
                <FormDescription>
                  How often should we check for new listings? Higher frequencies
                  may cost more.
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
                        {option.additionalPrice > 0 &&
                          ` (+$${option.additionalPrice})`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between">
            <Button type="button" variant="outline" onClick={prevStep}>
              Previous
            </Button>
            <Button type="submit">Continue</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
