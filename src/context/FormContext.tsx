import { 
    useContext, 
    createContext, 
    useState, 
    useEffect, 
    ReactNode, 
    Dispatch, 
    SetStateAction 
} from "react";
import YourInfo from "../components/Form/Steps/YourInfo";
import SelectPlan from "../components/Form/Steps/SelectPlan";
import AddOns from "../components/Form/Steps/AddOns";
import Summary from "../components/Form/Steps/Summary";

type Step = {
    step: number,
    text: string,
    element: ReactNode
}

type FormData = {
    name: string,
    email: string,
    phone: string,
    plan: { 
        name: string, 
        cost: {
            current: number,
            monthly: number,
            yearly: number
        }
    },
    billing: string,
    addOns: { 
        name: string, 
        cost: {
            current: number,
            monthly: number,
            yearly: number
        }
    }[],
    total: number
}

type FormContextType = {
    steps: Step[],
    currentStep: Step,
    done: boolean,
    formData: FormData,
    canProceed: boolean,
    setCanProceed: Dispatch<SetStateAction<boolean>>,
    setFormData: Dispatch<SetStateAction<FormData>>,
    nextStep: () => void,
    prevStep: () => void,
    goToStep: (step: number) => void,
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
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        plan: { 
            name: "", 
            cost: {
                current: 0,
                monthly: 0,
                yearly: 0
            } 
        },
        billing: "monthly",
        addOns: [],
        total: 0
    });
    const [done, setDone] = useState<boolean>(false);
    const [canProceed, setCanProceed] = useState<boolean>(false);

    useEffect(() => {
        setFormData(prevData => {
            return {
                ...prevData,
                plan: {
                    ...prevData.plan,
                    cost: {
                        ...prevData.plan.cost,
                        current: prevData.plan.cost[formData.billing === "monthly" ? "monthly" : "yearly"]
                    }
                },
                addOns: prevData.addOns.map(addon => {
                    return { 
                        ...addon,
                        cost: {
                            ...addon.cost,
                            current: addon.cost[formData.billing === "monthly" ? "monthly" : "yearly"]
                        }
                    }
                })
            };
        });
    }, [formData.billing]);

    function nextStep() {
        if (!canProceed) return;

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

    function goToStep(step: number) {
        setCurrentStep(steps[step - 1]);
    }

    function confirm() {
        setDone(true);
    }

    return (
        <FormContext.Provider value={{ 
            steps, 
            currentStep, 
            done, 
            formData,
            canProceed,
            setCanProceed,
            setFormData, 
            nextStep, 
            prevStep, 
            goToStep, 
            confirm 
        }}>
            { children }
        </FormContext.Provider>
    );
}