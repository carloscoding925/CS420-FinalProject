import { TextInput } from "~/components/text-input";
import { ComponentView } from "./componentViews";
import { DropdownInput } from "~/components/dropdown-input";
import { useState } from "react";
import { Slider } from "~/components/slider";
import { Checkbox } from "~/components/checkbox";
import { RadioButton } from "~/components/radio-button";

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
            <div className="flex flex-wrap pl-[30px] pt-[20px] space-x-20">
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
                <ComponentView
                    component={
                        <Slider
                            id="slider"
                            label="Slider"
                            min={0}
                            max={100}
                        />
                    }
                    code={`
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
                    `}
                    onToggle={() => handleToggle("slider")}
                    isExpanded={expandedComponent === "slider"}
                />
                <ComponentView
                    component={
                        <Checkbox
                            id="checkbox"
                            label="Checkbox"
                        />
                    }
                    code={`
                        export function Checkbox(props: { id: string; label: string; }) {
                            const [checked, setChecked] = useState<boolean>(false);

                            return (
                                <div>
                                    <label htmlFor={props.id} className="text-lg font-bold">
                                        {props.label}
                                    </label>
                                    <input
                                        id={props.id}
                                        name={props.id}
                                        type="checkbox"
                                        checked={checked}
                                        onChange={() => setChecked(!checked)}
                                        className="w-[30px] h-[30px] border-b border-gray-400 focus:outline-none focus:border-blue-500 p-2"
                                    />
                                </div>
                            );
                        }
                    `}
                    onToggle={() => handleToggle("checkbox")}
                    isExpanded={expandedComponent === "checkbox"}
                />
                <ComponentView
                    component={
                        <RadioButton
                            id="radio-button"
                            label="Radio Button"
                            options={["Option 1", "Option 2", "Option 3"]}
                        />
                    }
                    code={`
                        export function RadioButton(props: { id: string; label: string; options: string[]; }) {
                            return (
                                <div>
                                    <label htmlFor={props.id} className="text-lg font-bold">
                                        {props.label}
                                    </label>
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
                    `}
                    onToggle={() => handleToggle("radio-button")}
                    isExpanded={expandedComponent === "radio-button"}
                />
            </div>
        </div>
    )
}