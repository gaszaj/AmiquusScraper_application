import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { carBrands, getCarModels } from "@/lib/carData";

export interface CarDetailsFormData {
  brand: string;
  model: string;
  fuelType: string;
  yearMin?: number;
  yearMax?: number;
  mileageMin?: number;
  mileageMax?: number;
  priceMin?: number;
  priceMax?: number;
}

interface CarDetailsFormProps {
  onDataChange: (data: CarDetailsFormData) => void;
  initialData?: Partial<CarDetailsFormData>;
}

export default function CarDetailsForm({
  onDataChange,
  initialData,
}: CarDetailsFormProps) {
  const [brand, setBrand] = useState<string>(initialData?.brand || "");
  const [model, setModel] = useState<string>(initialData?.model || "");
  const [fuelType, setFuelType] = useState<string>(initialData?.fuelType || "");
  const [yearMin, setYearMin] = useState<string>(
    initialData?.yearMin ? initialData.yearMin.toString() : ""
  );
  const [yearMax, setYearMax] = useState<string>(
    initialData?.yearMax ? initialData.yearMax.toString() : ""
  );
  const [mileageMin, setMileageMin] = useState<string>(
    initialData?.mileageMin ? initialData.mileageMin.toString() : ""
  );
  const [mileageMax, setMileageMax] = useState<string>(
    initialData?.mileageMax ? initialData.mileageMax.toString() : ""
  );
  const [priceMin, setPriceMin] = useState<string>(
    initialData?.priceMin ? initialData.priceMin.toString() : ""
  );
  const [priceMax, setPriceMax] = useState<string>(
    initialData?.priceMax ? initialData.priceMax.toString() : ""
  );
  
  const [availableModels, setAvailableModels] = useState<string[]>([]);
  
  useEffect(() => {
    if (brand) {
      setAvailableModels(getCarModels(brand));
    } else {
      setAvailableModels([]);
      setModel("");
    }
  }, [brand]);
  
  useEffect(() => {
    onDataChange({
      brand,
      model,
      fuelType,
      yearMin: yearMin ? parseInt(yearMin) : undefined,
      yearMax: yearMax ? parseInt(yearMax) : undefined,
      mileageMin: mileageMin ? parseInt(mileageMin) : undefined,
      mileageMax: mileageMax ? parseInt(mileageMax) : undefined,
      priceMin: priceMin ? parseInt(priceMin) : undefined,
      priceMax: priceMax ? parseInt(priceMax) : undefined,
    });
  }, [
    brand,
    model,
    fuelType,
    yearMin,
    yearMax,
    mileageMin,
    mileageMax,
    priceMin,
    priceMax,
    onDataChange,
  ]);
  
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="car-brand" className="block text-sm font-medium text-neutral-700 mb-1">
          Brand
        </Label>
        <Select value={brand} onValueChange={setBrand}>
          <SelectTrigger id="car-brand" className="w-full">
            <SelectValue placeholder="Select a brand" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Any brand</SelectItem>
            {carBrands.map((carBrand) => (
              <SelectItem key={carBrand.id} value={carBrand.id}>
                {carBrand.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="car-model" className="block text-sm font-medium text-neutral-700 mb-1">
          Model
        </Label>
        <Select 
          value={model} 
          onValueChange={setModel} 
          disabled={!brand}
        >
          <SelectTrigger id="car-model" className="w-full">
            <SelectValue placeholder={brand ? "Any model" : "Select a brand first"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Any model</SelectItem>
            {availableModels.map((modelName) => (
              <SelectItem key={modelName} value={modelName.toLowerCase().replace(' ', '-')}>
                {modelName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="fuel-type" className="block text-sm font-medium text-neutral-700 mb-1">
          Fuel Type
        </Label>
        <Select value={fuelType} onValueChange={setFuelType}>
          <SelectTrigger id="fuel-type" className="w-full">
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
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                min={1990}
                max={currentYear}
                step={1}
                placeholder="Any"
                value={yearMin}
                onChange={(e) => setYearMin(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="year-max" className="block text-xs text-neutral-500 mb-1">
                To
              </Label>
              <Input
                id="year-max"
                type="number"
                min={1990}
                max={currentYear}
                step={1}
                placeholder="Any"
                value={yearMax}
                onChange={(e) => setYearMax(e.target.value)}
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
                min={0}
                step={1000}
                placeholder="Any"
                value={mileageMin}
                onChange={(e) => setMileageMin(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="mileage-max" className="block text-xs text-neutral-500 mb-1">
                To
              </Label>
              <Input
                id="mileage-max"
                type="number"
                min={0}
                step={1000}
                placeholder="Any"
                value={mileageMax}
                onChange={(e) => setMileageMax(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div>
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
              min={0}
              step={1000}
              placeholder="Any"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="price-max" className="block text-xs text-neutral-500 mb-1">
              To
            </Label>
            <Input
              id="price-max"
              type="number"
              min={0}
              step={1000}
              placeholder="Any"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
