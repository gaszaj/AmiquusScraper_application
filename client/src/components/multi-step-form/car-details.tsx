import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SubscriptionFormData } from "@shared/schema";
import { CAR_BRANDS, getCarModels } from "@/lib/car-models";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

interface CarDetailsProps {
  formData: Partial<SubscriptionFormData>;
  updateFormData: (data: Partial<SubscriptionFormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function CarDetails({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}: CarDetailsProps) {
  const [carModels, setCarModels] = useState<string[]>([]);
  
  const { register, handleSubmit, control, watch } = useForm({
    defaultValues: {
      brand: formData.brand || "",
      model: formData.model || "",
      fuelType: formData.fuelType || "",
      yearMin: formData.yearMin || undefined,
      yearMax: formData.yearMax || undefined,
      mileageMin: formData.mileageMin || undefined,
      mileageMax: formData.mileageMax || undefined,
      priceMin: formData.priceMin || undefined,
      priceMax: formData.priceMax || undefined,
    },
  });

  const selectedBrand = watch("brand");

  // Update models when brand changes
  useEffect(() => {
    if (selectedBrand) {
      setCarModels(getCarModels(selectedBrand));
    } else {
      setCarModels([]);
    }
  }, [selectedBrand]);

  const onSubmit = (data: any) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <div className="form-step">
      <h3 className="text-xl font-title font-semibold mb-6">Car Details</h3>
      <p className="text-neutral-600 mb-6">
        Tell us what type of car you're looking for.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <Label htmlFor="car-brand" className="block text-sm font-medium text-neutral-700 mb-1">
            Brand
          </Label>
          <Controller
            name="brand"
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={field.value}
              >
                <SelectTrigger id="car-brand">
                  <SelectValue placeholder="Select a brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any brand</SelectItem>
                  {CAR_BRANDS.map((brand) => (
                    <SelectItem key={brand.value} value={brand.value}>{brand.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="mb-6">
          <Label htmlFor="car-model" className="block text-sm font-medium text-neutral-700 mb-1">
            Model
          </Label>
          <Controller
            name="model"
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={field.value}
                disabled={!selectedBrand}
              >
                <SelectTrigger id="car-model">
                  <SelectValue placeholder={selectedBrand ? "Any model" : "Select a brand first"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any model</SelectItem>
                  {carModels.map((model) => (
                    <SelectItem key={model} value={model.toLowerCase().replace(' ', '-')}>{model}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="mb-6">
          <Label htmlFor="fuel-type" className="block text-sm font-medium text-neutral-700 mb-1">
            Fuel Type
          </Label>
          <Controller
            name="fuelType"
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={field.value}
              >
                <SelectTrigger id="fuel-type">
                  <SelectValue placeholder="Any fuel type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any fuel type</SelectItem>
                  <SelectItem value="gasoline">Gasoline</SelectItem>
                  <SelectItem value="diesel">Diesel</SelectItem>
                  <SelectItem value="electric">Electric</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                  <SelectItem value="plugin_hybrid">Plug-in Hybrid</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <Label className="block text-sm font-medium text-neutral-700 mb-3">
              Year Range
            </Label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="year-min" className="block text-xs text-neutral-500 mb-1">
                  From
                </Label>
                <Input
                  id="year-min"
                  type="number"
                  min="1990"
                  max="2023"
                  step="1"
                  {...register("yearMin", { valueAsNumber: true })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="Any"
                />
              </div>
              <div>
                <Label htmlFor="year-max" className="block text-xs text-neutral-500 mb-1">
                  To
                </Label>
                <Input
                  id="year-max"
                  type="number"
                  min="1990"
                  max="2023"
                  step="1"
                  {...register("yearMax", { valueAsNumber: true })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="Any"
                />
              </div>
            </div>
          </div>

          <div>
            <Label className="block text-sm font-medium text-neutral-700 mb-3">
              Mileage Range (miles)
            </Label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="mileage-min" className="block text-xs text-neutral-500 mb-1">
                  From
                </Label>
                <Input
                  id="mileage-min"
                  type="number"
                  min="0"
                  step="1000"
                  {...register("mileageMin", { valueAsNumber: true })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="Any"
                />
              </div>
              <div>
                <Label htmlFor="mileage-max" className="block text-xs text-neutral-500 mb-1">
                  To
                </Label>
                <Input
                  id="mileage-max"
                  type="number"
                  min="0"
                  step="1000"
                  {...register("mileageMax", { valueAsNumber: true })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="Any"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <Label className="block text-sm font-medium text-neutral-700 mb-3">
            Price Range ($)
          </Label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="price-min" className="block text-xs text-neutral-500 mb-1">
                From
              </Label>
              <Input
                id="price-min"
                type="number"
                min="0"
                step="1000"
                {...register("priceMin", { valueAsNumber: true })}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                placeholder="Any"
              />
            </div>
            <div>
              <Label htmlFor="price-max" className="block text-xs text-neutral-500 mb-1">
                To
              </Label>
              <Input
                id="price-max"
                type="number"
                min="0"
                step="1000"
                {...register("priceMax", { valueAsNumber: true })}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                placeholder="Any"
              />
            </div>
          </div>
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
