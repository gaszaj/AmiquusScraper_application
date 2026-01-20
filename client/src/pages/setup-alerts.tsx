import { useEffect, useState } from "react";
import TelegramCarAlertForm from "@/components/forms/TelegramCarAlertForm";
import { useAuth } from "@/hooks/use-auth";
import PaymentScreen from "@/components/subscription/PaymentScreen";

export default function SetupAlerts() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-16">
        <TelegramCarAlertForm />
      </main>
    </div>
  );
}
