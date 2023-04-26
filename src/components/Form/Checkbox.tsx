import { useRef, useState, useEffect, HTMLAttributes } from 'react';

type CheckboxProps = {
    checked: boolean
} & HTMLAttributes<HTMLInputElement>

export default function Checkbox({ checked, ...props }: CheckboxProps) {
    const inputRef = useRef<HTMLInputElement>(null!);
    const [isChecked, setIsChecked] = useState<boolean>();

    useEffect(() => {
        setIsChecked(inputRef.current.checked);
    });

    return (
        <>
            <input 
                type="checkbox"
                style={{ position: "absolute", opacity: 0 }}
                ref={inputRef}
                { ...props }
            />

            <div 
                className={`checkbox ${checked ? "checked" : ""}`}
                onClick={() => inputRef.current.click()}
            >
                <div className="check"/>
            </div>
        </>
    );
}