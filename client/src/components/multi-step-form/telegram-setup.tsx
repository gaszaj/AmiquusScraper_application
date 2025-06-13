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
import { LANGUAGE_OPTIONS } from "@/lib/constants";

interface TelegramSetupProps {
  formData: Partial<AlertFormSchema>;
  updateFormData: (data: Partial<AlertFormSchema>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const telegramSetupSchema = z.object({
  telegramToken: z.string().min(1, "Telegram bot token is required"),
  telegramChatId: z.string().min(1, "Telegram chat ID is required"),
  notificationLanguage: z.string().min(1, "Notification language is required"),
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
      telegramToken: formData.telegramToken || "",
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
        <h2 className="text-2xl font-semibold tracking-tight">
          Telegram Setup
        </h2>
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
          <div className="bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
              Set Up Your Telegram Bot
            </h2>

            {/* Telegram Setup Instructions */}
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
                    <li>
                      The bot will reply with your information including your
                      Chat ID
                    </li>
                    <li>Copy the Chat ID (it's a number)</li>
                  </ol>
                </p>
              </AlertDescription>
            </Alert>
            {/* ⬇️ Telegram instructions video */}
            <div className="space-y-2 my-6">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Need help setting up your Telegram Bot Token and Chat ID?
              </p>
              <p className="text-sm text-muted-foreground">
                Watch the video below for a step-by-step guide.
              </p>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/jNQXAC9IVRw"
                  title="Telegram Setup Instructions"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Telegram Token Form */}
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="telegramToken"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telegram Bot Token</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your bot token from BotFather"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>
                      Example: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="telegramChatId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Telegram Chat ID</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Telegram chat ID"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>
                      You can get this by messaging @userinfobot on Telegram
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="notificationLanguage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notification Language</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Telegram Message Language" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="de">Deutsch</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="it">Italiano</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <Button type="button" variant="outline" onClick={prevStep}>
              Previous
            </Button>
            <Button type="submit">Continue</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
