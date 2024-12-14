// Carlos Hernandez

import { useEffect, useRef, useState } from "react";

// This is the image recolorer component.
export function ImageRecolorer(props: { label: string; src: string; alt: string; type: string; }) {
    // This creates a new canvas to restructure the image
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [useRecolorer, setUseRecolorer] = useState<boolean>(false);

    // We are doing a couple of things in this useEffect so we'll go through it step by step.
    useEffect(() => {
        // First, we create a new 2d canvas and an empty image object.
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const img = new Image();
        img.src = props.src;
        img.onload = () => {
            // After loading the image, we now want to resize our canvas to fit within the component box.
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

                // We've now resized our canvas and inserted the original image into it, next we're going to
                // recolor the image based on the type of recoloring the user wants.
                if (useRecolorer) {
                    // Here, we gather the RGB values of the image
                    const imageData = ctx.getImageData(0, 0, width, height);
                    const data = imageData.data;

                    // We now want to iterate through the image data and restructure it depending on if the user selected
                    // red-green or blue-yellow recoloring.
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

                    // Here, we set the new recolored image data to the canvas
                    ctx.putImageData(imageData, 0, 0);
                }
            }
        }
    }, [props.src, props.type, useRecolorer]);

    // This function toggles between the original image and the recolored image
    const handleToggleRecolorer = () => {
        setUseRecolorer(!useRecolorer);
    };

    return (
        <div>
            <label className="text-lg font-bold">
                {props.label}
            </label>
            {/* This is the canvas where the image will be displayed */}
            <canvas ref={canvasRef}></canvas>
            <div role="region" aria-label={props.label} style={{ position: 'absolute', width: '1px', height: '1px', margin: '-1px', padding: '0', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: '0' }}>
                {props.alt}
            </div>
            {/* This button toggles between the original and recolored image */}
            <button onClick={handleToggleRecolorer} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                {useRecolorer ? 'Show Original Image' : 'Show Recolored Image'}
            </button>
        </div>
    )
}