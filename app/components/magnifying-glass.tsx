import { useRef, useState } from "react";

export function MagnifyingGlass(props: { label: string; text: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const magnifierRef = useRef<HTMLDivElement>(null);
    const [magnifierStyle, setMagnifierStyle] = useState<React.CSSProperties>({ display: 'none' });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const container = containerRef.current;
        const magnifier = magnifierRef.current;
        if (!container || !magnifier) return;

        const { left, top, width, height } = container.getBoundingClientRect();
        const x = event.clientX - left;
        const y = event.clientY - top;

        if (x < 0 || y < 0 || x > width || y > height) {
            setMagnifierStyle({ display: 'none' });
            return;
        }
        const magnifierSize = 100;
        const zoomLevel = 2;

        setMagnifierStyle({
            display: 'block',
            left: `${x - magnifierSize / 2}px`,
            top: `${y - magnifierSize / 2}px`,
            backgroundPosition: `-${x * zoomLevel - magnifierSize / 2}px -${y * zoomLevel - magnifierSize / 2}px`,
            width: `${magnifierSize}px`,
            height: `${magnifierSize}px`,
            backgroundSize: `${width * zoomLevel}px ${height * zoomLevel}px`
        });
    };

    const handleMouseLeave = () => {
        setMagnifierStyle({ display: 'none' });
    };

    return (
        <div>
            <label className="text-lg font-bold">
                {props.label}
            </label>
            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ position: 'relative', border: '1px solid gray', padding: '10px', width: '300px', height: '200px', overflow: 'hidden' }}
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
                        overflow: 'hidden',
                        transform: 'scale(2)',
                        transformOrigin: 'top left',
                    }}
                >
                    <div style={({ fontSize: '16px', lineHeight: '1.5', position: 'absolute', top: '-50%', left: '-50%' })}>
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
    )
}