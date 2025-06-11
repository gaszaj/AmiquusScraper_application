import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { queryClient } from "@/lib/queryClient";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Car, Plus, Bell, Edit, Trash2, AlertTriangle } from "lucide-react";
import { Helmet } from "react-helmet";
import { Subscription } from "@shared/schema";

export default function Dashboard() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("active");
  
  const { data: subscriptions, isLoading, error } = useQuery<Subscription[]>({
    queryKey: ["/api/subscriptions"],
  });
  
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      return await apiRequest("DELETE", `/api/subscriptions/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/subscriptions"] });
      toast({
        title: "Subscription deleted",
        description: "Your subscription has been canceled successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error deleting subscription",
        description: error instanceof Error ? error.message : "Please try again",
        variant: "destructive",
      });
    },
  });
  
  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to cancel this subscription?")) {
      deleteMutation.mutate(id);
    }
  };
  
  if (isLoading) {
    return (
      <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-destructive" />
              Error Loading Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>There was a problem loading your subscriptions. Please try again later.</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => queryClient.invalidateQueries({ queryKey: ["/api/subscriptions"] })}>
              Try Again
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  const activeSubscriptions = subscriptions?.filter(sub => sub.status === 'active') || [];
  const canceledSubscriptions = subscriptions?.filter(sub => sub.status === 'canceled') || [];
  
  return (
    <>
      <Helmet>
        <title>Dashboard - Amiquus</title>
        <meta 
          name="description" 
          content="Manage your car alert subscriptions, view active monitors, and track your notification settings." 
        />
      </Helmet>
      <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-title font-bold mb-2">Your Dashboard</h1>
              <p className="text-neutral-600">Manage your car alert subscriptions and notification settings</p>
            </div>
            
            <Link href="/service">
              <Button className="mt-4 md:mt-0">
                <Plus className="h-4 w-4 mr-2" />
                New Car Alert
              </Button>
            </Link>
          </div>
          
          <Tabs defaultValue="active" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8">
              <TabsTrigger value="active">
                Active Subscriptions
                <Badge variant="secondary" className="ml-2">{activeSubscriptions.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="canceled">
                Canceled
                <Badge variant="outline" className="ml-2">{canceledSubscriptions.length}</Badge>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="active">
              {activeSubscriptions.length === 0 ? (
                <Card>
                  <CardHeader>
                    <CardTitle>No Active Subscriptions</CardTitle>
                    <CardDescription>You don't have any active car alerts set up yet.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 mb-4">Create your first car alert to start getting notified about new listings that match your criteria.</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/service">
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Create Car Alert
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ) : (
                <div className="grid gap-6">
                  {activeSubscriptions.map((subscription) => (
                    <Card key={subscription.id}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center">
                            <Car className="h-5 w-5 mr-2 text-primary-600" />
                            {subscription.brand ? `${subscription.brand.charAt(0).toUpperCase() + subscription.brand.slice(1)}` : "Any Brand"}
                            {subscription.model ? ` ${subscription.model.charAt(0).toUpperCase() + subscription.model.slice(1).replace('-', ' ')}` : ""}
                          </CardTitle>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                        </div>
                        <CardDescription>
                          Created on {new Date(subscription.createdAt).toLocaleDateString()}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-sm font-medium text-neutral-500 mb-2">Monitored Websites</h3>
                            <div className="flex flex-wrap gap-2">
                              {subscription.websitesSelected.map((website) => (
                                <Badge key={website} variant="outline">
                                  {website.charAt(0).toUpperCase() + website.slice(1)}
                                </Badge>
                              ))}
                            </div>
                            
                            <h3 className="text-sm font-medium text-neutral-500 mt-4 mb-2">Update Frequency</h3>
                            <p>{subscription.updateFrequency === "60" ? "Every hour" : 
                               subscription.updateFrequency === "30" ? "Every 30 minutes" :
                               subscription.updateFrequency === "15" ? "Every 15 minutes" :
                               subscription.updateFrequency === "5" ? "Every 5 minutes" :
                               "Every minute"}</p>
                          </div>
                          
                          <div>
                            <h3 className="text-sm font-medium text-neutral-500 mb-2">Car Details</h3>
                            <div className="space-y-1">
                              {subscription.fuelType && (
                                <p><span className="font-medium">Fuel:</span> {subscription.fuelType.charAt(0).toUpperCase() + subscription.fuelType.slice(1)}</p>
                              )}
                              {(subscription.carDetails.yearMin || subscription.carDetails.yearMax) && (
                                <p><span className="font-medium">Year:</span> {subscription.carDetails.yearMin || "Any"} - {subscription.carDetails.yearMax || "Any"}</p>
                              )}
                              {(subscription.carDetails.priceMin || subscription.carDetails.priceMax) && (
                                <p><span className="font-medium">Price:</span> ${subscription.carDetails.priceMin || "Any"} - ${subscription.carDetails.priceMax || "Any"}</p>
                              )}
                            </div>
                            
                            <h3 className="text-sm font-medium text-neutral-500 mt-4 mb-2">Notifications</h3>
                            <p className="flex items-center">
                              <Bell className="h-4 w-4 mr-1 text-primary-600" />
                              Telegram ({subscription.telegramSetup.notificationLanguage.toUpperCase()})
                            </p>
                          </div>
                        </div>
                        
                        <Separator className="my-6" />
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-lg font-bold">${subscription.price.toFixed(2)}</span>
                            <span className="text-neutral-500 text-sm">/month</span>
                          </div>
                          
                          <div className="space-x-2">
                            <Link href={`/service/edit/${subscription.id}`}>
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </Button>
                            </Link>
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => handleDelete(subscription.id)}
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="canceled">
              {canceledSubscriptions.length === 0 ? (
                <Card>
                  <CardHeader>
                    <CardTitle>No Canceled Subscriptions</CardTitle>
                    <CardDescription>You don't have any canceled car alerts.</CardDescription>
                  </CardHeader>
                </Card>
              ) : (
                <div className="grid gap-6">
                  {canceledSubscriptions.map((subscription) => (
                    <Card key={subscription.id} className="opacity-75">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center">
                            <Car className="h-5 w-5 mr-2 text-neutral-500" />
                            {subscription.carDetails.brand ? `${subscription.carDetails.brand.charAt(0).toUpperCase() + subscription.carDetails.brand.slice(1)}` : "Any Brand"}
                            {subscription.carDetails.model ? ` ${subscription.carDetails.model.charAt(0).toUpperCase() + subscription.carDetails.model.slice(1).replace('-', ' ')}` : ""}
                          </CardTitle>
                          <Badge variant="outline" className="border-red-300 text-red-600">Canceled</Badge>
                        </div>
                        <CardDescription>
                          Canceled on {new Date(subscription.updatedAt).toLocaleDateString()}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-sm font-medium text-neutral-500 mb-2">Monitored Websites</h3>
                            <div className="flex flex-wrap gap-2">
                              {subscription.websites.selectedWebsites.map((website) => (
                                <Badge key={website} variant="outline" className="text-neutral-500 border-neutral-300">
                                  {website.charAt(0).toUpperCase() + website.slice(1)}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-sm font-medium text-neutral-500 mb-2">Car Details</h3>
                            <div className="space-y-1 text-neutral-500">
                              {subscription.carDetails.fuelType && (
                                <p><span className="font-medium">Fuel:</span> {subscription.carDetails.fuelType.charAt(0).toUpperCase() + subscription.carDetails.fuelType.slice(1)}</p>
                              )}
                              {(subscription.carDetails.yearMin || subscription.carDetails.yearMax) && (
                                <p><span className="font-medium">Year:</span> {subscription.carDetails.yearMin || "Any"} - {subscription.carDetails.yearMax || "Any"}</p>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <Separator className="my-6" />
                        
                        <div className="flex justify-center">
                          <Link href={`/service?reactivate=${subscription.id}`}>
                            <Button variant="outline">
                              Reactivate Subscription
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
