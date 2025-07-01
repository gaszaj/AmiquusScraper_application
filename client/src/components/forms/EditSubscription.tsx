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
import { useLanguage } from "@/components/language-provider";
import { buildAlertSchema } from "@/lib/buildAlertSchema";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
  const { t, language } = useLanguage();
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
  // const [websiteNotInJson, setWebsiteNotInJson] = useState<string[]>([]);

  const [location, navigate] = useLocation();
  const [subStatus, setSubStatus] = useState(subscription.status || "active");

  const parseNullableNumber = (val: string | number | undefined) => {
    const num = Number(val);
    return !val || num === 0 ? null : num;
  };

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
      telegramUsername: subscription.telegramUsername as string,
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

    // let price = 9.99;
    let price = 1.0;

    if (websitesCount > 1) {
      // price += 4.99 * (websitesCount - 1);
      price += 0.5 * (websitesCount - 1);
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
      setSubStatus(subscription.status);
    }
  }, [subscription]);

  // websites not in json are websites that are not in the json file but are in the database
  // useEffect(() => {
  //   if (subscription) {
  //     const websitesLower = websites.map((w) => w.toLowerCase());
  //     const websitesNotInJson = (
  //       subscription.websitesSelected as string[]
  //     )?.filter(
  //       (website: string) => !websitesLower.includes(website.toLowerCase()),
  //     );
  //     setWebsiteNotInJson(websitesNotInJson || []);
  //   }
  // }, [subscription, websites]);

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

    // prevent pause if price changes
    if (unitAmountInCents !== subscription.price) {
      if (subStatus === "paused") {
        toast({
          title: t("subscription.toasts.priceError.title"),
          description: t("subscription.toasts.priceError.description"),
          variant: "destructive",
        });
        setSubmitting(false);
        return;
      }
    }

    try {
      const updateData = {
        ...subscription,
        status: subStatus,
        brand: values.carBrand,
        model: values.carModel,
        fuelType: values.fuelType,
        priceMin: parseNullableNumber(values.priceMin),
        priceMax: parseNullableNumber(values.priceMax),
        yearMin: parseNullableNumber(values.yearMin),
        yearMax: parseNullableNumber(values.yearMax),
        mileageMax: parseNullableNumber(values.maxKilometers),
        telegramUsername: values.telegramUsername,
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
        title: t("subscription.toasts.success.title"),
        description: t("subscription.toasts.success.description", {
          brand: values.carBrand,
          model: values.carModel,
        }),
      });

      window.location.href = "/dashboard";
    } catch (error: any) {
      toast({
        title: t("subscription.toasts.error.title"),
        description: error.message || "Failed to update subscription",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-12 px-6 max-w-4xl mx-auto">
      <p className="mb-9 text-base text-neutral-600 dark:text-neutral-400">
        {t("subscription.description")}
        <br />
        <br />
        <span className="text-sm text-muted-foreground">
          {t("profile.alerts.warning")}
        </span>
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* status */}
          <div className="flex flex-col gap-2">
            <FormLabel>{t("subscription.form.status.label")}</FormLabel>
            <Select
              onValueChange={(value) => setSubStatus(value)}
              disabled={submitting}
              value={subStatus}
              required
              name="status"
            >
              <SelectTrigger>
                <SelectValue
                  placeholder={t("subscription.form.status.placeholder")}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">
                  {t("subscription.form.status.active")}
                </SelectItem>
                <SelectItem value="paused">
                  {t("subscription.form.status.paused")}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="carBrand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("carDetails.labels.carBrand")}</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      setModels(loadModels(value));
                    }}
                    defaultValue={field.value}
                    disabled={subStatus === "paused"}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder={t("carDetails.placeholders.carBrand")}
                        />
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
                  <FormLabel> {t("carDetails.labels.carModel")}</FormLabel>
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
                              ? t("carDetails.placeholders.carModel")
                              : t("carDetails.placeholders.carModelDisabled")
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
                          {t("carDetails.options.noModelsAvailable")}
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
                <FormLabel>{t("carDetails.labels.fuelType")}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={subStatus === "paused"}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={t("carDetails.placeholders.fuelType")}
                      />
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
                  <FormLabel>{t("carDetails.labels.priceMin")}</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder={t("carDetails.placeholders.priceMin")}
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
                  <FormLabel>{t("carDetails.labels.priceMax")}</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder={t("carDetails.placeholders.priceMax")}
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
                  <FormLabel>{t("carDetails.labels.yearMin")}</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder={t("carDetails.placeholders.yearMin")}
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
                  <FormLabel>{t("carDetails.labels.yearMax")}</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder={t("carDetails.placeholders.yearMax")}
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
                <FormLabel>{t("carDetails.labels.maxKilometers")}</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder={t("carDetails.placeholders.maxKilometers")}
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
                  <FormLabel> {t("websiteSelection.heading")}</FormLabel>
                  <FormDescription>
                    {t("websiteSelection.description")}
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
          {/* {websiteNotInJson.length > 0 && (
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
          )} */}
          <FormField
            control={form.control}
            name="updateFrequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {t("websiteSelection.labels.updateFrequency")}
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={subStatus === "paused"}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={t(
                          "websiteSelection.placeholders.frequency",
                        )}
                      />
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
                    <FormLabel>
                      {" "}
                      {t("websiteSelection.labels.facebookUrl")}
                    </FormLabel>
                    <FormDescription>
                      {t("websiteSelection.help.facebookUrl")}
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
                  {t("websiteSelection.help.videoTitle")}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t("websiteSelection.help.videoDesc")}
                </p>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="315"
                    ata-cmp-vendor="s30"
                    src="about:blank"
                    class="cmplazyload"
                    data-cmp-src="https://www.youtube.com/embed/jNQXAC9IVRw?si=68o2DzZ_OjDcvKEM"
                    title="How to copy Facebook Marketplace search link"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </>
          )}
          {/* <p className="text-sm text-muted-foreground py-0.5">
            {t("telegram.info")}{" "}
            <a href="/contact" className="text-blue-500 hover:underline">
              {t("telegram.contact")}
            </a>
          </p> */}
          {/* Telegram Token Form */}
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="telegramUsername"
              disabled={subStatus === "paused"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("telegram.labels.username")}</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder={t("telegram.placeholders.username")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    {t("telegram.usernameDescription")}
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notificationLanguage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("telegram.languageLabel")}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={subStatus === "paused"}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder={t("telegram.languagePlaceholder")}
                        />
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
                {t("setupAlerts.basicPlan")} (
                {form.watch("websitesSelected")?.length || 0}{" "}
                {t("review.monitoring.websites")})
              </span>
              <span className="text-neutral-900 dark:text-white font-medium">
                {t("setupAlerts.baseTitle")}
              </span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-neutral-700 dark:text-neutral-300">
                {t("review.summary.extraWebsites")} (
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
                  {t("websiteSelection.labels.updateFrequency")} (
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
                  {t("review.summary.total")}
                </span>
                <span className="text-primary dark:text-primary font-bold text-xl">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
          <span className="text-sm text-muted-foreground">
            {t("profile.alerts.warning")}
          </span>
          {/* Continue with year range, price range, kilometers, facebook url, telegram setup, etc */}
          <div className="flex justify-end gap-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/dashboard")}
            >
              {t("subscription.actions.back")}
            </Button>
            <Button type="submit" disabled={submitting}>
              {submitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                t("subscription.actions.save")
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
