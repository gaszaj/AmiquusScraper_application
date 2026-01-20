
import EditSubscriptionPage from "@/components/forms/EditSubscription";
import { Link, useParams, useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function SubscriptionPage() {
  const { t } = useLanguage();
  const params = useParams<{ id: string }>();
  const subId = params.id;

  // Fetch subscription data from API
  const { data, isLoading, error } = useQuery({
    queryKey: [`/api/subscriptions/${subId}`],
    queryFn: async () => {
      const response = await fetch(`/api/subscriptions/${subId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch subscription: ${response.statusText}`);
      }
      return response.json();
    },
    enabled: !!subId,
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]">
        <Loader2 className="w-8 h-8 animate-spin text-primary dark:text-[#ff0]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]">
        <p className="text-red-500">{error.message}</p>
        <Link href="/dashboard">  {t("subscription.error")}</Link>
      </div>
    );
  }

  const subscription = data;

  if (!subscription) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]">
        <p className="text-red-500">{t("subscription.notFound")}</p>
        <Link href="/dashboard">{t("subscription.notFoundSub")}</Link>
      </div>
    );
  }

  return (
    <section
      id={`subscription_${subscription.id}`}
      className="bg-white dark:bg-neutral-900 py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
            {t("subscription.title")}  
          </h1>
          <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
            {t("subscription.subTitle")} 
          </p>
        </div>
      </div>
      <EditSubscriptionPage subscription={subscription} />
    </section>
  );
}
