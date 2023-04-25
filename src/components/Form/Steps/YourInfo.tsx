import React from 'react';

export default function YourInfo() {
    return (
        <div className='your-info-step'>
            <h1>Personal Info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name"/>
            </div>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email"/>
            </div>
            <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone"/>
            </div>
        </div>
    );
}