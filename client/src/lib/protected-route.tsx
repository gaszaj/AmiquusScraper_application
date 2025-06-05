import { useEffect } from "react";
import { Route, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { Loader2 } from "lucide-react";

interface ProtectedRouteProps {
  component: React.ComponentType;
  path: string;
}

export function ProtectedRoute({
  component: Component,
  path,
}: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();
  const [location, setLocation] = useLocation();

  // ?redirect=/dashboard
  useEffect(() => {
    if (!isLoading && !user) {
      setLocation(`/login?redirect=${encodeURIComponent(location)}`);
    } else if (
      user &&
      !user.isEmailVerified &&
      !location.startsWith("/verify-email")
    ) {
      setLocation("/verify-email");
    } else if (user && user.isEmailVerified && location.startsWith("/verify-email")){
      setLocation("/dashboard")
    }
  }, [user, isLoading, setLocation, location]);

  // This prevents the component from rendering at all if the user is not logged in
  // and the authentication check is complete
  if (!isLoading && !user) {
    return null;
  }

  return (
    <Route path={path}>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
          <Loader2 className="w-8 h-8 animate-spin text-primary dark:text-[#ff0]" />
        </div>
      ) : user ? (
        <Component />
      ) : null}
    </Route>
  );
}
