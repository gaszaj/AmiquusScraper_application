import { useState } from "react";
import { Button } from "@/components/ui/button";
import blueCar from "@/images/blue_car.webp";
import redCar from "@/images/red_car.webp";

export default function TelegramCarAlertForm() {
  const [carBrand, setCarBrand] = useState("");
  const [models, setModels] = useState<string[]>([]);
  const [telegramToken, setTelegramToken] = useState("");
  const [telegramChatId, setTelegramChatId] = useState("");

  // Function to load car models based on selected brand
  const loadModels = (brand: string) => {
    // This would be replaced with actual data from your API
    const modelMap: Record<string, string[]> = {
      toyota: ["Corolla", "Camry", "RAV4", "Highlander", "4Runner"],
      honda: ["Civic", "Accord", "CR-V", "Pilot", "Odyssey"],
      bmw: ["3 Series", "5 Series", "X3", "X5", "7 Series"],
      mercedes: ["C-Class", "E-Class", "S-Class", "GLC", "GLE"],
    };

    return modelMap[brand] || [];
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
                    <option value="toyota">Toyota</option>
                    <option value="honda">Honda</option>
                    <option value="bmw">BMW</option>
                    <option value="mercedes">Mercedes-Benz</option>
                    {/* Add more options as needed */}
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
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="website_autotrader"
                      name="websites"
                      value="autotrader"
                      className="h-4 w-4 text-primary dark:text-primary rounded border-neutral-300 dark:border-neutral-600 focus:ring-primary dark:focus:ring-primary"
                    />
                    <label
                      htmlFor="website_autotrader"
                      className="text-neutral-700 dark:text-neutral-300"
                    >
                      AutoTrader
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="website_cargurus"
                      name="websites"
                      value="cargurus"
                      className="h-4 w-4 text-primary dark:text-primary rounded border-neutral-300 dark:border-neutral-600 focus:ring-primary dark:focus:ring-primary"
                    />
                    <label
                      htmlFor="website_cargurus"
                      className="text-neutral-700 dark:text-neutral-300"
                    >
                      CarGurus
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="website_cars"
                      name="websites"
                      value="cars"
                      className="h-4 w-4 text-primary dark:text-primary rounded border-neutral-300 dark:border-neutral-600 focus:ring-primary dark:focus:ring-primary"
                    />
                    <label
                      htmlFor="website_cars"
                      className="text-neutral-700 dark:text-neutral-300"
                    >
                      Cars.com
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="website_facebook"
                      name="websites"
                      value="facebook"
                      className="h-4 w-4 text-primary dark:text-primary rounded border-neutral-300 dark:border-neutral-600 focus:ring-primary dark:focus:ring-primary"
                    />
                    <label
                      htmlFor="website_facebook"
                      className="text-neutral-700 dark:text-neutral-300"
                    >
                      Facebook Marketplace
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="website_craigslist"
                      name="websites"
                      value="craigslist"
                      className="h-4 w-4 text-primary dark:text-primary rounded border-neutral-300 dark:border-neutral-600 focus:ring-primary dark:focus:ring-primary"
                    />
                    <label
                      htmlFor="website_craigslist"
                      className="text-neutral-700 dark:text-neutral-300"
                    >
                      Craigslist
                    </label>
                  </div>
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
                    <p className="text-sm text-gray-800">Price: €
36,850</p>
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
                    <p className="text-sm text-gray-800">
                      Ford
                    </p>
                    <p className="text-sm text-gray-800">Price: €22,750</p>
                    <p className="text-sm text-gray-800">Kilometres: 170,000</p>
                    <p className="text-sm text-gray-800">Location: castrop-Rauxel, NW</p>
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
