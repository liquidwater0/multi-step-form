import { HTMLAttributes } from 'react';

type InputProps = {
    type: "text" | "email" | "tel",
    className?: string,
    pattern?: string,
    required?: boolean
} & HTMLAttributes<HTMLInputElement>

export default function Input({ type, className, ...props }: InputProps) {
    return (
        <div className='form-input-container'>
            <input 
                className={`form-input  ${className ? className : ""}`}
                type={type}
                { ...props }
            />
            <div className="validation-message">This field is required</div>
        </div>
    );
}