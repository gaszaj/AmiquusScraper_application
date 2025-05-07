import { useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SubscriptionForm from "@/components/multi-step-form/subscription-form";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function Subscribe() {
  const [location, setLocation] = useLocation();
  const { user, isLoading: authLoading } = useAuth();

  useEffect(() => {
    // Redirect to login if user isn't authenticated
    if (!authLoading && !user) {
      setLocation("/login?redirect=/subscribe");
    }
  }, [user, authLoading, setLocation]);

  if (authLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center py-16 bg-neutral-50">
          <div className="flex flex-col items-center justify-center">
            <Loader2 className="h-12 w-12 animate-spin text-primary-600 mb-4" />
            <p className="text-lg text-neutral-600">Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center py-16 bg-neutral-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Authentication Required</h2>
            <p className="text-neutral-600 mb-6">
              You need to be logged in to set up a car alert subscription.
            </p>
            <Button 
              onClick={() => setLocation("/login?redirect=/subscribe")}
              className="bg-primary-600 hover:bg-primary-700"
            >
              Log In
            </Button>
            <p className="mt-4 text-neutral-600">
              Don't have an account?{" "}
              <a 
                href="/signup" 
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Sign up
              </a>
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl font-title font-bold mb-4">Create Your Car Alert</h1>
            <p className="text-neutral-600">
              Set up your preferences and get notified when your dream car is listed
            </p>
          </div>
          
          <SubscriptionForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}