import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SubscriptionFormData } from "@shared/schema";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { HelpCircle } from "lucide-react";

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
  const [tokenInstructionsOpen, setTokenInstructionsOpen] = useState(false);
  const [chatIdInstructionsOpen, setChatIdInstructionsOpen] = useState(false);

  const { register, handleSubmit, control, formState: { errors } } = useForm<TelegramSetupFormData>({
    resolver: zodResolver(telegramSetupSchema),
    defaultValues: {
      telegramBotToken: formData.telegramBotToken || "",
      telegramChatId: formData.telegramChatId || "",
      notificationLanguage: formData.notificationLanguage || "en",
    },
  });

  const onSubmit = (data: TelegramSetupFormData) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <div className="form-step">
      <h3 className="text-xl font-title font-semibold mb-6">Telegram Notification Setup</h3>
      <p className="text-neutral-600 mb-6">
        Connect your Telegram account to receive instant notifications about new listings.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <Label htmlFor="telegram-token" className="block text-sm font-medium text-neutral-700 mb-1">
            Telegram Bot Token
          </Label>
          <Input
            id="telegram-token"
            {...register("telegramBotToken")}
            className={`w-full px-4 py-2 border ${
              errors.telegramBotToken ? "border-red-500" : "border-neutral-300"
            } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors`}
            placeholder="Enter your Telegram bot token"
          />
          {errors.telegramBotToken && (
            <p className="mt-1 text-sm text-red-500">{errors.telegramBotToken.message}</p>
          )}
          <div className="mt-2">
            <Collapsible open={tokenInstructionsOpen} onOpenChange={setTokenInstructionsOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="link" className="text-primary-600 text-sm flex items-center p-0 h-auto">
                  <HelpCircle className="mr-1 h-4 w-4" /> How to get a bot token
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 text-sm text-neutral-600 p-3 bg-neutral-100 rounded-md">
                <p className="font-medium">To get your Telegram bot token:</p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                  <li>Open Telegram and search for @BotFather</li>
                  <li>Start a chat and send the command /newbot</li>
                  <li>Follow the instructions to create a new bot</li>
                  <li>Copy the API token provided by BotFather</li>
                </ol>
                <p className="mt-2">
                  <a href="#" className="text-primary-600 underline">
                    Watch video tutorial
                  </a>
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        <div className="mb-8">
          <Label htmlFor="telegram-chat-id" className="block text-sm font-medium text-neutral-700 mb-1">
            Telegram Chat ID
          </Label>
          <Input
            id="telegram-chat-id"
            {...register("telegramChatId")}
            className={`w-full px-4 py-2 border ${
              errors.telegramChatId ? "border-red-500" : "border-neutral-300"
            } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors`}
            placeholder="Enter your Telegram chat ID"
          />
          {errors.telegramChatId && (
            <p className="mt-1 text-sm text-red-500">{errors.telegramChatId.message}</p>
          )}
          <div className="mt-2">
            <Collapsible open={chatIdInstructionsOpen} onOpenChange={setChatIdInstructionsOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="link" className="text-primary-600 text-sm flex items-center p-0 h-auto">
                  <HelpCircle className="mr-1 h-4 w-4" /> How to get your chat ID
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 text-sm text-neutral-600 p-3 bg-neutral-100 rounded-md">
                <p className="font-medium">To get your Telegram chat ID:</p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                  <li>Search for @userinfobot in Telegram</li>
                  <li>Start a chat and send any message</li>
                  <li>The bot will reply with your chat ID</li>
                  <li>Copy the ID number (it starts with a dash if it's a group)</li>
                </ol>
                <p className="mt-2">
                  <a href="#" className="text-primary-600 underline">
                    Watch video tutorial
                  </a>
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        <div className="mb-8">
          <Label htmlFor="notification-language" className="block text-sm font-medium text-neutral-700 mb-3">
            Notification Language
          </Label>
          <Controller
            name="notificationLanguage"
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={field.value}
              >
                <SelectTrigger id="notification-language">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="it">Italian</SelectItem>
                  <SelectItem value="pt">Portuguese</SelectItem>
                  <SelectItem value="ru">Russian</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="flex justify-between">
          <Button
            type="button"
            onClick={prevStep}
            variant="outline"
            className="bg-neutral-200 text-neutral-700 hover:bg-neutral-300 border-0"
          >
            Previous
          </Button>
          <Button type="submit" className="bg-primary-600 hover:bg-primary-700">
            Next Step
          </Button>
        </div>
      </form>
    </div>
  );
}
