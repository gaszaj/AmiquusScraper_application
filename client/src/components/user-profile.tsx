import { useState } from "react";
import { Link } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, User, Settings, LogOut } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function UserProfile({handleMobileMenuClose}: {
  handleMobileMenuClose: () => void
}) {
  const { t } = useLanguage();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    handleMobileMenuClose()
    logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 bg-transparent hover:bg-neutral-800 transition-colors w-10 h-10 rounded-full justify-center">
          <User className="h-5 w-5 text-neutral-400" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {isAuthenticated && user ? (
          <>
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium truncate">
                  {user.username || "User"}
                </p>
                <p className="text-xs text-neutral-500 truncate">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild onClick={handleMobileMenuClose}>
              <Link
                href="/dashboard"
                className="flex items-center gap-2 cursor-pointer"
              >
                <Bell className="h-4 w-4" />
                <span> {t("navigations.myAlerts")}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild onClick={handleMobileMenuClose}>
              <Link
                href="/profile"
                className="flex items-center gap-2 cursor-pointer"
              >
                <User className="h-4 w-4" />
                <span>{t("navigations.profile")}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild onClick={handleMobileMenuClose}>
              <Link
                href="/profile"
                className="flex items-center gap-2 cursor-pointer"
              >
                <Settings className="h-4 w-4" />
                <span>{t("navigations.settings")}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              <span>{t("navigations.logout")}</span>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem asChild onClick={handleMobileMenuClose}>
              <Link
                href="/login"
                className="flex items-center gap-2 cursor-pointer"
              >
                <span>{t("navigations.login")}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild onClick={handleMobileMenuClose}>
              <Link
                href="/register"
                className="flex items-center gap-2 cursor-pointer"
              >
                <span>{t("navigations.signUp")}</span>
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
