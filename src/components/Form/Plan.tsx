import { useState, useEffect } from "react";
import { useForm } from "../../context/FormContext";
import { PlanType } from "./Steps/SelectPlan";

export default function Plan({ plan }: { plan: PlanType }) {
    const { name, icon, cost } = plan;
    const { formData, setFormData } = useForm();
    const [checked, setChecked] = useState<boolean>();

    useEffect(() => {
        setChecked(() => {
            const currentPlanSelected = formData.plan.name === name;
            if (currentPlanSelected) return true;
            return false;
        });
    }, [formData]);

    function handlePlanSelect() {
        if (!checked) {
            setFormData(prevData => {
                return { 
                    ...prevData, 
                    plan: { 
                        name: name, 
                        cost: formData.billing === "monthly" ? cost.monthly : cost.yearly
                    } 
                };
            });
        } else {
            setFormData(prevData => {
                return { 
                    ...prevData, 
                    plan: { 
                        name: "", 
                        cost: 0
                    } 
                };
            });
        }
    }

    return (
        <div 
            className={`plan ${checked ? "selected" : ""}`}
            onClick={handlePlanSelect}
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