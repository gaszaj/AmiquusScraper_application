import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import PageWrapper from "@/components/layout/PageWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/use-auth";
import { useLanguage } from "@/components/language-provider";

export default function VerifyEmail() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const { user, isAuthenticated, isLoading, checkAuth } = useAuth();
  const [code, setCode] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [resending, setResending] = useState(false);
  const [updatingEmail, setUpdatingEmail] = useState(false);
  const [verifying, setVerifying] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleVerifyCode = async () => {
    setVerifying(true);
    try {
      const res = await fetch("/api/auth/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      toast({
        title: t("verifyEmail.toast.verified"),
        description: data.message,
      });
      checkAuth();
    } catch (err: any) {
      toast({
        title: t("verifyEmail.toast.failed"),
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setVerifying(false);
    }
  };

  const handleResendCode = async () => {
    setResending(true);
    try {
      const res = await fetch("/api/auth/resend-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      toast({
        title: t("verifyEmail.toast.resent"),
        description: data.message,
      });
      setSecondsLeft(60);
    } catch (err: any) {
      toast({
        title: t("verifyEmail.toast.failed"),
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setResending(false);
    }
  };

  const handleChangeEmail = async () => {
    if (!newEmail) {
      return toast({
        title: t("verifyEmail.toast.invalidEmail"),
        description: t("verifyEmail.toast.enterValidEmail"),
        variant: "destructive",
      });
    }

    if (newEmail === user?.email) {
      return toast({
        title: t("verifyEmail.toast.sameEmail"),
        description: t("verifyEmail.toast.sameEmailDesc"),
        variant: "destructive",
      });
    }

    setUpdatingEmail(true);
    try {
      const res = await fetch("/api/auth/change-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newEmail, language }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      toast({ title: "Email updated", description: data.message });
      setSecondsLeft(60);
      checkAuth();
    } catch (err: any) {
      toast({
        title: t("verifyEmail.toast.failed"),
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setUpdatingEmail(false);
    }
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
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center dark:text-white">
              {t("verifyEmail.title")} ({user?.email})
            </CardTitle>
            <CardDescription className="text-center dark:text-neutral-300">
              {t("verifyEmail.description")}
            </CardDescription>
            <p className="mt-2 text-center text-sm text-neutral-500 dark:text-neutral-400">
              Check your spam folder if you don't see the email.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="dark:text-neutral-300">
                {t("verifyEmail.codeLabel")}
              </Label>
              <Input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter verification code"
                className="dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
              />
              <Button
                onClick={handleVerifyCode}
                className="w-full mt-2 bg-primary hover:bg-primary/90 dark:bg-[#ff0] dark:hover:bg-yellow-400 dark:text-black"
                disabled={verifying || !code}
              >
                {verifying ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  t("verifyEmail.verifyButton")
                )}
              </Button>
            </div>

            <div className="space-y-2">
              <Label className="dark:text-neutral-300">
                {t("verifyEmail.updateEmailLabel")}
              </Label>
              <Input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="Enter new email"
                className="dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
              />
              <Button
                onClick={handleChangeEmail}
                className="w-full mt-2"
                disabled={updatingEmail}
              >
                {updatingEmail ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  t("verifyEmail.updateEmailButton")
                )}
              </Button>
            </div>

            <div className="text-sm text-center text-neutral-500 dark:text-neutral-400">
              {secondsLeft > 0 ? (
                <>You can resend the code in {secondsLeft}s</>
              ) : (
                <Button
                  onClick={handleResendCode}
                  className="w-full mt-2"
                  disabled={resending}
                  variant="outline"
                >
                  {resending ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    t("verifyEmail.resendButton")
                  )}
                </Button>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col border-t dark:border-neutral-700 pt-4">
            <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
              {t("verifyEmail.footerNote")}
            </p>
          </CardFooter>
        </Card>
      </div>
    </PageWrapper>
  );
}
