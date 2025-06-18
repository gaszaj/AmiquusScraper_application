import { useState } from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Globe } from "lucide-react";
import { Language as LanguageType } from "@/translations";
import { useLanguage } from "@/components/language-provider";

type Language = {
  code: LanguageType;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
];

export function LanguageSelector() {
  const { language, setLanguage} = useLanguage();
  const selectedLang = languages.find((l) => l.code === language);

  const handleLanguageChange = (value: LanguageType) => {
    setLanguage(value);
    // Here you would implement actual language change logic
    // For example, using i18n
  };

  return (
    <Select value={language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="h-10 rounded-md px-3 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm font-medium transition-colors">
        <Globe className="h-5 w-5 text-neutral-400 min-h-5 min-w-5" />
        {/* <div className="flex items-center gap-2">
          <span>{selectedLang?.flag}</span>
          <span>{selectedLang?.name}</span>
        </div> */}
        <SelectValue className="sr-only" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <div className="flex items-center gap-2">
              <span>{lang.flag}</span>
              <span >{lang.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}