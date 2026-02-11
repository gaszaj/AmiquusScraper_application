import { useEffect, useState, Dispatch, SetStateAction, useRef } from "react";
import { Link, useLocation } from "wouter";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import {
  AlertCircle,
  CheckCircle2,
  CreditCard,
  Edit2,
  Info,
  LogOut,
  PlusCircle,
  Settings,
  ShieldAlert,
  User,
  Wallet,
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useQuery, useMutation } from "@tanstack/react-query";
import { User as UserType, Subscription } from "@shared/schema";
import { useLanguage } from "@/components/language-provider";
import { currencySymbol } from "@shared/pricing";

interface SubscriptionCardProps {
  subscription: Subscription;
}

function SubscriptionCard({ subscription }: SubscriptionCardProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [location, navigate] = useLocation();
  const [isConfirmingCancel, setIsConfirmingCancel] = useState(false);
  const [cancelMethod, setCancelMethod] = useState<"now" | "billing_end" | "">("")

  const handleCancelClick = () => {
    setIsConfirmingCancel(true);
  };

  const confirmCancel = async () => {
    if (!cancelMethod) {
      toast({
        title: "Choose a cancellation option",
        description:
          "Please select how you want to cancel your subscription before continuing.",
        variant: "destructive",
      });
      return;
    }

    try {
      await cancelSubscription(subscription.id, cancelMethod);

      // refresh subscriptions list
      queryClient.invalidateQueries({ queryKey: ["/api/subscriptions"] });

      toast({
        title:
          cancelMethod === "billing_end"
            ? "Cancellation scheduled"
            : "Subscription cancelled",
        description:
          cancelMethod === "billing_end"
            ? "You’ll keep receiving notifications until the end of your billing period."
            : "Notifications will stop immediately.",
      });

    } catch (error: any) {
      console.error("Failed to cancel subscription:", error);

      toast({
        title: "Error",
        description:
          error?.message || "Failed to cancel subscription. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsConfirmingCancel(false);
    }
  };

  const cancelAction = () => {
    setIsConfirmingCancel(false);
  };

  const handleUpdatePaymentMethod = async () => {
    try {
      const res = await apiRequest(
        "POST",
        `/api/subscriptions/${encodeURIComponent(subscription.dodoSubscriptionId as string)}/update-payment-method-in`
      );

      const data = await res.json();

      if (!res.ok || !data?.paymentLink) {
        throw new Error(data?.message || "Unable to start payment update.");
      }

      window.location.href = data.paymentLink;
    } catch (e: any) {
      toast({
        title: "Unable to update payment method",
        description: e?.message || "Please try again.",
        variant: "destructive",
      });
    }
  };


  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">
              {subscription.brand} {subscription.model}
            </CardTitle>
            <CardDescription>
              {t("dashboard.subscriptionCard.years")}: {subscription.yearMin}-
              {subscription.yearMax},{" "}
              {t("dashboard.subscriptionCard.priceRange")}: {currencySymbol}
              {subscription.priceMin}-{currencySymbol}{subscription.priceMax}
            </CardDescription>
          </div>
          <Badge
            className={
              subscription.status === "active"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-amber-500 hover:bg-amber-600"
            }
          >
            {subscription.status.charAt(0).toUpperCase() +
              subscription.status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <div className="flex items-start space-x-2">
            <span className="font-medium">
              {t("dashboard.subscriptionCard.websites")}:
            </span>
            <span>
              {(subscription.websitesSelected as string[]).join(", ")}
            </span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="font-medium">
              {t("dashboard.subscriptionCard.updates")}:
            </span>
            <span>{subscription.updateFrequency}</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="font-medium">
              {t("dashboard.subscriptionCard.language")}:
            </span>
            <span>{subscription.notificationLanguage.toUpperCase()}</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="font-medium">
              {t("dashboard.subscriptionCard.price")}:
            </span>
            <span>
              {subscription.priceAfterDiscount && subscription.priceAfterDiscount !== subscription.price ? (
                <span className="inline-flex items-center gap-2">
                  <span className="line-through text-muted-foreground">
                    {currencySymbol}{(subscription.price / 100).toFixed(2)}
                  </span>
                  <span className="font-semibold">
                    {currencySymbol}{(subscription.priceAfterDiscount / 100).toFixed(2)}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </span>
              ) : (
                <span>
                  {currencySymbol}{(subscription.price / 100).toFixed(2)}/month
                </span>
              )}
            </span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="font-medium">Discount:</span>
            <span>
              {subscription.discountValue ? (
                <span className="inline-flex items-center gap-2">
                  <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300">
                    {(subscription.discountValue / 100).toFixed(1)}% off
                  </span>

                  {subscription.promoCode && (
                    <span className="text-xs text-muted-foreground">
                      ({subscription.promoCode.toUpperCase()})
                    </span>
                  )}
                </span>
              ) : (
                <span className="text-muted-foreground">None</span>
              )}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 justify-end space-x-2 pt-2">
        {subscription.status === "cancelled_on" && (
          <div className="flex items-center gap-2 rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-700 dark:bg-amber-900/20 dark:text-amber-300">
            <Info className="h-4 w-4" />
            <span>
              Subscription will remain active until the end of the current billing
              period.
            </span>
          </div>
        )}
        {subscription.status != "cancelled_on" && (
          <Button
            variant="outline"
            size="sm"
            className="text-sm"
            onClick={handleUpdatePaymentMethod}
          >
            <CreditCard className="h-3.5 w-3.5 mr-1" />
            Update Payment Method
          </Button>
        )}
        {subscription.status === "active" && (
          <Button
            variant="outline"
            size="sm"
            className="text-sm"
            //gp to "/edit/:id"
            onClick={() => navigate(`/edit/${subscription.id}`)}
          >
            <Edit2 className="h-3.5 w-3.5 mr-1" />
            {t("dashboard.subscriptionCard.edit")}
          </Button>
        )}
        {["active", "on_hold"].includes(subscription.status) && (
          <Dialog open={isConfirmingCancel} onOpenChange={setIsConfirmingCancel}>
            <DialogTrigger asChild>
              <Button
                variant="destructive"
                size="sm"
                className="text-sm"
                onClick={handleCancelClick}
              >
                {t("dashboard.subscriptionCard.cancelAlert")}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {t("dashboard.subscriptionCard.cancelTitle")}
                </DialogTitle>
                <DialogDescription>
                  Choose how you want to cancel{" "}
                  <span className="font-medium">
                    {subscription.brand} {subscription.model}
                  </span>
                  .
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-3">
                <RadioGroup
                  value={cancelMethod}
                  onValueChange={(v) => setCancelMethod(v as "now" | "billing_end")}
                  className="space-y-3"
                >
                  <div className="flex items-start gap-3 rounded-lg border p-3">
                    <RadioGroupItem value="billing_end" id="cancel-billing-end" className="mt-1" />
                    <div className="space-y-1">
                      <Label htmlFor="cancel-billing-end" className="font-medium">
                        Stop at end of billing period (recommended)
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        You’ll keep getting notifications until your current paid period ends.
                        After that, we’ll automatically turn off alerts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border p-3">
                    <RadioGroupItem value="now" id="cancel-now" className="mt-1" />
                    <div className="space-y-1">
                      <Label htmlFor="cancel-now" className="font-medium">
                        Stop immediately
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Notifications stop right away. You won’t receive alerts for the rest of this billing period.
                      </p>
                    </div>
                  </div>
                </RadioGroup>
                <div className="rounded-lg bg-muted/40 p-3 text-sm text-muted-foreground">
                  {cancelMethod === "billing_end" ? (
                    <>
                      We’ll keep alerts active until the end of your billing period, then set your subscription
                      to inactive automatically.
                    </>
                  ) : (
                    <>
                      We’ll disable alerts immediately by marking your subscription inactive right now.
                    </>
                  )}
                </div>
              </div>
              <DialogFooter className="mt-4">
                <Button variant="outline" onClick={cancelAction}>
                  {t("dashboard.subscriptionCard.keepMyAlert")}
                </Button>
                <Button variant="destructive" onClick={confirmCancel}>
                  Confirm cancellation
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </CardFooter>
    </Card>
  );
}

interface PaymentMethod {
  id: string;
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
  isDefault: boolean;
}

type WalletItem = {
  customer_id: string;
  currency: string; // "EUR"
  balance: number;
  created_at: string;
  updated_at: string;
};

interface PaymentMethodCardProps {
  method: PaymentMethod;
  onRemove: (id: string) => void;
  onSetDefault: (id: string) => void;
}

function PaymentMethodCard({
  method,
  onRemove,
  onSetDefault,
}: PaymentMethodCardProps) {
  const { t } = useLanguage();
  const [isConfirmingRemove, setIsConfirmingRemove] = useState(false);

  const handleRemoveClick = () => {
    setIsConfirmingRemove(true);
  };

  const confirmRemove = () => {
    onRemove(method.id);
    setIsConfirmingRemove(false);
  };

  const cancelAction = () => {
    setIsConfirmingRemove(false);
  };

  return (
    <Card
      className={`mb-4 ${method.isDefault ? "border-primary dark:border-[#ff0]" : ""}`}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center">
            {method.brand === "visa" ? (
              <svg className="w-8 h-8 mr-2" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="6" fill="#2566AF" />
                <path
                  d="M18.0388 31H14.9701L12.7632 20.5183C12.6585 20.1367 12.427 19.8042 12.0872 19.58C11.161 19.007 10.1232 18.5417 9 18.2233V17.865H14.1554C14.8586 17.865 15.3843 18.365 15.4957 18.9417L16.6848 26.545L20.0692 17.865H23.0264L18.0388 31ZM24.575 31H21.7291L24.0494 17.865H26.8953L24.575 31ZM33.2285 18.04C32.4137 18.04 31.7105 18.365 31.2963 18.9417C30.9565 19.4333 31.0679 20.0867 31.1792 20.4683L34.1364 31H37.0937L38.1714 27.5483H41.8987L42.3131 31H45.049L42.199 17.865H39.2417L33.2285 18.04ZM38.7089 25.2217L39.7866 20.7867L41.2623 25.2217H38.7089Z"
                  fill="white"
                />
                <path
                  d="M20.9143 25.7133L23.6501 19.4333C23.5387 19.8867 22.4609 24.0233 22.4609 24.0233L21.6462 27.0633C23.3844 27.0633 24.575 26.2217 25.0998 25.4617C25.5143 24.8067 27.6097 21.615 27.6097 21.615C27.6097 21.615 25.8715 25.7133 25.8715 26.7067C25.8715 27.7 20.9143 25.7133 20.9143 25.7133Z"
                  fill="#EDD977"
                />
              </svg>
            ) : method.brand === "mastercard" ? (
              <svg className="w-8 h-8 mr-2" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="6" fill="#16366F" />
                <circle cx="17" cy="24" r="8" fill="#EB001B" />
                <circle cx="31" cy="24" r="8" fill="#F79E1B" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 29.3589C26.5449 27.3762 28 24.3513 28 21C28 17.6487 26.5449 14.6238 24 12.6411C21.4551 14.6238 20 17.6487 20 21C20 24.3513 21.4551 27.3762 24 29.3589Z"
                  fill="#FF5F00"
                />
              </svg>
            ) : (
              <CreditCard className="h-5 w-5 mr-2" />
            )}
            •••• {method.last4}
            {method.isDefault && (
              <Badge
                variant="outline"
                className="ml-2 border-green-500 text-green-600 dark:border-green-400 dark:text-green-400"
              >
                {t("dashboard.paymentMethodCard.default")}
              </Badge>
            )}
          </CardTitle>
          <CardDescription>
            {t("dashboard.paymentMethodCard.expires")} {method.expMonth}/
            {method.expYear}
          </CardDescription>
        </div>
      </CardHeader>
      <CardFooter className="flex justify-end space-x-2 pt-0">
        {!method.isDefault && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="text-sm">
                {t("dashboard.paymentMethodCard.setAsDefault")}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {t("dashboard.paymentMethodCard.setDefaultTitle")}
                </DialogTitle>
                <DialogDescription>
                  {t("dashboard.paymentMethodCard.setDefaultDescription", {
                    brand:
                      method.brand.charAt(0).toUpperCase() +
                      method.brand.slice(1),
                    last4: method.last4,
                  })}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="mt-4">
                <Button
                  variant="outline"
                  onClick={() =>
                    document
                      .querySelector<HTMLButtonElement>(
                        '[data-state="open"] button[aria-label="Close"]',
                      )
                      ?.click()
                  }
                >
                  {t("dashboard.paymentMethodCard.cancel")}
                </Button>
                <Button
                  onClick={() => {
                    onSetDefault(method.id);
                    document
                      .querySelector<HTMLButtonElement>(
                        '[data-state="open"] button[aria-label="Close"]',
                      )
                      ?.click();
                  }}
                >
                  {t("dashboard.paymentMethodCard.setAsDefault")}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}

        <Dialog open={isConfirmingRemove} onOpenChange={setIsConfirmingRemove}>
          <DialogTrigger asChild>
            <Button
              variant="destructive"
              size="sm"
              className="text-sm"
              onClick={handleRemoveClick}
            >
              {t("dashboard.paymentMethodCard.remove")}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {t("dashboard.paymentMethodCard.removeTitle")}
              </DialogTitle>
              <DialogDescription>
                {t("dashboard.paymentMethodCard.removeDescription", {
                  brand:
                    method.brand.charAt(0).toUpperCase() +
                    method.brand.slice(1),
                  last4: method.last4,
                })}
                {method.isDefault &&
                  " " + t("dashboard.paymentMethodCard.removeWarning")}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-4">
              <Button variant="outline" onClick={cancelAction}>
                {t("dashboard.paymentMethodCard.cancel")}
              </Button>
              <Button variant="destructive" onClick={confirmRemove}>
                {t("dashboard.paymentMethodCard.confirmRemove")}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}

export default function Dashboard() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("subscriptions");
  const { toast } = useToast();
  const { isAuthenticated, user, logout, checkAuth } = useAuth();

  // Subscriptions query
  const { data: subscriptions, isLoading: isLoadingSubscriptions } = useQuery<
    Subscription[]
  >({
    queryKey: ["/api/subscriptions"],
    enabled: isAuthenticated && !!user,
  });

  // Payment methods
  const { data: paymentMethods, isLoading: isLoadingPayments } = useQuery<
    any[]
  >({
    queryKey: ["/api/payment-methods"],
    enabled: isAuthenticated && !!user,
  });

  const [, setLocation] = useLocation();
  const handledReturnRef = useRef(false);

  const [walletItems, setWalletItems] = useState<WalletItem[]>([]);
  const [totalBalanceUsd, setTotalBalanceUsd] = useState<number | null>(null);
  const [walletOpen, setWalletOpen] = useState(false);
  const [walletLoading, setWalletLoading] = useState(false);

  useEffect(() => {
    if (handledReturnRef.current) return;

    const params = new URLSearchParams(window.location.search);
    const subscriptionId = params.get("subscription_id");
    const status = params.get("status"); // active | failed

    if (!subscriptionId || !status) return;

    handledReturnRef.current = true;

    // Refresh subscriptions so UI updates
    queryClient.invalidateQueries({ queryKey: ["/api/subscriptions"] });

    const normalized = status.toLowerCase();

    if (normalized === "active") {
      toast({
        title: "Subscription activated",
        description: "Payment successful — your subscription is now active.",
        variant: "default",
      });
    } else if (normalized === "failed") {
      toast({
        title: "Payment failed",
        description:
          "Your payment didn’t go through. Please update your payment method and try again.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Subscription update",
        description: `Status: ${status}`,
      });
    }

    // ✅ Clean URL so refresh doesn't re-trigger toast
    setLocation("/dashboard", { replace: true });
  }, [setLocation, toast]);


  // Remove payment method mutation
  const removePaymentMethodMutation = useMutation({
    mutationFn: async (paymentMethodId: string) => {
      return await apiRequest(
        "DELETE",
        `/api/payment-methods/${paymentMethodId}`,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/payment-methods"] });
      toast({
        title: "Payment method removed",
        description: "Your payment method has been removed successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error removing payment method",
        description:
          error instanceof Error ? error.message : "Please try again",
        variant: "destructive",
      });
    },
  });

  // Set default payment method mutation
  const setDefaultPaymentMethodMutation = useMutation({
    mutationFn: async (paymentMethodId: string) => {
      return await apiRequest(
        "POST",
        `/api/payment-methods/${paymentMethodId}/default`,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/payment-methods"] });
      toast({
        title: "Default payment method updated",
        description:
          "Your default payment method has been updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error updating default payment method",
        description:
          error instanceof Error ? error.message : "Please try again",
        variant: "destructive",
      });
    },
  });

  const handleRemovePaymentMethod = (id: any) => {
    removePaymentMethodMutation.mutate(id);
  };

  const handleSetDefaultPaymentMethod = (id: any) => {
    setDefaultPaymentMethodMutation.mutate(id);
  };


  const fetchWallets = async () => {
    setWalletLoading(true);
    try {
      const res = await apiRequest("GET", "/api/customer/wallets");
      const json = await res.json();

      if (!res.ok) throw new Error(json?.message || "Unable to fetch wallet balance.");

      setWalletItems(Array.isArray(json.items) ? json.items : []);
      setTotalBalanceUsd(typeof json.total_balance_usd === "number" ? json.total_balance_usd : null);
    } catch (e: any) {
      toast({
        title: "Unable to fetch wallet",
        description: e?.message || "Please try again.",
        variant: "destructive",
      });
    } finally {
      setWalletLoading(false);
    }
  };

  const formatMoney = (amountInCents: number, currency: string) =>
    new Intl.NumberFormat("en-IE", {
      style: "currency",
      currency,
    }).format(amountInCents / 100);



  return (
    <div className="container mx-auto py-12 mt-20 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar/User Info */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 dark:bg-[#ff0]/10 flex items-center justify-center">
                  <User className="h-8 w-8 text-primary dark:text-[#ff0]" />
                </div>
                <div>
                  <CardTitle>
                    {user?.firstName} {user?.lastName}
                  </CardTitle>
                  <CardDescription>{user?.email}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {user && (
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {t("profile.sidebar.memberSince")}
                    </span>
                    <span>
                      {user?.createdAt &&
                        new Date(user.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t("profile.sidebar.subscriptions")}</span>
                    <span>{subscriptions ? subscriptions.length : 0}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {t("profile.sidebar.methods")}
                    </span>
                    <span>{paymentMethods ? paymentMethods.length : 0}</span>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Dialog open={walletOpen} onOpenChange={setWalletOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => {
                      setWalletOpen(true);
                      fetchWallets();
                    }}
                  >
                    <Wallet className="mr-2 h-4 w-4" />
                    Check wallet balance
                  </Button>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Wallet balance</DialogTitle>
                  </DialogHeader>

                  <div className="space-y-3">
                    {walletLoading ? (
                      <p className="text-sm text-muted-foreground">Loading wallet…</p>
                    ) : walletItems.length === 0 ? (
                      <p className="text-sm text-muted-foreground">
                        No wallet credits NotFound
                      </p>
                    ) : (
                      <div className="space-y-2">
                        {walletItems.map((w, idx) => (
                          <div key={idx} className="rounded-lg border p-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Wallet Balance</span>
                              <span className="text-sm font-semibold">
                                {formatMoney(w.balance, w.currency)}
                              </span>
                            </div>

                            <p className="mt-1 text-xs text-muted-foreground">
                              Currency: {w.currency} • Updated {new Date(w.updated_at).toLocaleString()}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex justify-end gap-2 pt-2">
                      <Button
                        variant="outline"
                        onClick={fetchWallets}
                        disabled={walletLoading}
                      >
                        Refresh
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    {t("profile.sidebar.account")}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="capitalize">{t("profile.account.title")}</DialogTitle>
                    <DialogDescription>
                      {t("profile.account.desc")}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        {t("profile.account.name")}
                      </Label>
                      <Input
                        id="name"
                        defaultValue={user?.firstName + " " + user?.lastName}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        {t("profile.account.email")}
                      </Label>
                      <Input id="email" defaultValue={user?.email} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">
                        {t("profile.account.username")}
                      </Label>
                      <Input id="username" defaultValue={user?.username} />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() =>
                          document
                            .querySelector<HTMLButtonElement>(
                              '[data-state="open"] button[aria-label="Close"]',
                            )
                            ?.click()
                        }
                      >
                        {t("profile.account.cancel")}
                      </Button>
                    </DialogClose>
                    <Button
                      onClick={async () => {
                        const nameInput = document.getElementById(
                          "name",
                        ) as HTMLInputElement;
                        const emailInput = document.getElementById(
                          "email",
                        ) as HTMLInputElement;
                        const usernameInput = document.getElementById(
                          "username",
                        ) as HTMLInputElement;

                        const [firstName, ...lastNameParts] = nameInput.value
                          .trim()
                          .split(" ");
                        const lastName = lastNameParts.join(" ");

                        const payload = {
                          firstName,
                          lastName,
                          email: emailInput.value.trim(),
                          username: usernameInput.value.trim(),
                        };

                        try {
                          const res = await fetch("/api/user/update-profile", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            credentials: "include",
                            body: JSON.stringify(payload),
                          });

                          const result = await res.json();

                          if (!res.ok) {
                            toast({
                              variant: "destructive",
                              title: "Update failed",
                              description:
                                result.message || "Could not update profile.",
                            });
                            return;
                          }

                          checkAuth();
                          toast({
                            title: "Account updated",
                            description:
                              "Your account settings have been updated successfully.",
                          });

                          // Close dialog
                          document
                            .querySelector<HTMLButtonElement>(
                              '[data-state="open"] button[aria-label="Close"]',
                            )
                            ?.click();
                        } catch (err) {
                          toast({
                            variant: "destructive",
                            title: "Update error",
                            description:
                              "Something went wrong. Please try again.",
                          });
                        }
                      }}
                    >
                      {t("profile.account.save")}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    <ShieldAlert className="mr-2 h-4 w-4" />
                    {t("profile.sidebar.privacy")}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle> {t("profile.security.title")}</DialogTitle>
                    <DialogDescription>
                      {t("profile.security.desc")}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-2">
                    <div className="space-y-2">
                      <Label htmlFor="current-password"> {t("profile.security.current")} </Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">{t("profile.security.new")}</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">
                        {t("profile.security.confirm")}
                      </Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() =>
                          document
                            .querySelector<HTMLButtonElement>(
                              '[data-state="open"] button[aria-label="Close"]',
                            )
                            ?.click()
                        }
                      >
                        {t("profile.account.cancel")}
                      </Button>
                    </DialogClose>
                    <Button
                      onClick={async () => {
                        const current = (
                          document.getElementById(
                            "current-password",
                          ) as HTMLInputElement
                        )?.value;
                        const next = (
                          document.getElementById(
                            "new-password",
                          ) as HTMLInputElement
                        )?.value;
                        const confirm = (
                          document.getElementById(
                            "confirm-password",
                          ) as HTMLInputElement
                        )?.value;

                        try {
                          const res = await fetch("/api/user/change-password", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            credentials: "include",
                            body: JSON.stringify({
                              currentPassword: current,
                              newPassword: next,
                              confirmPassword: confirm,
                            }),
                          });

                          const result = await res.json();
                          if (!res.ok) throw new Error(result.message);

                          toast({
                            title: "Password updated",
                            description: result.message,
                          });

                          document
                            .querySelector<HTMLButtonElement>(
                              '[data-state="open"] button[aria-label="Close"]',
                            )
                            ?.click();
                        } catch (err: any) {
                          toast({
                            title: "Update failed",
                            description: err.message || "Something went wrong.",
                            variant: "destructive",
                          });
                        }
                      }}
                    >
                      {t("profile.security.update")}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    {t("profile.sidebar.logout")}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      {t("profile.logout.title")}</DialogTitle>
                    <DialogDescription>
                      {t("profile.logout.desc")}
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() =>
                        document
                          .querySelector<HTMLButtonElement>(
                            '[data-state="open"] button[aria-label="Close"]',
                          )
                          ?.click()
                      }
                    >
                      {t("profile.account.cancel")}
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => {
                        toast({
                          title: "Logged out",
                          description: "You have been successfully logged out.",
                        });
                        document
                          .querySelector<HTMLButtonElement>(
                            '[data-state="open"] button[aria-label="Close"]',
                          )
                          ?.click();
                        logout();
                        window.location.href = "/login";
                      }}
                    >
                      {t("profile.logout.title")}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-2/3 lg:w-3/4">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-1">
              <TabsTrigger value="subscriptions" className="w-full">
                {t("profile.tabs.alerts")}
              </TabsTrigger>
              {/* <TabsTrigger value="payment">
                {t("profile.tabs.payments")}
              </TabsTrigger> */}
            </TabsList>

            {/* Subscriptions Tab */}
            <TabsContent value="subscriptions">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>
                      {t("profile.alerts.title")}
                    </CardTitle>
                    <Link href="/setup-alerts">
                      <Button className="flex gap-2 items-center bg-primary dark:bg-[#ff0] text-white dark:text-black">
                        <PlusCircle className="h-4 w-4" />
                        {t("profile.alerts.add")}
                      </Button>
                    </Link>
                  </div>
                  <CardDescription>
                    {t("profile.alerts.desc")}
                    <br />
                    <br />
                    <span className="text-sm text-muted-foreground">
                      {t("profile.alerts.warning")}
                    </span>
                  </CardDescription>
                </CardHeader>
                {isLoadingSubscriptions ? (
                  <CardContent className="flex justify-center py-8">
                    <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                  </CardContent>
                ) : (
                  <CardContent className="space-y-4">
                    {subscriptions && subscriptions.length > 0 ? (
                      subscriptions.map((subscription) => (
                        <SubscriptionCard
                          key={subscription.id}
                          subscription={subscription}
                        />
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">
                          {t("profile.alerts.none")}
                        </p>
                        <Link href="/setup-alerts">
                          <Button className="mt-4">
                            {t("profile.alerts.cta")}
                          </Button>
                        </Link>
                      </div>
                    )}
                  </CardContent>
                )}
              </Card>
            </TabsContent>

            {/* Payment Methods Tab */}
            <TabsContent value="payment">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>
                      {t("profile.payments.title")}
                    </CardTitle>
                    {/* <AddPaymentMethodDialog /> */}
                  </div>
                  <CardDescription>
                    {t("profile.payments.desc")}
                  </CardDescription>
                </CardHeader>
                {isLoadingPayments ? (
                  <CardContent className="flex justify-center py-8">
                    <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                  </CardContent>
                ) : (
                  <CardContent className="space-y-4">
                    {paymentMethods && paymentMethods.length > 0 ? (
                      paymentMethods.map((method) => (
                        <PaymentMethodCard
                          key={method.id}
                          method={method}
                          onRemove={handleRemovePaymentMethod}
                          onSetDefault={handleSetDefaultPaymentMethod}
                        />
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">
                          {t("profile.payments.none")}
                        </p>
                        {/* <AddPaymentMethodDialog /> */}
                      </div>
                    )}
                  </CardContent>
                )}
                <CardFooter>
                  <div className="flex items-center space-x-2 w-full bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <p className="text-sm text-green-700 dark:text-green-300">
                      {t("profile.payments.encrypted")}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export async function cancelSubscription(subscriptionId: number, cancelMethod: "now" | "billing_end" | "") {
  const res = await fetch(`/api/subscriptions/${subscriptionId}/cancel`, {
    method: "POST",
    credentials: "include", // send cookies if using session-based auth
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cancelMethod }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Failed to cancel subscription");
  }

  return res.json();
}
