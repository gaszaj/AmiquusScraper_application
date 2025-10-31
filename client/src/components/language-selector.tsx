import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";
import { Language as LanguageType } from "@shared/translations";
import { useLanguage } from "@/components/language-provider";

type Language = {
  code: LanguageType;
  name: string;
  flag: string;
};


const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "sl", name: "Slovenščina", flag: "🇸🇮" },
  { code: "hr", name: "Hrvatski", flag: "🇭🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "sv", name: "Svenska", flag: "🇸🇪" },
  { code: "da", name: "Dansk", flag: "🇩🇰" },
  { code: "nb", name: "Norsk", flag: "🇳🇴" },
  { code: "fi", name: "Suomi", flag: "🇫🇮" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "cs", name: "Čeština", flag: "🇨🇿" },
  { code: "pl", name: "Polski", flag: "🇵🇱" },
  { code: "sk", name: "Slovenčina", flag: "🇸🇰" },
  { code: "sq", name: "Shqip", flag: "🇦🇱" },
  { code: "hy", name: "Հայերեն", flag: "🇦🇲" },
  { code: "az", name: "Azərbaycan dili", flag: "🇦🇿" },
  { code: "bn", name: "বাংলা", flag: "🇧🇩" },
  { code: "be", name: "Беларуская", flag: "🇧🇾" },
  { code: "bs", name: "Bosanski", flag: "🇧🇦" },
  { code: "bg", name: "Български", flag: "🇧🇬" },
  { code: "el", name: "Ελληνικά", flag: "🇨🇾" },
  { code: "et", name: "Eesti", flag: "🇪🇪" },
  { code: "ka", name: "ქართული", flag: "🇬🇪" },
  { code: "hu", name: "Magyar", flag: "🇭🇺" },
  { code: "he", name: "עברית", flag: "🇮🇱" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "lv", name: "Latviešu", flag: "🇱🇻" },
  { code: "lt", name: "Lietuvių", flag: "🇱🇹" },
  { code: "ms", name: "Bahasa Melayu", flag: "🇲🇾" },
  { code: "ro", name: "Română", flag: "🇲🇩" },
  { code: "mn", name: "Монгол", flag: "🇲🇳" },
  { code: "sr", name: "Српски", flag: "🇲🇪" },
  { code: "my", name: "မြန်မာစာ", flag: "🇲🇲" },
  { code: "mk", name: "Македонски", flag: "🇲🇰" },
  { code: "th", name: "ไทย", flag: "🇹🇭" },
  { code: "uk", name: "Українська", flag: "🇺🇦" },
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
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
              <span>{lang.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}