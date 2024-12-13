import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export function ComponentView(props: { component: React.ReactNode; code: string; onToggle: () => void; isExpanded: boolean; }) {
    const [showComponent, setShowComponent] = useState<boolean>(true);

    function trimLeadingWhitespace(text: string): string {
        const lines = text.split('\n');
        const nonEmptyLines = lines.filter(line => line.trim().length > 0);
        const minLeadingWhitespace = Math.min(
            ...nonEmptyLines.map(line => line.match(/^\s*/)?.[0].length || 0)
        );

        const trimmedLines = lines.map(line => line.slice(minLeadingWhitespace));
        return trimmedLines.join('\n');
    }

    const handleToggle = () => {
        setShowComponent(!showComponent);
        props.onToggle();
    }

    return (
        <div>
            <div className={`p-4 border border-gray-300 rounded pb-2 ${props.isExpanded ? 'w-full' : 'w-auto'}`}>
                {showComponent ? (
                    <div className="">
                        {props.component}
                    </div>
                ) : (
                    <SyntaxHighlighter language="tsx" >
                        {trimLeadingWhitespace(props.code)}
                    </SyntaxHighlighter>
                )}
                <button
                    onClick={handleToggle}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    {showComponent ? "Show Code" : "Show Component"}
                </button>
            </div>
        </div>
    )
}