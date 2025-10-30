import { en } from "@shared/translations/en";
import { de } from "@shared/translations/de";
import { es } from "@shared/translations/es";
import { fr } from "@shared/translations/fr";
import { it } from "@shared/translations/it";



const translations = {
  en,
  de,
  es,
  fr,
  it,
};

export function t(key: string, lang: string = "en"): string {
  const keys = key.split(".");
  let result: any = translations[lang as keyof typeof translations] || translations.en;

  for (const k of keys) {
    result = result?.[k];
    if (!result) break;
  }

  return result || key; // fallback to key if not found
}