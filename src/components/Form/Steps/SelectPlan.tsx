import { useState, useEffect } from 'react';
import { useForm } from '../../../context/FormContext';
import arcade from "../../../assets/images/icon-arcade.svg";
import advanced from "../../../assets/images/icon-advanced.svg";
import pro from "../../../assets/images/icon-pro.svg";
import Plan from '../Plan';
import Slider from '../Slider';

export type PlanType = {
    name: string,
    icon: { src: string, alt: string },
    cost: { monthly: number, yearly: number }
}

export default function SelectPlan() {
    const { formData, setFormData, setCanProceed } = useForm();
    const [plans] = useState<PlanType[]>([
        {
            name: "Arcade",
            icon: { src: arcade, alt: "arcade" },
            cost: {
                monthly: 9,
                yearly: 90
            }
        }, {
            name: "Advanced",
            icon: { src: advanced, alt: "advanced" },
            cost: {
                monthly: 12,
                yearly: 120
            }
        }, {
            name: "Pro",
            icon: { src: pro, alt: "pro" },
            cost: {
                monthly: 15,
                yearly: 150
            }
        }
    ]);

    useEffect(() => {
        if (formData.plan.name === "") {
            setCanProceed(false);
        } else {
            setCanProceed(true);
        }
    }, [formData.plan]);

    return (
        <div className='step select-plan-step'>
            <h1 className="step-title">Select your plan</h1>
            <p className="subtitle">You have the option of monthly or yearly billing.</p>

            <div className='step-container'>
                <div className="plans-container">
                    {plans.map(plan => 
                        <Plan 
                            key={plan.name}
                            plan={plan}
                        />
                    )}
                </div>
                <div className="billing-container">
                    <label 
                        className={formData.billing === "monthly" ? "active" : ""}
                        htmlFor="billing-toggle"
                    >
                        Monthly
                    </label>
                    <div className="billing-toggle-container">
                        <Slider
                            id="billing-toggle"
                            aria-label={`billing toggle. billing is set to ${formData.billing}`}
                            checked={formData.billing === "monthly"}
                            onChange={() => {
                                setFormData(prevData => {
                                    return { 
                                        ...prevData, 
                                        billing: prevData.billing === "monthly" ? "yearly" : "monthly"
                                    };
                                });
                            }}
                        />
                    </div>
                    <label 
                        className={formData.billing === "yearly" ? "active" : ""}
                        htmlFor="billing-toggle"
                    >
                        Yearly
                    </label>
                </div>
            </div>
        </div>
    );
}