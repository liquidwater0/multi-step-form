import { useForm } from '../../../context/FormContext';
import arcade from "../../../assets/images/icon-arcade.svg";
import advanced from "../../../assets/images/icon-advanced.svg";
import pro from "../../../assets/images/icon-pro.svg";

export default function SelectPlan() {
    const { formData, setFormData } = useForm();

    return (
        <div className='select-plan-step'>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>

            <div>
                <div className="plans">
                    <div 
                        className="plan"
                        onClick={() => {
                            setFormData(prevData => {
                                return { 
                                    ...prevData, 
                                    plan: { 
                                        name: "Arcade", 
                                        cost: formData.billing === "monthly" ? 9 : 90
                                    } 
                                };
                            });
                        }}
                    >
                        <img 
                            src={arcade} 
                            alt="arcade" 
                            className="icon" 
                        />
                        <p className="plan-label">Arcade</p>
                        <p className="plan-cost">
                            { formData.billing === "monthly" ? "$9/mo" : "$90/yr" }
                        </p>
                    </div>
                    <div 
                        className="plan"
                        onClick={() => {
                            setFormData(prevData => {
                                return { 
                                    ...prevData, 
                                    plan: { 
                                        name: "Advanced", 
                                        cost: formData.billing === "monthly" ? 12 : 120
                                    } 
                                };
                            });
                        }}
                    >
                        <img 
                            src={advanced} 
                            alt="advanced" 
                            className="icon" 
                        />
                        <p className="plan-label">Advanced</p>
                        <p className="plan-cost">
                            { formData.billing === "monthly" ? "$12/mo" : "$120/yr" }
                        </p>
                    </div>
                    <div 
                        className="plan"
                        onClick={() => {
                            setFormData(prevData => {
                                return { 
                                    ...prevData, 
                                    plan: { 
                                        name: "Pro", 
                                        cost: formData.billing === "monthly" ? 15 : 150
                                    } 
                                };
                            });
                        }}
                    >
                        <img 
                            src={pro} 
                            alt="pro" 
                            className="icon" 
                        />
                        <p className="plan-label">Pro</p>
                        <p className="plan-cost">
                            { formData.billing === "monthly" ? "$15/mo" : "$150/yr" }
                        </p>
                    </div>

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