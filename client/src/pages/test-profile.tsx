import { useState } from "react";
import { Link } from "wouter";
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
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  AlertCircle, 
  CheckCircle2, 
  CreditCard, 
  Edit2, 
  LogOut, 
  PlusCircle, 
  Settings, 
  ShieldAlert, 
  User
} from "lucide-react";

// Mock test data for development
const testUser = {
  id: 123,
  email: "test@example.com",
  firstName: "Test",
  lastName: "User",
  username: "testuser",
  createdAt: new Date(2023, 0, 15),
  stripeCustomerId: "cus_123456789"
};

const testSubscriptions = [
  {
    id: 1,
    telegramChatId: "123456789",
    telegramBotToken: "bot123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11",
    brand: "Toyota",
    model: "Corolla",
    yearMin: 2015,
    yearMax: 2020,
    priceMin: 5000,
    priceMax: 15000,
    websitesSelected: ["autotrader", "craigslist", "facebook"],
    facebookMarketplaceUrl: "https://facebook.com/marketplace/cars",
    status: "active",
    updateFrequency: "hourly",
    price: 19.99,
    createdAt: new Date(2023, 2, 10),
    updatedAt: new Date(2023, 5, 15),
    stripeSubscriptionId: "sub_12345",
    notificationLanguage: "en"
  },
  {
    id: 2,
    telegramChatId: "987654321",
    telegramBotToken: "bot654321:ZYX-ABC9876defGhi-123a1B2c3d456ew22",
    brand: "Honda",
    model: "Civic",
    yearMin: 2018,
    yearMax: 2022,
    priceMin: 10000,
    priceMax: 20000,
    websitesSelected: ["autotrader", "carsales"],
    facebookMarketplaceUrl: null,
    status: "paused",
    updateFrequency: "daily",
    price: 14.99,
    createdAt: new Date(2023, 3, 20),
    updatedAt: new Date(2023, 6, 1),
    stripeSubscriptionId: "sub_67890",
    notificationLanguage: "fr"
  }
];

const testPaymentMethods = [
  {
    id: "pm_123456",
    brand: "visa",
    last4: "4242",
    expMonth: 12,
    expYear: 2024,
    isDefault: true
  },
  {
    id: "pm_789012",
    brand: "mastercard",
    last4: "9876",
    expMonth: 3,
    expYear: 2025,
    isDefault: false
  }
];

function AddPaymentMethodForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name on card</Label>
        <Input id="name" placeholder="John Smith" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="cardNumber">Card number</Label>
        <Input id="cardNumber" placeholder="4242 4242 4242 4242" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="expiry">Expiry date</Label>
          <Input id="expiry" placeholder="MM/YY" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cvc">CVC</Label>
          <Input id="cvc" placeholder="123" />
        </div>
      </div>
      <Button className="w-full mt-2 bg-primary dark:bg-[#ff0] text-white dark:text-black">Add Payment Method</Button>
    </form>
  );
}

function AddPaymentMethodDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="ml-auto flex gap-2 items-center">
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
        <AddPaymentMethodForm />
      </DialogContent>
    </Dialog>
  );
}

function SubscriptionCard({ subscription, onCancel, onEdit }) {
  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{subscription.brand} {subscription.model}</CardTitle>
            <CardDescription>
              Years: {subscription.yearMin}-{subscription.yearMax}, Price: ${subscription.priceMin}-${subscription.priceMax}
            </CardDescription>
          </div>
          <Badge className={
            subscription.status === "active" 
              ? "bg-green-500 hover:bg-green-600" 
              : "bg-amber-500 hover:bg-amber-600"
          }>
            {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <div className="flex items-start space-x-2">
            <span className="font-medium">Websites:</span>
            <span>{subscription.websitesSelected.join(", ")}</span>
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
            <span>${subscription.price.toFixed(2)}/month</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2 pt-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="text-sm"
          onClick={() => onEdit(subscription)}
        >
          <Edit2 className="h-3.5 w-3.5 mr-1" />
          Edit
        </Button>
        <Button 
          variant="destructive" 
          size="sm" 
          className="text-sm"
          onClick={() => onCancel(subscription.id)}
        >
          Cancel Alert
        </Button>
      </CardFooter>
    </Card>
  );
}

function PaymentMethodCard({ method, onRemove, onSetDefault }) {
  return (
    <Card className={`mb-4 ${method.isDefault ? 'border-primary dark:border-[#ff0]' : ''}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center">
            {method.brand === "visa" ? (
              <svg className="w-8 h-8 mr-2" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="6" fill="#2566AF"/>
                <path d="M18.0388 31H14.9701L12.7632 20.5183C12.6585 20.1367 12.427 19.8042 12.0872 19.58C11.161 19.007 10.1232 18.5417 9 18.2233V17.865H14.1554C14.8586 17.865 15.3843 18.365 15.4957 18.9417L16.6848 26.545L20.0692 17.865H23.0264L18.0388 31ZM24.575 31H21.7291L24.0494 17.865H26.8953L24.575 31ZM33.2285 18.04C32.4137 18.04 31.7105 18.365 31.2963 18.9417C30.9565 19.4333 31.0679 20.0867 31.1792 20.4683L34.1364 31H37.0937L38.1714 27.5483H41.8987L42.3131 31H45.049L42.199 17.865H39.2417L33.2285 18.04ZM38.7089 25.2217L39.7866 20.7867L41.2623 25.2217H38.7089Z" fill="white"/>
                <path d="M20.9143 25.7133L23.6501 19.4333C23.5387 19.8867 22.4609 24.0233 22.4609 24.0233L21.6462 27.0633C23.3844 27.0633 24.575 26.2217 25.0998 25.4617C25.5143 24.8067 27.6097 21.615 27.6097 21.615C27.6097 21.615 25.8715 25.7133 25.8715 26.7067C25.8715 27.7 20.9143 25.7133 20.9143 25.7133Z" fill="#EDD977"/>
              </svg>
            ) : method.brand === "mastercard" ? (
              <svg className="w-8 h-8 mr-2" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="6" fill="#16366F"/>
                <circle cx="17" cy="24" r="8" fill="#EB001B"/>
                <circle cx="31" cy="24" r="8" fill="#F79E1B"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M24 29.3589C26.5449 27.3762 28 24.3513 28 21C28 17.6487 26.5449 14.6238 24 12.6411C21.4551 14.6238 20 17.6487 20 21C20 24.3513 21.4551 27.3762 24 29.3589Z" fill="#FF5F00"/>
              </svg>
            ) : (
              <CreditCard className="h-5 w-5 mr-2" />
            )}
            •••• {method.last4}
            {method.isDefault && (
              <Badge variant="outline" className="ml-2 border-green-500 text-green-600 dark:border-green-400 dark:text-green-400">
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
          <Button 
            variant="outline" 
            size="sm" 
            className="text-sm"
            onClick={() => onSetDefault(method.id)}
          >
            Set as Default
          </Button>
        )}
        <Button 
          variant="destructive" 
          size="sm" 
          className="text-sm"
          onClick={() => onRemove(method.id)}
        >
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function TestProfile() {
  const [activeTab, setActiveTab] = useState("subscriptions");
  
  const handleCancelSubscription = (id) => {
    alert(`Subscription ${id} would be cancelled in a real application`);
  };
  
  const handleEditSubscription = (subscription) => {
    alert(`Editing subscription for ${subscription.brand} ${subscription.model} in a real application`);
  };
  
  const handleRemovePaymentMethod = (id) => {
    alert(`Payment method ${id} would be removed in a real application`);
  };
  
  const handleSetDefaultPaymentMethod = (id) => {
    alert(`Payment method ${id} would be set as default in a real application`);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 mb-8 text-purple-800 dark:text-purple-200 flex items-center">
        <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
        <p className="text-sm">
          This is a demo profile page for development purposes. No real data is being used or saved.
        </p>
      </div>
      
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
                  <CardTitle>{testUser.firstName} {testUser.lastName}</CardTitle>
                  <CardDescription>{testUser.email}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Member since</span>
                  <span>{testUser.createdAt.toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subscriptions</span>
                  <span>{testSubscriptions.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Payment methods</span>
                  <span>{testPaymentMethods.length}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Account settings
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <ShieldAlert className="mr-2 h-4 w-4" />
                Privacy & security
              </Button>
              <Button variant="outline" className="w-full justify-start text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Main Content */}
        <div className="w-full md:w-2/3 lg:w-3/4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
                <CardContent className="space-y-4">
                  {testSubscriptions.length > 0 ? (
                    testSubscriptions.map(subscription => (
                      <SubscriptionCard 
                        key={subscription.id}
                        subscription={subscription}
                        onCancel={handleCancelSubscription}
                        onEdit={handleEditSubscription}
                      />
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">You don't have any active car alerts.</p>
                      <Link href="/setup-alerts">
                        <Button className="mt-4">Create your first alert</Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
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
                <CardContent className="space-y-4">
                  {testPaymentMethods.length > 0 ? (
                    testPaymentMethods.map(method => (
                      <PaymentMethodCard 
                        key={method.id}
                        method={method}
                        onRemove={handleRemovePaymentMethod}
                        onSetDefault={handleSetDefaultPaymentMethod}
                      />
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">You don't have any payment methods saved.</p>
                      <AddPaymentMethodDialog />
                    </div>
                  )}
                </CardContent>
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