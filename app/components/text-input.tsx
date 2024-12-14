// Carlos Hernandez

// Text Input Component
export function TextInput(props: { id: string; label: string; required: boolean; isNumeric: boolean; }) {
    return (
        <div>
            <div className="flex flex-col">
                {/* This is the label for the text input */}
                <label htmlFor={props.id} className="text-lg font-bold">
                    {props.label}
                </label>
                {/* This is the text input */}
                <input
                    id={props.id}
                    name={props.id}
                    type="text"
                    required={props.required}
                    className="border-b border-gray-400 focus:outline-none focus:border-blue-500 p-[6px]"
                    onChange={e => {
                        if (props.isNumeric) {
                            e.target.value = e.target.value.replace(/[^0-9]/g, "");
                        }
                    }}
                />
            </div>
        </div>
    );
}