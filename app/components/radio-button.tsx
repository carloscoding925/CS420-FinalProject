// Carlos Hernandez

// Radio Button Component
export function RadioButton(props: { id: string; label: string; options: string[]; }) {
    return (
        <div>
            {/* This is the label for the radio button */}
            <label htmlFor={props.id} className="text-lg font-bold">
                {props.label}
            </label>
            {/* This displays all the options for the radio button */}
            <div>
                {props.options.map(option => (
                    <div key={option} className="flex items-center space-x-2">
                        <input
                            id={option}
                            name={props.id}
                            type="radio"
                            value={option}
                            className="w-[20px] h-[20px] border-b border-gray-400 focus:outline-none focus:border-blue-500 p-2"
                        />
                        <label htmlFor={option} className="text-lg font-bold">
                            {option}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}