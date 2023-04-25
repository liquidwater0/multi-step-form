import { useContext, createContext, useState, ReactNode } from "react";
import YourInfo from "../components/Form/Steps/YourInfo";
import SelectPlan from "../components/Form/Steps/SelectPlan";
import AddOns from "../components/Form/Steps/AddOns";
import Summary from "../components/Form/Steps/Summary";

type Step = {
    step: number,
    text: string,
    element: ReactNode
}

type FormContextType = {
    steps: Step[],
    currentStep: Step,
    done: boolean,
    nextStep: () => void,
    prevStep: () => void,
    confirm: () => void
}

const FormContext = createContext<FormContextType>(null!);

export function useForm() {
    return useContext(FormContext);
}

export default function FormProvider({ children }: { children: ReactNode }) {
    const [steps] = useState<Step[]>([
        { step: 1, text: "Your Info", element: <YourInfo/> },
        { step: 2, text: "Select Plan", element: <SelectPlan/> },
        { step: 3, text: "Add-Ons", element: <AddOns/> },
        { step: 4, text: "Summary", element: <Summary/> }
    ]);
    const [currentStep, setCurrentStep] = useState<Step>(steps[0]);
    const [done, setDone] = useState<boolean>(false);

    function nextStep() {
        setCurrentStep(prevStep => {
            if (prevStep.step === steps.length) return prevStep;

            const current = steps.find(({ step }) => step === prevStep.step);
            if (!current) return prevStep;
            const currentStepIndex = steps.indexOf(current);

            return steps[currentStepIndex + 1];
        });
    }

    function prevStep() {
        setCurrentStep(prevStep => {
            if (prevStep.step === 1) return prevStep;

            const current = steps.find(({ step }) => step === prevStep.step);
            if (!current) return prevStep;
            const currentStepIndex = steps.indexOf(current);

            return steps[currentStepIndex - 1];
        });
    }

    function confirm() {
        setDone(true);
    }

    return (
        <FormContext.Provider value={{ steps, currentStep, done, nextStep, prevStep, confirm }}>
            { children }
        </FormContext.Provider>
    );
}