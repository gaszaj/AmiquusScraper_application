import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import blueCar from "@/images/blue_car.webp";
import redCar from "@/images/red_car.webp";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export type NewComerResponse = {
  websites: {
    website_names: string[];
    website_objects: {
      [key: string]: {
        url: string;
        bot_file_path: string;
      };
    };
  };
  fuel_types: string[];
  brands_and_models: {
    [brand: string]: string[];
  };
};

<div className="max-w-4xl mx-auto">
  {/* Car Search Preferences Form */}
  <div className="bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-8 mb-8 shadow-sm">
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Car Brand & Model */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
            htmlFor="car_brand"
          >
            Car Brand
          </label>
          <Select
            value={carBrand}
            onValueChange={(value) => {
              setCarBrand(value);
              setModels(loadModels(value));
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Car Brand" />
            </SelectTrigger>
            <SelectContent>
              {carBrands.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand.charAt(0).toUpperCase() + brand.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
            htmlFor="car_model"
          >
            Car Model
          </label>
          <Select
            name="car_model"
            value={carModel}
            onValueChange={(value) => setCarModel(value)}
            disabled={!carBrand}
          >
            <SelectTrigger>
              <SelectValue
                placeholder={
                  carBrand
                    ? "Select Car Model"
                    : "Select Car Brand First"
                }
              />
            </SelectTrigger>
            <SelectContent>
              {models.length > 0 ? (
                models.map(
                  (model) =>
                    model.trim() !== "" && (
                      <SelectItem key={model} value={model}>
                        {model}
                      </SelectItem>
                    ),
                )
              ) : (
                <SelectItem value="placeholder-no-models" disabled>
                  No Models Available
                </SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/*  fuel type*/}
      <div>
        <label
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
          htmlFor="fuel_type"
        >
          Fuel Type
        </label>
        <Select
          name="fuel_type"
          value={fuelType}
          onValueChange={(value) => setFuelType(value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Fuel Type" />
          </SelectTrigger>
          <SelectContent>
            {fuelTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* Price Range */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
            htmlFor="price_min"
          >
            Minimum Price
          </label>
          <Input
            type="number"
            id="price_min"
            name="price_min"
            value={priceMin}
            onChange={(e) => setPriceMin(e.target.value)}
            placeholder="Enter minimum price"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
            htmlFor="price_max"
          >
            Maximum Price
          </label>
          <Input
            type="number"
            id="price_max"
            name="price_max"
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
            placeholder="Enter maximum price"
          />
        </div>
      </div>

      {/* Build Year Range */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
            htmlFor="year_min"
          >
            Minimum Year
          </label>
          <Input
            type="number"
            id="year_min"
            name="year_min"
            value={yearMin}
            onChange={(e) => setYearMin(e.target.value)}
            placeholder="Enter minimum year"
            min="1900"
            max="2024"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
            htmlFor="year_max"
          >
            Maximum Year
          </label>
          <Input
            type="number"
            id="year_max"
            name="year_max"
            value={yearMax}
            onChange={(e) => setYearMax(e.target.value)}
            placeholder="Enter maximum year"
            min="1900"
            max="2024"
          />
        </div>
      </div>
      <div>
        <label
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
          htmlFor="max_kilometers"
        >
          Max Kilometers
        </label>
        <Input
          type="number"
          id="max_kilometers"
          name="max_kilometers"
          value={maxKilometers}
          onChange={(e) => setMaxKilometers(e.target.value)}
          placeholder="Enter maximum kilometers"
          min="0"
          max="1000000"
        />
      </div>

      {/* Websites to monitor */}
      <div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Websites to monitor
          </label>
          <p className="text-sm text-muted-foreground">
            Select one or more websites to monitor for car listings.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {websites.map((site) => (
            <div key={site} className="flex items-center gap-2">
              <Checkbox
                id={`website_${site}`}
                checked={websitesSelected.includes(site)}
                onCheckedChange={(checked) => {
                  setWebsitesSelected((prev) =>
                    checked
                      ? [...prev, site]
                      : prev.filter((s) => s !== site),
                  );
                }}
              />
              <label
                htmlFor={`website_${site}`}
                className="text-neutral-700 dark:text-neutral-300"
              >
                {site.charAt(0).toUpperCase() + site.slice(1)}
              </label>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <Checkbox
              id="website_facebook"
              checked={websitesSelected.includes("facebook")}
              onCheckedChange={(checked) => {
                setWebsitesSelected((prev) =>
                  checked
                    ? [...prev, "facebook"]
                    : prev.filter((s) => s !== "facebook"),
                );
              }}
            />
            <label
              htmlFor="website_facebook"
              className="text-neutral-700 dark:text-neutral-300"
            >
              Facebook Marketplace
            </label>
          </div>
        </div>
      </div>
      {/* Facebook Marketplace URL */}
      {websitesSelected.includes("facebook") && (
        <div className="space-y-4 mt-6">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Facebook Marketplace URL
            </label>
            <p className="text-sm text-muted-foreground mb-2">
              Paste the URL of your Facebook Marketplace search results
              here.
            </p>
            <Input
              type="text"
              id="facebook_marketplace_url"
              name="facebook_marketplace_url"
              value={facebookMarketplaceUrl}
              onChange={(e) =>
                setFacebookMarketplaceUrl(e.target.value)
              }
              placeholder="https://www.facebook.com/marketplace/..."
            />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Need help finding your Facebook Marketplace search link?
            </p>
            <p className="text-sm text-muted-foreground">
              Watch the video below for step-by-step instructions.
            </p>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                  width="100%"
                  height="315"
                  ata-cmp-vendor="s30"
                   src="about:blank" 
                  class="cmplazyload"
                  data-cmp-src="https://www.youtube.com/embed/jNQXAC9IVRw?si=68o2DzZ_OjDcvKEM"
                  title="How to copy Facebook Marketplace search link"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
            </div>
          </div>
        </div>
      )}
      {/* Update Frequency */}
      <div>
        <label
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
          htmlFor="update_frequency"
        >
          Update Frequency
        </label>
        <Select
          name="update_frequency"
          value={updateFrequency}
          onValueChange={(value) =>
            setUpdateFrequency(
              value as "hourly" | "30min" | "15min" | "5min" | "1min",
            )
          }
          defaultValue="hourly"
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Update Frequency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hourly">Hourly</SelectItem>
            <SelectItem value="30min">Every 30 minutes</SelectItem>
            <SelectItem value="15min">Every 15 minutes</SelectItem>
            <SelectItem value="5min">Every 5 minutes</SelectItem>
            <SelectItem value="1min">Every 1 minute</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </form>
  </div>

  {/* Telegram Bot Setup Section */}
  <div className="bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-8 mb-8 shadow-sm">
    <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
      Set Up Your Telegram Bot
    </h2>

    {/* Telegram Setup Instructions */}
    <div className="prose dark:prose-invert max-w-none mb-8">
      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
        Setup Instructions:
      </h3>
      <ol className="list-decimal list-inside text-neutral-700 dark:text-neutral-300 space-y-2">
        <li>Open Telegram and search for "BotFather"</li>
        <li>Start a chat with BotFather by clicking "Start"</li>
        <li>
          Type /newbot and follow the instructions to create a new bot
        </li>
        <li>Choose a name for your bot</li>
        <li>Choose a username for your bot (must end in 'bot')</li>
        <li>Copy the API token provided by BotFather</li>
        <li>Send a message to your new bot to activate the chat</li>
      </ol>
    </div>
    <div className="prose dark:prose-invert max-w-none mb-8">
      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
        How to get your Telegram Chat ID:
      </h3>
      <ol className="list-decimal list-inside text-neutral-700 dark:text-neutral-300 space-y-2">
        <li>Open Telegram and search for "userinfobot"</li>
        <li>Send any message to the bot</li>
        <li>
          The bot will reply with your information including your Chat
          ID
        </li>
        <li>Copy your Chat ID</li>
      </ol>
    </div>

    {/* Telegram Token Form */}
    <form className="space-y-6">
      <div>
        <label
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
          htmlFor="telegram_token"
        >
          Telegram Bot Token
        </label>
        <input
          type="text"
          id="telegram_token"
          name="telegram_token"
          value={telegramToken}
          onChange={(e) => setTelegramToken(e.target.value)}
          className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:border-primary dark:focus:border-primary transition"
          placeholder="Enter your bot token from BotFather"
        />
        <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
          Example: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890
        </p>
      </div>

      <div>
        <label
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
          htmlFor="telegram_chat_id"
        >
          Your Telegram Chat ID
        </label>
        <input
          type="text"
          id="telegram_chat_id"
          name="telegram_chat_id"
          value={telegramChatId}
          onChange={(e) => setTelegramChatId(e.target.value)}
          className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:border-primary dark:focus:border-primary transition"
          placeholder="Enter your Telegram chat ID"
        />
        <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
          You can get this by messaging @userinfobot on Telegram
        </p>
      </div>
      <div>
        <label
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
          htmlFor="notification_language"
        >
          Notification Language
        </label>
        <Select
          name="notification_language"
          value={notificationLanguage}
          onValueChange={(value) => setNotificationLanguage(value)}
          defaultValue="en"
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Telegram Message Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="de">German</SelectItem>
            <SelectItem value="fr">French</SelectItem>
            <SelectItem value="es">Spanish</SelectItem>
            <SelectItem value="it">Italian</SelectItem>
            <SelectItem value="nl">Dutch</SelectItem>
            <SelectItem value="pl">Polish</SelectItem>
            <SelectItem value="pt">Portuguese</SelectItem>
            <SelectItem value="ru">Russian</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </form>
  </div>

  {/* Telegram Chat Preview Section */}
  <div className="bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-8 mb-8 shadow-sm">
    <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
      Preview Telegram Notifications
    </h2>

    {/* Telegram Chat Preview */}
    <div className="w-full mb-8 bg-neutral-100 dark:bg-[#273746] rounded-xl p-4 border border-neutral-300 dark:border-neutral-700">
      <div className="flex items-start space-x-3 mb-4">
        <div className="bg-blue-500 rounded-full h-10 w-10 min-w-10 min-h-10 flex items-center justify-center text-white">
          A
        </div>
        <div className="bg-white flex flex-col rounded-lg w-full max-w-md sm:flex-row-reverse sm:h-40 sm:items-center">
          <img
            src={blueCar}
            alt="Volkswagen Arteon 2.0"
            className="rounded-t-lg w-full h-auto sm:rounded-r-lg sm:rounded-tl-none sm:w-48 sm:h-full"
            width="300"
            height="200"
            loading="lazy"
            decoding="async"
            style={{ objectFit: "cover" }}
          />
          <div className="w-full p-3">
            <p className="text-sm text-gray-800">
              🚗 <strong>New Car Alert!</strong>
            </p>
            <p className="text-sm text-gray-800">
              Volkswagen Arteon 2.0
            </p>
            <p className="text-sm text-gray-800">Price: € 36,850</p>
            <p className="text-sm text-gray-800">Kilometres: 73,000</p>
            <p className="text-sm text-gray-800">
              Location: OBVEZNA NAJAVA - Cvetlicna ul.3
            </p>
            <p className="text-sm text-gray-800 mt-2">
              <a href="#" className="text-blue-600 underline">
                View Listing →
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <div className="bg-blue-500 rounded-full h-10 w-10 min-w-10 min-h-10 flex items-center justify-center text-white">
          A
        </div>
        <div className="bg-white flex flex-col rounded-lg w-full max-w-md sm:flex-row-reverse sm:h-40 sm:items-center">
          <img
            src={redCar}
            alt="Ford"
            className="rounded-t-lg w-full h-auto  sm:rounded-r-lg sm:rounded-tl-none sm:w-48 sm:h-full"
            width="300"
            height="200"
            loading="lazy"
            decoding="async"
            style={{ objectFit: "cover" }}
          />
          <div className="w-full p-3">
            <p className="text-sm text-gray-800">
              🚗 <strong>New Car Alert!</strong>
            </p>
            <p className="text-sm text-gray-800">Ford</p>
            <p className="text-sm text-gray-800">Price: €22,750</p>
            <p className="text-sm text-gray-800">Kilometres: 170,000</p>
            <p className="text-sm text-gray-800">
              Location: castrop-Rauxel, NW
            </p>
            <p className="text-sm text-gray-800 mt-2">
              <a href="#" className="text-blue-600 underline">
                View Listing →
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Pricing Section */}
    <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mt-8">
      <div className="flex justify-between items-center mb-4">
        <span className="text-neutral-700 dark:text-neutral-300">
          Basic Plan (3 websites)
        </span>
        <span className="text-neutral-900 dark:text-white font-medium">
          $9.99/month
        </span>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-neutral-700 dark:text-neutral-300">
          Additional websites (2)
        </span>
        <span className="text-neutral-900 dark:text-white font-medium">
          $9.98/month
        </span>
      </div>
      <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4 mt-4">
        <div className="flex justify-between items-center">
          <span className="text-neutral-900 dark:text-white font-medium">
            Total
          </span>
          <span className="text-primary dark:text-primary font-bold text-xl">
            $19.97/month
          </span>
        </div>
      </div>
    </div>

    {/* Submit Button */}
    <div className="mt-8">
      <Button
        type="submit"
        onClick={handleSubmit}
        className="w-full py-3 px-4 bg-primary hover:bg-primary-600 dark:bg-primary dark:hover:bg-primary-600 text-white dark:text-neutral-900 transition font-semibold rounded-xl"
      >
        Start My Car Alert Service
      </Button>
      <p className="text-center text-neutral-500 dark:text-neutral-500 text-sm mt-2">
        Cancel anytime. 7-day money back guarantee.
      </p>
    </div>
  </div>
</div>

export default function TelegramCarAlertForm() {
  const [carBrand, setCarBrand] = useState("");

  const [telegramToken, setTelegramToken] = useState("");
  const [telegramChatId, setTelegramChatId] = useState("");

  const [data, setData] = useState<NewComerResponse | null>(null);
  const [loading, setLoading] = useState(true);
  // form fields
  const [carBrands, setCarBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [fuelTypes, setFuelTypes] = useState<string[]>([]);
  const [websites, setWebsites] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/newcommer")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading) {
      if (data) {
        setCarBrands(Object.keys(data.brands_and_models));
        setFuelTypes(data.fuel_types);
        setWebsites(Object.keys(data.websites.website_objects));
      } else {
        setCarBrands(Object.keys(newcomerDefault.brands_and_models));
        setFuelTypes(newcomerDefault.fuel_types);
        setWebsites(Object.keys(newcomerDefault.websites.website_objects));
      }
    }
  }, [data, loading]);

  // Function to load car models based on selected brand
  const loadModels = (brand: string) => {
    return (
      data?.brands_and_models[brand] ||
      newcomerDefault.brands_and_models[
        brand as keyof typeof newcomerDefault.brands_and_models
      ] ||
      []
    );
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const brand = e.target.value;
    setCarBrand(brand);
    setModels(loadModels(brand));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  console.log(data, loading);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
        <Loader2 className="w-8 h-8 animate-spin text-primary dark:text-[#ff0]" />
      </div>
    );
  }

  return (
    <section
      id="setup_telegram_bot"
      className="bg-white dark:bg-neutral-900 py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
            Set Up Your Car Alerts
          </h1>
          <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
            Configure your Telegram bot to receive notifications about your
            dream car
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Car Search Preferences Form */}
          <div className="bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-8 mb-8 shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Car Brand & Model */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                    htmlFor="car_brand"
                  >
                    Car Brand
                  </label>
                  <select
                    id="car_brand"
                    name="car_brand"
                    value={carBrand}
                    onChange={handleBrandChange}
                    className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:border-primary dark:focus:border-primary transition"
                  >
                    <option value="">Select Brand</option>
                    {carBrands.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand.charAt(0).toUpperCase() + brand.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                    htmlFor="car_model"
                  >
                    Car Model
                  </label>
                  <select
                    id="car_model"
                    name="car_model"
                    className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:border-primary dark:focus:border-primary transition"
                    disabled={!carBrand}
                  >
                    <option value="">Select Model</option>
                    {models.map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Price Range */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                    htmlFor="price_min"
                  >
                    Minimum Price
                  </label>
                  <input
                    type="number"
                    id="price_min"
                    name="price_min"
                    className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:border-primary dark:focus:border-primary transition"
                    placeholder="Enter minimum price"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                    htmlFor="price_max"
                  >
                    Maximum Price
                  </label>
                  <input
                    type="number"
                    id="price_max"
                    name="price_max"
                    className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:border-primary dark:focus:border-primary transition"
                    placeholder="Enter maximum price"
                  />
                </div>
              </div>

              {/* Build Year Range */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                    htmlFor="year_min"
                  >
                    Minimum Year
                  </label>
                  <input
                    type="number"
                    id="year_min"
                    name="year_min"
                    className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:border-primary dark:focus:border-primary transition"
                    placeholder="Enter minimum year"
                    min="1900"
                    max="2024"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                    htmlFor="year_max"
                  >
                    Maximum Year
                  </label>
                  <input
                    type="number"
                    id="year_max"
                    name="year_max"
                    className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:border-primary dark:focus:border-primary transition"
                    placeholder="Enter maximum year"
                    min="1900"
                    max="2024"
                  />
                </div>
              </div>

              {/* Websites to monitor */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Websites to Monitor
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {websites.map((site) => (
                    <div key={site} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`website_${site}`}
                        name="websites"
                        value={site}
                        className="h-4 w-4 ..."
                      />
                      <label
                        htmlFor={`website_${site}`}
                        className="text-neutral-700 dark:text-neutral-300"
                      >
                        {site.charAt(0).toUpperCase() + site.slice(1)}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>

          {/* Telegram Bot Setup Section */}
          <div className="bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
              Set Up Your Telegram Bot
            </h2>

            {/* Telegram Setup Instructions */}
            <div className="prose dark:prose-invert max-w-none mb-8">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                Setup Instructions:
              </h3>
              <ol className="list-decimal list-inside text-neutral-700 dark:text-neutral-300 space-y-2">
                <li>Open Telegram and search for "BotFather"</li>
                <li>Start a chat with BotFather by clicking "Start"</li>
                <li>
                  Type /newbot and follow the instructions to create a new bot
                </li>
                <li>Choose a name for your bot</li>
                <li>Choose a username for your bot (must end in 'bot')</li>
                <li>Copy the API token provided by BotFather</li>
                <li>Send a message to your new bot to activate the chat</li>
              </ol>
            </div>

            {/* Telegram Token Form */}
            <form className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  htmlFor="telegram_token"
                >
                  Telegram Bot Token
                </label>
                <input
                  type="text"
                  id="telegram_token"
                  name="telegram_token"
                  value={telegramToken}
                  onChange={(e) => setTelegramToken(e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:border-primary dark:focus:border-primary transition"
                  placeholder="Enter your bot token from BotFather"
                />
                <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
                  Example: 5432109876:ABCDefGhIJklMNoPqrSTuvWXyz1234567890
                </p>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  htmlFor="telegram_chat_id"
                >
                  Your Telegram Chat ID
                </label>
                <input
                  type="text"
                  id="telegram_chat_id"
                  name="telegram_chat_id"
                  value={telegramChatId}
                  onChange={(e) => setTelegramChatId(e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:border-primary dark:focus:border-primary transition"
                  placeholder="Enter your Telegram chat ID"
                />
                <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
                  You can get this by messaging @userinfobot on Telegram
                </p>
              </div>
            </form>
          </div>

          {/* Telegram Chat Preview Section */}
          <div className="bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
              Preview Telegram Notifications
            </h2>

            {/* Telegram Chat Preview */}
            <div className="w-full mb-8 bg-neutral-100 dark:bg-[#273746] rounded-xl p-4 border border-neutral-300 dark:border-neutral-700">
              <div className="flex items-start space-x-3 mb-4">
                <div className="bg-blue-500 rounded-full h-10 w-10 min-w-10 min-h-10 flex items-center justify-center text-white">
                  A
                </div>
                <div className="bg-white flex flex-col rounded-lg w-full max-w-md sm:flex-row-reverse sm:h-40 sm:items-center">
                  <img
                    src={blueCar}
                    alt="Volkswagen Arteon 2.0"
                    className="rounded-t-lg w-full h-auto sm:rounded-r-lg sm:rounded-tl-none sm:w-48 sm:h-full"
                    width="300"
                    height="200"
                    loading="lazy"
                    decoding="async"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="w-full p-3">
                    <p className="text-sm text-gray-800">
                      🚗 <strong>New Car Alert!</strong>
                    </p>
                    <p className="text-sm text-gray-800">
                      Volkswagen Arteon 2.0
                    </p>
                    <p className="text-sm text-gray-800">Price: € 36,850</p>
                    <p className="text-sm text-gray-800">Kilometres: 73,000</p>
                    <p className="text-sm text-gray-800">
                      Location: OBVEZNA NAJAVA - Cvetlicna ul.3
                    </p>
                    <p className="text-sm text-gray-800 mt-2">
                      <a href="#" className="text-blue-600 underline">
                        View Listing →
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-500 rounded-full h-10 w-10 min-w-10 min-h-10 flex items-center justify-center text-white">
                  A
                </div>
                <div className="bg-white flex flex-col rounded-lg w-full max-w-md sm:flex-row-reverse sm:h-40 sm:items-center">
                  <img
                    src={redCar}
                    alt="Ford"
                    className="rounded-t-lg w-full h-auto  sm:rounded-r-lg sm:rounded-tl-none sm:w-48 sm:h-full"
                    width="300"
                    height="200"
                    loading="lazy"
                    decoding="async"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="w-full p-3">
                    <p className="text-sm text-gray-800">
                      🚗 <strong>New Car Alert!</strong>
                    </p>
                    <p className="text-sm text-gray-800">Ford</p>
                    <p className="text-sm text-gray-800">Price: €22,750</p>
                    <p className="text-sm text-gray-800">Kilometres: 170,000</p>
                    <p className="text-sm text-gray-800">
                      Location: castrop-Rauxel, NW
                    </p>
                    <p className="text-sm text-gray-800 mt-2">
                      <a href="#" className="text-blue-600 underline">
                        View Listing →
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mt-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-neutral-700 dark:text-neutral-300">
                  Basic Plan (3 websites)
                </span>
                <span className="text-neutral-900 dark:text-white font-medium">
                  $9.99/month
                </span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-neutral-700 dark:text-neutral-300">
                  Additional websites (2)
                </span>
                <span className="text-neutral-900 dark:text-white font-medium">
                  $9.98/month
                </span>
              </div>
              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-900 dark:text-white font-medium">
                    Total
                  </span>
                  <span className="text-primary dark:text-primary font-bold text-xl">
                    $19.97/month
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <Button
                type="submit"
                onClick={handleSubmit}
                className="w-full py-3 px-4 bg-primary hover:bg-primary-600 dark:bg-primary dark:hover:bg-primary-600 text-white dark:text-neutral-900 transition font-semibold rounded-xl"
              >
                Start My Car Alert Service
              </Button>
              <p className="text-center text-neutral-500 dark:text-neutral-500 text-sm mt-2">
                Cancel anytime. 7-day money back guarantee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
