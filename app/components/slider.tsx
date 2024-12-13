import React, { useState } from "react"

export function Slider(props: {id: string; label: string; min: number; max: number;}) {
    const [value, setValue] = useState<number>(50);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    }

    return (
        <div>
            <label htmlFor={props.id} className="text-lg font-bold">
                {props.label}
            </label>
            <div className="flex flex-col items-center">
                <input
                    id={props.id}
                    name={props.id}
                    type="range"
                    min={props.min}
                    max={props.max}
                    value={value}
                    onChange={handleChange}
                    className="w-full"
                />
                <div className="mt-2 text-lg font-bold">
                    Value: {value}
                </div>
            </div>
        </div>
    )
}