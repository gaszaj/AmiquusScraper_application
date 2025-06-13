import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertFormSchema, alertSchema, Subscription } from "@shared/schema";
import { Loader2 } from "lucide-react";
import { newcomerDefault } from "@/data/newcomer-default";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FREQUENCY_OPTIONS, FREQUENCY_LABELS } from "@/lib/constants";
import { useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";

export type NewComerResponse = {
  websites: {
    website_names: string[];
    website_objects: {
      [key: string]: {
        url: string;
        bot_file_path: string;
      };
    };
  };
  fuel_types: string[];
  brands_and_models: {
    [brand: string]: string[];
  };
};

export default function EditSubscriptionPage({
  subscription,
}: {
  subscription: Subscription;
}) {
  const [data, setData] = useState<NewComerResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const [totalPrice, setTotalPrice] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  // form fields
  const [carBrands, setCarBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [fuelTypes, setFuelTypes] = useState<string[]>([]);
  const [websites, setWebsites] = useState<string[]>([]);
  const [websiteNotInJson, setWebsiteNotInJson] = useState<string[]>([]);

  const [location, navigate] = useLocation();
  const [subStatus, setSubStatus] = useState(subscription.status || "active");

  const form = useForm<AlertFormSchema>({
    resolver: zodResolver(alertSchema),
    defaultValues: {
      carBrand: subscription.brand as string,
      carModel: subscription.model as string,
      fuelType: subscription.fuelType as string,
      priceMin: String(subscription.priceMin),
      priceMax: String(subscription.priceMax),
      yearMin: String(subscription.yearMin),
      yearMax: String(subscription.yearMax),
      maxKilometers: String(subscription.mileageMax),
      telegramToken: subscription.telegramBotToken,
      telegramChatId: subscription.telegramChatId,
      websitesSelected: (subscription.websitesSelected as string[]) || [],
      facebookMarketplaceUrl: subscription.facebookMarketplaceUrl as string,
      updateFrequency: subscription.updateFrequency,
      notificationLanguage: subscription.notificationLanguage || "en",
    },
  });

  useEffect(() => {
    fetch("/api/newcommer")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  function calculateBasePrice(form: AlertFormSchema): number {
    const websitesCount = form.websitesSelected?.length || 0;
    const frequency = form.updateFrequency || "hourly";

    if (websitesCount === 0) return 0;

    let price = 9.99;

    if (websitesCount > 1) {
      price += 4.99 * (websitesCount - 1);
    }

    const frequencyOption = FREQUENCY_OPTIONS.find(
      (option) => option.id === frequency,
    );
    if (frequencyOption?.additionalPrice) {
      price += frequencyOption.additionalPrice;
    }

    return price;
  }

  const websitesSelected = form.watch("websitesSelected");
  const updateFrequency = form.watch("updateFrequency");

  useEffect(() => {
    const price = calculateBasePrice({
      ...form.getValues(),
      websitesSelected,
      updateFrequency,
    });
    setTotalPrice(price);
  }, [websitesSelected, updateFrequency]);

  useEffect(() => {
    if (!loading) {
      if (data) {
        setCarBrands(Object.keys(data.brands_and_models));
        setFuelTypes(data.fuel_types);
        setWebsites(data.websites.website_names);
      } else {
        setCarBrands(Object.keys(newcomerDefault.brands_and_models));
        setFuelTypes(newcomerDefault.fuel_types);
        setWebsites(newcomerDefault.websites.website_names);
      }
    }
  }, [data, loading]);

  useEffect(() => {
    if (subscription) {
      setModels(loadModels(subscription.brand as string));
      setSubStatus(subscription.status)
    }
  }, [subscription]);

  // websites not in json are websites that are not in the json file but are in the database
  useEffect(() => {
    if (subscription) {
      const websitesLower = websites.map((w) => w.toLowerCase());
      const websitesNotInJson = (
        subscription.websitesSelected as string[]
      )?.filter(
        (website: string) => !websitesLower.includes(website.toLowerCase()),
      );
      setWebsiteNotInJson(websitesNotInJson || []);
    }
  }, [subscription, websites]);

  // Function to load car models based on selected brand
  const loadModels = (brand: string) => {
    return (
      data?.brands_and_models[brand] ||
      newcomerDefault.brands_and_models[
        brand as keyof typeof newcomerDefault.brands_and_models
      ] ||
      []
    );
  };

  const currentYear = new Date().getFullYear();

  const onSubmit = async (values: AlertFormSchema) => {
    setSubmitting(true);
    const unitAmountInCents = Math.round(totalPrice * 100);

    try {
      const updateData = {
        ...subscription,
        status: subStatus,
        brand: values.carBrand,
        model: values.carModel,
        fuelType: values.fuelType,
        priceMin: Number(values.priceMin),
        priceMax: Number(values.priceMax),
        yearMin: Number(values.yearMin),
        yearMax: Number(values.yearMax),
        mileageMax: Number(values.maxKilometers),
        telegramBotToken: values.telegramToken,
        telegramChatId: values.telegramChatId,
        websitesSelected: values.websitesSelected,
        facebookMarketplaceUrl: values.facebookMarketplaceUrl,
        updateFrequency: values.updateFrequency,
        notificationLanguage: values.notificationLanguage,
        price: unitAmountInCents,
      } as Subscription;

      const res = await fetch(`/api/subscriptions/${subscription.id}`, {
        method: "PUT",
        credentials: "include", // important for session-based auth
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Failed to update subscription");
      }

      toast({
        title: "Subscription Updated",
        description: `Your subscription for ${values.carBrand} ${values.carModel} has been updated.`,
      });
      navigate("/dashboard");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update subscription",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="py-12 px-6 max-w-4xl mx-auto">
      <p className="mb-9 text-base text-neutral-600 dark:text-neutral-400">
        You can pause your subscription at any time. When you pause your
        subscription, your car alerts will stop until you resume them.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* status */}
          <div className="flex flex-col gap-2">
            <FormLabel>Status</FormLabel>
            <Select
              onValueChange={(value) => setSubStatus(value)}
              disabled={submitting}
              value={subStatus}
              required
              name="status"
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="paused">Paused</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="carBrand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Car Brand</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      setModels(loadModels(value));
                    }}
                    disabled={subStatus === "paused"}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Car Brand" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {carBrands.map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {brand.charAt(0).toUpperCase() + brand.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="carModel"
              disabled={subStatus === "paused"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Car Model</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={!form.watch("carBrand") || subStatus === "paused"}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder={
                            form.watch("carBrand")
                              ? "Select Car Model"
                              : "Select Car Brand First"
                          }
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {models.length > 0 ? (
                        models.map(
                          (model) =>
                            model.trim() !== "" && (
                              <SelectItem key={model} value={model}>
                                {model}
                              </SelectItem>
                            ),
                        )
                      ) : (
                        <SelectItem value="placeholder-no-models" disabled>
                          No Models Available
                        </SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="fuelType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fuel Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={subStatus === "paused"}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Fuel Type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {fuelTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Price Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="priceMin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Minimum Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter minimum price"
                      disabled={subStatus === "paused"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="priceMax"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maximum Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter maximum price"
                      disabled={subStatus === "paused"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Build Year Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="yearMin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Minimum Year</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter minimum year"
                      min="1900"
                      max={currentYear}
                      disabled={subStatus === "paused"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="yearMax"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maximum Year</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter maximum year"
                      min="1900"
                      max={currentYear}
                      disabled={subStatus === "paused"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Max Kilometers */}
          <FormField
            control={form.control}
            name="maxKilometers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Max Kilometers</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter maximum kilometers"
                    min="0"
                    max="1000000"
                    disabled={subStatus === "paused"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                  {websites.map((site) => {
                    if (site == "facebook") {
                      return (
                        <FormField
                          control={form.control}
                          name="websitesSelected"
                          render={({ field }) => (
                            <FormItem className="flex items-center gap-2">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes("facebook")}
                                  disabled={subStatus === "paused"}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          "facebook",
                                        ])
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
                      );
                    }
                    return (
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
                                  disabled={subStatus === "paused"}
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
                    );
                  })}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Websites Not in JSON */}
          {websiteNotInJson.length > 0 && (
            <div className="mt-6">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Unsupported Websites:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                {websiteNotInJson.map((site) => (
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
                              disabled
                              //onCheckedChange={(checked) => {
                              //  return checked
                              //  ? field.onChange([...field.value, site])
                              //  : field.onChange(
                              //    field.value?.filter(
                              //       (value) => value !== site,
                              //     ),
                              //  );
                              // }}
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
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                These websites are no longer supported. Please choose from the
                current list.
              </p>
              <p className="text-sm text-muted-foreground">
                If you need assistance, don’t hesitate to contact our support
                team. .
              </p>
            </div>
          )}
          <FormField
            control={form.control}
            name="updateFrequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Update Frequency</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={subStatus === "paused"}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Update Frequency" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="30min">Every 30 minutes</SelectItem>
                    <SelectItem value="15min">Every 15 minutes</SelectItem>
                    <SelectItem value="5min">Every 5 minutes</SelectItem>
                    <SelectItem value="1min">Every 1 minute</SelectItem>
                  </SelectContent>
                </Select>
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
                        disabled={subStatus === "paused"}
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
          {/* Telegram Token Form */}
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="telegramToken"
              disabled={subStatus === "paused"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telegram Bot Token</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your bot token from BotFather"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Example: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telegramChatId"
              disabled={subStatus === "paused"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Telegram Chat ID</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your Telegram chat ID"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    You can get this by messaging @userinfobot on Telegram
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notificationLanguage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notification Language</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={subStatus === "paused"}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Telegram Message Language" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="it">Italiano</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Pricing Section */}
          <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mt-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-neutral-700 dark:text-neutral-300">
                {/* get selected websites length */}
                Basic Plan ({form.watch("websitesSelected")?.length || 0}{" "}
                websites)
              </span>
              <span className="text-neutral-900 dark:text-white font-medium">
                $9.99/month
              </span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-neutral-700 dark:text-neutral-300">
                Additional websites (
                {Math.max((form.watch("websitesSelected")?.length || 1) - 1, 0)}
                )
              </span>
              <span className="text-neutral-900 dark:text-white font-medium">
                {/* $9.98/month */}$
                {(
                  Math.max(
                    (form.watch("websitesSelected")?.length || 1) - 1,
                    0,
                  ) * 4.99
                ).toFixed(2)}
              </span>
            </div>
            {form.watch("updateFrequency") !== "hourly" && (
              <div className="flex justify-between items-center mb-4">
                <span className="text-neutral-700 dark:text-neutral-300">
                  Update Frequency (
                  {FREQUENCY_LABELS[form.watch("updateFrequency")]})
                </span>
                <span className="text-neutral-900 dark:text-white font-medium">
                  $
                  {(
                    FREQUENCY_OPTIONS.find(
                      (f) => f.id === form.watch("updateFrequency"),
                    )?.additionalPrice || 0
                  ).toFixed(2)}
                </span>
              </div>
            )}
            <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4 mt-4">
              <div className="flex justify-between items-center">
                <span className="text-neutral-900 dark:text-white font-medium">
                  Total (Monthly):
                </span>
                <span className="text-primary dark:text-primary font-bold text-xl">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Continue with year range, price range, kilometers, facebook url, telegram setup, etc */}
          <div className="flex justify-end gap-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/dashboard")}
            >
              Back
            </Button>
            <Button type="submit" disabled={submitting}>
              {submitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export async function updateSubscription(
  subscriptionId: number,
  updateData: Subscription,
) {
  const res = await fetch(`/api/subscriptions/${subscriptionId}`, {
    method: "PUT",
    credentials: "include", // important for session-based auth
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Failed to update subscription");
  }

  return res.json();
}

// const handleEditSubscription = async (subscription: Subscription) => {
//   try {
//     console.log("Updating subscription:", subscription);
//     await updateSubscription(subscription.id, subscription);
//     // run query to refresh subscriptions list
//     queryClient.invalidateQueries({ queryKey: ["/api/subscriptions"] });

//     toast({
//       title: "Subscription Updated",
//       description: `Your subscription for ${subscription.brand} ${subscription.model} has been updated.`,
//       variant: "default",
//     });
//   } catch (error) {
//     console.error("Failed to update subscription:", error);
//     toast({
//       title: "Error",
//       description: "Failed to update subscription. Please try again.",
//       variant: "destructive",
//     });
//   }
// };
