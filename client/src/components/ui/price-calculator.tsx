import { useState, useEffect } from "react";

interface PriceCalculatorProps {
  basePrice?: number;
  websitesCount: number;
  updateFrequency: string;
  onPriceChange: (price: number) => void;
}

export function PriceCalculator({
  basePrice = 9.99,
  websitesCount,
  updateFrequency,
  onPriceChange
}: PriceCalculatorProps) {
  // Additional prices
  const additionalWebsitePrice = 4.99;
  const frequencyPrices = {
    'hourly': 0,
    '30min': 2.99,
    '15min': 5.99,
    '5min': 9.99,
    '1min': 14.99
  };

  const [totalPrice, setTotalPrice] = useState(basePrice);
  const [websitesPrice, setWebsitesPrice] = useState(0);
  const [frequencyPrice, setFrequencyPrice] = useState(0);

  // Recalculate price when inputs change
  useEffect(() => {
    // Calculate the additional websites cost (first one is included in base price)
    const additionalWebsites = Math.max(0, websitesCount - 1);
    const newWebsitesPrice = additionalWebsites * additionalWebsitePrice;
    setWebsitesPrice(newWebsitesPrice);

    // Get frequency price
    const newFrequencyPrice = frequencyPrices[updateFrequency as keyof typeof frequencyPrices] || 0;
    setFrequencyPrice(newFrequencyPrice);

    // Calculate total price
    const newTotalPrice = basePrice + newWebsitesPrice + newFrequencyPrice;
    setTotalPrice(newTotalPrice);
    
    // Notify parent component
    onPriceChange(newTotalPrice);
  }, [basePrice, websitesCount, updateFrequency, onPriceChange]);

  return (
    <div className="bg-neutral-50 p-6 rounded-lg">
      <h4 className="text-lg font-medium mb-4">Subscription Summary</h4>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-neutral-600">Base package (1 website)</span>
          <span className="font-medium">${basePrice.toFixed(2)}/month</span>
        </div>
        
        {websitesCount > 1 && (
          <div className="flex justify-between">
            <span className="text-neutral-600">
              Additional websites ({websitesCount - 1})
            </span>
            <span className="font-medium">
              ${websitesPrice.toFixed(2)}/month
            </span>
          </div>
        )}
        
        {updateFrequency !== 'hourly' && frequencyPrice > 0 && (
          <div className="flex justify-between">
            <span className="text-neutral-600">
              Update frequency ({
                updateFrequency === '30min' ? 'every 30 minutes' :
                updateFrequency === '15min' ? 'every 15 minutes' :
                updateFrequency === '5min' ? 'every 5 minutes' :
                updateFrequency === '1min' ? 'every minute' :
                updateFrequency
              })
            </span>
            <span className="font-medium">
              ${frequencyPrice.toFixed(2)}/month
            </span>
          </div>
        )}
        
        <div className="border-t border-neutral-300 pt-3 flex justify-between">
          <span className="font-medium">Total</span>
          <span className="font-bold text-lg">${totalPrice.toFixed(2)}/month</span>
        </div>
      </div>
      
      <div className="text-sm text-neutral-500">
        <p>Your subscription will begin immediately after payment is processed. You can cancel or modify it at any time from your account dashboard.</p>
      </div>
    </div>
  );
}

export default PriceCalculator;
