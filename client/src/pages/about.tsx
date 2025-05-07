import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-title font-bold mb-6">About Amiquus</h1>
              <p className="text-xl text-neutral-600 mb-8">
                We're on a mission to simplify the way people find and purchase used cars by providing real-time notifications for new listings.
              </p>
            </div>
          </div>
        </section>

        {/* Our story */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-title font-bold mb-4">Our Story</h2>
                <p className="text-neutral-600 mb-4">
                  Amiquus was born from a personal frustration experienced by our founder while searching for a specific used car model. After spending weeks manually checking multiple websites several times a day, he missed out on a perfect car because someone else saw the listing first.
                </p>
                <p className="text-neutral-600 mb-4">
                  This frustration led to the creation of Amiquus in 2023 - a platform that automates the monitoring of car listings across multiple websites and sends instant notifications when your dream car is listed.
                </p>
                <p className="text-neutral-600">
                  Today, Amiquus helps thousands of car buyers save time and never miss out on their ideal vehicle. Our service has expanded to support multiple websites, languages, and notification frequencies to meet the diverse needs of our users.
                </p>
              </div>
              <div className="order-first md:order-last">
                <img 
                  src="https://images.unsplash.com/photo-1517994112540-009c47ea476b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                  alt="Car dealership with satisfied customer" 
                  className="rounded-lg shadow-md w-full" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-title font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h3 className="text-xl font-title font-semibold mb-3">Excellence</h3>
                <p className="text-neutral-600">
                  We strive for excellence in every aspect of our service, from the accuracy of our notifications to the user experience of our platform.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-title font-semibold mb-3">Trust</h3>
                <p className="text-neutral-600">
                  We build trust through reliability, transparency, and data privacy, ensuring our users can depend on our service for their car search.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-title font-semibold mb-3">Innovation</h3>
                <p className="text-neutral-600">
                  We continuously improve our technology to provide the most effective and user-friendly car monitoring service possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-title font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" 
                  alt="John Smith" 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4" 
                />
                <h3 className="text-xl font-title font-semibold">John Smith</h3>
                <p className="text-primary-600 mb-2">Founder & CEO</p>
                <p className="text-neutral-600 text-sm max-w-xs mx-auto">
                  Former automotive industry executive with a passion for technology and improving the car buying experience.
                </p>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" 
                  alt="Sarah Johnson" 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4" 
                />
                <h3 className="text-xl font-title font-semibold">Sarah Johnson</h3>
                <p className="text-primary-600 mb-2">CTO</p>
                <p className="text-neutral-600 text-sm max-w-xs mx-auto">
                  Software engineer with extensive experience in web scraping and notification systems.
                </p>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" 
                  alt="Michael Chen" 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4" 
                />
                <h3 className="text-xl font-title font-semibold">Michael Chen</h3>
                <p className="text-primary-600 mb-2">Head of Customer Success</p>
                <p className="text-neutral-600 text-sm max-w-xs mx-auto">
                  Customer service expert dedicated to ensuring our users have the best possible experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-primary-600 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-title font-bold mb-4">Ready to Find Your Dream Car?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied users who have found their perfect car with Amiquus. 
              Set up your alerts today and never miss a great deal again.
            </p>
            <Link href="/signup">
              <Button className="bg-white text-primary-600 hover:bg-neutral-100 px-8 py-6" size="lg">
                Get Started Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
