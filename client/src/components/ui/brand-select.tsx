import { useState, useEffect } from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { CAR_BRANDS, getCarModels } from "@/lib/car-models";

interface BrandSelectProps {
  selectedBrand: string;
  selectedModel: string;
  onBrandChange: (brand: string) => void;
  onModelChange: (model: string) => void;
  disabled?: boolean;
}

export function BrandSelect({
  selectedBrand,
  selectedModel,
  onBrandChange,
  onModelChange,
  disabled = false
}: BrandSelectProps) {
  const [availableModels, setAvailableModels] = useState<string[]>([]);

  // Update models when brand changes
  useEffect(() => {
    if (selectedBrand) {
      const models = getCarModels(selectedBrand);
      setAvailableModels(models);
      
      // If the current selected model is not available in the new brand's models,
      // reset the model selection
      if (selectedModel && !models.find(model => model.toLowerCase().replace(' ', '-') === selectedModel)) {
        onModelChange("");
      }
    } else {
      setAvailableModels([]);
      onModelChange("");
    }
  }, [selectedBrand, selectedModel, onModelChange]);

  return (
    <div className="space-y-4">
      <div>
        <Select
          value={selectedBrand}
          onValueChange={onBrandChange}
          disabled={disabled}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a brand" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Any brand</SelectItem>
            {CAR_BRANDS.map((brand) => (
              <SelectItem key={brand.value} value={brand.value}>{brand.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Select
          value={selectedModel}
          onValueChange={onModelChange}
          disabled={disabled || !selectedBrand}
        >
          <SelectTrigger>
            <SelectValue placeholder={selectedBrand ? "Any model" : "Select a brand first"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Any model</SelectItem>
            {availableModels.map((model) => (
              <SelectItem 
                key={model.toLowerCase().replace(' ', '-')} 
                value={model.toLowerCase().replace(' ', '-')}
              >
                {model}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default BrandSelect;
