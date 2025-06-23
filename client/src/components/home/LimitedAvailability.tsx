import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BarChart, Circle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

interface SubscriptionStats {
  active: number;
  capacity: number;
  remaining: number;
  full: boolean;
}

export default function LimitedAvailability() {
  const { t } = useLanguage();
  const [stats, setStats] = useState<SubscriptionStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await apiRequest("GET", "/api/subscription-stats");
        if (!response.ok) {
          throw new Error("Failed to fetch subscription stats");
        }
        const data = await response.json();
        setStats(data);
      } catch (err) {
        console.error("Error fetching subscription stats:", err);
        setError("Could not load subscription stats");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading || error || !stats) {
    return null;
  }

  // Always show this component, even if there are plenty of slots available
  // The message will change based on availability

  // Calculate percentage of slots filled
  const percentFilled = Math.floor((stats.active / stats.capacity) * 100);

  // Get appropriate styling based on capacity
  const getStatusInfo = () => {
    if (stats.full) {
      return {
        icon: <AlertCircle className="h-6 w-6" />,
        iconBg: "bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400",
        title: t("limited.full.title"),
        description: t("limited.full.description"),
        barColor: "bg-red-500",
        buttonText: t("limited.full.buttonText"),
        buttonVariant: "outline" as const,
        buttonLink: "/waitlist",
      };
    } else if (stats.remaining <= stats.capacity * 0.3) {
      return {
        icon: <BarChart className="h-6 w-6" />,
        iconBg:
          "bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
        title: t("limited.limited.title"),
        description: t("limited.limited.description", {
          remaining: stats.remaining,
          capacity: stats.capacity,
        }),
        barColor: "bg-amber-500",
        buttonText: t("limited.limited.buttonText"),
        buttonVariant: "default" as const,
        buttonLink: "/setup-alerts",
      };
    } else {
      return {
        icon: <Circle className="h-6 w-6" />,
        iconBg:
          "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400",
        title: t("limited.available.title"),
        description: t("limited.available.description", {
          active: stats.active,
          capacity: stats.capacity,
        }),
        barColor: "bg-green-500",
        buttonText: t("limited.available.buttonText"),
        buttonVariant: "default" as const,
        buttonLink: "/setup-alerts",
      };
    }
  };

  const statusInfo = getStatusInfo();

  return (
    <div className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-4 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <div className={`flex-shrink-0 ${statusInfo.iconBg} p-3 rounded-full`}>
          {statusInfo.icon}
        </div>

        <div className="flex-grow text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-1">{statusInfo.title}</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
            {statusInfo.description}
          </p>

          <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2.5 mb-3">
            <div
              className={`h-2.5 rounded-full ${statusInfo.barColor}`}
              style={{ width: `${percentFilled}%` }}
            ></div>
          </div>

          <div className="flex justify-center sm:justify-start">
            <Link href={statusInfo.buttonLink}>
              <Button variant={statusInfo.buttonVariant}>
                {statusInfo.buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
