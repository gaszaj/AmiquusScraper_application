interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

export default function FormProgress({ currentStep, totalSteps }: FormProgressProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium">{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-neutral-200 rounded-full h-2.5">
        <div 
          className="bg-primary-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
