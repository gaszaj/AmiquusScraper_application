import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertFormSchema } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "@/hooks/use-auth";
import { useLanguage } from "@/components/language-provider";



interface PersonalInfoProps {
  formData: Partial<AlertFormSchema>;
  updateFormData: (data: Partial<AlertFormSchema>) => void;
  nextStep: () => void;
}



export default function PersonalInfo({
  formData,
  updateFormData,
  nextStep,
}: PersonalInfoProps) {
  const { t } = useLanguage();
  
  const personalInfoSchema = z.object({
    firstName: z.string().min(1, t("personalInfo.errors.firstName")),
    lastName: z.string().min(1, t("personalInfo.errors.lastName")),
    email: z.string().email(t("personalInfo.errors.email")),
  });

  type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;
  
  const { user, isAuthenticated } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<PersonalInfoFormData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
    },
  });

  const onSubmit = (data: PersonalInfoFormData) => {
    try {
      // updateFormData(data);
      nextStep();
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          {t("personalInfo.heading")}
        </h2>
        <p className="text-sm text-neutral-500">
          {t("personalInfo.description")}
        </p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("personalInfo.labels.firstName")}</FormLabel>
                  <FormControl>
                    <Input  placeholder={t("personalInfo.placeholders.firstName")} disabled {...field} />
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
                  <FormLabel>{t("personalInfo.labels.lastName")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("personalInfo.placeholders.lastName")} disabled {...field}   />
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
                <FormLabel>{t("personalInfo.labels.email")}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t("personalInfo.placeholders.email")}
                     disabled
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            {!user ? (
      <Button type="button" size="lg" onClick={() => (window.location.href = "/login?redirect=setup-alerts")}>
        {t("personalInfo.actions.login")}
      </Button>
            ) : (
      <Button type="submit" size="lg">
        {t("personalInfo.actions.continue")}
      </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
