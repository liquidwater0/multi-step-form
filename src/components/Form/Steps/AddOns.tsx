import { useState, useEffect } from 'react';
import { useForm } from '../../../context/FormContext';

export default function AddOns() {
    const [addOns, setAddOns] = useState<Map<string, boolean>>(new Map([
        ["onlineService", false],
        ["largerStorage", false],
        ["customizableProfile", false]
    ]));
    const { formData, setFormData } = useForm();

    return (
        <div className='add-ons-step'>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>

            <div className='add-ons-container'>
                <div 
                    className="add-on"
                    onClick={() => {
                        setFormData(prevData => {
                            return {
                                ...prevData,
                                addOns: [
                                    ...prevData.addOns,
                                    { 
                                        name: "Online service", 
                                        cost: formData.billing === "monthly" ? 1 : 10
                                    }
                                ]
                            };
                        });

                        setAddOns(prevAddOns => {
                            const addonsCopy = new Map(prevAddOns);
                            const id = "onlineService";
                            addonsCopy.set(id, !addonsCopy.get(id))
                            return addonsCopy;
                        });
                    }}
                >
                    <input 
                        type="checkbox"
                        defaultChecked={addOns.get("onlineService")}
                    />

                    <div className='add-on-description'>
                        <p>Online service</p>
                        <p>Access to multiplayer games</p>
                    </div>
                    <div className="add-on-price">
                        <p>{ formData.billing === "monthly" ? "+1/mo" : "+10/yr" }</p>
                    </div>
                </div>
                <div 
                    className="add-on"
                    onClick={() => {
                        setFormData(prevData => {
                            return {
                                ...prevData,
                                addOns: [
                                    ...prevData.addOns,
                                    { 
                                        name: "Larger storage", 
                                        cost: formData.billing === "monthly" ? 2 : 20
                                    }
                                ]
                            };
                        });

                        setAddOns(prevAddOns => {
                            const addonsCopy = new Map(prevAddOns);
                            const id = "largerStorage";
                            addonsCopy.set(id, !addonsCopy.get(id))
                            return addonsCopy;
                        });
                    }}
                >
                    <input 
                        type="checkbox"
                        defaultChecked={addOns.get("largerStorage")}
                    />

                    <div className='add-on-description'>
                        <p>Larger storage</p>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                    <div className="add-on-price">
                        <p>{ formData.billing === "monthly" ? "+2/mo" : "+20/yr" }</p>
                    </div>
                </div>
                <div 
                    className="add-on"
                    onClick={() => {
                        setFormData(prevData => {
                            return {
                                ...prevData,
                                addOns: [
                                    ...prevData.addOns,
                                    { 
                                        name: "Customizable profile", 
                                        cost: formData.billing === "monthly" ? 2 : 20
                                    }
                                ]
                            };
                        });

                        setAddOns(prevAddOns => {
                            const addonsCopy = new Map(prevAddOns);
                            const id = "customizableProfile";
                            addonsCopy.set(id, !addonsCopy.get(id))
                            return addonsCopy;
                        });
                    }}
                >
                    <input 
                        type="checkbox"
                        defaultChecked={addOns.get("customizableProfile")}
                    />

                    <div className='add-on-description'>
                        <p>Customizable profile</p>
                        <p>Custom theme on your profile</p>
                    </div>
                    <div className="add-on-price">
                        <p>{ formData.billing === "monthly" ? "+2/mo" : "+20/yr" }</p>
                    </div>
                </div>
            </div>
        </div>
    );
}