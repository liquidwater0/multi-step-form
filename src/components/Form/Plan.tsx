import { useState } from "react";
import { useForm } from "../../context/FormContext";
import { PlanType } from "./Steps/SelectPlan";

export default function Plan({ plan }: { plan: PlanType }) {
    const { name, icon, cost } = plan;
    const { formData, setFormData } = useForm();
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div 
            className={`plan ${checked ? "selected" : ""}`}
            onClick={() => {
                setFormData(prevData => {
                    return { 
                        ...prevData, 
                        plan: { 
                            name: name, 
                            cost: formData.billing === "monthly" ? cost.monthly : cost.yearly
                        } 
                    };
                });

                setChecked(checkedState => !checkedState);
            }}
        >
            <img 
                src={icon.src} 
                alt={icon.alt}
                className="icon" 
            />
            <p className="plan-label">{ name }</p>
            <p className="plan-cost">
                {
                    formData.billing === "monthly" ?
                    `$${cost.monthly}/mo` :
                    `$${cost.yearly}/yr`
                }
            </p>
        </div>
    )
}