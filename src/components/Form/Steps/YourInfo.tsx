import { useEffect, ChangeEvent } from "react";
import { useForm } from "../../../context/FormContext";
import Input from "../Input";

export default function YourInfo() {
    const { formData, setFormData, setCanProceed } = useForm();

    useEffect(() => {
        if (
            formData.name.trim() === "" || 
            formData.email.trim() === "" || 
            formData.phone.trim() === ""
        ) {
            setCanProceed(false);
        } else {
            setCanProceed(true);
        }
    }, [formData.name, formData.email, formData.phone]);

    return (
        <div className='step your-info-step'>
            <h1 className="step-title">Personal Info</h1>
            <p className="subtitle">Please provide your name, email address, and phone number.</p>

            <div className="step-container">
                <div className="form-input-section">
                    <label htmlFor="name">Name</label>
                    <Input
                        type="text"
                        id="name"
                        aria-label="name input"
                        required
                        placeholder="e.g. Stephen King"
                        defaultValue={formData.name}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            setFormData(prevData => {
                                return { ...prevData, name: (event.target as HTMLInputElement).value };
                            });
                        }}
                    />
                </div>
                <div className="form-input-section">
                    <label htmlFor="email">Email Address</label>
                    <Input
                        type="email"
                        id="email"
                        aria-label="email address input"
                        required
                        placeholder="e.g. stephenking@lorem.com"
                        defaultValue={formData.email}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            setFormData(prevData => {
                                return { ...prevData, email: (event.target as HTMLInputElement).value };
                            });
                        }}
                    />
                </div>
                <div className="form-input-section">
                    <label htmlFor="phone">Phone Number</label>
                    <Input
                        type="tel"
                        id="phone"
                        pattern="([?!+].*|[0-9].*)"
                        aria-label="phone number input"
                        required
                        placeholder="e.g. +1 234 567 890"
                        defaultValue={formData.phone}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
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