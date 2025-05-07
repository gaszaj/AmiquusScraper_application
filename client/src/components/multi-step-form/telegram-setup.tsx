import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubscriptionFormData } from "@shared/schema";
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
import { LANGUAGE_OPTIONS } from "@/lib/constants";

interface TelegramSetupProps {
  formData: Partial<SubscriptionFormData>;
  updateFormData: (data: Partial<SubscriptionFormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const telegramSetupSchema = z.object({
  telegramBotToken: z.string().min(1, "Telegram bot token is required"),
  telegramChatId: z.string().min(1, "Telegram chat ID is required"),
  notificationLanguage: z.enum(['en', 'es', 'fr', 'de', 'it', 'pt', 'ru']),
});

type TelegramSetupFormData = z.infer<typeof telegramSetupSchema>;

export default function TelegramSetup({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}: TelegramSetupProps) {
  const [error, setError] = useState<string | null>(null);

  const form = useForm<TelegramSetupFormData>({
    resolver: zodResolver(telegramSetupSchema),
    defaultValues: {
      telegramBotToken: formData.telegramBotToken || "",
      telegramChatId: formData.telegramChatId || "",
      notificationLanguage: formData.notificationLanguage || "en",
    },
  });

  const onSubmit = (data: TelegramSetupFormData) => {
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
        <h2 className="text-2xl font-semibold tracking-tight">Telegram Setup</h2>
        <p className="text-sm text-neutral-500">
          Set up Telegram notifications by providing your bot token and chat ID.
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
          <FormField
            control={form.control}
            name="telegramBotToken"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telegram Bot Token</FormLabel>
                <FormDescription>
                  Create a Telegram bot with BotFather and paste the token here
                </FormDescription>
                <FormControl>
                  <Input placeholder="123456789:ABCdefGhIJKlmnOPQRstUVwxYZ" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telegramChatId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telegram Chat ID</FormLabel>
                <FormDescription>
                  Send a message to @userinfobot on Telegram to get your Chat ID
                </FormDescription>
                <FormControl>
                  <Input placeholder="12345678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="notificationLanguage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notification Language</FormLabel>
                <FormDescription>
                  Select the language for your notifications
                </FormDescription>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {LANGUAGE_OPTIONS.map((option) => (
                      <SelectItem key={option.id} value={option.id}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Alert className="mt-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <p className="text-sm">
                <strong>How to get a Telegram Bot Token:</strong>
                <ol className="list-decimal ml-5 mt-2 space-y-1">
                  <li>Open Telegram and search for @BotFather</li>
                  <li>Send the command /newbot</li>
                  <li>Follow the instructions to create a bot</li>
                  <li>Copy the token provided by BotFather</li>
                </ol>
              </p>
              <p className="text-sm mt-3">
                <strong>How to get your Telegram Chat ID:</strong>
                <ol className="list-decimal ml-5 mt-2 space-y-1">
                  <li>Open Telegram and search for @userinfobot</li>
                  <li>Send any message to the bot</li>
                  <li>The bot will reply with your information including your Chat ID</li>
                  <li>Copy the Chat ID (it's a number)</li>
                </ol>
              </p>
            </AlertDescription>
          </Alert>

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
            >
              Previous
            </Button>
            <Button type="submit">Continue</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}