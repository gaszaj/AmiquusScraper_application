import { useState, useEffect } from "react";
import { AlertFormSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { AlertCircle, Check } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  WEBSITE_OPTIONS,
  FREQUENCY_LABELS,
  LANGUAGE_OPTIONS,
  FUEL_TYPE_OPTIONS,
} from "@/lib/constants";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/hooks/use-auth";
import { useLanguage } from "@/components/language-provider";
import { currencySymbol, calculateTotalPrice, getAdditionalWebsitePrice, getBasePrice } from "@shared/pricing";

interface ReviewPaymentProps {
  formData: Partial<AlertFormSchema>;
  updateFormData: (data: Partial<AlertFormSchema>) => void;
  prevStep: () => void;
  onSubmit: () => void;
}

export default function ReviewPayment({
  formData,
  updateFormData,
  prevStep,
  onSubmit,
}: ReviewPaymentProps) {
  const { t } = useLanguage();
  const { user, isAuthenticated } = useAuth();

  const [error, setError] = useState<string | null>(null);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  useEffect(() => {
    // Calculate price based on selections
    const price = calculateTotalPrice(formData.websitesSelected || [], formData.updateFrequency || "hourly");
    setCalculatedPrice(price);

    // Update the price in the form data
    updateFormData({ price });
  }, [formData, updateFormData]);

  const handleSubmit = () => {
    if (!termsAgreed) {
      setError("You must agree to the terms and conditions");
      return;
    }

    try {
      onSubmit();
    } catch (error: any) {
      setError(error.message);
    }
  };

  const getLanguageName = (code: string) => {
    const language = LANGUAGE_OPTIONS.find((lang) => lang.id === code);
    return language ? language.name : code;
  };

  const getFuelTypeName = (code: string | undefined) => {
    if (!code) return "Any";
    const fuelType = FUEL_TYPE_OPTIONS.find((fuel) => fuel.id === code);
    return fuelType ? fuelType.name : code;
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          {t("review.title")}
        </h2>
        <p className="text-sm text-neutral-500">{t("review.description")}</p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              {t("review.personal.title")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <span className="font-medium">{t("review.personal.name")}:</span>{" "}
              {user?.firstName} {user?.lastName}
            </div>
            <div>
              <span className="font-medium">{t("review.personal.email")}:</span>{" "}
              {user?.email}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              {t("review.monitoring.title")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <span className="font-medium">
                {t("review.monitoring.websites")}:
              </span>
              <ul className="list-disc ml-5 mt-1">
                {formData.websitesSelected?.map((websiteId) => {
                  const website = WEBSITE_OPTIONS.find(
                    (w) => w.id === websiteId,
                  );
                  return <li key={websiteId}>{website?.name || websiteId}</li>;
                })}
              </ul>
            </div>
            {formData.facebookMarketplaceUrl && (
              <div>
                <span className="font-medium">
                  {t("review.monitoring.facebookUrl")}:
                </span>{" "}
                <span className="break-all text-sm">
                  {formData.facebookMarketplaceUrl}
                </span>
              </div>
            )}
            <div>
              <span className="font-medium">
                {t("review.monitoring.updateFrequency")}:
              </span>{" "}
              {FREQUENCY_LABELS[formData.updateFrequency || "hourly"]}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">{t("review.specs.title")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {formData.carBrand && (
              <div>
                <span className="font-medium">{t("review.specs.brand")}:</span>{" "}
                {formData.carBrand}
              </div>
            )}
            {formData.carModel && (
              <div>
                <span className="font-medium">{t("review.specs.model")}:</span>{" "}
                {formData.carModel}
              </div>
            )}
            {formData.fuelType && (
              <div>
                <span className="font-medium">
                  {t("review.specs.fuelType")}:
                </span>{" "}
                {getFuelTypeName(formData.fuelType)}
              </div>
            )}
            {(formData.yearMin || formData.yearMax) && (
              <div>
                <span className="font-medium">
                  {t("review.specs.yearRange")}:
                </span>{" "}
                {formData.yearMin || "Any"} - {formData.yearMax || "Any"}
              </div>
            )}
            {formData.maxKilometers && (
              <div>
                <span className="font-medium">
                  {t("review.specs.mileage")}:
                </span>{" "}
                {formData.maxKilometers}
              </div>
            )}
            {(formData.priceMin || formData.priceMax) && (
              <div>
                <span className="font-medium">{t("review.specs.price")}:</span>{" "}
                {formData.priceMin || "Any"} - {formData.priceMax || "Any"}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              {t("review.notification.title")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <span className="font-medium">
                {t("review.notification.telegram")}:
              </span>{" "}
              Connected
            </div>
            <div>
              <span className="font-medium">
                {t("review.notification.language")}:
              </span>{" "}
              {getLanguageName(formData.notificationLanguage || "en")}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-primary-50 border-primary-200">
        <CardHeader>
          <CardTitle className="text-xl">{t("review.summary.title")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span>{t("review.summary.base")}(
              {FREQUENCY_LABELS[formData.updateFrequency || "hourly"]}):</span>
            {/* <span>{currencySymbol}{(9.99).toFixed(2)}</span> */}
            <span>{currencySymbol}{getBasePrice(formData.updateFrequency || "hourly")}</span>
          </div>

          {formData.websitesSelected &&
            formData.websitesSelected.length > 1 && (
              <div className="flex justify-between">
                <span>
                  {t("review.summary.extraWebsites")} ({formData.websitesSelected.length - 1})
                </span>
                <span>
                  {currencySymbol}{getAdditionalWebsitePrice(formData.websitesSelected, formData.updateFrequency || "hourly")}
                </span>
              </div>
            )}

          {/* {formData.updateFrequency && formData.updateFrequency !== "hourly" && (
            <div className="flex justify-between">
              <span>
                {t("review.summary.frequencyUpgrade")}
                ({FREQUENCY_LABELS[formData.updateFrequency]})
              </span>
              <span>
              {currencySymbol}{(
                  FREQUENCY_OPTIONS.find((f) => f.id === formData.updateFrequency)?.additionalPrice || 0
                ).toFixed(2)}
              </span>
            </div>
          )} */}

          <div className="flex justify-between pt-4 border-t border-primary-200 font-bold">
            <span>{t("review.summary.total")}:</span>
            <span>{currencySymbol}{calculatedPrice.toFixed(2)}</span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <div className="flex items-center space-x-2 mb-4">
            <Checkbox
              id="terms"
              checked={termsAgreed}
              onCheckedChange={(checked) => setTermsAgreed(checked === true)}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t("review.terms.checkbox")}{" "}
              <a href="/terms" className="text-primary-600 hover:underline" target="_blank">
                {t("review.terms.tos")}
              </a>{" "}
              {t("review.terms.checkbox")}{" "}
              <a href="/privacy" className="text-primary-600 hover:underline" target="_blank">
                {t("review.terms.privacy")}
              </a>

            </label>
          </div>
          <p className="text-sm text-neutral-500">{t("review.terms.note")}</p>
        </CardFooter>
      </Card>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={prevStep}>
          {t("review.actions.previous")}
        </Button>
        <Button onClick={handleSubmit} disabled={!termsAgreed}>
          {t("review.actions.submit")}
        </Button>
      </div>
    </div>
  );
}
