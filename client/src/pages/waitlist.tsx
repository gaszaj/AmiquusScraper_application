import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PageWrapper from "@/components/layout/PageWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { Loader2, AlertCircle, CheckCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

export default function Waitlist() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [stats, setStats] = useState<{ active: number; capacity: number; remaining: number } | null>(null);
  const { toast } = useToast();
  
  const form = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
    },
  });

  // Fetch subscription stats on mount
  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await apiRequest('GET', '/api/subscription-stats');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch subscription stats', error);
      }
    }
    
    fetchStats();
  }, []);

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await apiRequest('POST', '/api/waitlist', data);
      
      if (response.ok) {
        setSuccess(true);
        toast({
          title: "You're on the list!",
          description: "Thanks for joining our waitlist. We'll notify you when a spot becomes available.",
        });
      } else {
        const error = await response.json();
        throw new Error(error.message || "Failed to join waitlist");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate percentage of capacity filled
  const percentFilled = stats ? Math.floor((stats.active / stats.capacity) * 100) : 0;

  return (
    <PageWrapper>
      <Helmet>
        <title>Join the Waitlist - Amiquus</title>
        <meta
          name="description"
          content="Join the Amiquus waitlist to be notified when subscriptions become available."
        />
      </Helmet>
      
      <div className="container max-w-5xl mx-auto px-4 py-6">
        <div className="text-center mb-6 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 sm:mb-3">
            Join Our Waitlist
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Due to high demand, we limit the number of active subscriptions to ensure the best service quality for all users.
          </p>
        </div>
        
        {stats && (
          <div className="max-w-2xl mx-auto mb-10">
            <div className="flex justify-between mb-2 text-sm font-medium">
              <span>{stats.active} subscribers</span>
              <span>{stats.remaining} spots available</span>
            </div>
            <Progress value={percentFilled} className="h-2" />
            <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center mt-3">
              {stats.remaining > 0 
                ? `${stats.remaining} subscription spots out of ${stats.capacity} currently available.` 
                : "All subscription spots are currently filled. Join the waitlist to be notified when a spot becomes available."}
            </p>
          </div>
        )}
        
        <div className="max-w-md mx-auto">
          {success ? (
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-center mb-2">
                  <CheckCircle className="w-12 h-12 text-primary dark:text-[#ff0] opacity-90" />
                </div>
                <div className="text-center">
                  <CardTitle className="text-xl">
                    You're on the waitlist!
                  </CardTitle>
                </div>
                <CardDescription>
                  We'll notify you as soon as a subscription spot becomes available
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Thank you for your interest in Amiquus! We've added you to our waitlist and will contact you as soon as we have an opening.
                  </p>
                  <Button variant="outline" onClick={() => window.location.href = "/"}>
                    Return to Homepage
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Join the Waitlist</CardTitle>
                <CardDescription>
                  We'll notify you as soon as a subscription spot becomes available
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john.doe@example.com" {...field} />
                          </FormControl>
                          <FormDescription>
                            We'll use this email to notify you when a spot becomes available
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Join Waitlist"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}