import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "../translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, options?: { returnObjects?: boolean }) => string | any;
}

const defaultLanguage: Language = "en";

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: string, options?: { returnObjects?: boolean }) => key,
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: React.ReactNode;
}

function interpolate(template: string, vars?: { [key: string]: any }): string {
  if (!vars) return template;
  return template.replace(/{{(.*?)}}/g, (_, key) => {
    return vars[key.trim()] ?? "";
  });
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check if a language preference is stored in localStorage
    const storedLanguage = localStorage.getItem("language") as Language | null;
    // Check browser language
    const browserLanguage = navigator.language.split("-")[0] as Language;

    // Use stored language, browser language, or default language
    if (storedLanguage && Object.keys(translations).includes(storedLanguage)) {
      return storedLanguage;
    } else if (Object.keys(translations).includes(browserLanguage)) {
      return browserLanguage;
    }
    return defaultLanguage;
  });

  useEffect(() => {
    // Store language preference in localStorage
    localStorage.setItem("language", language);
    // Update document language
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string, options?: { [key: string]: any, returnObjects?: boolean }): string | any => {
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k as keyof typeof value];
      } else {
        // Fallback to English
        let fallback = translations.en;
        for (const fk of keys) {
          if (fallback && typeof fallback === 'object' && fk in fallback) {
            fallback = fallback[fk as keyof typeof fallback];
          } else {
            return key;
          }
        }

        if (options?.returnObjects) return fallback;
        return typeof fallback === "string" ? interpolate(fallback, options) : key;
      }
    }

    if (options?.returnObjects) return value;
    return typeof value === "string" ? interpolate(value, options) : key;
  };


  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
