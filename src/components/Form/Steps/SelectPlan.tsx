import { useState } from 'react';
import arcade from "../../../assets/images/icon-arcade.svg";
import advanced from "../../../assets/images/icon-advanced.svg";
import pro from "../../../assets/images/icon-pro.svg";

export default function SelectPlan() {
    const [billing, setBilling] = useState<string>("monthly");

    function handleBillingToggle() {
        setBilling(prevBilling => prevBilling === "monthly" ? "yearly" : "monthly");
    }

    return (
        <div className='select-plan-step'>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>

            <div>
                <div className="plans">
                    <div className="plan">
                        <img 
                            src={arcade} 
                            alt="arcade" 
                            className="icon" 
                        />
                        <p className="plan-label">Arcade</p>
                        <p className="plan-cost">
                            { billing === "monthly" ? "$9/mo" : "$90/yr" }
                        </p>
                    </div>
                    <div className="plan">
                        <img 
                            src={advanced} 
                            alt="advanced" 
                            className="icon" 
                        />
                        <p className="plan-label">Advanced</p>
                        <p className="plan-cost">
                            { billing === "monthly" ? "$12/mo" : "$120/yr" }
                        </p>
                    </div>
                    <div className="plan">
                        <img 
                            src={pro} 
                            alt="pro" 
                            className="icon" 
                        />
                        <p className="plan-label">Pro</p>
                        <p className="plan-cost">
                            { billing === "monthly" ? "$15/mo" : "$150/yr" }
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
                                defaultChecked={billing === "monthly"}
                                onChange={handleBillingToggle}
                            />
                        </div>
                        <label htmlFor="billing-toggle">Yearly</label>
                    </div>
                </div>
            </div>
        </div>
    );
}