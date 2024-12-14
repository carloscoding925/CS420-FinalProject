import { useEffect, useRef, useState } from "react";

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