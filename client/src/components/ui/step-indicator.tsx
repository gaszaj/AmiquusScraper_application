import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  labels?: string[];
  className?: string;
}

export const StepIndicator = ({
  currentStep,
  totalSteps,
  labels,
  className,
}: StepIndicatorProps) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;
  
  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">
          Step {currentStep + 1} of {totalSteps}
          {labels && labels[currentStep] && `: ${labels[currentStep]}`}
        </span>
        <span className="text-sm font-medium">{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-neutral-200 rounded-full h-2.5">
        <div 
          className="bg-primary-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
