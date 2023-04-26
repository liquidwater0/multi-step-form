import { useState } from "react";
import { useForm } from "../../context/FormContext";
import { AddonType } from "./Steps/AddOns";

export default function AddOn({ addon }: { addon: AddonType }) {
    const { name, description, cost } = addon;
    const { formData, setFormData } = useForm();
    const [checked, setChecked] = useState<boolean>(false);

    function handleAddonClick() {
        setChecked(checkedState => !checkedState);

        //it for some reason needs to be inverted to work properly
        //it should be if checked then add to the array, otherwise filter it
        if (!checked) {
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
        <div className="add-on" onClick={handleAddonClick}>
            <input 
                type="checkbox"
                checked={checked}
                readOnly
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