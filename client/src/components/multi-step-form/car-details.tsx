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
import { FUEL_TYPE_OPTIONS } from "@/lib/constants";
import { CAR_BRANDS, getCarModels } from "@/lib/car-models";

interface CarDetailsProps {
  formData: Partial<SubscriptionFormData>;
  updateFormData: (data: Partial<SubscriptionFormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const carDetailsSchema = z.object({
  brand: z.string().optional(),
  model: z.string().optional(),
  fuelType: z.enum(['gasoline', 'diesel', 'electric', 'hybrid', 'plugin_hybrid']).optional(),
  yearMin: z.number().int().positive().optional(),
  yearMax: z.number().int().positive().optional(),
  mileageMin: z.number().int().nonnegative().optional(),
  mileageMax: z.number().int().nonnegative().optional(),
  priceMin: z.number().int().nonnegative().optional(),
  priceMax: z.number().int().nonnegative().optional(),
}).refine((data) => {
  if (data.yearMin && data.yearMax) {
    return data.yearMin <= data.yearMax;
  }
  return true;
}, {
  message: "Minimum year must be less than or equal to maximum year",
  path: ["yearMin"],
}).refine((data) => {
  if (data.mileageMin && data.mileageMax) {
    return data.mileageMin <= data.mileageMax;
  }
  return true;
}, {
  message: "Minimum mileage must be less than or equal to maximum mileage",
  path: ["mileageMin"],
}).refine((data) => {
  if (data.priceMin && data.priceMax) {
    return data.priceMin <= data.priceMax;
  }
  return true;
}, {
  message: "Minimum price must be less than or equal to maximum price",
  path: ["priceMin"],
});

export default function CarDetails({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}: CarDetailsProps) {
  const [error, setError] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string>(formData.brand || "");
  const [carModels, setCarModels] = useState<string[]>(
    formData.brand ? getCarModels(formData.brand) : []
  );

  const form = useForm<z.infer<typeof carDetailsSchema>>({
    resolver: zodResolver(carDetailsSchema),
    defaultValues: {
      brand: formData.brand || "",
      model: formData.model || "",
      fuelType: formData.fuelType || undefined,
      yearMin: formData.yearMin || undefined,
      yearMax: formData.yearMax || undefined,
      mileageMin: formData.mileageMin || undefined,
      mileageMax: formData.mileageMax || undefined,
      priceMin: formData.priceMin || undefined,
      priceMax: formData.priceMax || undefined,
    },
  });

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
    const models = getCarModels(brand);
    setCarModels(models);
    form.setValue("brand", brand);
    // Reset model when brand changes
    form.setValue("model", "");
  };

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
        <h2 className="text-2xl font-semibold tracking-tight">Car Details</h2>
        <p className="text-sm text-neutral-500">
          Specify the car details you are looking for. All fields are optional - leave any blank
          to get a wider range of results.
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <Select
                    onValueChange={(value) => handleBrandChange(value)}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select car brand" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {CAR_BRANDS.map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {brand}
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
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Model</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    disabled={!selectedBrand}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={selectedBrand ? "Select model" : "Select brand first"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {carModels.map((model) => (
                        <SelectItem key={model} value={model}>
                          {model}
                        </SelectItem>
                      ))}
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
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Any fuel type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {FUEL_TYPE_OPTIONS.map((option) => (
                      <SelectItem key={option.id} value={option.id}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <FormLabel className="block mb-4">Year Range</FormLabel>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="yearMin"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Min year"
                          min="1900"
                          max="2099"
                          {...field}
                          onChange={(e) => {
                            const value = e.target.value === "" ? undefined : parseInt(e.target.value, 10);
                            field.onChange(value);
                          }}
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
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Max year"
                          min="1900"
                          max="2099"
                          {...field}
                          onChange={(e) => {
                            const value = e.target.value === "" ? undefined : parseInt(e.target.value, 10);
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div>
              <FormLabel className="block mb-4">Mileage Range (km)</FormLabel>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="mileageMin"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Min mileage"
                          min="0"
                          {...field}
                          onChange={(e) => {
                            const value = e.target.value === "" ? undefined : parseInt(e.target.value, 10);
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mileageMax"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Max mileage"
                          min="0"
                          {...field}
                          onChange={(e) => {
                            const value = e.target.value === "" ? undefined : parseInt(e.target.value, 10);
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          <div>
            <FormLabel className="block mb-4">Price Range (€)</FormLabel>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="priceMin"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Min price"
                        min="0"
                        {...field}
                        onChange={(e) => {
                          const value = e.target.value === "" ? undefined : parseInt(e.target.value, 10);
                          field.onChange(value);
                        }}
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
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Max price"
                        min="0"
                        {...field}
                        onChange={(e) => {
                          const value = e.target.value === "" ? undefined : parseInt(e.target.value, 10);
                          field.onChange(value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

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