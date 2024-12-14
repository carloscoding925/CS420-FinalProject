// Carlos Hernandez

import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

// This component allows a user to interact with the component itself and view the source code for it. 
export function ComponentView(props: { component: React.ReactNode; code: string; onToggle: () => void; isExpanded: boolean; }) {
    // This state variable keeps track of whether the component or the code is being shown.
    const [showComponent, setShowComponent] = useState<boolean>(true);

    // When we type the component code into the 'code' prop, there is alot of leading white space so we want to trim it
    // while keeping the regular indentation of the code. This function does that.
    function trimLeadingWhitespace(text: string): string {
        const lines = text.split('\n');
        const nonEmptyLines = lines.filter(line => line.trim().length > 0);
        const minLeadingWhitespace = Math.min(
            ...nonEmptyLines.map(line => line.match(/^\s*/)?.[0].length || 0)
        );

        const trimmedLines = lines.map(line => line.slice(minLeadingWhitespace));
        return trimmedLines.join('\n');
    }

    // This function toggles between showing the component and showing the source code
    const handleToggle = () => {
        setShowComponent(!showComponent);
        props.onToggle();
    }

    // This function copies the code to the clipboard
    const handleCopy = () => {
        navigator.clipboard.writeText(props.code);
        alert('Copied to clipboard!');
    }

    return (
        <div>
            <div className={`p-4 border border-gray-300 rounded pb-2 ${props.isExpanded ? 'w-full' : 'w-auto'}`}>
                {showComponent ? (
                    <div className="">
                        {props.component}
                    </div>
                ) : (
                    <div>
                        {/* The syntax highlighter gives the code its pretty colorful look */}
                        <SyntaxHighlighter language="tsx" >
                            {trimLeadingWhitespace(props.code)}
                        </SyntaxHighlighter>
                    </div>
                )}
                {/* These are the buttons that allows the user to toggle between the component and the code and to copy the code to the clipboard */}
                <div className="flex flex-row justify-start space-x-10">
                    <div className="">
                        <button
                            onClick={handleToggle}
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                        >
                            {showComponent ? "Show Code" : "Show Component"}
                        </button>
                    </div>
                    <div className={`${showComponent === true ? 'hidden' : ''}`}>
                        <button
                            onClick={handleCopy}
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                        >
                            Copy Code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}