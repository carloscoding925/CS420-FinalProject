import { useState } from "react";

export function SpeechToText(props: { label: string; }) {
    const [text, setText] = useState<string>('');
    const [isListening, setIsListening] = useState<boolean>(false);
    const recognition = new (window.SpeechRecognitionAlternative)();

    const handleToggleListening = () => {
        if (isListening) {

        } else {

        }
    }

    return (
        <div>

        </div>
    )
}