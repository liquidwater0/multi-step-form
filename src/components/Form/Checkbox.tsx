import { useRef, useState, useEffect, HTMLAttributes } from 'react';

export default function Checkbox({ ...props }: HTMLAttributes<HTMLInputElement>) {
    const inputRef = useRef<HTMLInputElement>(null!);
    const [checked, setChecked] = useState<boolean>();

    useEffect(() => {
        setChecked(inputRef.current.checked);
    }, []);

    return (
        <>
            <input 
                type="checkbox"
                style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
                ref={inputRef}
                onInput={(event) => setChecked((event.target as HTMLInputElement).checked)}
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