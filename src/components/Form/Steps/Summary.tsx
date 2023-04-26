import { useEffect } from "react";
import { useForm } from "../../../context/FormContext";
import thankYou from "../../../assets/images/icon-thank-you.svg";

export default function Summary() {
    const { done, goToStep, formData, setFormData } = useForm();

    useEffect(() => {
        setFormData(prevData => {
            return {
                ...prevData,
                total:  [...formData.addOns, formData.plan].reduce((prev, current) => {
                    return prev + current.cost.current;
                }, 0)
            };
        });
    }, []);

    return (
        <div className='step summary-step'>
            {
                done ? (
                    <div className="finished">
                        <img 
                            src={thankYou}
                            alt="thank you icon" 
                            className="icon" 
                        />
                        <h2>Thank you!</h2>
                        <p>
                            Thanks for comfirming your subscription! We hope you have fun using our platform. If you ever need support,
                            please feel free to email us at support@loremgaming.com.
                        </p>
                    </div>
                ) : (
                    <>
                        <h1 className="step-title">Finishing up</h1>
                        <p className="subtitle">Double-check everything looks OK before confirming</p>

                        <div className="step-container">
                            <div className="summary-container">
                                <div className="plan-summary">
                                    <div>
                                        <p>{`${formData.plan.name} (${formData.billing === "monthly" ? "Monthly" : "Yearly"})`}</p>
                                        <button 
                                            className="change-plan-button"
                                            onClick={() => goToStep(2)} 
                                        >
                                            Change
                                        </button>
                                    </div>
                                    <div className='price'>
                                        <p>{`$${formData.plan.cost.current}/${formData.billing === "monthly" ? "mo" : "yr"}`}</p>
                                    </div>
                                </div>

                                <div className="divider"/>

                                <div className="addons-summary">
                                    {formData.addOns.map(({ name, cost }, index) => 
                                        <div key={index} className="addon">
                                            <p className="addon-name">{ name }</p>
                                            <p className="addon-price">{`+${cost.current}/${formData.billing === "monthly" ? "mo" : "yr" }`}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className='total'>
                                <p>{`Total (${formData.billing === "monthly" ? "per month" : "per year"})`}</p>
                                <p className="total-cost-text">{`+${formData.total}/${formData.billing === "monthly" ? "mo" : "yr"}`}</p>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
}