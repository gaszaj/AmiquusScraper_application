import { useEffect, useState } from "react";
import { useNavigate } from "wouter";
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
import { User, UserSettings } from "@shared/schema";
import { CreditCard, UserCircle, Settings, LogOut } from "lucide-react";
import { Helmet } from "react-helmet";
import useAuth from "@/hooks/useAuth";

export default function Profile() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("account");
  
  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Payment methods
  const { data: paymentMethods, isLoading: isLoadingPayments } = useQuery<any[]>({
    queryKey: ["/api/payment-methods"],
    enabled: isAuthenticated,
  });
  
  // User settings query
  const { data: userSettings, isLoading: isLoadingSettings } = useQuery<UserSettings>({
    queryKey: ["/api/user/settings"],
    enabled: isAuthenticated,
  });
  
  // Fill form with user data
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setEmail(user.email || "");
    }
  }, [user]);
  
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
  
  if (!isAuthenticated || !user) {
    return null; // Will redirect via useEffect
  }
  
  return (
    <>
      <Helmet>
        <title>My Profile - Amiquus</title>
        <meta 
          name="description" 
          content="Manage your Amiquus account settings, payment methods, and personal information." 
        />
      </Helmet>
      <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-title font-bold mb-2">My Profile</h1>
            <p className="text-neutral-600">Manage your account settings and subscription details</p>
          </div>
          
          <Tabs defaultValue="account" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8">
              <TabsTrigger value="account" className="flex items-center">
                <UserCircle className="h-4 w-4 mr-2" />
                Account
              </TabsTrigger>
              <TabsTrigger value="billing" className="flex items-center">
                <CreditCard className="h-4 w-4 mr-2" />
                Billing
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="account">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your personal information</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <form onSubmit={handleProfileUpdate}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <Label htmlFor="first-name">First Name</Label>
                          <Input 
                            id="first-name" 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)} 
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input 
                            id="last-name" 
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)} 
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          className="mt-1"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={updateProfileMutation.isPending}
                      >
                        {updateProfileMutation.isPending ? "Saving..." : "Save Changes"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>Update your account password</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <form onSubmit={handlePasswordChange}>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input 
                            id="current-password" 
                            type="password" 
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="new-password">New Password</Label>
                          <Input 
                            id="new-password" 
                            type="password" 
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="confirm-password">Confirm New Password</Label>
                          <Input 
                            id="confirm-password" 
                            type="password" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="mt-6"
                        disabled={changePasswordMutation.isPending}
                      >
                        {changePasswordMutation.isPending ? "Updating..." : "Update Password"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Account Actions</CardTitle>
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
            
            <TabsContent value="billing">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>Manage your payment information</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    {isLoadingPayments ? (
                      <div className="flex justify-center py-4">
                        <div className="w-6 h-6 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    ) : paymentMethods && paymentMethods.length > 0 ? (
                      <div className="space-y-4">
                        {paymentMethods.map((method, index) => (
                          <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center">
                              <CreditCard className="h-5 w-5 mr-2 text-neutral-500" />
                              <div>
                                <p className="font-medium">{method.brand} •••• {method.last4}</p>
                                <p className="text-sm text-neutral-500">Expires {method.expMonth}/{method.expYear}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              {method.isDefault && (
                                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                  Default
                                </Badge>
                              )}
                              <Button variant="outline" size="sm">Edit</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-neutral-500 mb-4">You don't have any payment methods yet.</p>
                        <Button>Add Payment Method</Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Billing History</CardTitle>
                    <CardDescription>View your past and upcoming invoices</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="text-center py-6">
                      <p className="text-neutral-500 mb-2">Your billing history will appear here once you have subscriptions.</p>
                      <Button variant="outline" onClick={() => navigate("/service")}>Create a Subscription</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Manage how you receive notifications from Amiquus</CardDescription>
                </CardHeader>
                
                <CardContent>
                  {isLoadingSettings ? (
                    <div className="flex justify-center py-4">
                      <div className="w-6 h-6 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  ) : userSettings ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Email Notifications</h3>
                          <p className="text-sm text-neutral-500">Receive important updates about your account and subscriptions</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Subscription Alerts</h3>
                          <p className="text-sm text-neutral-500">Receive notifications about your subscription status and billing</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-neutral-500">Failed to load notification settings. Please try again.</p>
                      <Button variant="outline" className="mt-4" onClick={() => queryClient.invalidateQueries({ queryKey: ["/api/user/settings"] })}>
                        Reload Settings
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
