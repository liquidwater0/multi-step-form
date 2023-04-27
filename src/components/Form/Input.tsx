import { HTMLAttributes } from 'react';

type InputProps = {
    type: "text" | "email" | "tel",
    className?: string,
    required?: boolean
} & HTMLAttributes<HTMLInputElement>

export default function Input({ type, className, required, ...props }: InputProps) {
    return (
        <input 
            className={`form-input  ${className ? className : ""}`}
            type={type}
            required
            { ...props }
        />
    );
}