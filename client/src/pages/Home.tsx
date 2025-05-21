import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import Pricing from "@/components/home/Pricing";
import LimitedAvailability from "@/components/home/LimitedAvailability";
import FAQ from "@/components/home/FAQ";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Amiquus - Track Used Car Listings Across Multiple Websites</title>
        <meta 
          name="description" 
          content="Amiquus helps you find the perfect car by monitoring multiple used car websites and instantly notifying you when your dream car is listed." 
        />
        <meta property="og:title" content="Amiquus - Never Miss Your Perfect Car Deal" />
        <meta property="og:description" content="Track car listings across multiple sites and get instant notifications when your dream car appears." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <LimitedAvailability />
      </div>
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
    </>
  );
}
