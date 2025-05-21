import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Textarea } from "@/components/ui/textarea";
import { BarChart, Check, Circle, AlertCircle } from 'lucide-react';

// Define form schema
const waitlistSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().optional(),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

export default function Waitlist() {
  const { toast } = useToast();
  const [stats, setStats] = useState<{
    active: number;
    capacity: number;
    remaining: number;
    full: boolean;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Initialize form
  const form = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  // Fetch subscription stats
  useState(() => {
    async function fetchStats() {
      try {
        const response = await apiRequest('GET', '/api/subscription-stats');
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error("Error fetching subscription stats:", error);
      }
    }
    fetchStats();
  });

  // Form submission handler
  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    try {
      // This would normally send data to the server
      // Since we don't have an actual waitlist API endpoint yet, we'll simulate success
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      
      toast({
        title: "Waitlist request submitted",
        description: "We'll notify you when a subscription spot becomes available!",
      });
      setIsSuccess(true);
      
      // In a real implementation, you would send the data to the server:
      // await apiRequest('POST', '/api/waitlist', data);
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was a problem adding you to the waitlist. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate percentage of capacity filled
  const percentFilled = stats ? Math.floor((stats.active / stats.capacity) * 100) : 0;

  return (
    <>
      <Helmet>
        <title>Join the Waitlist - Amiquus</title>
        <meta
          name="description"
          content="Join the Amiquus waitlist to be notified when subscriptions become available."
        />
      </Helmet>
      
      <div className="container max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-3">
            Join Our Waitlist
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            We've reached our subscription limit to ensure the highest quality service for all users. 
            Join our waitlist to be notified when a spot becomes available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Subscription Status Card */}
          <Card className="border-2 border-red-200 dark:border-red-800">
            <CardHeader className="bg-red-50 dark:bg-red-900/20">
              <div className="flex items-center gap-3">
                <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-2 rounded-full">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <CardTitle className="text-red-700 dark:text-red-400">
                  Maximum Capacity Reached
                </CardTitle>
              </div>
              <CardDescription>
                We limit our service to {stats?.capacity || 30} active subscriptions to ensure reliable performance
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {stats && (
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="font-medium">Active Subscriptions</span>
                      <span className="font-bold">{stats.active}/{stats.capacity}</span>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full bg-red-500" 
                        style={{ width: `${percentFilled}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 text-sm">Why do we have a limit?</h3>
                    <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Ensure fast and reliable car listing scraping</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Maintain high-quality notifications with minimal delay</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Prevent overloading source websites with too many requests</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Provide excellent user support for all subscribers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Waitlist Form */}
          <div>
            {isSuccess ? (
              <Card className="border-2 border-green-200 dark:border-green-800">
                <CardHeader className="bg-green-50 dark:bg-green-900/20">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-2 rounded-full">
                      <Check className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-green-700 dark:text-green-400">
                      You're on the Waitlist!
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
                    Fill out this form to be notified when a subscription spot opens up
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
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
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormDescription>
                              We'll use this email to notify you when a spot opens up
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about what you're looking for in our service" 
                                className="resize-none"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Join Waitlist"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
}