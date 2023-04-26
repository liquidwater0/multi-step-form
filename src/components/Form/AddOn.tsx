import { useState } from "react";
import { useForm } from "../../context/FormContext";
import { AddonType } from "./Steps/AddOns";
import Checkbox from "./Checkbox";

export default function AddOn({ addon }: { addon: AddonType }) {
    const { name, description, cost } = addon;
    const { formData, setFormData } = useForm();
    const [checked, setChecked] = useState<boolean>(() => {
        const currentAddon = formData.addOns.find(a => a.name === name);
        if (currentAddon) return true;
        return false;
    });

    function handleAddonClick() {
        setChecked(checkedState => !checkedState);

        if (!checked) {
            setFormData(prevData => {
                return {
                    ...prevData,
                    addOns: [
                        ...prevData.addOns,
                        { 
                            name: name, 
                            cost: {
                                current: formData.billing === "monthly" ? cost.monthly : cost.yearly,
                                monthly: cost.monthly,
                                yearly: cost.yearly
                            }
                        }
                    ]
                };
            });
        } else {
            setFormData(prevData => {
                return {
                    ...prevData,
                    addOns: prevData.addOns.filter(a => a.name !== name)
                };
            });
        }
    }

    return (
        <div 
            className={`add-on ${checked ? "selected" : ""}`}
            onClick={handleAddonClick}
        >
            <Checkbox checked={checked}/>
            
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