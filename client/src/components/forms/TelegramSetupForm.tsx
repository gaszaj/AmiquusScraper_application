import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export interface TelegramSetupFormData {
  telegramToken: string;
  telegramChatId: string;
  notificationLanguage: string;
}

interface TelegramSetupFormProps {
  onDataChange: (data: TelegramSetupFormData) => void;
  initialData?: Partial<TelegramSetupFormData>;
}

export default function TelegramSetupForm({
  onDataChange,
  initialData,
}: TelegramSetupFormProps) {
  const [telegramToken, setTelegramToken] = useState<string>(
    initialData?.telegramToken || ""
  );
  const [telegramChatId, setTelegramChatId] = useState<string>(
    initialData?.telegramChatId || ""
  );
  const [notificationLanguage, setNotificationLanguage] = useState<string>(
    initialData?.notificationLanguage || "en"
  );
  
  useEffect(() => {
    onDataChange({
      telegramToken,
      telegramChatId,
      notificationLanguage,
    });
  }, [telegramToken, telegramChatId, notificationLanguage, onDataChange]);
  
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="telegram-token" className="block text-sm font-medium text-neutral-700 mb-1">
          Telegram Bot Token
        </Label>
        <Input
          id="telegram-token"
          type="text"
          placeholder="Enter your Telegram bot token"
          value={telegramToken}
          onChange={(e) => setTelegramToken(e.target.value)}
          className="mb-2"
        />
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="token-instructions">
            <AccordionTrigger className="text-primary-600 text-sm py-2">
              How to get a bot token
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-sm text-neutral-600 p-3 bg-neutral-100 rounded-md">
                <p className="font-medium">To get your Telegram bot token:</p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                  <li>Open Telegram and search for @BotFather</li>
                  <li>Start a chat and send the command /newbot</li>
                  <li>Follow the instructions to create a new bot</li>
                  <li>Copy the API token provided by BotFather</li>
                </ol>
                <Button variant="link" className="mt-2 p-0 h-auto text-primary-600">
                  Watch video tutorial
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div>
        <Label htmlFor="telegram-chat-id" className="block text-sm font-medium text-neutral-700 mb-1">
          Telegram Chat ID
        </Label>
        <Input
          id="telegram-chat-id"
          type="text"
          placeholder="Enter your Telegram chat ID"
          value={telegramChatId}
          onChange={(e) => setTelegramChatId(e.target.value)}
          className="mb-2"
        />
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="chat-id-instructions">
            <AccordionTrigger className="text-primary-600 text-sm py-2">
              How to get your chat ID
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-sm text-neutral-600 p-3 bg-neutral-100 rounded-md">
                <p className="font-medium">To get your Telegram chat ID:</p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                  <li>Search for @userinfobot in Telegram</li>
                  <li>Start a chat and send any message</li>
                  <li>The bot will reply with your chat ID</li>
                  <li>Copy the ID number (it starts with a dash if it's a group)</li>
                </ol>
                <Button variant="link" className="mt-2 p-0 h-auto text-primary-600">
                  Watch video tutorial
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div>
        <Label htmlFor="notification-language" className="block text-sm font-medium text-neutral-700 mb-3">
          Notification Language
        </Label>
        <Select value={notificationLanguage} onValueChange={setNotificationLanguage}>
          <SelectTrigger id="notification-language" className="w-full">
            <SelectValue placeholder="Select language" />
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
      </div>
    </div>
  );
}
