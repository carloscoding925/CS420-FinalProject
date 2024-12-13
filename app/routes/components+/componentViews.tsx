import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function ComponentView(props: { component: React.ReactNode; code: string; }) {
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

    return (
        <div>
            <div className="p-4border border-gray-300 rounded">
                {showComponent ? (
                    <div className="">
                        {props.component}
                    </div>
                ) : (
                    <SyntaxHighlighter language="tsx" style={darcula}>
                        {trimLeadingWhitespace(props.code)}
                    </SyntaxHighlighter>
                )}
                <button
                    onClick={() => setShowComponent(!showComponent)}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    {showComponent ? "Show Code" : "Show Component"}
                </button>
            </div>
        </div>
    )
}