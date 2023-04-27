import { HTMLAttributes, useState, useEffect, useRef } from 'react';

export default function Slider({ ...props }: HTMLAttributes<HTMLInputElement>) {
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
                className={`slider ${checked ? "checked" : ""}`}
                onClick={() => inputRef.current.click()}
            >
                <div className="slider-thumb"/>
            </div>
        </>
    );
}