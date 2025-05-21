import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { queryClient } from "@/lib/queryClient";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { User, Subscription } from "@shared/schema";
import { 
  CreditCard, 
  UserCircle, 
  Settings, 
  LogOut, 
  AlertCircle, 
  Edit, 
  Trash2, 
  Plus, 
  Calendar, 
  Tag, 
  RefreshCw, 
  Bell,
  ShieldCheck
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useElements, useStripe, PaymentElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// Load Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || '');

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

// Payment Method Dialog
function AddPaymentMethodDialog() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  
  const handleOpen = async () => {
    setIsOpen(true);
    // Get setup intent from backend
    try {
      const response = await apiRequest("POST", "/api/create-setup-intent");
      const data = await response.json();
      setClientSecret(data.clientSecret);
    } catch (error) {
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
        <Button onClick={handleOpen} className="flex items-center gap-2">
          <Plus size={16} />
          Add Payment Method
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Payment Method</DialogTitle>
          <DialogDescription>
            Add a new credit or debit card to your account.
          </DialogDescription>
        </DialogHeader>
        {clientSecret ? (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
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

// Subscription Card
function SubscriptionCard({ subscription, onCancel, onEdit }: { 
  subscription: Subscription, 
  onCancel: (id: number) => void,
  onEdit: (subscription: Subscription) => void
}) {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  
  const formatWebsites = (websites: string[]) => {
    if (!websites || websites.length === 0) return "None";
    if (websites.length <= 2) return websites.join(", ");
    return `${websites.slice(0, 2).join(", ")} +${websites.length - 2} more`;
  };
  
  const formatDate = (dateString: string | Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <Card className="border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="flex items-center gap-2 text-neutral-900 dark:text-white">
              <span>{subscription.brand || "Any"} {subscription.model || "Any"}</span>
              <Badge variant="outline" className="ml-2 bg-primary/10 text-primary border-primary/20">
                {subscription.status}
              </Badge>
            </CardTitle>
            <CardDescription>Created on {formatDate(subscription.createdAt)}</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => onEdit(subscription)}
              className="text-sm border-neutral-200 dark:border-neutral-700"
            >
              <Edit size={14} className="mr-1" />
              Edit
            </Button>
            <Dialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-sm border-neutral-200 dark:border-neutral-700 text-red-600 dark:text-red-400 hover:text-red-700"
                >
                  <Trash2 size={14} className="mr-1" />
                  Cancel
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Cancel Subscription</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to cancel this subscription? This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsConfirmOpen(false)}
                  >
                    Keep Subscription
                  </Button>
                  <Button 
                    variant="destructive"
                    onClick={() => {
                      onCancel(subscription.id);
                      setIsConfirmOpen(false);
                    }}
                  >
                    Cancel Subscription
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-neutral-500 dark:text-neutral-400 mb-1 flex items-center gap-1">
              <Bell size={14} />
              Monitored Websites
            </p>
            <p className="font-medium text-neutral-900 dark:text-white">
              {formatWebsites(subscription.websitesSelected as string[])}
            </p>
          </div>
          <div>
            <p className="text-neutral-500 dark:text-neutral-400 mb-1 flex items-center gap-1">
              <RefreshCw size={14} />
              Update Frequency
            </p>
            <p className="font-medium text-neutral-900 dark:text-white">
              {subscription.updateFrequency}
            </p>
          </div>
          <div>
            <p className="text-neutral-500 dark:text-neutral-400 mb-1 flex items-center gap-1">
              <Tag size={14} />
              Monthly Price
            </p>
            <p className="font-medium text-neutral-900 dark:text-white">
              ${(subscription.price / 100).toFixed(2)}
            </p>
          </div>
        </div>
        
        <Separator className="my-4" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-neutral-500 dark:text-neutral-400 mb-1">Price Range</p>
            <p className="font-medium text-neutral-900 dark:text-white">
              {subscription.priceMin && subscription.priceMax
                ? `$${subscription.priceMin.toLocaleString()} - $${subscription.priceMax.toLocaleString()}`
                : "Any"}
            </p>
          </div>
          <div>
            <p className="text-neutral-500 dark:text-neutral-400 mb-1">Year Range</p>
            <p className="font-medium text-neutral-900 dark:text-white">
              {subscription.yearMin && subscription.yearMax
                ? `${subscription.yearMin} - ${subscription.yearMax}`
                : "Any"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Payment Method Card
function PaymentMethodCard({ 
  method, 
  isDefault, 
  onSetDefault, 
  onRemove 
}: { 
  method: any, 
  isDefault: boolean, 
  onSetDefault: () => void, 
  onRemove: () => void 
}) {
  return (
    <Card className="border border-neutral-200 dark:border-neutral-700 shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-neutral-100 dark:bg-neutral-800 p-2 rounded-full mr-3">
              <CreditCard className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
            </div>
            <div>
              <p className="font-medium text-neutral-900 dark:text-white flex items-center">
                {method.brand.charAt(0).toUpperCase() + method.brand.slice(1)} •••• {method.last4}
                {isDefault && (
                  <Badge variant="outline" className="ml-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800">
                    Default
                  </Badge>
                )}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Expires {method.expMonth}/{method.expYear}
              </p>
            </div>
          </div>
          
          <div className="flex space-x-2">
            {!isDefault && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onSetDefault}
                className="text-sm border-neutral-200 dark:border-neutral-700"
              >
                Set Default
              </Button>
            )}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onRemove}
              className="text-sm border-neutral-200 dark:border-neutral-700 text-red-600 dark:text-red-400 hover:text-red-700"
            >
              Remove
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Main Profile Component
export default function Profile() {
  const { isAuthenticated, user, logout } = useAuth();
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("account");
  
  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Payment methods - mocked for now, will connect to backend
  const { data: paymentMethods, isLoading: isLoadingPayments } = useQuery<any[]>({
    queryKey: ["/api/payment-methods"],
    enabled: isAuthenticated,
    placeholderData: [
      { 
        id: 'pm_123', 
        brand: 'visa', 
        last4: '4242', 
        expMonth: 12, 
        expYear: 2025, 
        isDefault: true
      }
    ]
  });
  
  // Subscriptions query - mocked for now, will connect to backend
  const { data: subscriptions, isLoading: isLoadingSubscriptions } = useQuery<Subscription[]>({
    queryKey: ["/api/subscriptions"],
    enabled: isAuthenticated,
    placeholderData: [
      {
        id: 1,
        userId: 1,
        status: "active",
        brand: "Toyota",
        model: "Camry",
        fuelType: "gasoline",
        yearMin: 2018,
        yearMax: 2023,
        priceMin: 15000,
        priceMax: 30000,
        websitesSelected: ["AutoTrader", "Cars.com", "CarGurus"],
        updateFrequency: "hourly",
        telegramBotToken: "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11",
        telegramChatId: "123456789",
        price: 1999, // $19.99 stored in cents
        createdAt: new Date(),
        updatedAt: new Date(),
      } as Subscription
    ]
  });
  
  // Fill form with user data
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setEmail(user.email || "");
    }
  }, [user]);
  
  // Parse URL query parameter for active tab
  useEffect(() => {
    const url = new URL(window.location.href);
    const tab = url.searchParams.get("tab");
    if (tab && ["account", "billing", "subscriptions", "settings"].includes(tab)) {
      setActiveTab(tab);
    }
  }, []);
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated && !user) {
      navigate("/login");
    }
  }, [isAuthenticated, user, navigate]);
  
  // Update profile mutation
  const updateProfileMutation = useMutation({
    mutationFn: async (profileData: { firstName: string; lastName: string; email: string }) => {
      return await apiRequest("PATCH", "/api/user/profile", profileData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/user"] });
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error updating profile",
        description: error instanceof Error ? error.message : "Please try again",
        variant: "destructive",
      });
    },
  });
  
  // Change password mutation
  const changePasswordMutation = useMutation({
    mutationFn: async (passwordData: { currentPassword: string; newPassword: string }) => {
      return await apiRequest("POST", "/api/user/change-password", passwordData);
    },
    onSuccess: () => {
      toast({
        title: "Password changed",
        description: "Your password has been updated successfully",
      });
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    },
    onError: (error) => {
      toast({
        title: "Error changing password",
        description: error instanceof Error ? error.message : "Please try again",
        variant: "destructive",
      });
    },
  });
  
  // Remove payment method mutation
  const removePaymentMethodMutation = useMutation({
    mutationFn: async (paymentMethodId: string) => {
      return await apiRequest("DELETE", `/api/payment-methods/${paymentMethodId}`);
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
        description: error instanceof Error ? error.message : "Please try again",
        variant: "destructive",
      });
    },
  });
  
  // Set default payment method mutation
  const setDefaultPaymentMethodMutation = useMutation({
    mutationFn: async (paymentMethodId: string) => {
      return await apiRequest("POST", `/api/payment-methods/${paymentMethodId}/default`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/payment-methods"] });
      toast({
        title: "Default payment method updated",
        description: "Your default payment method has been updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error updating default payment method",
        description: error instanceof Error ? error.message : "Please try again",
        variant: "destructive",
      });
    },
  });
  
  // Cancel subscription mutation
  const cancelSubscriptionMutation = useMutation({
    mutationFn: async (subscriptionId: number) => {
      return await apiRequest("DELETE", `/api/subscriptions/${subscriptionId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/subscriptions"] });
      toast({
        title: "Subscription canceled",
        description: "Your subscription has been canceled successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error canceling subscription",
        description: error instanceof Error ? error.message : "Please try again",
        variant: "destructive",
      });
    },
  });
  
  // Handle profile update
  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfileMutation.mutate({ firstName, lastName, email });
  };
  
  // Handle password change
  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "New password and confirmation password must match",
        variant: "destructive",
      });
      return;
    }
    
    changePasswordMutation.mutate({ currentPassword, newPassword });
  };
  
  // Handle payment method operations
  const handleSetDefaultPaymentMethod = (paymentMethodId: string) => {
    setDefaultPaymentMethodMutation.mutate(paymentMethodId);
  };
  
  const handleRemovePaymentMethod = (paymentMethodId: string) => {
    removePaymentMethodMutation.mutate(paymentMethodId);
  };
  
  // Handle edit subscription
  const handleEditSubscription = (subscription: Subscription) => {
    navigate(`/service?edit=${subscription.id}`);
  };
  
  // Handle cancel subscription
  const handleCancelSubscription = (subscriptionId: number) => {
    cancelSubscriptionMutation.mutate(subscriptionId);
  };
  
  if (!isAuthenticated || !user) {
    return null; // Will redirect via useEffect
  }
  
  return (
    <>
      <Header />
      <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-neutral-900 dark:text-white">My Profile</h1>
            <p className="text-neutral-600 dark:text-neutral-400">Manage your account settings and subscription details</p>
          </div>
          
          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8 bg-neutral-100 dark:bg-neutral-800 p-1">
              <TabsTrigger 
                value="account" 
                className="flex items-center data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-700"
              >
                <UserCircle className="h-4 w-4 mr-2" />
                Account
              </TabsTrigger>
              <TabsTrigger 
                value="subscriptions" 
                className="flex items-center data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-700"
              >
                <Bell className="h-4 w-4 mr-2" />
                Subscriptions
              </TabsTrigger>
              <TabsTrigger 
                value="billing" 
                className="flex items-center data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-700"
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Payment Methods
              </TabsTrigger>
              <TabsTrigger 
                value="settings" 
                className="flex items-center data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-700"
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>
            
            {/* Account Tab */}
            <TabsContent value="account">
              <div className="grid gap-6">
                <Card className="border border-neutral-200 dark:border-neutral-700">
                  <CardHeader>
                    <CardTitle className="text-neutral-900 dark:text-white">Profile Information</CardTitle>
                    <CardDescription>Update your personal information</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <form onSubmit={handleProfileUpdate}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <Label htmlFor="first-name" className="text-neutral-700 dark:text-neutral-300">First Name</Label>
                          <Input 
                            id="first-name" 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)} 
                            className="mt-1 bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="last-name" className="text-neutral-700 dark:text-neutral-300">Last Name</Label>
                          <Input 
                            id="last-name" 
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)} 
                            className="mt-1 bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <Label htmlFor="email" className="text-neutral-700 dark:text-neutral-300">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          className="mt-1 bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={updateProfileMutation.isPending}
                        className="bg-primary hover:bg-primary-600 text-white dark:bg-primary dark:text-neutral-900 dark:hover:bg-primary-600"
                      >
                        {updateProfileMutation.isPending ? "Saving..." : "Save Changes"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                
                <Card className="border border-neutral-200 dark:border-neutral-700">
                  <CardHeader>
                    <CardTitle className="text-neutral-900 dark:text-white">Change Password</CardTitle>
                    <CardDescription>Update your account password</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <form onSubmit={handlePasswordChange}>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="current-password" className="text-neutral-700 dark:text-neutral-300">Current Password</Label>
                          <Input 
                            id="current-password" 
                            type="password" 
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            className="mt-1 bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="new-password" className="text-neutral-700 dark:text-neutral-300">New Password</Label>
                          <Input 
                            id="new-password" 
                            type="password" 
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="mt-1 bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="confirm-password" className="text-neutral-700 dark:text-neutral-300">Confirm New Password</Label>
                          <Input 
                            id="confirm-password" 
                            type="password" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="mt-1 bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700"
                          />
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="mt-6 bg-primary hover:bg-primary-600 text-white dark:bg-primary dark:text-neutral-900 dark:hover:bg-primary-600"
                        disabled={changePasswordMutation.isPending}
                      >
                        {changePasswordMutation.isPending ? "Updating..." : "Update Password"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                
                <Card className="border border-neutral-200 dark:border-neutral-700">
                  <CardHeader>
                    <CardTitle className="text-neutral-900 dark:text-white">Account Actions</CardTitle>
                    <CardDescription>Manage your account</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <Button 
                      variant="destructive" 
                      onClick={logout} 
                      className="flex items-center"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Subscriptions Tab */}
            <TabsContent value="subscriptions">
              <div className="grid gap-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Your Subscriptions</h2>
                  <Link href="/service">
                    <Button 
                      className="bg-primary hover:bg-primary-600 text-white dark:bg-primary dark:text-neutral-900 dark:hover:bg-primary-600 flex items-center gap-2"
                    >
                      <Plus size={16} />
                      New Subscription
                    </Button>
                  </Link>
                </div>
                
                {isLoadingSubscriptions ? (
                  <div className="flex justify-center py-12">
                    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : subscriptions && subscriptions.length > 0 ? (
                  <div className="space-y-6">
                    {subscriptions.map((subscription) => (
                      <SubscriptionCard 
                        key={subscription.id} 
                        subscription={subscription} 
                        onCancel={handleCancelSubscription}
                        onEdit={handleEditSubscription}
                      />
                    ))}
                  </div>
                ) : (
                  <Card className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 py-12">
                    <CardContent className="flex flex-col items-center justify-center text-center">
                      <Bell className="h-12 w-12 text-neutral-400 dark:text-neutral-500 mb-4" />
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">No Subscriptions Yet</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 max-w-md mb-6">
                        You don't have any active subscriptions. Get started by creating your first car alert subscription.
                      </p>
                      <Link href="/service">
                        <Button 
                          className="bg-primary hover:bg-primary-600 text-white dark:bg-primary dark:text-neutral-900 dark:hover:bg-primary-600"
                        >
                          Create Subscription
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
            
            {/* Billing Tab */}
            <TabsContent value="billing">
              <div className="grid gap-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Payment Methods</h2>
                  <AddPaymentMethodDialog />
                </div>
                
                {isLoadingPayments ? (
                  <div className="flex justify-center py-12">
                    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : paymentMethods && paymentMethods.length > 0 ? (
                  <div className="space-y-4">
                    {paymentMethods.map((method) => (
                      <PaymentMethodCard 
                        key={method.id}
                        method={method}
                        isDefault={method.isDefault}
                        onSetDefault={() => handleSetDefaultPaymentMethod(method.id)}
                        onRemove={() => handleRemovePaymentMethod(method.id)}
                      />
                    ))}
                  </div>
                ) : (
                  <Card className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 py-12">
                    <CardContent className="flex flex-col items-center justify-center text-center">
                      <CreditCard className="h-12 w-12 text-neutral-400 dark:text-neutral-500 mb-4" />
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">No Payment Methods</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 max-w-md mb-6">
                        You haven't added any payment methods yet. Add a credit or debit card to manage your subscriptions.
                      </p>
                      <AddPaymentMethodDialog />
                    </CardContent>
                  </Card>
                )}
                
                <div className="mt-8">
                  <Card className="border border-neutral-200 dark:border-neutral-700">
                    <CardHeader>
                      <CardTitle className="text-neutral-900 dark:text-white">Billing History</CardTitle>
                      <CardDescription>View your past and upcoming invoices</CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="text-center py-6">
                        <p className="text-neutral-600 dark:text-neutral-400">Your billing history will be available here once you have active subscriptions.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* Settings Tab */}
            <TabsContent value="settings">
              <Card className="border border-neutral-200 dark:border-neutral-700">
                <CardHeader>
                  <CardTitle className="text-neutral-900 dark:text-white">Notification Preferences</CardTitle>
                  <CardDescription>Choose how you receive notifications from Amiquus</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 text-primary p-2 rounded-full">
                          <Bell size={18} />
                        </div>
                        <div>
                          <h3 className="font-medium text-neutral-900 dark:text-white">Email Notifications</h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">Receive important updates about your account and subscriptions</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="border-neutral-200 dark:border-neutral-700">
                        Manage
                      </Button>
                    </div>
                    
                    <Separator className="bg-neutral-200 dark:bg-neutral-700" />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 text-primary p-2 rounded-full">
                          <ShieldCheck size={18} />
                        </div>
                        <div>
                          <h3 className="font-medium text-neutral-900 dark:text-white">Security Alerts</h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">Get notified about important account security events</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="border-neutral-200 dark:border-neutral-700">
                        Manage
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
}