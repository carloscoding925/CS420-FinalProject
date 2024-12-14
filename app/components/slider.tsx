// Carlos Hernandez

import React, { useState } from "react"

// This is the slider component.
export function Slider(props: {id: string; label: string; min: number; max: number;}) {
    // This state variable keeps track of the value of the slider
    const [value, setValue] = useState<number>(50);

    // This function updates the slider value whenever the user moves it.
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    }

    return (
        <div>
            {/* This is the label for the slider */}
            <label htmlFor={props.id} className="text-lg font-bold">
                {props.label}
            </label>
            {/* This is the slider itself */}
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