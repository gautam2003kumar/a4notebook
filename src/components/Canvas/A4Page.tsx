"use client";

import React, { useEffect } from "react";
import {StaticCanvas, FabricText} from "fabric";

const A4Page: React.FC = () =>{

    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

    useEffect(() =>{

        if(!canvasRef.current) return;

        const canvas = new StaticCanvas(canvasRef.current, {
            backgroundColor: "#ffffff",
            Selection: true,
        });

        // Set A4 dimensions in pixels (210mm x 297mm at 96 DPI)
        canvas.setWidth(794);
        canvas.setHeight(1123);

        // Add sample text to test

        const text = new FabricText("Hello, Gautam Kishor!", {
            left: 100,
            top: 100,
            fontSize: 24,
            fill: "#000000",
            width: 600,
        });

        canvas.add(text);
        
        //cleanup on unmount
        return () =>{
            canvas.dispose();
        };

    }, []);

    return (
        <div className="border shadow mx-auto my-8 w-fit">
            <canvas ref={canvasRef}/>
        </div>
    )
}

export default A4Page;