import { useState } from 'react';
import AddOn from '../AddOn';

export type AddonType = {
    name: string,
    description: string,
    cost: { monthly: number, yearly: number }
}

export default function AddOns() {
    const [addOns] = useState<AddonType[]>([
        { 
            name: "Online service",
            description: "Access to multiplayer games",
            cost: {
                monthly: 1,
                yearly: 10
            }
        }, { 
            name: "Larger storage",
            description: "Extra 1TB of cloud save",
            cost: {
                monthly: 2,
                yearly: 20
            }
        }, { 
            name: "Customizable profile",
            description: "Custom theme on your profile",
            cost: {
                monthly: 2,
                yearly: 20
            }
        }
    ]);

    return (
        <div className='add-ons-step'>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>

            <div className='add-ons-container'>
                {addOns.map(addon =>
                    <AddOn
                        key={addon.name}
                        addon={addon}
                    />
                )}
            </div>
        </div>
    );
}