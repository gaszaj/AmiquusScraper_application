import { Helmet } from "react-helmet";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Amiquus - Car Listing Monitoring Service</title>
        <meta name="description" content="Stay updated with the latest car market trends, tips for buying used cars, and how to get the best deals using Amiquus monitoring services." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog posts */}
          <div className="rounded-lg overflow-hidden shadow-md dark:shadow-neutral-800 transition-all hover:shadow-lg dark:bg-neutral-800">
            <div className="aspect-video bg-neutral-200 dark:bg-neutral-700"></div>
            <div className="p-6">
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">May 18, 2025</p>
              <h3 className="text-xl font-semibold mb-2">How to Identify Underpriced Cars in the Used Market</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">Learn the key indicators that suggest a used car might be underpriced and how to spot great deals before others.</p>
              <button className="text-primary dark:text-[#ff0] font-medium hover:underline">Read More →</button>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md dark:shadow-neutral-800 transition-all hover:shadow-lg dark:bg-neutral-800">
            <div className="aspect-video bg-neutral-200 dark:bg-neutral-700"></div>
            <div className="p-6">
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">May 12, 2025</p>
              <h3 className="text-xl font-semibold mb-2">The Best Time to Buy a Used Car: Seasonal Analysis</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">Our data reveals the optimal months for purchasing different types of vehicles to maximize your savings.</p>
              <button className="text-primary dark:text-[#ff0] font-medium hover:underline">Read More →</button>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md dark:shadow-neutral-800 transition-all hover:shadow-lg dark:bg-neutral-800">
            <div className="aspect-video bg-neutral-200 dark:bg-neutral-700"></div>
            <div className="p-6">
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">May 5, 2025</p>
              <h3 className="text-xl font-semibold mb-2">Setting Up Telegram Notifications for Car Listings</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">A step-by-step guide to configuring your Amiquus account to receive instant notifications when your dream car is listed.</p>
              <button className="text-primary dark:text-[#ff0] font-medium hover:underline">Read More →</button>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md dark:shadow-neutral-800 transition-all hover:shadow-lg dark:bg-neutral-800">
            <div className="aspect-video bg-neutral-200 dark:bg-neutral-700"></div>
            <div className="p-6">
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">April 28, 2025</p>
              <h3 className="text-xl font-semibold mb-2">Most Popular Car Models in Each Price Range</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">We analyzed thousands of listings to determine which models offer the best value in different budget categories.</p>
              <button className="text-primary dark:text-[#ff0] font-medium hover:underline">Read More →</button>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md dark:shadow-neutral-800 transition-all hover:shadow-lg dark:bg-neutral-800">
            <div className="aspect-video bg-neutral-200 dark:bg-neutral-700"></div>
            <div className="p-6">
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">April 21, 2025</p>
              <h3 className="text-xl font-semibold mb-2">Red Flags to Watch for in Used Car Listings</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">Protect yourself from potential scams and problematic vehicles by identifying these warning signs in online listings.</p>
              <button className="text-primary dark:text-[#ff0] font-medium hover:underline">Read More →</button>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md dark:shadow-neutral-800 transition-all hover:shadow-lg dark:bg-neutral-800">
            <div className="aspect-video bg-neutral-200 dark:bg-neutral-700"></div>
            <div className="p-6">
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">April 14, 2025</p>
              <h3 className="text-xl font-semibold mb-2">Electric vs. Hybrid: The Used Car Buyer's Guide</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">Compare depreciation rates, maintenance costs, and long-term value between electric and hybrid vehicles in the second-hand market.</p>
              <button className="text-primary dark:text-[#ff0] font-medium hover:underline">Read More →</button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <button className="px-6 py-3 bg-primary dark:bg-[#ff0] text-white dark:text-black rounded-md font-medium hover:opacity-90 transition-opacity">Load More Articles</button>
        </div>
      </div>
    </>
  );
}