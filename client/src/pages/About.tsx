import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Amiquus - Car Listing Alerts</title>
        <meta 
          name="description" 
          content="Learn about Amiquus, our mission, and how we help users track used car listings across multiple websites to find the perfect vehicle." 
        />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-title font-bold mb-4">About Amiquus</h1>
            <p className="text-xl text-neutral-600">Our mission is to help you find the perfect car without the constant search</p>
          </div>
          
          <div className="grid gap-12">
            <section>
              <h2 className="text-2xl font-title font-semibold mb-4">Our Story</h2>
              <p className="text-neutral-700 mb-4">
                Amiquus was founded in 2023 by a team of automotive enthusiasts and technology experts who understood the frustration of constantly checking multiple websites to find the perfect used car. We recognized that the process of hunting for specific vehicles was time-consuming and often led to missed opportunities when great listings appeared.
              </p>
              <p className="text-neutral-700 mb-4">
                Our solution was to create a platform that automates this process, allowing users to set up custom alerts across multiple car listing websites and receive instant notifications when their dream car becomes available. By leveraging technology to solve this common problem, we've helped thousands of users save time and find their ideal vehicles.
              </p>
              <p className="text-neutral-700">
                Today, Amiquus continues to innovate in the automotive space, constantly adding new features and expanding our coverage to ensure our users never miss out on their perfect car deal.
              </p>
            </section>
            
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-title font-semibold mb-4">Our Mission</h2>
                  <p className="text-neutral-700">
                    At Amiquus, our mission is to transform the used car buying experience by providing timely, relevant information that empowers buyers to make informed decisions. We believe everyone deserves access to the perfect vehicle at the right price, without spending countless hours searching.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-title font-semibold mb-4">Our Vision</h2>
                  <p className="text-neutral-700">
                    We envision a future where finding your ideal vehicle is effortless and efficient. By continuously improving our platform and expanding our services, we aim to become the global standard for vehicle search automation, saving our users time while helping them discover the perfect cars for their needs.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-title font-semibold mb-6">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-neutral-200 mx-auto mb-4 overflow-hidden">
                        <svg className="h-full w-full text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold">John Doe</h3>
                      <p className="text-neutral-600">Founder & CEO</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-neutral-200 mx-auto mb-4 overflow-hidden">
                        <svg className="h-full w-full text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold">Jane Smith</h3>
                      <p className="text-neutral-600">CTO</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-neutral-200 mx-auto mb-4 overflow-hidden">
                        <svg className="h-full w-full text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold">David Johnson</h3>
                      <p className="text-neutral-600">Head of Operations</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-title font-semibold mb-4">Our Approach</h2>
              <p className="text-neutral-700 mb-4">
                Amiquus is built on three core principles that guide everything we do:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-neutral-50 p-6 rounded-xl">
                  <h3 className="text-xl font-medium mb-2">User-Focused</h3>
                  <p className="text-neutral-600">We design every feature with our users in mind, ensuring our platform is intuitive, efficient, and solves real problems in the car buying process.</p>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-xl">
                  <h3 className="text-xl font-medium mb-2">Innovation</h3>
                  <p className="text-neutral-600">We constantly explore new technologies and approaches to improve our service and provide more value to our users.</p>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-xl">
                  <h3 className="text-xl font-medium mb-2">Transparency</h3>
                  <p className="text-neutral-600">We believe in clear, honest communication with our users about our services, pricing, and data practices.</p>
                </div>
              </div>
            </section>
            
            <section>
              <div className="bg-primary-50 p-8 rounded-xl">
                <h2 className="text-2xl font-title font-semibold mb-4 text-primary-900">Join Us on Our Journey</h2>
                <p className="text-primary-800 mb-6">
                  We're excited to help you find your perfect car without the hassle of constant searching. Start your journey with Amiquus today and experience a smarter way to shop for used cars.
                </p>
                <div className="flex justify-center">
                  <a href="/service" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-block">Get Started Now</a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
