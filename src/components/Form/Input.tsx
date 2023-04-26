import { HTMLAttributes } from 'react';

type InputProps = {
    type: "text" | "email" | "tel",
    className?: string
} & HTMLAttributes<HTMLInputElement>

export default function Input({ type, className, ...props }: InputProps) {
    return (
        <input 
            className={`form-input  ${className ? className : ""}`}
            type={type}
            { ...props }
        />
    );
}