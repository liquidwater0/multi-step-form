import { ChangeEvent } from "react";
import { useForm } from "../../../context/FormContext";

export default function YourInfo() {
    const { formData, setFormData } = useForm();

    return (
        <div className='step your-info-step'>
            <h1 className="step-title">Personal Info</h1>
            <p className="subtitle">Please provide your name, email address, and phone number.</p>

            <div className="step-container">
                <div className="form-input-section">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        defaultValue={formData.name}
                        onChange={(event: ChangeEvent) => {
                            setFormData(prevData => {
                                return { ...prevData, name: (event.target as HTMLInputElement).value };
                            });
                        }}
                    />
                </div>
                <div className="form-input-section">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email" 
                        id="email"
                        defaultValue={formData.email}
                        onChange={(event: ChangeEvent) => {
                            setFormData(prevData => {
                                return { ...prevData, email: (event.target as HTMLInputElement).value };
                            });
                        }}
                    />
                </div>
                <div className="form-input-section">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                        type="tel" 
                        id="phone"
                        defaultValue={formData.phone}
                        onChange={(event: ChangeEvent) => {
                            setFormData(prevData => {
                                return { ...prevData, phone: (event.target as HTMLInputElement).value };
                            });
                        }}
                    />
                </div>
            </div>
        </div>
    );
}