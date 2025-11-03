import { en } from "@shared/translations/en";
import { de } from "@shared/translations/de";
import { es } from "@shared/translations/es";
import { fr } from "@shared/translations/fr";
import { it } from "@shared/translations/it";
import { pt } from "@shared/translations/pt";
import { ar } from "@shared/translations/ar";
import { sl } from "@shared/translations/sl";
import { hr } from "@shared/translations/hr";
import { nl } from "@shared/translations/nl";
import { sv } from "@shared/translations/sv";
import { da } from "@shared/translations/da";
import { nb } from "@shared/translations/nb";
import { fi } from "@shared/translations/fi";
import { hi } from "@shared/translations/hi";
import { ru } from "@shared/translations/ru";
import { tr } from "@shared/translations/tr";
import { cs } from "@shared/translations/cs";
import { pl } from "@shared/translations/pl";
import { sk } from "@shared/translations/sk";
import { sq } from "@shared/translations/sq";
import { hy } from "@shared/translations/hy";
import { az } from "@shared/translations/az";
import { bn } from "@shared/translations/bn";
import { be } from "@shared/translations/be";
import { bs } from "@shared/translations/bs";
import { bg } from "@shared/translations/bg";
import { el } from "@shared/translations/el";
import { et } from "@shared/translations/et";
import { ka } from "@shared/translations/ka";
import { hu } from "@shared/translations/hu";
import { he } from "@shared/translations/he";
import { ja } from "@shared/translations/ja";
import { ko } from "@shared/translations/ko";
import { lv } from "@shared/translations/lv";
import { lt } from "@shared/translations/lt";
import { ms } from "@shared/translations/ms";
import { ro } from "@shared/translations/ro";
import { mn } from "@shared/translations/mn";
import { sr } from "@shared/translations/sr";
import { my } from "@shared/translations/my";
import { mk } from "@shared/translations/mk";
import { th } from "@shared/translations/th";
import { uk } from "@shared/translations/uk";
import { vi } from "@shared/translations/vi";



export const translations = {
  en,
  sl,
  hr,
  es,
  fr,
  de,
  ar,
  pt,
  it,
  nl,
  sv,
  da,
  nb,
  fi,
  hi,
  ru,
  tr,
  cs,
  pl,
  sk,
  sq,
  hy,
  az,
  bn,
  be,
  bs,
  bg,
  el,
  et,
  ka,
  hu,
  he,
  ja,
  ko,
  lv,
  lt,
  ms,
  ro,
  mn,
  sr,
  my,
  mk,
  th,
  uk,
  vi,
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