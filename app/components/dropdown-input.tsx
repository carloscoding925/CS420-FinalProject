export function DropdownInput(props: { id: string; label: string; required: boolean; options: string[]; }) {
    return (
        <div>
            <div className="flex flex-col">
                <label htmlFor={props.id} className="text-lg font-bold">
                    {props.label}
                </label>
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