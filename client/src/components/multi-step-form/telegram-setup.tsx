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
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/components/language-provider";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface TelegramSetupProps {
  formData: Partial<AlertFormSchema>;
  updateFormData: (data: Partial<AlertFormSchema>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function TelegramSetup({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}: TelegramSetupProps) {
  const { t, language } = useLanguage();
  const [error, setError] = useState<string | null>(null);

  const telegramSetupSchema = z.object({
    telegramToken: z.string().min(1, t("telegram.errors.token")),
    telegramChatId: z.string().min(1, t("telegram.errors.chatId")),
    notificationLanguage: z.string().min(1, t("telegram.errors.language")),
  });

  const form = useForm<z.infer<typeof telegramSetupSchema>>({
    resolver: zodResolver(telegramSetupSchema),
    defaultValues: {
      telegramToken: formData.telegramToken || "",
      telegramChatId: formData.telegramChatId || "",
      notificationLanguage: formData.notificationLanguage || language,
    },
  });

  const onSubmit = (data: z.infer<typeof telegramSetupSchema>) => {
    try {
      updateFormData(data);
      nextStep();
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          {t("telegram.heading")}
        </h2>
        <p className="text-sm text-neutral-500">{t("telegram.description")}</p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-2xl sm:p-8 mb-8 shadow-sm p-4">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
              {t("telegram.subHeading")}
            </h2>

            {/* Telegram Setup Instructions */}
            <Alert className="mt-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <p className="text-sm font-medium">
                  {t("telegram.instructions.botTitle")}
                </p>
                <ol className="list-decimal ml-5 mt-2 space-y-1 text-sm">
                  <li>{t("telegram.instructions.botStep1")}</li>
                  <li>{t("telegram.instructions.botStep2")}</li>
                  <li>{t("telegram.instructions.botStep3")}</li>
                  <li>{t("telegram.instructions.botStep4")}</li>
                </ol>
                <p className="text-sm mt-3 font-medium">
                  {t("telegram.instructions.chatTitle")}
                </p>
                <ol className="list-decimal ml-5 mt-2 space-y-1 text-sm">
                  <li>{t("telegram.instructions.chatStep1")}</li>
                  <li>{t("telegram.instructions.chatStep2")}</li>
                  <li>{t("telegram.instructions.chatStep3")}</li>
                  <li>{t("telegram.instructions.chatStep4")}</li>
                </ol>
              </AlertDescription>
            </Alert>

            {/* Telegram Video Guide */}
            <div className="space-y-2 my-6">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {t("telegram.videoPrompt")}
              </p>
              <p className="text-sm text-muted-foreground">
                {t("telegram.videoDescription")}
              </p>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="315"
                  ata-cmp-vendor="s30"
                  src="about:blank"
                  class="cmplazyload"
                  data-cmp-src="https://www.youtube.com/embed/jNQXAC9IVRw?si=68o2DzZ_OjDcvKEM"
                  title="How to copy Facebook Marketplace search link"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <p className="text-sm text-muted-foreground py-0.5">
              {t("telegram.info")}{" "}
              <a href="/contact" className="text-blue-500 hover:underline">
                {t("telegram.contact")}
              </a>
            </p>

            {/* Telegram Form Fields */}
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="telegramToken"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("telegram.labels.token")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("telegram.placeholders.token")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>
                      <ScrollArea className="max-w-full w-full rounded-md border whitespace-nowrap min-h-6 p-2">
                        {t("telegram.examples.token")}
                        <ScrollBar orientation="horizontal" />
                      </ScrollArea>
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="telegramChatId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("telegram.labels.chatId")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("telegram.placeholders.chatId")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>
                      {t("telegram.examples.chatId")}
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="notificationLanguage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("telegram.labels.language")}</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            placeholder={t("telegram.placeholders.language")}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="en">
                          {t("telegram.languages.en")}
                        </SelectItem>
                        <SelectItem value="de">
                          {t("telegram.languages.de")}
                        </SelectItem>
                        <SelectItem value="fr">
                          {t("telegram.languages.fr")}
                        </SelectItem>
                        <SelectItem value="es">
                          {t("telegram.languages.es")}
                        </SelectItem>
                        <SelectItem value="it">
                          {t("telegram.languages.it")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button type="button" variant="outline" onClick={prevStep}>
              {t("telegram.actions.previous")}
            </Button>
            <Button type="submit">{t("telegram.actions.continue")}</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
