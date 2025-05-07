import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { CreditCard, IdCard, Receipt, WalletCards } from "lucide-react";

export interface CheckoutFormData {
  cardName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
  termsAgreed: boolean;
}

interface CheckoutFormProps {
  onDataChange: (data: CheckoutFormData) => void;
  initialData?: Partial<CheckoutFormData>;
  className?: string;
}

export default function CheckoutForm({
  onDataChange,
  initialData,
  className,
}: CheckoutFormProps) {
  const [cardName, setCardName] = useState<string>(initialData?.cardName || "");
  const [cardNumber, setCardNumber] = useState<string>(initialData?.cardNumber || "");
  const [cardExpiry, setCardExpiry] = useState<string>(initialData?.cardExpiry || "");
  const [cardCvc, setCardCvc] = useState<string>(initialData?.cardCvc || "");
  const [termsAgreed, setTermsAgreed] = useState<boolean>(initialData?.termsAgreed || false);
  
  // Format card number with spaces
  const handleCardNumberChange = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      const formatted = parts.join(" ");
      setCardNumber(formatted);
    } else {
      setCardNumber(value);
    }
  };
  
  // Format expiry date as MM/YY
  const handleExpiryChange = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    
    if (v.length <= 2) {
      setCardExpiry(v);
    } else {
      setCardExpiry(`${v.substring(0, 2)}/${v.substring(2, 4)}`);
    }
  };
  
  // Format CVC to only allow 3-4 digits
  const handleCvcChange = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length <= 4) {
      setCardCvc(v);
    }
  };
  
  useEffect(() => {
    onDataChange({
      cardName,
      cardNumber,
      cardExpiry,
      cardCvc,
      termsAgreed,
    });
  }, [cardName, cardNumber, cardExpiry, cardCvc, termsAgreed, onDataChange]);
  
  return (
    <div className={cn("space-y-6", className)}>
      <div>
        <Label htmlFor="card-name" className="block text-sm font-medium text-neutral-700 mb-1">
          Name on Card
        </Label>
        <Input
          id="card-name"
          type="text"
          placeholder="Enter the name on your card"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
      </div>
      
      <div>
        <Label htmlFor="card-number" className="block text-sm font-medium text-neutral-700 mb-1">
          Card Number
        </Label>
        <div className="relative">
          <Input
            id="card-number"
            type="text"
            placeholder="0000 0000 0000 0000"
            value={cardNumber}
            onChange={(e) => handleCardNumberChange(e.target.value)}
            maxLength={19} // 16 digits + 3 spaces
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex space-x-1">
            <Receipt className="h-5 w-5 text-blue-700" />
            <IdCard className="h-5 w-5 text-red-500" />
            <WalletCards className="h-5 w-5 text-blue-500" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="card-expiry" className="block text-sm font-medium text-neutral-700 mb-1">
            Expiration Date
          </Label>
          <Input
            id="card-expiry"
            type="text"
            placeholder="MM/YY"
            value={cardExpiry}
            onChange={(e) => handleExpiryChange(e.target.value)}
            maxLength={5} // MM/YY
          />
        </div>
        
        <div>
          <Label htmlFor="card-cvc" className="block text-sm font-medium text-neutral-700 mb-1">
            CVC
          </Label>
          <Input
            id="card-cvc"
            type="text"
            placeholder="123"
            value={cardCvc}
            onChange={(e) => handleCvcChange(e.target.value)}
            maxLength={4}
          />
        </div>
      </div>
      
      <div className="flex items-start space-x-2">
        <Checkbox
          id="terms-agree"
          checked={termsAgreed}
          onCheckedChange={(checked) => setTermsAgreed(checked as boolean)}
        />
        <div className="grid gap-1.5 leading-none">
          <Label
            htmlFor="terms-agree"
            className="text-sm text-neutral-600 font-normal leading-snug"
          >
            I agree to the{" "}
            <Link href="/terms" className="text-primary-600 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary-600 hover:underline">
              Privacy Policy
            </Link>
            , and authorize Amiquus to charge my card monthly for this subscription.
          </Label>
        </div>
      </div>
    </div>
  );
}
