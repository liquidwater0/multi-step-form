import { HTMLAttributes, useState, useEffect, useRef } from 'react';

type SliderProps = {
    checked?: boolean,
    readOnly?: boolean
} & HTMLAttributes<HTMLInputElement>

export default function Slider({ ...props }: SliderProps) {
    const inputRef = useRef<HTMLInputElement>(null!);
    const [checked, setChecked] = useState<boolean>();

    useEffect(() => {
        setChecked(inputRef.current.checked);
    }, [props.checked, props.defaultChecked]);
    
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