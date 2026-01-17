import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { Discount } from "dodopayments/resources/discounts.mjs";
import { AlertFormSchema } from "@shared/schema";
import { UseFormReturn } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/components/language-provider";
import { globalBasePrice, additionalWebsitePrice, currencySymbol } from "@shared/pricing";
import { FREQUENCY_OPTIONS, FREQUENCY_LABELS } from "@/lib/constants";


interface PaymentModalProps {
    paymentForm: UseFormReturn<AlertFormSchema, any, AlertFormSchema>;
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    totalPrice: number;
    fixedTitle: any;
}


export const PaymentModal = ({
    paymentForm,
    showModal,
    setShowModal,
    totalPrice,
    fixedTitle,
}: PaymentModalProps) => {
    const { t, language } = useLanguage();
    const [totalAfterDiscount, setTotalAfterDiscount] = useState<number>(0);
    const [discount, setDiscount] = useState<Discount | null>(null);
    const [discountCode, setDiscountCode] = useState<string>("");
    const [isDiscountValid, setIsDiscountValid] = useState<boolean | null>(null);
    const [isApplying, setIsApplying] = useState<boolean>(false);

    useEffect(() => {
        if (discount) {
            const { type, amount } = discount;

            if (type === "percentage") {
                // Calculate percentage discount (amount is in basis points, so divide by 10,000)
                const discountAmount = (totalPrice * amount) / 10000;
                setTotalAfterDiscount(Math.max(totalPrice - discountAmount, 0));
            } else if (type === "fixed") {
                // Subtract fixed discount amount (amount is in USD cents, so divide by 100)
                const discountAmount = amount / 100;
                setTotalAfterDiscount(Math.max(totalPrice - discountAmount, 0));
            } else {
                // If discount type is unknown, fallback to totalPrice
                setTotalAfterDiscount(totalPrice);
            }
        } else {
            setTotalAfterDiscount(totalPrice);
        }
    }, [discount, totalPrice]);

    const applyPromoCode = async () => {
        setIsApplying(true);
        try {
            // change line
            const response = await fetch(`/api/dodo/validate-discount?code=${discountCode}`);
            if (!response.ok) {
                throw new Error("Invalid promo code");
            }
            const discountData: Discount = await response.json();
            setDiscount(discountData);
            setIsDiscountValid(true);
        } catch (error) {
            console.error("Error validating promo code:", error);
            setIsDiscountValid(false);
            setDiscount(null);
        } finally {
            setIsApplying(false);
        }
    };

    return (
        <Dialog open={showModal} onOpenChange={setShowModal}>
            <DialogContent className="w-full max-w-md">
                <DialogHeader>
                    <DialogTitle>
                        Complete Your Car Alert Subscription
                    </DialogTitle>
                    <DialogDescription>
                        You can apply a promo code for discounts before finalizing your alert setup.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-4 items-end">
                            <div className="w-full flex flex-col gap-2">
                                <Label htmlFor="promoCode">
                                    Promo Code <span className="text-sm text-gray-500 font-normal">(optional)</span>
                                </Label>
                                <Input
                                    id="promoCode"
                                    type="text"
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                    placeholder="Enter promo code"
                                />
                            </div>
                            <Button
                                onClick={applyPromoCode}
                                disabled={isApplying || !discountCode}
                            >
                                {isApplying ? "Applying..." : "Apply"}
                            </Button>
                        </div>
                        {isDiscountValid === false && (
                            <p className="text-red-500 text-sm">
                                Invalid promo code. Please try again.
                            </p>
                        )}
                    </div>
                    <Separator />
                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between items-center">
                            <p className="text-muted-foreground text-[0.95rem]">
                                {/* get selected websites length */}
                                {t("setupAlerts.basicPlan")} (
                                {paymentForm.watch("websitesSelected")?.length || 0}{" "}
                                {t("review.monitoring.websites")})
                            </p>
                            <p className="text-foreground font-medium text-[0.95rem]">
                                {fixedTitle}
                            </p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-muted-foreground text-[0.95rem]">
                                {t("review.summary.extraWebsites")} (
                                {Math.max(
                                    (paymentForm.watch("websitesSelected")?.length || 1) - 1,
                                    0,
                                )}
                                )
                            </p>
                            <p className="text-foreground font-medium text-[0.95rem]">
                                {(
                                    Math.max(
                                        (paymentForm.watch("websitesSelected")?.length || 1) - 1,
                                        0,
                                    ) * additionalWebsitePrice
                                ).toFixed(2)}
                            </p>
                        </div>
                        {paymentForm.watch("updateFrequency") !== "hourly" && (
                            <div className="flex justify-between items-center">
                                <p className="text-muted-foreground text-[0.95rem]">
                                    {t("websiteSelection.labels.updateFrequency")} (
                                    {FREQUENCY_LABELS[paymentForm.watch("updateFrequency")]})
                                </p>
                                <p className="text-foreground font-medium text-[0.95rem]">
                                {currencySymbol}{(
                                        FREQUENCY_OPTIONS.find(
                                            (f) => f.id === paymentForm.watch("updateFrequency"),
                                        )?.additionalPrice || 0
                                    ).toFixed(2)}
                                </p>
                            </div>
                        )}
                        <div className="border-t border-border pt-4 mt-4 flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <p className="text-foreground font-medium text-[0.98rem]">
                                    SubTotal
                                </p>
                                <p className="text-foreground font-semibold text-[1.2rem]">
                                {currencySymbol}{totalPrice.toFixed(2)}
                                </p>
                            </div>
                            {discount && (
                                <div className="flex justify-between items-center">
                                    <p className="text-foreground font-medium text-[0.98rem]">
                                        Discount
                                    </p>
                                    <p className="text-foreground font-semibold text-[1.2rem]">
                                        -{currencySymbol}
                                        {(totalPrice - totalAfterDiscount).toFixed(2)}
                                    </p>
                                </div>
                            )}
                            <div className="flex justify-between items-center">
                                <p className="text-foreground font-medium">
                                    {t("review.summary.total")}
                                </p>
                                <p className="text-primary font-semibold text-lg">
                                {currencySymbol}{totalAfterDiscount.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-6 justify-end mt-4">
                        <Button
                            variant="outline"
                            onClick={() => setShowModal(false)}
                        >
                            {t("dashboard.paymentMethodCard.cancel")}
                        </Button>
                        <Button
                            form="payment-form"
                            type="submit"
                        >
                            Continue to Payment
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
