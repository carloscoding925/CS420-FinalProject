import { useState } from "react";

export function Checkbox(props: { id: string; label: string; }) {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div>
            <label htmlFor={props.id} className="text-lg font-bold">
                {props.label}
            </label>
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