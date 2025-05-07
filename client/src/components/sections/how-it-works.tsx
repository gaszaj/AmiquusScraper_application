export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Select Websites",
      description: "Choose which car listing websites you want us to monitor for new listings."
    },
    {
      number: 2,
      title: "Set Your Criteria",
      description: "Specify the car details you're looking for: brand, model, year, price range, and more."
    },
    {
      number: 3,
      title: "Connect Telegram",
      description: "Set up our Telegram bot to receive instant notifications when matching cars are found."
    },
    {
      number: 4,
      title: "Get Notified",
      description: "Receive alerts as soon as a car matching your criteria is listed, so you can act quickly."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-title font-bold mb-4">How Amiquus Works</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Our service is designed to be simple and effective, helping you find your ideal car with minimal effort.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-title font-semibold mb-3">{step.title}</h3>
              <p className="text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <img 
            src="https://images.unsplash.com/photo-1560177112-fbfd5fde9566?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
            alt="Person browsing car listings on a mobile device" 
            className="rounded-xl shadow-lg mx-auto" 
          />
        </div>
      </div>
    </section>
  );
}
