import { useState } from 'react';
import { useForm } from '../../../context/FormContext';
import arcade from "../../../assets/images/icon-arcade.svg";
import advanced from "../../../assets/images/icon-advanced.svg";
import pro from "../../../assets/images/icon-pro.svg";
import Plan from '../Plan';

export type PlanType = {
    name: string,
    icon: { src: string, alt: string },
    cost: { monthly: number, yearly: number }
}

export default function SelectPlan() {
    const { formData, setFormData } = useForm();
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

    return (
        <div className='select-plan-step'>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>

            <div>
                <div className="plans">
                    {plans.map(plan => 
                        <Plan 
                            key={plan.name}
                            plan={plan}
                        />
                    )}

                    <div className="billing-container">
                        <label htmlFor="billing-toggle">Monthly</label>
                        <div className="billing-toggle-container">
                            <input 
                                type="checkbox" 
                                name="billing-toggle" 
                                id="billing-toggle" 
                                className='billing-toggle'
                                defaultChecked={formData.billing === "monthly"}
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
                        <label htmlFor="billing-toggle">Yearly</label>
                    </div>
                </div>
            </div>
        </div>
    );
}