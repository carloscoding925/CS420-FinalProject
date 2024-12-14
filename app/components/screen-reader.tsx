// Carlos Hernandez

// Screen Reader Component
export function ScreenReader(props: { label: string; text: string; }) {
    // This function is responsible for reading the text
    // We are using the SpeechSynthesisUtterance API to read the text out loud to the user
    const handleReadText = () => {
        const utterance = new SpeechSynthesisUtterance(props.text);
        speechSynthesis.speak(utterance);
    };

    return (
        <div>
            {/* This is the label for the screen reader */}
            <div>
                <label className="text-lg font-bold">
                    {props.label}
                </label>
            </div>
            {/* This is the text that the screen reader will read */}
            <div className="border border-gray-300 rounded p-4">
                <p style={{ maxWidth: '300px', wordWrap: 'break-word' }}>
                    {props.text}
                </p>
            </div>
            {/* This button triggers the screen reader */}
            <div>
                <button onClick={handleReadText} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    Read Text
                </button>
            </div>
        </div>
    )
}