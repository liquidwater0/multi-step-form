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
                        cost: {
                            current: formData.billing === "monthly" ? cost.monthly : cost.yearly,
                            monthly: cost.monthly,
                            yearly: cost.yearly
                        }
                    } 
                };
            });
        } else {
            setFormData(prevData => {
                return { 
                    ...prevData, 
                    plan: { 
                        name: "", 
                        cost: {
                            current: 0,
                            monthly: 0,
                            yearly: 0
                        }
                    } 
                };
            });
        }
    }

    return (
        <div 
            className={`plan ${checked ? "selected" : ""}`}
            aria-label={`plan is ${formData.plan.name === name ? "selected" : "not selected"}`}
            onClick={handlePlanSelect}
        >
            <img 
                src={icon.src} 
                alt={icon.alt}
                className="icon" 
            />
            <div>
                <p className="plan-label">{ name }</p>
                <p className="plan-cost">
                    {
                        formData.billing === "monthly" ?
                        `$${cost.monthly}/mo` :
                        `$${cost.yearly}/yr`
                    }
                </p>
            </div>
        </div>
    )
}