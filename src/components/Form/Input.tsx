import { HTMLAttributes } from 'react';

type InputProps = {
    type: "text" | "email" | "tel",
    className?: string,
    invalid?: boolean
} & HTMLAttributes<HTMLInputElement>

export default function Input({ type, className, invalid, ...props }: InputProps) {
    return (
        <input 
            className={`form-input  ${className ? className : ""} ${invalid ? "invalid" : ""}`}
            type={type}
            { ...props }
        />
    );
}