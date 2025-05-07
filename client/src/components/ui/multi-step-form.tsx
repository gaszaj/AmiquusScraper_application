import * as React from "react";
import { cn } from "@/lib/utils";
import { StepIndicator } from "./step-indicator";

export interface FormStep {
  id: string;
  title: string;
  description?: string;
  component: React.ReactNode;
}

interface MultiStepFormProps {
  steps: FormStep[];
  currentStep: number;
  onStepChange: (step: number) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting?: boolean;
  submitLabel?: string;
  className?: string;
}

export const MultiStepForm = ({
  steps,
  currentStep,
  onStepChange,
  onSubmit,
  isSubmitting = false,
  submitLabel = "Submit",
  className,
}: MultiStepFormProps) => {
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;
  
  const handlePrevious = () => {
    if (!isFirstStep) {
      onStepChange(currentStep - 1);
    }
  };
  
  const handleNext = () => {
    if (!isLastStep) {
      onStepChange(currentStep + 1);
    }
  };
  
  return (
    <div className={cn("w-full", className)}>
      <StepIndicator 
        currentStep={currentStep} 
        totalSteps={steps.length} 
        labels={steps.map(step => step.title)}
      />
      
      <form onSubmit={onSubmit} className="mt-8">
        {steps.map((step, index) => (
          <div 
            key={step.id} 
            className={cn(
              "transition-opacity duration-300", 
              currentStep === index ? "block opacity-100" : "hidden opacity-0"
            )}
          >
            <div className="mb-6">
              <h3 className="text-xl font-title font-semibold mb-2">{step.title}</h3>
              {step.description && (
                <p className="text-neutral-600">{step.description}</p>
              )}
            </div>
            
            {step.component}
          </div>
        ))}
        
        <div className="flex justify-between mt-8">
          {!isFirstStep && (
            <button 
              type="button" 
              onClick={handlePrevious}
              className="bg-neutral-200 text-neutral-700 px-6 py-2 rounded-lg font-medium hover:bg-neutral-300 transition-colors"
            >
              Previous
            </button>
          )}
          
          {isFirstStep && <div />}
          
          {isLastStep ? (
            <button 
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "bg-primary-600 text-white px-8 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors",
                isSubmitting && "opacity-70 cursor-not-allowed"
              )}
            >
              {isSubmitting ? "Processing..." : submitLabel}
            </button>
          ) : (
            <button 
              type="button" 
              onClick={handleNext}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Next Step
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
