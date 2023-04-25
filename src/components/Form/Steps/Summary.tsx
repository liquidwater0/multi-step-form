import { useState } from 'react';

export default function Summary() {
    return (
        <div className='summary-step'>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming</p>

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
        </div>
    );
}