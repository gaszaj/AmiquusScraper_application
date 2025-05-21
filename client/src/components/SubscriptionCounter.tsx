import { useEffect, useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Users } from 'lucide-react';

interface SubscriptionStats {
  active: number;
  capacity: number;
  remaining: number;
  full: boolean;
}

export function SubscriptionCounter() {
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
    
    // Refresh stats every minute
    const intervalId = setInterval(fetchStats, 60000);
    
    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center text-sm">
        <Users className="h-4 w-4 mr-1 opacity-50" />
        <span className="opacity-50">Loading...</span>
      </div>
    );
  }

  if (error || !stats) {
    return null;
  }

  // Determine color based on capacity
  const getColorClass = () => {
    const percentFull = (stats.active / stats.capacity) * 100;
    if (percentFull >= 90) {
      return 'bg-red-500 text-white';
    } else if (percentFull >= 70) {
      return 'bg-amber-500 text-black';
    } else {
      return 'bg-green-500 text-white';
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-1.5 text-sm cursor-pointer">
            <Users className="h-4 w-4" />
            <Badge variant="secondary" className={`text-xs font-medium py-1 px-2 ${getColorClass()}`}>
              {stats.active}/{stats.capacity}
            </Badge>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            {stats.full 
              ? 'At maximum capacity! We\'re not accepting new subscriptions at this time.' 
              : `${stats.remaining} subscriptions available`}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}