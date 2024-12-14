// Carlos Hernandez

import { useState } from "react";

export function Checkbox(props: { id: string; label: string; }) {
    // This state variable keeps track if the checkbox is checked or not
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div>
            {/* Label for the checkbox, can be whatever the user desires */}
            <label htmlFor={props.id} className="text-lg font-bold">
                {props.label}
            </label>
            {/* The checkbox itself */}
            <div>
                <input
                    id={props.id}
                    name={props.id}
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    className="w-[30px] h-[30px] border-b border-gray-400 focus:outline-none focus:border-blue-500 p-2"
                />
            </div>
        </div>
    );
}