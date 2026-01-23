import {
  globalBasePrice,
  additionalWebsitePrice,
  hourlyUpdatesPrice,
  thirtyMinUpdatesPrice,
  fifteenMinUpdatesPrice,
  fiveMinUpdatesPrice,
  oneMinUpdatesPrice,
} from "@shared/pricing";
// Website options available for scraping
export const WEBSITE_OPTIONS = [
  { id: "avto.net", name: "Avto.net", price: 0 },
  { id: "facebook", name: "Facebook Marketplace", price: 0, requiresUrl: true },
  { id: "mobile.de", name: "Mobile.de", price: 0 },
  { id: "autoscout24", name: "AutoScout24", price: 0 },
  { id: "olx", name: "OLX", price: 0 },
];

// Frequency options for scraping
export const FREQUENCY_OPTIONS = [
  {
    id: "hourly",
    name: "Every 1 hour",
    minutes: 60,
    additionalPrice: hourlyUpdatesPrice,
  },
  {
    id: "30min",
    name: "Every 30 minutes",
    minutes: 30,
    additionalPrice: thirtyMinUpdatesPrice,
  },
  {
    id: "15min",
    name: "Every 15 minutes",
    minutes: 15,
    additionalPrice: fifteenMinUpdatesPrice,
  },
  {
    id: "5min",
    name: "Fastest",
    minutes: 5,
    additionalPrice: fiveMinUpdatesPrice,
  },
  // {
  //   id: "1min",
  //   name: "Every 1 minute",
  //   minutes: 1,
  //   additionalPrice: oneMinUpdatesPrice,
  // },
];

// Mapping of frequency options to display labels
export const FREQUENCY_LABELS: Record<string, string> = {
  hourly: "Every 1 hour",
  "30min": "Every 30 minutes",
  "15min": "Every 15 minutes",
  "5min": "Fastest",
  "1min": "Every 1 minute",
};

// Language options for notifications
export const LANGUAGE_OPTIONS = [
  { id: "en", name: "English" },
  { id: "es", name: "Spanish" },
  { id: "fr", name: "French" },
  { id: "de", name: "German" },
  { id: "it", name: "Italian" },
  { id: "pt", name: "Portuguese" },
  { id: "ru", name: "Russian" },
];

// Fuel type options for car filtering
export const FUEL_TYPE_OPTIONS = [
  { id: "gasoline", name: "Gasoline" },
  { id: "diesel", name: "Diesel" },
  { id: "electric", name: "Electric" },
  { id: "hybrid", name: "Hybrid" },
  { id: "plugin_hybrid", name: "Plug-in Hybrid" },
];

// Base pricing
export const BASE_PRICE = globalBasePrice;
export const ADDITIONAL_WEBSITE_PRICE = additionalWebsitePrice;
