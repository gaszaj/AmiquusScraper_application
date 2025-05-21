import { Helmet } from "react-helmet";
import { Link } from "wouter";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Amiquus - Car Listing Monitoring Service</title>
        <meta name="description" content="Learn about Amiquus, our mission to revolutionize used car shopping, and the team behind our intelligent car listing monitoring service." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About Amiquus</h1>
        <p className="text-lg text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl mx-auto">
          We're revolutionizing how people find their perfect used car by bringing advanced monitoring technology to everyone
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Amiquus began in 2023 when our founder, Alex, spent months refreshing car listing websites trying to find a specific rare model at a good price. After missing several opportunities due to delayed notifications, he realized there had to be a better way.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Working with a small team of developers and car enthusiasts, Alex built a monitoring system that could track listings across multiple sites simultaneously and send instant notifications when matches appeared.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              What started as a personal project quickly gained interest from friends and family, and by early 2025, Amiquus was born as a service available to everyone. Today, we help car buyers across the country save time and find better deals with our intelligent monitoring technology.
            </p>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg h-80 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary/10 dark:bg-[#ff0]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary dark:text-[#ff0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <p className="text-xl font-medium">Image Placeholder</p>
              <p className="text-neutral-600 dark:text-neutral-400 mt-2">Our company timeline illustration will appear here</p>
            </div>
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md dark:shadow-neutral-900 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 dark:bg-[#ff0]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary dark:text-[#ff0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Save Time</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Eliminate the need to constantly refresh multiple websites by automating the search process and receiving timely notifications.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md dark:shadow-neutral-900 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 dark:bg-[#ff0]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary dark:text-[#ff0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Find Better Deals</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Be the first to know when a great deal appears, giving you the advantage in a competitive market where timing is everything.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md dark:shadow-neutral-900 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 dark:bg-[#ff0]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary dark:text-[#ff0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Buy Confidently</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Make informed decisions with comprehensive monitoring across multiple trusted car listing platforms.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md dark:shadow-neutral-900 flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-neutral-200 dark:bg-neutral-700 rounded-full mb-4 overflow-hidden flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-neutral-400 dark:text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-1">Alex Morgan</h3>
              <p className="text-neutral-500 dark:text-neutral-400 mb-3">Founder & CEO</p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Former software engineer with a passion for cars and building innovative solutions.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md dark:shadow-neutral-900 flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-neutral-200 dark:bg-neutral-700 rounded-full mb-4 overflow-hidden flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-neutral-400 dark:text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-1">Sarah Chen</h3>
              <p className="text-neutral-500 dark:text-neutral-400 mb-3">CTO</p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Data science expert specializing in web scraping and information retrieval systems.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md dark:shadow-neutral-900 flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-neutral-200 dark:bg-neutral-700 rounded-full mb-4 overflow-hidden flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-neutral-400 dark:text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-1">Marcus Lee</h3>
              <p className="text-neutral-500 dark:text-neutral-400 mb-3">Lead Developer</p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Full-stack engineer with expertise in building high-performance notification systems.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md dark:shadow-neutral-900 flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-neutral-200 dark:bg-neutral-700 rounded-full mb-4 overflow-hidden flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-neutral-400 dark:text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-1">Elena Rodriguez</h3>
              <p className="text-neutral-500 dark:text-neutral-400 mb-3">Customer Success</p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Former car sales professional dedicated to helping customers find their perfect vehicle.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-8 text-center mb-12">
          <h2 className="text-3xl font-semibold mb-6">Join Our Team</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about technology and revolutionizing the car buying experience. Check out our current openings and join us on our mission.
          </p>
          <Link href="/careers">
            <a className="px-6 py-3 bg-primary dark:bg-[#ff0] text-white dark:text-black rounded-md font-medium hover:opacity-90 transition-opacity inline-block">
              View Open Positions
            </a>
          </Link>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Have Questions?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            Learn more about how our service works, view pricing options, or get in touch with our support team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/faq">
              <a className="px-5 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
                Visit FAQ
              </a>
            </Link>
            <Link href="/#pricing">
              <a className="px-5 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
                View Pricing
              </a>
            </Link>
            <Link href="/support">
              <a className="px-5 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
                Contact Support
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}