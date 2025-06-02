interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

export default function FormProgress({ currentStep, totalSteps }: FormProgressProps) {
  const steps = [];
  
  for (let i = 1; i <= totalSteps; i++) {
    const status = i < currentStep ? "completed" : i === currentStep ? "active" : "inactive";
    steps.push({ step: i, status });
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.step} className="flex flex-col items-center">
            <div
              className={`rounded-full flex items-center justify-center w-10 h-10 text-sm font-medium border-2 
                ${step.status === "completed" 
                  ? "bg-primary-600 text-black dark:text-white border-primary-600" 
                  : step.status === "active" 
                    ? "border-primary-600 text-primary-600" 
                    : "border-gray-300 text-gray-400"
                }`}
            >
              {step.status === "completed" ? (
                <svg className="w-5 h-5" fill="none" stroke={`${step.status === "completed" ? "currentColor" : "currentColor"}`}
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                step.step
              )}
            </div>
            
            {/* Step connector line */}
            {index < steps.length - 1 && (
              <div className="hidden sm:block absolute h-0.5 w-full max-w-[10rem] top-5 -translate-y-1/2 left-0">
                <div
                  className={`h-0.5 ${
                    steps[index + 1].status === "completed" || steps[index + 1].status === "active"
                      ? "bg-primary-600"
                      : "bg-gray-300"
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Progress bar for mobile */}
      <div className="mt-4 sm:hidden">
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-600 transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}