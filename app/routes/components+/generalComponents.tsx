import { TextInput } from "~/components/text-input";
import { ComponentView } from "./componentViews";
import { DropdownInput } from "~/components/dropdown-input";
import { useState } from "react";

export default function Component() {
    const [expandedComponent, setExpandedComponent] = useState<string | null>(null);

    const handleToggle = (componentName: string) => {
        setExpandedComponent(expandedComponent === componentName ? null : componentName);
    };

    return (
        <div>
            <div className="flex flex-row place-content-center">
                <h1 className="text-4xl font-bold pt-2">
                    General Components
                </h1>
            </div>
            <div className="flex flex-row place-content-center">
                <h1 className="text-2xl font-bold pt-2">
                    Input Fields
                </h1>
            </div>
            <div className="flex flex-wrap pl-4 space-x-10">
                <ComponentView
                    component={
                        <TextInput
                            id="text-input"
                            label="Text Input"
                            required={true}
                            isNumeric={false}
                        />
                    }
                    code={`
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
                    `}
                    onToggle={() => handleToggle("text-input")}
                    isExpanded={expandedComponent === "text-input"}
                />
                <ComponentView
                    component={
                        <DropdownInput
                            id="dropdown-input"
                            label="Dropdown Input"
                            required={true}
                            options={["Option 1", "Option 2", "Option 3"]}
                        />
                    }
                    code={`
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
                    `}
                    onToggle={() => handleToggle("dropdown-input")}
                    isExpanded={expandedComponent === "dropdown-input"}
                />
            </div>
        </div>
    )
}