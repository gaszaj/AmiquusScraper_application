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
import PaymentScreen from "@/components/subscription/PaymentScreen";
import { useLanguage } from "@/components/language-provider";

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

export default function Waitlist() {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [stats, setStats] = useState<{
    active: number;
    capacity: number;
    remaining: number;
  } | null>(null);
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
        const response = await apiRequest("GET", "/api/subscription-stats");
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch subscription stats", error);
      }
    }

    fetchStats();
  }, []);

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);

    try {
      const response = await apiRequest("POST", "/api/waitlist", {
        ...data,
        language,
      });

      if (response.ok) {
        setSuccess(true);
        toast({
          title: "You're on the list!",
          description:
            "Thanks for joining our waitlist. We'll notify you when a spot becomes available.",
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
  const percentFilled = stats
    ? Math.floor((stats.active / stats.capacity) * 100)
    : 0;

  return (
    <PageWrapper>
      <Helmet>
        <title>{t("waitlist.metaTitle")}</title>
        <meta name="description" content={t("waitlist.metaDescription")} />
      </Helmet>

      <div className="container max-w-5xl mx-auto px-4 py-6">
        <div className="text-center mb-6 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 sm:mb-3">
             {t("waitlist.title")}
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            {t("waitlist.subtitle")}
          </p>
        </div>

        {stats && (
          <div className="max-w-2xl mx-auto mb-10 border-2 border-red-500 rounded-lg p-4 shadow-lg shadow-red-100 dark:shadow-red-900/20 bg-white dark:bg-neutral-900">
            <div className="mb-4">
              <h3 className="text-red-600 dark:text-red-400 font-bold text-lg mb-2">
                 {t("waitlist.limited.heading")}
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                 {t("waitlist.limited.description")}
              </p>
              <ul className="text-neutral-600 dark:text-neutral-400 space-y-2 mb-4 pl-5 list-disc">
                <li>{t("waitlist.limited.points.0")}</li>
                <li>{t("waitlist.limited.points.1")}</li>
                <li>{t("waitlist.limited.points.2")}</li>
                <li>{t("waitlist.limited.points.3")}</li>
              </ul>
            </div>

            <div className="flex justify-between mb-2 text-sm font-medium text-red-600 dark:text-red-400">
              <span>
                <strong>{stats.active}</strong> subscribers
              </span>
              <span>
                <strong>{stats.remaining}</strong> spots available
              </span>
            </div>
            <Progress value={percentFilled} className="h-2" />
            <p className="text-sm text-red-500 dark:text-red-400 text-center mt-3 font-medium">
              {stats.remaining > 0
                ? t("waitlist.limited.available", { remaining: stats.remaining, capacity: stats.capacity })
                : t("waitlist.limited.full")}
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
                    {t("waitlist.success.title")}
                  </CardTitle>
                </div>
                <CardDescription>
                  {t("waitlist.success.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {t("waitlist.success.message")}
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => (window.location.href = "/")}
                  >
                    {t("waitlist.success.button")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>{t("waitlist.cantJoin.title")}</CardTitle>
                <CardDescription>
                  {t("waitlist.cantJoin.description")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("waitlist.form.firstName.label")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("waitlist.form.firstName.placeholder")}  {...field} />
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
                          <FormLabel>{t("waitlist.form.lastName.label")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("waitlist.form.lastName.placeholder")}  {...field} />
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
                          <FormLabel>{t("waitlist.form.email.label")}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t("waitlist.form.email.placeholder")}
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            {t("waitlist.form.email.description")}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          {t("waitlist.form.submitting")}
                        </>
                      ) : (
                      t("waitlist.form.submit")
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
