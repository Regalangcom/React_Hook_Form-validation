  import { ReactElement, useState } from "react";

  export function useMultiStepForm(steps: ReactElement[]) {
    const [currentStep, setCurrentStep] = useState(0);

    function Next() {
      setCurrentStep(i => (i + 1) % steps.length);
    }
    

    function Back() {
      setCurrentStep(i => {
        if (i <= 0  ) return i 
        return i - 1
      })
    }

    function goTo(index: number) {
      setCurrentStep(index);
    }

    return {
      currentStep,
      step: steps[currentStep],
      isFirstStep : currentStep === 0, 
      isLastStep : currentStep === steps.length - 1,
      steps,
      goTo,
      Next,
      Back
    };
  }
