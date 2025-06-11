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

const carDetailsSchema = z.object({
  carBrand: z.string().min(1, "Car brand is required"),
  carModel: z.string().min(1, "Car model is required"),
  fuelType: z.string().min(1, "Fuel type is required"),

  priceMin: z
    .string()
    .regex(/^\d*$/, "Minimum price must be a number")
    .optional()
    .or(z.literal("")),
  priceMax: z
    .string()
    .regex(/^\d*$/, "Maximum price must be a number")
    .optional()
    .or(z.literal("")),

  yearMin: z
    .string()
    .regex(/^\d{4}$/, "Minimum year must be a valid year")
    .optional()
    .or(z.literal("")),
  yearMax: z
    .string()
    .regex(/^\d{4}$/, "Maximum year must be a valid year")
    .optional()
    .or(z.literal("")),

  maxKilometers: z
    .string()
    .regex(/^\d*$/, "Max kilometers must be a number")
    .optional()
    .or(z.literal("")),
});

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
  const [error, setError] = useState<string | null>(null);

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
  
  const currentYear = new Date().getFullYear();

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
          Specify the car details you are looking for. All fields are optional -
          leave any blank to get a wider range of results.
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
                  <FormLabel>Car Brand</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      setModels(loadModels(value));
                    }}
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
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Car Model</FormLabel>
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

          {/* Fuel Type */}
          <FormField
            control={form.control}
            name="fuelType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fuel Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
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
                    {...field}
                  />
                </FormControl>
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
