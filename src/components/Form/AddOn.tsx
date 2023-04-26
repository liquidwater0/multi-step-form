import { useState } from "react";
import { useForm } from "../../context/FormContext";
import { AddonType } from "./Steps/AddOns";

export default function AddOn({ addon }: { addon: AddonType }) {
    const { name, description, cost } = addon;
    const { formData, setFormData } = useForm();
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div 
            className="add-on"
            onClick={() => {
                setFormData(prevData => {
                    return {
                        ...prevData,
                        addOns: [
                            ...prevData.addOns,
                            { 
                                name: name, 
                                cost: formData.billing === "monthly" ? cost.monthly : cost.yearly
                            }
                        ]
                    };
                });

                setChecked(checkedState => !checkedState);
            }}
        >
            <input 
                type="checkbox"
                defaultChecked={checked}
            />

            <div className='add-on-description'>
                <p>{ name }</p>
                <p>{ description }</p>
            </div>
            <div className="add-on-price">
                <p>
                    {
                        formData.billing === "monthly" ?
                        `$${cost.monthly}/mo` :
                        `$${cost.yearly}/yr`
                    }
                </p>
            </div>
        </div>
    );
}