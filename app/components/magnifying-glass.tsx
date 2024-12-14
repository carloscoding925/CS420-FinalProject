// Carlos Hernandez

import { useRef, useState } from "react";

// Magnifying Glass Component
export function MagnifyingGlass(props: { label: string; text: string }) {
    // For the magnifying glass, we essentially want to keep track of two areas of the screen.
    // The first area is the container where the text is displayed and the second area is the magnifier itself.
    const containerRef = useRef<HTMLDivElement>(null);
    const magnifierRef = useRef<HTMLDivElement>(null);
    const [magnifierStyle, setMagnifierStyle] = useState<React.CSSProperties>({ display: 'none' });

    // This function checks where the cursor currently is. If we're inside the component box, the magnifier will appear.
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const container = containerRef.current;
        const magnifier = magnifierRef.current;
        if (!container || !magnifier) return;

        // Returns the cursor position relative to the container
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = event.clientX - left;
        const y = event.clientY - top;

        // If we're outside the container, the magnifier will disappear
        if (x < 0 || y < 0 || x > width || y > height) {
            setMagnifierStyle({ display: 'none' });
            return;
        }
        const magnifierSize = 100;
        const zoomLevel = 2;

        // This sets the styling for the magnifier if we're inside the component box
        setMagnifierStyle({
            display: 'block',
            left: `${x - magnifierSize / 2}px`,
            top: `${y - magnifierSize / 2}px`,
            backgroundPosition: `-${x * zoomLevel - magnifierSize / 2}px -${y * zoomLevel - magnifierSize / 2}px`,
            backgroundColor: 'white',
            backgroundSize: `${width * zoomLevel}px ${height * zoomLevel}px`,
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="${width * zoomLevel}" height="${height * zoomLevel}"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:16px">${props.text}</div></foreignObject></svg>')`
        });
    };

    // This function makes the magnifier disappear when the cursor leaves the component box
    const handleMouseLeave = () => {
        setMagnifierStyle({ display: 'none' });
    };

    return (
        <div className="flex flex-col">
            {/* This is the label for the magnifying glass */}
            <label className="text-lg font-bold">
                {props.label}
            </label>
            {/* This is the container which holds the text we want to magnify */}
            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ position: 'relative', border: '1px solid gray', padding: '10px', width: '300px', height: '200px', overflow: 'hidden', display: 'inline-block' }}
            >
                <div style={{ fontSize: '16px', lineHeight: '1.5' }}>
                    {props.text}
                </div>
                <div
                    ref={magnifierRef}
                    style={{
                        ...magnifierStyle,
                        position: 'absolute',
                        borderRadius: '50%',
                        border: '2px solid black',
                        background: `white`,
                        pointerEvents: 'none',
                        transform: 'scale(2)',
                        transformOrigin: 'top-left',
                    }}
                >
                    {/* This is the styling for the magnifier */}
                    <div style={({ fontSize: '16px', lineHeight: '1.5', position: 'absolute', top: '', left: '' })}>
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
    )
}