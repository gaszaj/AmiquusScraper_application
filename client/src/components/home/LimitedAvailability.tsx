import { useEffect, useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BarChart, Circle, AlertCircle } from 'lucide-react';

interface SubscriptionStats {
  active: number;
  capacity: number;
  remaining: number;
  full: boolean;
}

export default function LimitedAvailability() {
  const [stats, setStats] = useState<SubscriptionStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await apiRequest('GET', '/api/subscription-stats');
        if (!response.ok) {
          throw new Error('Failed to fetch subscription stats');
        }
        const data = await response.json();
        setStats(data);
      } catch (err) {
        console.error('Error fetching subscription stats:', err);
        setError('Could not load subscription stats');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading || error || !stats) {
    return null;
  }

  // If there are plenty of subscriptions available (>50%), don't show this component
  if (stats.remaining > stats.capacity / 2) {
    return null;
  }

  // Calculate percentage of slots filled
  const percentFilled = Math.floor((stats.active / stats.capacity) * 100);
  
  return (
    <div className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-4 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        {stats.full ? (
          <div className="flex-shrink-0 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-full">
            <AlertCircle className="h-6 w-6" />
          </div>
        ) : (
          <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 p-3 rounded-full">
            <BarChart className="h-6 w-6" />
          </div>
        )}
        
        <div className="flex-grow text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-1">
            {stats.full 
              ? "Subscription Limit Reached" 
              : "Limited Availability"}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
            {stats.full 
              ? "We've reached our capacity of 30 active subscribers. Join our waitlist to be notified when a spot opens up." 
              : `Only ${stats.remaining} slots remaining out of ${stats.capacity}. Subscribe now before we reach capacity!`}
          </p>
          
          <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2.5 mb-3">
            <div 
              className={`h-2.5 rounded-full ${percentFilled >= 90 ? 'bg-red-500' : 'bg-amber-500'}`} 
              style={{ width: `${percentFilled}%` }}
            ></div>
          </div>
          
          <div className="flex justify-center sm:justify-start">
            {stats.full ? (
              <Button variant="outline">
                Join Waitlist
              </Button>
            ) : (
              <Link href="/service">
                <Button>
                  Get Started Now
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}