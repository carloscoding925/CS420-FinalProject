import { useState } from "react";
import { ScreenReader } from "~/components/screen-reader";
import { ComponentView } from "./componentViews";
import { ImageRecolorer } from "~/components/image-recolorer";
import { SpeechToText } from "~/components/speech-to-text";
import { MagnifyingGlass } from "~/components/magnifying-glass";

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
            <div className="flex flex-wrap pl-[30px] pt-[20px] space-x-12">
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
                        export function ImageRecolorer(props: { label: string; src: string; alt: string; type: string; }) {
                            const canvasRef = useRef<HTMLCanvasElement>(null);
                            const [useRecolorer, setUseRecolorer] = useState<boolean>(false);
                        
                            useEffect(() => {
                                const canvas = canvasRef.current;
                                const ctx = canvas?.getContext('2d');
                                const img = new Image();
                                img.src = props.src;
                                img.onload = () => {
                                    if (canvas && ctx) {
                                        const maxWidth = 300;
                                        const maxHeight = 300;
                                        let width = img.width;
                                        let height = img.height;
                        
                                        if (width > height) {
                                            if (width > maxWidth) {
                                                height = Math.round((height * maxWidth) / width);
                                                width = maxWidth;
                                            }
                                        } else {
                                            if (height > maxHeight) {
                                                width = Math.round((width * maxHeight) / height);
                                                height = maxHeight;
                                            }
                                        }
                        
                                        canvas.width = width;
                                        canvas.height = height;
                                        ctx.drawImage(img, 0, 0, width, height);
                        
                                        if (useRecolorer) {
                                            const imageData = ctx.getImageData(0, 0, width, height);
                                            const data = imageData.data;
                        
                                            for (let i = 0; i < data.length; i += 4) {
                                                const r = data[i];
                                                const g = data[i + 1];
                                                const b = data[i + 2];
                        
                                                if (props.type === 'red-green') {
                                                    data[i] = r * 0.567 + g * 0.433;
                                                    data[i + 1] = r * 0.558 + g * 0.442;
                                                    data[i + 2] = b
                                                }
                                                else if (props.type === 'blue-yellow') {
                                                    data[i] = r;
                                                    data[i + 1] = g * 0.817 + b * 0.183;
                                                    data[i + 2] = g * 0.333 + b * 0.667;
                                                }
                                            }
                        
                                            ctx.putImageData(imageData, 0, 0);
                                        }
                                    }
                                }
                            }, [props.src, props.type, useRecolorer]);
                        
                            const handleToggleRecolorer = () => {
                                setUseRecolorer(!useRecolorer);
                            };
                        
                            return (
                                <div>
                                    <label className="text-lg font-bold">
                                        {props.label}
                                    </label>
                                    <canvas ref={canvasRef}></canvas>
                                    <div role="region" aria-label={props.label} style={{ position: 'absolute', width: '1px', height: '1px', margin: '-1px', padding: '0', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: '0' }}>
                                        {props.alt}
                                    </div>
                                    <button onClick={handleToggleRecolorer} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                                        {useRecolorer ? 'Show Original Image' : 'Show Recolored Image'}
                                    </button>
                                </div>
                            )
                        }
                    `}
                    onToggle={() => handleToggle('ImageRecolorer')}
                    isExpanded={expandedComponent === 'ImageRecolorer'}
                />
                <ComponentView
                    component={
                        <MagnifyingGlass
                            label="Magnifying Glass Component"
                            text="This is the Magnifying Glass Component."
                        />
                    }
                    code={`
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
                                    left: \`\${x - magnifierSize / 2}px\`,
                                    top: \`\${y - magnifierSize / 2}px\`,
                                    backgroundPosition: \`-\${x * zoomLevel - magnifierSize / 2}px -\${y * zoomLevel - magnifierSize / 2}px\`,
                                    backgroundColor: 'white',
                                    backgroundSize: \`\${width * zoomLevel}px \${height * zoomLevel}px\`,
                                    backgroundImage: \`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="\${width * zoomLevel}" height="\${height * zoomLevel}"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:16px">$\{props.text}</div></foreignObject></svg>')\`
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
                                                background: \`white\`,
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
                    `}
                    onToggle={() => handleToggle('MagnifyingGlass')}
                    isExpanded={expandedComponent === 'MagnifyingGlass'}
                />

            </div>
        </div>
    )
}