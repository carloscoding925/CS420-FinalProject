// Carlos Hernandez

// Dropdown Input Component
export function DropdownInput(props: { id: string; label: string; required: boolean; options: string[]; }) {
    return (
        <div>
            <div className="flex flex-col">
                {/* This is the label for the dropdown input */}
                <label htmlFor={props.id} className="text-lg font-bold">
                    {props.label}
                </label>
                {/* This displays all the options for the dropdown */}
                <select
                    id={props.id}
                    name={props.id}
                    required={props.required}
                    className="border-b border-gray-400 focus:outline-none focus:border-blue-500 p-2"
                >
                    {props.options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}