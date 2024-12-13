export function TextInput(props: { id: string; label: string; required: boolean; isNumeric: boolean; }) {
    return (
        <div>
            <div className="flex flex-col">
                <label htmlFor={props.id} className="text-lg font-bold">
                    {props.label}
                </label>
                <input
                    id={props.id}
                    name={props.id}
                    type="text"
                    required={props.required}
                    className="border-b border-gray-400 focus:outline-none focus:border-blue-500 p-2"
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