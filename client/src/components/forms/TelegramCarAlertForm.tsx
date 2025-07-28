import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import blueCar from "@/images/blue_car.webp";
import redCar from "@/images/red_car.webp";
import qrCode from "@/images/qr-code.png";
import { Loader2 } from "lucide-react";
import { newcomerDefault } from "@/data/newcomer-default";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { alertSchema, AlertFormSchema } from "@shared/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import LoginPromptModal from "@/components/modals/login-prompt";
import WaitlistPromptModal from "@/components/modals/waitlist-prompt";
import { apiRequest } from "@/lib/queryClient";
import { FREQUENCY_OPTIONS, FREQUENCY_LABELS } from "@/lib/constants";
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

export default function TelegramCarAlertForm({
  setClientSecret,
}: {
  setClientSecret: Dispatch<SetStateAction<string | null>>;
}) {
  const { t, language } = useLanguage();
  const [data, setData] = useState<NewComerResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [hasContactBot, setHasContactBot] = useState(false);
  const { toast } = useToast();
  const { isAuthenticated, isLoading, user } = useAuth();
  const [totalPrice, setTotalPrice] = useState(0);

  const [showLogin, setShowLogin] = useState(false);
  const [showWaitList, setShowWaitList] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // form fields
  const [carBrands, setCarBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [fuelTypes, setFuelTypes] = useState<string[]>([]);
  const [websites, setWebsites] = useState<string[]>([]);

  const form = useForm<AlertFormSchema>({
    resolver: zodResolver(alertSchema),
    defaultValues: {
      carBrand: "",
      carModel: "",
      fuelType: "",
      priceMin: "",
      priceMax: "",
      yearMin: "",
      yearMax: "",
      maxKilometers: "",
      telegramUsername: "",
      websitesSelected: [],
      facebookMarketplaceUrl: "",
      updateFrequency: "hourly",
      notificationLanguage: language,
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

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        setShowLogin(false);
      } else {
        setShowLogin(true);
      }
    }
  }, [isAuthenticated, isLoading]);

  useEffect(() => {
    async function checkStats() {
      try {
        const response = await apiRequest("GET", "/api/subscription-stats");
        const stats = await response.json();

        if (stats.active >= 30) {
          setShowWaitList(true);
        } else {
          setShowWaitList(false);
        }
      } catch (err) {
        console.error("Failed to fetch subscription stats:", err);
      }
    }

    checkStats();
  }, []);

  function calculateBasePrice(form: AlertFormSchema): number {
    const websitesCount = form.websitesSelected?.length || 0;
    const frequency = form.updateFrequency || "hourly";

    if (websitesCount === 0) return 0;

    // let price = 9.99;
    let price = 1.0;

    if (websitesCount > 1) {
      // price += 4.99 * (websitesCount - 1);
      price += 0.1 * (websitesCount - 1);
    }

    const frequencyOption = FREQUENCY_OPTIONS.find(
      (option) => option.id === frequency,
    );
    if (frequencyOption?.additionalPrice) {
      price += frequencyOption.additionalPrice;
    }

    return price;
  }

  const setupSteps = t("telegram.setupSteps", {
    returnObjects: true,
  }) as string[];
  const chatIdSteps = t("telegram.chatIdSteps", {
    returnObjects: true,
  }) as string[];

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

  const parseNullableNumber = (val: string | number | undefined) => {
    const num = Number(val);
    return !val || num === 0 ? null : num;
  };

  const onSubmit = async (values: AlertFormSchema) => {
    if (!hasContactBot){
      toast({
        title: t("setupAlerts.toasts.contactBot.title"),
        description: t("setupAlerts.toasts.contactBot.description"),
        variant: "destructive",
      });
      return;
    }
    
    if (!termsAgreed) {
      toast({
        title: t("setupAlerts.toasts.terms.title"),
        description: t("setupAlerts.toasts.terms.description"),
        variant: "destructive",
      });
      return;
    }

    if (!user) {
      setShowLogin(true);
      return;
    }

    const subscriptionData = {
      userId: user.id,
      websitesSelected: values.websitesSelected,
      facebookMarketplaceUrl: values.facebookMarketplaceUrl || "",
      updateFrequency: values.updateFrequency,
      brand: values.carBrand,
      model: values.carModel,
      fuelType: values.fuelType,
      yearMin: parseNullableNumber(values.yearMin),
      yearMax: parseNullableNumber(values.yearMax),
      mileageMin: null,
      mileageMax: parseNullableNumber(values.maxKilometers),
      priceMin: parseNullableNumber(values.priceMin),
      priceMax: parseNullableNumber(values.priceMax),
      telegramUsername: values.telegramUsername,
      notificationLanguage: values.notificationLanguage,
      price: totalPrice,
    };

    setSubmitting(true);

    try {
      if (user.stripeCustomerId) {
        const customerResponse = await fetch(
          `/api/customer/payment-methods?customerId=${user.stripeCustomerId}`,
        );

        if (!customerResponse.ok) {
          throw new Error("Failed to fetch payment methods");
        }

        const data = await customerResponse.json();

        if (!data.hasPaymentMethod) {
          // use "/api/set-alerts-intent"
          const response = await apiRequest(
            "POST",
            "/api/set-alerts-intent",
            subscriptionData,
          );

          if (response.ok) {
            const data = await response.json();
            setClientSecret(data.clientSecret);
          } else {
            const errorData = await response.json();
            throw new Error(
              errorData.message || "Failed to create subscription",
            );
          }
        } else {
          //subscribe direct
          const response = await apiRequest(
            "POST",
            "/api/subscriptions",
            subscriptionData,
          );

          if (response.ok) {
            const data = await response.json();
            toast({
              title: t("setupAlerts.toasts.success.title"),
              description: t("setupAlerts.toasts.success.description"),
              variant: "default",
            });
            // go to dashboard
            window.location.href = "/dashboard";
          }

          console.log("response", data);
        }
      } else {
        // post to "/api/set-alerts-intent"
        const response = await apiRequest(
          "POST",
          "/api/set-alerts-intent",
          subscriptionData,
        );

        if (response.ok) {
          const data = await response.json();
          setClientSecret(data.clientSecret);
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to create subscription");
        }
      }
    } catch (error) {
      toast({
        title: t("setupAlerts.toasts.error.title"),
        description:
          error instanceof Error ? error.message : "Please try again",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
        <Loader2 className="w-8 h-8 animate-spin text-primary dark:text-[#ff0]" />
      </div>
    );
  }

  return (
    <section
      id="setup_telegram_bot"
      className="bg-white dark:bg-neutral-900 py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
            {t("setupAlerts.title")}
          </h1>
          <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
            {t("setupAlerts.subtitle")}
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 max-w-4xl mx-auto"
          >
            {/* Car Search Preferences Form */}
            <div className="bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-2xl sm:p-8 mb-8 shadow-sm space-y-6 p-4">
              {/* Car Brand & Model */}
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
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={t(
                                "carDetails.placeholders.carBrand",
                              )}
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
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> {t("carDetails.labels.carModel")}</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={!form.watch("carBrand")}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={
                                form.watch("carBrand")
                                  ? t("carDetails.placeholders.carModel")
                                  : t(
                                      "carDetails.placeholders.carModelDisabled",
                                    )
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

              {/* Fuel Type */}
              <FormField
                control={form.control}
                name="fuelType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("carDetails.labels.fuelType")}</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
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
                    <FormLabel>
                      {t("carDetails.labels.maxKilometers")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder={t("carDetails.placeholders.maxKilometers")}
                        min="0"
                        max="1000000"
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
                                      checked={field.value?.includes(
                                        "facebook",
                                      )}
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
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...field.value,
                                              site,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== site,
                                              ),
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-neutral-700 dark:text-neutral-300">
                                    {site.charAt(0).toUpperCase() +
                                      site.slice(1)}
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
            </div>
            {/* Telegram Bot Setup Section */}
            <div className="bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-2xl sm:p-8 mb-8 shadow-sm p-4">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
                {t("telegram.subHeading")}
              </h2>

              {/* Telegram Setup Instructions */}
              {/* ⬇️ Telegram instructions video */}

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
              {/* Confirm Telegram Contact Step */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {t("telegram.contactBotInstruction")}{" "}
                      <a
                        href="https://t.me/Amiquus_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-base dark:text-blue-400 underline"
                      >
                        t.me/Amiquus_bot
                      </a>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {t("telegram.contactBotNote")}
                    </p>
                  </div>
                  <img
                    src={qrCode}
                    alt="Scan QR to open Amiquus Bot"
                    className="w-28 h-28 object-contain sm:h-32 sm:w-32"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasContactedBot"
                    checked={hasContactBot}
                    onCheckedChange={(checked) => setHasContactBot(!!checked)}
                  />
                  <label
                    htmlFor="hasContactedBot"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {t("telegram.confirmContact")}
                  </label>
                </div>
              </div>
            </div>

            {/* Telegram Chat Preview Section */}
            <div className="bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-2xl sm:p-8 mb-8 shadow-sm p-4">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
                {t("telegram.previewTitle")}
              </h2>
              {/* Telegram Chat Preview */}
              <div className="w-full mb-8 bg-neutral-100 dark:bg-[#273746] rounded-xl p-4 border border-neutral-300 dark:border-neutral-700">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="bg-blue-500 rounded-full h-10 w-10 min-w-10 min-h-10 flex items-center justify-center text-white">
                    A
                  </div>
                  <div className="bg-white flex flex-col rounded-lg w-full max-w-md sm:flex-row-reverse sm:h-40 sm:items-center">
                    <img
                      src={blueCar}
                      alt="Volkswagen Arteon 2.0"
                      className="rounded-t-lg w-full h-auto sm:rounded-r-lg sm:rounded-tl-none sm:w-48 sm:h-full"
                      width="300"
                      height="200"
                      loading="lazy"
                      decoding="async"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="w-full p-3">
                      <p className="text-sm text-gray-800">
                        <strong> {t("telegram.carAlertTitle")}</strong>
                      </p>
                      <p className="text-sm text-gray-800">
                        Volkswagen Arteon 2.0
                      </p>
                      <p className="text-sm text-gray-800">
                        {" "}
                        {t("telegram.priceLabel", { price: "€ 36,850" })}
                      </p>
                      <p className="text-sm text-gray-800">
                        {t("telegram.kilometresLabel", { kms: "73,000" })}
                      </p>
                      <p className="text-sm text-gray-800">
                        {t("telegram.locationLabel", {
                          location: "OBVEZNA NAJAVA - Cvetlicna ul.3",
                        })}
                      </p>
                      <p className="text-sm text-gray-800 mt-2">
                        <a href="#" className="text-blue-600 underline">
                          {t("telegram.viewListing")}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-500 rounded-full h-10 w-10 min-w-10 min-h-10 flex items-center justify-center text-white">
                    A
                  </div>
                  <div className="bg-white flex flex-col rounded-lg w-full max-w-md sm:flex-row-reverse sm:h-40 sm:items-center">
                    <img
                      src={redCar}
                      alt="Ford"
                      className="rounded-t-lg w-full h-auto  sm:rounded-r-lg sm:rounded-tl-none sm:w-48 sm:h-full"
                      width="300"
                      height="200"
                      loading="lazy"
                      decoding="async"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="w-full p-3">
                      <p className="text-sm text-gray-800">
                        {t("telegram.carAlertTitle")}
                      </p>
                      <p className="text-sm text-gray-800">Ford</p>
                      <p className="text-sm text-gray-800">
                        {t("telegram.priceLabel", { price: "€ 22,750" })}
                      </p>
                      <p className="text-sm text-gray-800">
                        {t("telegram.kilometresLabel", { kms: "170,000" })}
                      </p>
                      <p className="text-sm text-gray-800">
                        {t("telegram.locationLabel", {
                          location: "castrop-Rauxel, NW",
                        })}
                      </p>
                      <p className="text-sm text-gray-800 mt-2">
                        <a href="#" className="text-blue-600 underline">
                          {t("telegram.viewListing")}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pricing Section */}
              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mt-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-neutral-700 dark:text-neutral-300">
                    {/* get selected websites length */}
                    {t("setupAlerts.basicPlan")}(
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
                    {Math.max(
                      (form.watch("websitesSelected")?.length || 1) - 1,
                      0,
                    )}
                    )
                  </span>
                  <span className="text-neutral-900 dark:text-white font-medium">
                    {/* {(
                      Math.max(
                        (form.watch("websitesSelected")?.length || 1) - 1,
                        0,
                      ) * 4.99
                    ).toFixed(2)} */}
                    {(
                      Math.max(
                        (form.watch("websitesSelected")?.length || 1) - 1,
                        0,
                      ) * 0.1
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

              <div className="space-y-2 mt-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Checkbox
                    id="terms"
                    checked={termsAgreed}
                    onCheckedChange={(checked) =>
                      setTermsAgreed(checked === true)
                    }
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {t("review.terms.checkbox")}{" "}
                    <a
                      href="/terms"
                      className="text-primary-600 hover:underline"
                      target="_blank"
                    >
                      {t("review.terms.tos")}
                    </a>{" "}
                    {t("register.and")}{" "}
                    <a
                      href="/privacy"
                      className="text-primary-600 hover:underline"
                      target="_blank"
                    >
                      {t("register.privacyPolicy")}
                    </a>
                  </label>
                </div>
                <p className="text-sm text-neutral-500">
                  {t("review.terms.note")}
                </p>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <Button
                  type="submit"
                  className="w-full py-3 px-4 bg-primary hover:bg-primary-600 dark:bg-primary dark:hover:bg-primary-600 text-white dark:text-neutral-900 transition font-semibold rounded-xl"
                  disabled={submitting}
                >
                  {submitting ? (
                    <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                  ) : (
                    t("setupAlerts.button")
                  )}
                </Button>
                <p className="text-center text-neutral-500 dark:text-neutral-500 text-sm mt-2">
                  {t("setupAlerts.cancel")}
                </p>
              </div>
            </div>
          </form>
        </Form>
      </div>
      {showLogin && (
        <LoginPromptModal
          open={showLogin}
          onClose={() => setShowLogin(false)}
        />
      )}
      {showWaitList && (
        <WaitlistPromptModal
          open={showWaitList}
          onClose={() => setShowWaitList(false)}
        />
      )}
    </section>
  );
}
