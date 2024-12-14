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
            backgroundColor: 'white',
            backgroundSize: `${width * zoomLevel}px ${height * zoomLevel}px`,
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="${width * zoomLevel}" height="${height * zoomLevel}"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:16px">${props.text}</div></foreignObject></svg>')`
        });
    };

    const handleMouseLeave = () => {
        setMagnifierStyle({ display: 'none' });
    };

    return (
        <div className="flex flex-col">
            <label className="text-lg font-bold">
                {props.label}
            </label>
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
                    <div style={({ fontSize: '16px', lineHeight: '1.5', position: 'absolute', top: '', left: '' })}>
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
    )
}