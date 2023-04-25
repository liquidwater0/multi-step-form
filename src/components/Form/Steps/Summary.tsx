import { useForm } from "../../../context/FormContext";
import thankYou from "../../../assets/images/icon-thank-you.svg";

export default function Summary() {
    const { done } = useForm();

    return (
        <div className='summary-step'>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming</p>

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
                        <div className="summary">
                            <div>
                                <p>Arcade {"(Monthly)"}</p>
                                <button>Change</button>
                            </div>
                            <div className='price'>
                                <p>$9/mo</p>
                            </div>
                            <hr/>
                            <div>
                                <p>Online service</p>
                                <p>+1/mo</p>
                            </div>
                            <div>
                                <p>Larger storage</p>
                                <p>+2/mo</p>
                            </div>
                        </div>

                        <div className='total'>
                            <p>Total {"(per month)"}</p>
                            <p>+12/mo</p>
                        </div>
                    </>
                )
            }
        </div>
    );
}