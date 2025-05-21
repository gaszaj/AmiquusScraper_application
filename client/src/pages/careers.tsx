import { Helmet } from "react-helmet";

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers | Amiquus - Join Our Team</title>
        <meta name="description" content="Join the Amiquus team and help revolutionize how people find their perfect used car. View our current job openings and apply today." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Join Our Team</h1>
        <p className="text-lg text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl mx-auto">
          Help us build the future of car buying by connecting people with their perfect vehicles through cutting-edge technology
        </p>
        
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Why Work at Amiquus?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-primary/10 dark:bg-[#ff0]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary dark:text-[#ff0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Flexible Schedule</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Work when you're most productive with our flexible working hours policy</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-primary/10 dark:bg-[#ff0]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary dark:text-[#ff0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Remote First</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Join our global team and work from anywhere in the world</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-primary/10 dark:bg-[#ff0]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary dark:text-[#ff0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Fast Growth</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Be part of a rapidly growing startup with plenty of advancement opportunities</p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
        
        <div className="space-y-6 mb-12">
          <div className="border dark:border-neutral-700 rounded-lg p-6 hover:shadow-md dark:hover:shadow-neutral-800 transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">Full-Stack Developer</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-2">Remote · Full-time</p>
                <p className="text-sm">Posted on May 15, 2025</p>
              </div>
              <button className="whitespace-nowrap px-6 py-2 bg-primary dark:bg-[#ff0] text-white dark:text-black rounded-md font-medium hover:opacity-90 transition-opacity">
                Apply Now
              </button>
            </div>
          </div>
          
          <div className="border dark:border-neutral-700 rounded-lg p-6 hover:shadow-md dark:hover:shadow-neutral-800 transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">Data Engineer</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-2">Remote · Full-time</p>
                <p className="text-sm">Posted on May 10, 2025</p>
              </div>
              <button className="whitespace-nowrap px-6 py-2 bg-primary dark:bg-[#ff0] text-white dark:text-black rounded-md font-medium hover:opacity-90 transition-opacity">
                Apply Now
              </button>
            </div>
          </div>
          
          <div className="border dark:border-neutral-700 rounded-lg p-6 hover:shadow-md dark:hover:shadow-neutral-800 transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">Customer Success Manager</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-2">Remote · Full-time</p>
                <p className="text-sm">Posted on May 8, 2025</p>
              </div>
              <button className="whitespace-nowrap px-6 py-2 bg-primary dark:bg-[#ff0] text-white dark:text-black rounded-md font-medium hover:opacity-90 transition-opacity">
                Apply Now
              </button>
            </div>
          </div>
          
          <div className="border dark:border-neutral-700 rounded-lg p-6 hover:shadow-md dark:hover:shadow-neutral-800 transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">UX/UI Designer</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-2">Remote · Part-time</p>
                <p className="text-sm">Posted on May 5, 2025</p>
              </div>
              <button className="whitespace-nowrap px-6 py-2 bg-primary dark:bg-[#ff0] text-white dark:text-black rounded-md font-medium hover:opacity-90 transition-opacity">
                Apply Now
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Don't see a matching position?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute to Amiquus.
          </p>
          <button className="px-6 py-3 bg-neutral-800 dark:bg-white text-white dark:text-black rounded-md font-medium hover:opacity-90 transition-opacity">
            Send Open Application
          </button>
        </div>
      </div>
    </>
  );
}