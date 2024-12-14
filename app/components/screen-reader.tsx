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
                <p style={{ maxWidth: '300px', wordWrap: 'break-word' }}>
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