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
        <div className='summary-step'>
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
                        <h1>Finishing up</h1>
                        <p>Double-check everything looks OK before confirming</p>

                        <div className="summary">
                            <div>
                                <p>{`${formData.plan.name} (${formData.billing === "monthly" ? "Monthly" : "Yearly"})`}</p>
                                <button onClick={() => goToStep(2)}>
                                    Change
                                </button>
                            </div>
                            <div className='price'>
                                <p>{`$${formData.plan.cost.current}/${formData.billing === "monthly" ? "mo" : "yr"}`}</p>
                            </div>

                            <hr/>

                            {formData.addOns.map(({ name, cost }, index) => 
                                <div key={index}>
                                    <p>{ name }</p>
                                    <p>{`+${cost.current}/${formData.billing === "monthly" ? "mo" : "yr" }`}</p>
                                </div>
                            )}
                        </div>

                        <div className='total'>
                            <p>{`Total (${formData.billing === "monthly" ? "per month" : "per year"})`}</p>
                            <p>{`+${formData.total}/${formData.billing === "monthly" ? "mo" : "yr"}`}</p>
                        </div>
                    </>
                )
            }
        </div>
    );
}