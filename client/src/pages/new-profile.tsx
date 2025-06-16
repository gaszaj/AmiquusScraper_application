import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { Link } from "wouter";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  AlertCircle,
  CheckCircle2,
  CreditCard,
  Edit2,
  LogOut,
  PlusCircle,
  Settings,
  ShieldAlert,
  User,
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useQuery, useMutation } from "@tanstack/react-query";
import { User as UserType, Subscription } from "@shared/schema";
import { useLocation } from "wouter"
import {
  useElements,
  useStripe,
  PaymentElement,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const publicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY

// Load Stripe
const stripePromise = loadStripe(publicKey as string)

// Payment Method Form component
function AddPaymentMethodForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    try {
      const { error } = await stripe.confirmSetup({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/profile?tab=billing`,
        },
      });

      if (error) {
        toast({
          title: "Error adding payment method",
          description: error.message,
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Error adding payment method",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      <Button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full mt-4"
      >
        {isProcessing ? "Processing..." : "Add Payment Method"}
      </Button>
    </form>
  );
}

function AddPaymentMethodDialog() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const options = {
    // passing the SetupIntent's client secret
    clientSecret: clientSecret,
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

  const handleOpen = async () => {
    setIsOpen(true);
    // Get setup intent from backend
    try {
      const response = await apiRequest("POST", "/api/create-setup-intent");
      const data = await response.json();
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error("Error creating setup intent:", error);
      toast({
        title: "Error",
        description: "Unable to initialize payment setup",
        variant: "destructive",
      });
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={handleOpen}
          className="ml-auto flex gap-2 items-center"
        >
          <PlusCircle className="h-4 w-4" />
          Add Payment Method
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Payment Method</DialogTitle>
          <DialogDescription>
            Add a new credit or debit card for your subscription payments.
          </DialogDescription>
        </DialogHeader>
        {clientSecret ? (
          <Elements stripe={stripePromise} options={options}>
            <AddPaymentMethodForm />
          </Elements>
        ) : (
          <div className="flex justify-center py-8">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

interface SubscriptionCardProps {
  subscription: Subscription;
  onCancel: (id: number) => void;
}

function SubscriptionCard({
  subscription,
  onCancel,
}: SubscriptionCardProps) {
   const [location, navigate ] = useLocation();
  const [isConfirmingCancel, setIsConfirmingCancel] = useState(false);

  const handleCancelClick = () => {
    setIsConfirmingCancel(true);
  };

  const confirmCancel = () => {
    onCancel(subscription.id);
    setIsConfirmingCancel(false);
  };

  const cancelAction = () => {
    setIsConfirmingCancel(false);
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
              Years: {subscription.yearMin}-{subscription.yearMax}, Price: $
              {subscription.priceMin}-${subscription.priceMax}
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
            <span className="font-medium">Websites:</span>
            <span>
              {(subscription.websitesSelected as string[]).join(", ")}
            </span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="font-medium">Updates:</span>
            <span>{subscription.updateFrequency}</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="font-medium">Language:</span>
            <span>{subscription.notificationLanguage.toUpperCase()}</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="font-medium">Price:</span>
            <span>${(subscription.price / 100).toFixed(2)}/month</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2 pt-2">
        <Button 
          variant="outline" size="sm" className="text-sm"
          //gp to "/edit/:id"
          onClick={() => navigate(`/edit/${subscription.id}`)}
          >
          <Edit2 className="h-3.5 w-3.5 mr-1" />
          Edit
        </Button>
        <Dialog open={isConfirmingCancel} onOpenChange={setIsConfirmingCancel}>
          <DialogTrigger asChild>
            <Button
              variant="destructive"
              size="sm"
              className="text-sm"
              onClick={handleCancelClick}
            >
              Cancel Alert
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Cancel Car Alert</DialogTitle>
              <DialogDescription>
                Are you sure you want to cancel your car alert for{" "}
                {subscription.brand} {subscription.model}? This will stop all
                notifications and you'll need to set up a new alert if you want
                to monitor this car again.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-4">
              <Button variant="outline" onClick={cancelAction}>
                Keep My Alert
              </Button>
              <Button variant="destructive" onClick={confirmCancel}>
                Cancel Alert
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
                Default
              </Badge>
            )}
          </CardTitle>
          <CardDescription>
            Expires {method.expMonth}/{method.expYear}
          </CardDescription>
        </div>
      </CardHeader>
      <CardFooter className="flex justify-end space-x-2 pt-0">
        {!method.isDefault && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="text-sm">
                Set as Default
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Set Default Payment Method</DialogTitle>
                <DialogDescription>
                  Would you like to set the{" "}
                  {method.brand.charAt(0).toUpperCase() + method.brand.slice(1)}{" "}
                  card ending in {method.last4} as your default payment method?
                  This card will be used for all future subscription payments.
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
                  Cancel
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
                  Set as Default
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
              Remove
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Remove Payment Method</DialogTitle>
              <DialogDescription>
                Are you sure you want to remove your{" "}
                {method.brand.charAt(0).toUpperCase() + method.brand.slice(1)}{" "}
                card ending in {method.last4}?
                {method.isDefault &&
                  " This is your default payment method and removing it may affect your active subscriptions."}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-4">
              <Button variant="outline" onClick={cancelAction}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={confirmRemove}>
                Remove Card
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}

export default function NewProfile() {
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

  const handleCancelSubscription = async (id: any) => {
    try {
      await deleteSubscription(id);
      // run query to refresh subscriptions list
      queryClient.invalidateQueries({ queryKey: ["/api/subscriptions"] });

      toast({
        title: "Subscription Cancelled",
        description: `Subscription ${id} has been cancelled.`,
        variant: "default",
      });
    } catch (error) {
      console.error("Failed to delete subscription:", error);
      toast({
        title: "Error",
        description: "Failed to cancel subscription. Please try again.",
        variant: "destructive",
      });
    }
  };



  const handleRemovePaymentMethod = (id: any) => {
    removePaymentMethodMutation.mutate(id);
  };

  const handleSetDefaultPaymentMethod = (id: any) => {
    setDefaultPaymentMethodMutation.mutate(id);
  };

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
                    <span className="text-muted-foreground">Member since</span>
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
                    <span className="text-muted-foreground">Subscriptions</span>
                    <span>{subscriptions ? subscriptions.length : 0}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Payment methods
                    </span>
                    <span>{paymentMethods ? paymentMethods.length : 0}</span>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Account settings
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Account Settings</DialogTitle>
                    <DialogDescription>
                      Update your account information and preferences.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        defaultValue={user?.firstName + " " + user?.lastName}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" defaultValue={user?.email} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
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
                        Cancel
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
                      Save Changes
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    <ShieldAlert className="mr-2 h-4 w-4" />
                    Privacy & security
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Privacy & Security</DialogTitle>
                    <DialogDescription>
                      Manage your security settings and privacy preferences.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-2">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">
                        Confirm New Password
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
                        Cancel
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
                      Update Password
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
                    Log out
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Log Out</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to log out of your account?
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
                      Cancel
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
                      Log Out
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
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="subscriptions">My Alerts</TabsTrigger>
              <TabsTrigger value="payment">Payment Methods</TabsTrigger>
            </TabsList>

            {/* Subscriptions Tab */}
            <TabsContent value="subscriptions">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Car Alert Subscriptions</CardTitle>
                    <Link href="/setup-alerts">
                      <Button className="flex gap-2 items-center bg-primary dark:bg-[#ff0] text-white dark:text-black">
                        <PlusCircle className="h-4 w-4" />
                        Add New Alert
                      </Button>
                    </Link>
                  </div>
                  <CardDescription>
                    Manage your car search alerts and notification preferences.
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
                          onCancel={handleCancelSubscription}
                        />
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">
                          You don't have any active car alerts.
                        </p>
                        <Link href="/setup-alerts">
                          <Button className="mt-4">
                            Create your first alert
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
                    <CardTitle>Payment Methods</CardTitle>
                    <AddPaymentMethodDialog />
                  </div>
                  <CardDescription>
                    Manage your payment methods for subscription billing.
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
                          You don't have any payment methods saved.
                        </p>
                        <AddPaymentMethodDialog />
                      </div>
                    )}
                  </CardContent>
                )}
                <CardFooter>
                  <div className="flex items-center space-x-2 w-full bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Your payment information is encrypted and securely stored.
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

export async function deleteSubscription(subscriptionId: number) {
  const res = await fetch(`/api/subscriptions/${subscriptionId}`, {
    method: "DELETE",
    credentials: "include", // send cookies if using session-based auth
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Failed to delete subscription");
  }

  return res.json();
}


