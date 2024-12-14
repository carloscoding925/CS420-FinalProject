import { useState } from "react";
import { ScreenReader } from "~/components/screen-reader";
import { ComponentView } from "./componentViews";
import { ImageRecolorer } from "~/components/image-recolorer";

export default function Component() {
    const [expandedComponent, setExpandedComponent] = useState<string | null>(null);

    const handleToggle = (componentName: string) => {
        setExpandedComponent(expandedComponent === componentName ? null : componentName);
    };

    return (
        <div>
            <div className="flex flex-row place-content-center">
                <h1 className="text-4xl font-bold pt-2">
                    Accessible Components
                </h1>
            </div>
            <div className="flex flex-wrap pl-[30px] pt-[20px] space-x-20">
                <ComponentView
                    component={
                        <ScreenReader
                            label="Screen Reader Component"
                            text="Welcome to the Web Developer Accessibility Tool! This is the Screen Reader Component."
                        />
                    }
                    code={`
                        export function ScreenReader(props: { label: string; text: string; }) {
                            const handleReadText = () => {
                                const utterance = new SpeechSynthesisUtterance(props.text);
                                speechSynthesis.speak(utterance);
                            };

                            return (
                                <div>
                                    <div>
                                        <label className="text-lg font-bold">
                                            {props.label}
                                        </label>
                                    </div>
                                    <div className="border border-gray-300 rounded p-4">
                                        <p>
                                            {props.text}
                                        </p>
                                    </div>
                                    <div>
                                        <button onClick={handleReadText} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                                            Read Text
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    `}
                    onToggle={() => handleToggle('ScreenReader')}
                    isExpanded={expandedComponent === 'ScreenReader'}
                />
                <ComponentView
                    component={
                        <ImageRecolorer
                            label="Image Recolorer Component"
                            src="/beach.jpeg"
                            alt="A tropical beach"
                            type="red-green"
                        />
                    }
                    code={`

                    `}
                    onToggle={() => handleToggle('ImageRecolorer')}
                    isExpanded={expandedComponent === 'ImageRecolorer'}
                />
            </div>
        </div>
    )
}