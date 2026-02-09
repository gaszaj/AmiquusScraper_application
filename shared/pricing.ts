// export const globalAddons = [
//   {
//     id: "additional_website",
//     price: 4.99,
//   },
//   {
//     id: "30min_updates",
//     price: 2.99,
//   },
//   {
//     id: "15min_updates",
//     price: 5.99,
//   },
//   {
//     id: "5min_updates",
//     price: 9.99,
//   },
//   {
//     id: "1min_updates",
//     price: 14.99
//   }
// ]
type Frequency = "hourly" | "30min" | "15min" | "5min" | "1min";

import { AlertFormSchema } from "./schema";

// export const globalBasePrice = 9.99;

export const globalBasePrice = 39; //or hourly updates price
export const additionalWebsiteTimesValue = 0.9; // or additional website price

export const globalAddons = [
  {
    id: "additional_website",
    price: 0.9,
  },
  // {
  //   id: "hourly_updates",
  //   price: 39,
  // },
  {
    id: "30min_updates",
    price: 54,
  },
  {
    id: "15min_updates",
    price: 69,
  },
  {
    id: "5min_updates",
    price: 104,
  },
  {
    id: "1min_updates",
    price: 104,
  },
];

export function getBasePrice(frequency: Frequency): number {
  if (frequency === "30min") return getAddonPrice("30min_updates");
  if (frequency === "15min") return getAddonPrice("15min_updates");
  if (frequency === "5min") return getAddonPrice("5min_updates");
  if (frequency === "1min") return getAddonPrice("1min_updates");
  return globalBasePrice;
}

export function getAdditionalWebsitePrice(
  websitesSelected: string[],
  frequency: Frequency
): number {
  const base = getBasePrice(frequency);
  const websitesCount = websitesSelected.length;
  if (websitesCount <= 1) return 0;

  const value = (websitesCount - 1) * (additionalWebsiteTimesValue * base);
  return Number(value.toFixed(2));
}

export function calculateTotalPrice(selectedWebsites: string[], selectedFreq: Frequency): number {
  const websitesSelected = selectedWebsites ?? [];
  const frequency = (selectedFreq || "hourly") as Frequency;

  if (websitesSelected.length === 0) return 0;

  const base = getBasePrice(frequency);
  const extras = getAdditionalWebsitePrice(websitesSelected, frequency);

  return Number((base + extras).toFixed(2));
}

export const getAddonPrice = (id: string): number =>
  globalAddons.find((addon) => addon.id === id)?.price ?? 0;

const additionalWebsitePrice = getAddonPrice("additional_website");
const fiveMinUpdatesPrice = getAddonPrice("5min_updates");
const hourlyUpdatesPrice = getAddonPrice("hourly_updates") || globalBasePrice;
const thirtyMinUpdatesPrice = getAddonPrice("30min_updates");
const fifteenMinUpdatesPrice = getAddonPrice("15min_updates");
const oneMinUpdatesPrice = getAddonPrice("1min_updates");
// Currency settings
const currencySymbol = "€";
const currencyLocale = "de-DE";
const currencyCode = "EUR";
const payment_frequency_interval = "Month"; //Day, Week, Month, Year
const payment_frequency_count = 1;
const subscription_period_interval = "Year"; //Day, Week, Month, Year 
const subscription_period_count = 20;


export { additionalWebsitePrice, fiveMinUpdatesPrice, hourlyUpdatesPrice, thirtyMinUpdatesPrice, fifteenMinUpdatesPrice, oneMinUpdatesPrice, currencySymbol, currencyLocale, currencyCode, payment_frequency_interval, subscription_period_interval, payment_frequency_count, subscription_period_count };

// const addOns = [
//   { name: "Each additional website", price: 4.99 },
//   { name: "30-minute updates", price: 2.99 },
//   { name: "15-minute updates", price: 5.99 },
//   { name: "5-minute updates", price: 9.99 },
//   { name: "1-minute updates", price: 14.99 },
// ];
