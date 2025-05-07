import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useAuth } from "@/hooks/use-auth";
import { useSubscription } from "@/hooks/use-subscription";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Loader2, Plus, Car, Bell, CheckCircle2, AlertTriangle, X } from "lucide-react";
import { Subscription } from "@shared/schema";
import { FREQUENCY_LABELS } from "@/lib/constants";

export default function Dashboard() {
  const [location, setLocation] = useLocation();
  const { user, isLoading: authLoading } = useAuth();
  const { getUserSubscriptions, deleteSubscription } = useSubscription();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSubscription, setSelectedSubscription] = useState<number | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  useEffect(() => {
    // Redirect to login if user isn't authenticated
    if (!authLoading && !user) {
      setLocation("/login?redirect=/dashboard");
      return;
    }

    // Fetch user subscriptions
    if (user) {
      setIsLoading(true);
      getUserSubscriptions()
        .then((data) => {
          setSubscriptions(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch subscriptions:", error);
          setIsLoading(false);
        });
    }
  }, [user, authLoading, getUserSubscriptions, setLocation]);

  const handleDeleteSubscription = async () => {
    if (selectedSubscription) {
      try {
        await deleteSubscription(selectedSubscription);
        setSubscriptions(subscriptions.filter(s => s.id !== selectedSubscription));
        setDeleteDialogOpen(false);
        setSelectedSubscription(null);
      } catch (error) {
        console.error("Failed to delete subscription:", error);
      }
    }
  };

  const confirmDelete = (subscriptionId: number) => {
    setSelectedSubscription(subscriptionId);
    setDeleteDialogOpen(true);
  };

  const formatWebsites = (websites: string[]): string => {
    return websites.map(site => {
      switch(site) {
        case 'autotrader': return 'AutoTrader';
        case 'cargurus': return 'CarGurus';
        case 'cars': return 'Cars.com';
        case 'facebook': return 'Facebook Marketplace';
        default: return site;
      }
    }).join(', ');
  };

  if (authLoading) {
    return (
      <div className="flex-grow flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary-600" />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-10 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-title font-bold">Dashboard</h1>
              <p className="text-neutral-600">
                Manage your car listing notifications and subscription settings
              </p>
            </div>
            <Button 
              onClick={() => setLocation("/signup")} 
              className="bg-primary-600 hover:bg-primary-700"
            >
              <Plus size={16} className="mr-2" /> New Car Alert
            </Button>
          </div>

          <Tabs defaultValue="subscriptions" className="space-y-6">
            <TabsList>
              <TabsTrigger value="subscriptions">My Car Alerts</TabsTrigger>
              <TabsTrigger value="account">Account Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="subscriptions" className="space-y-6">
              {isLoading ? (
                <div className="flex items-center justify-center py-16">
                  <Loader2 className="h-8 w-8 animate-spin text-primary-600" />
                </div>
              ) : subscriptions.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Car className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                    <h3 className="text-xl font-title font-semibold mb-2">No Car Alerts Yet</h3>
                    <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
                      You haven't set up any car listing alerts yet. Create your first alert to start
                      getting notified when your dream car becomes available.
                    </p>
                    <Button 
                      onClick={() => setLocation("/signup")} 
                      className="bg-primary-600 hover:bg-primary-700"
                    >
                      <Plus size={16} className="mr-2" /> Create Car Alert
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {subscriptions.map((subscription) => (
                    <Card key={subscription.id} className="relative">
                      <Badge className="absolute top-4 right-4 bg-green-100 text-green-800 hover:bg-green-100">
                        {subscription.status === "active" ? "Active" : subscription.status}
                      </Badge>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Car className="mr-2 h-5 w-5 text-primary-600" />
                          {subscription.brand ? `${subscription.brand} ${subscription.model || ''}` : 'Any car'}
                        </CardTitle>
                        <CardDescription>
                          Monitoring: {formatWebsites(subscription.websitesSelected as string[])}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-neutral-500">Update frequency</p>
                            <p className="font-medium">{FREQUENCY_LABELS[subscription.updateFrequency]}</p>
                          </div>
                          <div>
                            <p className="text-neutral-500">Price</p>
                            <p className="font-medium">${(subscription.price / 100).toFixed(2)}/month</p>
                          </div>
                          {subscription.yearMin || subscription.yearMax ? (
                            <div>
                              <p className="text-neutral-500">Year range</p>
                              <p className="font-medium">
                                {subscription.yearMin || 'Any'} - {subscription.yearMax || 'Any'}
                              </p>
                            </div>
                          ) : null}
                          {subscription.priceMin || subscription.priceMax ? (
                            <div>
                              <p className="text-neutral-500">Price range</p>
                              <p className="font-medium">
                                ${subscription.priceMin || 'Any'} - ${subscription.priceMax || 'Any'}
                              </p>
                            </div>
                          ) : null}
                        </div>
                        <div className="flex items-center text-sm text-neutral-600 mt-2">
                          <Bell className="mr-2 h-4 w-4 text-secondary-500" />
                          Notifications sent in {
                            subscription.notificationLanguage === 'en' ? 'English' :
                            subscription.notificationLanguage === 'es' ? 'Spanish' :
                            subscription.notificationLanguage === 'fr' ? 'French' :
                            subscription.notificationLanguage === 'de' ? 'German' :
                            subscription.notificationLanguage === 'it' ? 'Italian' :
                            subscription.notificationLanguage === 'pt' ? 'Portuguese' :
                            subscription.notificationLanguage === 'ru' ? 'Russian' :
                            subscription.notificationLanguage
                          }
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" onClick={() => setLocation(`/edit-subscription/${subscription.id}`)}>
                          Edit
                        </Button>
                        <Button 
                          variant="destructive" 
                          onClick={() => confirmDelete(subscription.id)}
                        >
                          Cancel Alert
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>Manage your personal details and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Personal Details</h3>
                      <div className="space-y-2">
                        <div>
                          <p className="text-neutral-500 text-sm">Name</p>
                          <p className="font-medium">{user?.firstName} {user?.lastName}</p>
                        </div>
                        <div>
                          <p className="text-neutral-500 text-sm">Email</p>
                          <p className="font-medium">{user?.email}</p>
                        </div>
                        <div>
                          <p className="text-neutral-500 text-sm">Username</p>
                          <p className="font-medium">{user?.username}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-3">Authentication</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          {user?.password ? (
                            <div className="flex items-center">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                              <span>Password-based login enabled</span>
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                              <span>No password set</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center">
                          {user?.googleId ? (
                            <div className="flex items-center">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                              <span>Google account linked</span>
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <X className="h-5 w-5 text-neutral-400 mr-2" />
                              <span>Google account not linked</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-neutral-200 pt-6">
                    <h3 className="text-lg font-medium mb-3">Payment Method</h3>
                    <p className="text-neutral-600 mb-4">
                      You can update your payment method for all active subscriptions here.
                    </p>
                    <Button className="bg-primary-600 hover:bg-primary-700">
                      Update Payment Method
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently cancel your car alert subscription.
              You will no longer receive notifications for new car listings.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={handleDeleteSubscription}
            >
              Yes, cancel subscription
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
