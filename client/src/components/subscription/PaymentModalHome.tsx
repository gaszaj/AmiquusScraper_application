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
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { parseNullableNumber } from "@/lib/payments";


interface PaymentModalProps {
    paymentForm: AlertFormSchema;
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    totalPrice: number;
    fixedTitle: any;
    userId: number;
    referralId: string | undefined;
}


export const PaymentModalHome = ({
    paymentForm,
    showModal,
    setShowModal,
    totalPrice,
    fixedTitle,
    userId,
    referralId,
}: PaymentModalProps) => {
    const { t, language } = useLanguage();
    const { toast } = useToast();
    const [totalAfterDiscount, setTotalAfterDiscount] = useState<number>(0);
    const [discount, setDiscount] = useState<Discount | null>(null);
    const [discountCode, setDiscountCode] = useState<string>("");
    const [isDiscountValid, setIsDiscountValid] = useState<boolean | null>(null);
    const [isApplying, setIsApplying] = useState<boolean>(false);

    const [submitting, setSubmitting] = useState<boolean>(false);

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

    function formatDiscountLabel(discount: Discount) {
        if (discount.type === "percentage") {
            // basis points -> percent
            const pct = discount.amount / 100; // 540 -> 5.4
            return `${pct}%`;
        }

        // cents -> USD
        const usd = (discount.amount / 100).toFixed(2);
        return `$${usd}`;
    }

    function formatCyclesText(cycles?: number) {
        if (!cycles) return "Applies to all billing cycles.";
        if (cycles === 1) return "Applies to 1 billing cycle.";
        return `Applies to ${cycles} billing cycles.`;
    }

    const applyPromoCode = async () => {
        const code = discountCode?.trim();

        if (!code) {
            toast({
                title: "Enter a Promo Code",
                description: "Please enter a promo code to apply.",
                variant: "destructive",
            });
            return;
        }

        const fail = (title: string, description: string) => {
            setIsDiscountValid(false);
            setDiscount(null);
            toast({ title, description, variant: "destructive" });
        };

        setIsApplying(true);

        try {
            const response = await apiRequest(
                "GET",
                `/api/validate-discount?code=${encodeURIComponent(code)}`
            );

            if (!response.ok) {
                fail(
                    "Invalid Promo Code",
                    "That promo code doesn’t look valid. Please try again, or contact support if you believe this is an error."
                );
                return;
            }

            const discountData: Discount = await response.json();

            if (discountData.type !== "percentage") {
                fail("Unsupported Promo Code", "Only percentage-based promo codes are supported.");
                return;
            }


            const now = Date.now();

            // Expiry check
            if (discountData.expires_at) {
                const expiresAt = new Date(discountData.expires_at).getTime();
                if (!Number.isNaN(expiresAt) && expiresAt < now) {
                    fail("Promo Code Expired", "This promo code has expired.");
                    return;
                }
            }

            // Usage limit check
            if (
                typeof discountData.usage_limit === "number" &&
                typeof discountData.times_used === "number" &&
                discountData.times_used >= discountData.usage_limit
            ) {
                fail("Usage Limit Reached", "This promo code has reached its usage limit.");
                return;
            }

            // Success
            setDiscount(discountData);
            setIsDiscountValid(true);

            const label = formatDiscountLabel(discountData);
            const cyclesText = formatCyclesText(
                discountData.subscription_cycles ?? undefined
            );

            toast({
                title: "Promo Code Applied",
                description: `Discount applied: ${label}. ${cyclesText}`,
                variant: "default",
            });
        } catch (err: any) {
            fail(
                "Error Applying Promo Code",
                err?.message || "Something went wrong. Please try again."
            );
        } finally {
            setIsApplying(false);
        }
    };

    const handleProceedToPayment = async () => {
        const formData = paymentForm;

        const payload = {
            userId,
            websitesSelected: formData.websitesSelected,
            facebookMarketplaceUrl: formData.facebookMarketplaceUrl || "",
            updateFrequency: formData.updateFrequency,
            brand: formData.carBrand,
            model: formData.carModel,
            fuelType: formData.fuelType,
            yearMin: parseNullableNumber(formData.yearMin),
            yearMax: parseNullableNumber(formData.yearMax),
            mileageMin: null,
            mileageMax: parseNullableNumber(formData.maxKilometers),
            priceMin: parseNullableNumber(formData.priceMin),
            priceMax: parseNullableNumber(formData.priceMax),
            telegramUsername: formData.telegramUsername,
            notificationLanguage: formData.notificationLanguage,
            // backend uses this to create the product price (cents)
            totalBeforeDiscount: totalPrice,
            price: totalAfterDiscount,
            promoCode: discount ? discount.code : null,
            discountId: discount ? discount.discount_id : null,
            referralId,
        };

        setSubmitting(true);

        try {
            // Proceed to payment with subscriptionData
            const response = await apiRequest(
                "POST",
                "/api/create-checkout-session",
                payload
            );

            const data = await response.json();

            if (!response.ok) {
                toast({
                    title: "Payment Error",
                    description: data?.message || "Unable to start checkout. Please try again.",
                    variant: "destructive",
                });
                return;
            }

            // ✅ clear referral AFTER checkout session is created
            if (referralId) {
                localStorage.removeItem("affonso_referral");
            }

            // redirect to Dodo checkout
            window.location.href = data.checkoutUrl;
        } catch (error) {
            console.error("Error proceeding to payment:", error);
            toast({
                title: "Error",
                description: "An error occurred while proceeding to payment. Please try again.",
                variant: "destructive",
            });
        } finally {
            setSubmitting(false);
        }
    }

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
                                {paymentForm.websitesSelected?.length || 0}{" "}
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
                                    (paymentForm.websitesSelected?.length || 1) - 1,
                                    0,
                                )}
                                )
                            </p>
                            <p className="text-foreground font-medium text-[0.95rem]">
                                {(
                                    Math.max(
                                        (paymentForm.websitesSelected?.length || 1) - 1,
                                        0,
                                    ) * additionalWebsitePrice
                                ).toFixed(2)}
                            </p>
                        </div>
                        {paymentForm.updateFrequency !== "hourly" && (
                            <div className="flex justify-between items-center">
                                <p className="text-muted-foreground text-[0.95rem]">
                                    {t("websiteSelection.labels.updateFrequency")} (
                                    {FREQUENCY_LABELS[paymentForm.updateFrequency]})
                                </p>
                                <p className="text-foreground font-medium text-[0.95rem]">
                                    {currencySymbol}{(
                                        FREQUENCY_OPTIONS.find(
                                            (f) => f.id === paymentForm.updateFrequency,
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
                            type="button"
                            onClick={handleProceedToPayment}
                            disabled={submitting}
                        >
                            {submitting ? "Processing..." : "Continue to Payment"}
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
