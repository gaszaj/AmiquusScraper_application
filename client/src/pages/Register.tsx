import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import { Loader2 } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const { toast } = useToast();
  const [location, navigate] = useLocation();
  const { isAuthenticated, isLoading, register } = useAuth();

  // Extract return URL from query params if present
  const params = new URLSearchParams(location.split("?")[1] || "");
  const returnUrl = params.get("returnUrl") || "/dashboard";

  // If already authenticated, redirect to dashboard
  if (isAuthenticated && !isLoading) {
    navigate(returnUrl);
    return null;
  }

  const handleGoogleLogin = () => {
    window.location.href = "/api/auth/google";
  };

  const handleRegister = async () => {
    // Form validation
    if (!firstName || !lastName || !email || !password) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match",
        variant: "destructive",
      });
      return;
    }

    if (!acceptTerms) {
      toast({
        title: "Terms not accepted",
        description: "You must accept the terms and privacy policy to continue",
        variant: "destructive",
      });
      return;
    }

    setIsRegistering(true);

    try {
      const userData = { firstName, lastName, email, password };
      await register(userData);

      toast({
        title: "Registration successful",
        description: "Welcome to Amiquus! Your account has been created.",
      });

      navigate("/service");
    } catch (error: any) {
      toast({
        title: "Registration failed",
        description:
          error.message || "Please check your information and try again",
        variant: "destructive",
      });
      setIsRegistering(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRegister();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
        <Loader2 className="w-8 h-8 animate-spin text-primary dark:text-[#ff0]" />
      </div>
    );
  }

  return (
    <PageWrapper>
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-neutral-900">
        <Card className="w-full max-w-md shadow-lg dark:border-neutral-800 dark:bg-neutral-800/50">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center dark:text-white">
              Create an account
            </CardTitle>
            <CardDescription className="text-center dark:text-neutral-300">
              Sign up to start tracking your dream car
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center dark:text-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-700/50"
              onClick={handleGoogleLogin}
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Sign up with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t dark:border-neutral-700"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground dark:bg-neutral-800/50 dark:text-neutral-400">
                  Or continue with
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="first-name"
                    className="text-neutral-700 dark:text-neutral-300"
                  >
                    First Name
                  </Label>
                  <Input
                    id="first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="last-name"
                    className="text-neutral-700 dark:text-neutral-300"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="last-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-neutral-700 dark:text-neutral-300"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-neutral-700 dark:text-neutral-300"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="confirm-password"
                  className="text-neutral-700 dark:text-neutral-300"
                >
                  Confirm Password
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
                />
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <Checkbox
                  id="terms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) =>
                    setAcceptTerms(checked as boolean)
                  }
                  className="data-[state=checked]:bg-primary data-[state=checked]:dark:bg-[#ff0] data-[state=checked]:dark:text-black"
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-sm text-neutral-600 dark:text-neutral-400 leading-snug"
                  >
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-primary hover:underline dark:text-[#ff0]"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-primary hover:underline dark:text-[#ff0]"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full mt-6 bg-primary hover:bg-primary/90 dark:bg-[#ff0] dark:hover:bg-yellow-400 dark:text-black"
                disabled={isRegistering}
              >
                {isRegistering ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Create account"
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col border-t dark:border-neutral-700 pt-4">
            <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary hover:underline dark:text-[#ff0]"
              >
                Log in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </PageWrapper>
  );
}
