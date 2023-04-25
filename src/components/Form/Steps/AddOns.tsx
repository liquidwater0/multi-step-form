import { useState } from 'react';

export default function AddOns() {
    const [addOns, setAddOns] = useState<Map<string, boolean>>(new Map([
        ["onlineService", false],
        ["largerStorage", false],
        ["customizableProfile", false]
    ]));

    return (
        <div className='add-ons-step'>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>

            <div className='add-ons-container'>
                <div className="add-on">
                    <input 
                        type="checkbox"
                        defaultChecked={addOns.get("onlineService")}
                        onChange={() => {
                            setAddOns(prevAddOns => {
                                const addonsCopy = new Map(prevAddOns);
                                const id = "onlineService";
                                addonsCopy.set(id, !addonsCopy.get(id))
                                return addonsCopy;
                            });
                        }}
                    />

                    <div className='add-on-description'>
                        <p>Online service</p>
                        <p>Access to multiplayer games</p>
                    </div>
                    <div className="add-on-price">
                        <p>+1/mo</p>
                    </div>
                </div>
                <div className="add-on">
                    <input 
                        type="checkbox"
                        defaultChecked={addOns.get("largerStorage")}
                        onChange={() => {
                            setAddOns(prevAddOns => {
                                const addonsCopy = new Map(prevAddOns);
                                const id = "largerStorage";
                                addonsCopy.set(id, !addonsCopy.get(id))
                                return addonsCopy;
                            });
                        }}
                    />

                    <div className='add-on-description'>
                        <p>Larger storage</p>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                    <div className="add-on-price">
                        <p>+2/mo</p>
                    </div>
                </div>
                <div className="add-on">
                    <input 
                        type="checkbox"
                        defaultChecked={addOns.get("customizableProfile")}
                        onChange={() => {
                            setAddOns(prevAddOns => {
                                const addonsCopy = new Map(prevAddOns);
                                const id = "customizableProfile";
                                addonsCopy.set(id, !addonsCopy.get(id))
                                return addonsCopy;
                            });
                        }}
                    />

                    <div className='add-on-description'>
                        <p>Customizable profile</p>
                        <p>Custom theme on your profile</p>
                    </div>
                    <div className="add-on-price">
                        <p>+2/mo</p>
                    </div>
                </div>
            </div>
        </div>
    );
}