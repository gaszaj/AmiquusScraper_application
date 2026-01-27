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

// export const globalBasePrice = 9.99;

export const globalBasePrice = 1.00;

export const globalAddons = [
  {
    id: "additional_website",
    price: 0.1,
  },
  {
    id: "30min_updates",
    price: 0.1,
  },
  {
    id: "15min_updates",
    price: 0.2,
  },
  {
    id: "5min_updates",
    price: 0.3,
  },
  {
    id: "1min_updates",
    price: 0.4,
  },
];

export const getAddonPrice = (id: string): number =>
  globalAddons.find((addon) => addon.id === id)?.price ?? 0;

const additionalWebsitePrice = getAddonPrice("additional_website");
const fiveMinUpdatesPrice = getAddonPrice("5min_updates");
const hourlyUpdatesPrice = 0;
const thirtyMinUpdatesPrice = getAddonPrice("30min_updates");
const fifteenMinUpdatesPrice = getAddonPrice("15min_updates");
const oneMinUpdatesPrice = getAddonPrice("1min_updates");
// Currency settings
const currencySymbol = "€";
const currencyLocale = "de-DE";
const currencyCode = "EUR";
const payment_frequency_interval = "Day"; //Day, Week, Month, Year
const subscription_period_interval = "Year"; //Day, Week, Month, Year 


export { additionalWebsitePrice, fiveMinUpdatesPrice, hourlyUpdatesPrice, thirtyMinUpdatesPrice, fifteenMinUpdatesPrice, oneMinUpdatesPrice, currencySymbol, currencyLocale, currencyCode, payment_frequency_interval, subscription_period_interval };

// const addOns = [
//   { name: "Each additional website", price: 4.99 },
//   { name: "30-minute updates", price: 2.99 },
//   { name: "15-minute updates", price: 5.99 },
//   { name: "5-minute updates", price: 9.99 },
//   { name: "1-minute updates", price: 14.99 },
// ];
