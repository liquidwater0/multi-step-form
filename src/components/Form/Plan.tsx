import { useState } from "react";
import { useForm } from "../../context/FormContext";
import { PlanType } from "./Steps/SelectPlan";

export default function Plan({ plan }: { plan: PlanType }) {
    const { name, icon, cost } = plan;
    const { formData, setFormData } = useForm();
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div 
            className="plan"
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
            <input 
                type="checkbox"
                style={{ position: "absolute", opacity: "0" }}
                checked={checked}
            />

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