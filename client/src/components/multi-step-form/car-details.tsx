import { useState } from "react";
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
import { useLanguage } from "@/components/language-provider";
// import { FUEL_TYPE_OPTIONS } from "@/lib/constants";
// import { CAR_BRANDS, getCarModels } from "@/lib/car-models";

interface CarDetailsProps {
  formData: Partial<AlertFormSchema>;
  updateFormData: (data: Partial<AlertFormSchema>) => void;
  nextStep: () => void;
  prevStep: () => void;
  carBrands: string[];
  models: string[];
  fuelTypes: string[];
  loadModels: (brand: string) => string[];
  setModels: (models: string[]) => void;
}

// const carDetailsSchema = z.object({
//   carBrand: z.string().min(1, "Car brand is required"),
//   carModel: z.string().min(1, "Car model is required"),
//   fuelType: z.string().min(1, "Fuel type is required"),

//   priceMin: z
//     .string()
//     .regex(/^\d*$/, "Minimum price must be a number")
//     .optional()
//     .or(z.literal("")),
//   priceMax: z
//     .string()
//     .regex(/^\d*$/, "Maximum price must be a number")
//     .optional()
//     .or(z.literal("")),

//   yearMin: z
//     .string()
//     .regex(/^\d{4}$/, "Minimum year must be a valid year")
//     .optional()
//     .or(z.literal("")),
//   yearMax: z
//     .string()
//     .regex(/^\d{4}$/, "Maximum year must be a valid year")
//     .optional()
//     .or(z.literal("")),

//   maxKilometers: z
//     .string()
//     .regex(/^\d*$/, "Max kilometers must be a number")
//     .optional()
//     .or(z.literal("")),
// });

export default function CarDetails({
  formData,
  updateFormData,
  nextStep,
  prevStep,
  carBrands,
  models,
  fuelTypes,
  loadModels,
  setModels,
}: CarDetailsProps) {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [error, setError] = useState<string | null>(null);

  const carDetailsSchema = z.object({
    carBrand: z.string().min(1, t("carDetails.errors.carBrand")),
    carModel: z.string().min(1, t("carDetails.errors.carModel")),
    fuelType: z.string().min(1, t("carDetails.errors.fuelType")),
    priceMin: z
      .string()
      .regex(/^\d*$/, t("carDetails.errors.priceMin"))
      .optional()
      .or(z.literal("")),
    priceMax: z
      .string()
      .regex(/^\d*$/, t("carDetails.errors.priceMax"))
      .optional()
      .or(z.literal("")),
    yearMin: z
      .string()
      .regex(/^\d{4}$/, t("carDetails.errors.yearMin"))
      .optional()
      .or(z.literal("")),
    yearMax: z
      .string()
      .regex(/^\d{4}$/, t("carDetails.errors.yearMax"))
      .optional()
      .or(z.literal("")),
    maxKilometers: z
      .string()
      .regex(/^\d*$/, t("carDetails.errors.maxKilometers"))
      .optional()
      .or(z.literal("")),
  });

  const form = useForm<z.infer<typeof carDetailsSchema>>({
    resolver: zodResolver(carDetailsSchema),
    defaultValues: {
      carBrand: formData.carBrand || "",
      carModel: formData.carModel || "",
      fuelType: formData.fuelType || undefined,
      yearMin: formData.yearMin || undefined,
      yearMax: formData.yearMax || undefined,
      maxKilometers: formData.maxKilometers || undefined,
      priceMin: formData.priceMin || undefined,
      priceMax: formData.priceMax || undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof carDetailsSchema>) => {
    try {
      updateFormData(data);
      nextStep();
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          {" "}
          {t("carDetails.heading")}
        </h2>
        <p className="text-sm text-neutral-500">
          {t("carDetails.description")}
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
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("carDetails.labels.carModel")}</FormLabel>
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
                <FormLabel>{t("carDetails.labels.maxKilometers")}</FormLabel>
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
          <div className="flex justify-between">
            <Button type="button" variant="outline" onClick={prevStep}>
              {t("carDetails.actions.previous")}
            </Button>
            <Button type="submit">{t("carDetails.actions.continue")}</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
