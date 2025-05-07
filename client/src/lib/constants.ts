// Frequency labels for display
export const FREQUENCY_LABELS: Record<string, string> = {
  'hourly': 'Every hour',
  '30min': 'Every 30 minutes',
  '15min': 'Every 15 minutes',
  '5min': 'Every 5 minutes',
  '1min': 'Every minute'
};

// Website options with pricing
export const WEBSITE_OPTIONS = [
  { id: 'autotrader', name: 'AutoTrader', isDefault: true, includedInBase: true },
  { id: 'cargurus', name: 'CarGurus', price: 4.99 },
  { id: 'cars', name: 'Cars.com', price: 4.99 },
  { id: 'facebook', name: 'Facebook Marketplace', price: 4.99, requiresUrl: true }
];

// Update frequency options with pricing
export const FREQUENCY_OPTIONS = [
  { id: 'hourly', label: 'Every hour', price: 0, isDefault: true },
  { id: '30min', label: 'Every 30 minutes', price: 2.99 },
  { id: '15min', label: 'Every 15 minutes', price: 5.99 },
  { id: '5min', label: 'Every 5 minutes', price: 9.99 },
  { id: '1min', label: 'Every minute', price: 14.99 }
];

// Language options for notifications
export const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'it', label: 'Italian' },
  { value: 'pt', label: 'Portuguese' },
  { value: 'ru', label: 'Russian' }
];

// Fuel type options
export const FUEL_TYPE_OPTIONS = [
  { value: '', label: 'Any fuel type' },
  { value: 'gasoline', label: 'Gasoline' },
  { value: 'diesel', label: 'Diesel' },
  { value: 'electric', label: 'Electric' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'plugin_hybrid', label: 'Plug-in Hybrid' }
];

// Base price for subscription
export const BASE_PRICE = 9.99;

// Additional price per website (after the first one)
export const ADDITIONAL_WEBSITE_PRICE = 4.99;
