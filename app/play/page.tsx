"use client";

import { CopyCode } from "@/components/shared/copy-code";
import { Slider } from "@/components/ui/slider";
import { grayScale025, grayScale200 } from "@/lib/fonts";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function PlayPage() {
    const { theme } = useTheme();

    const [frameWidth, setFrameWidth] = useState(600);
    const [frameHeight, setFrameHeight] = useState(600);

    const styles = {
        "backgroundSize": "10px 10px",
        "backgroundImage": `radial-gradient(
        ${grayScale200(theme)} 1px, 
        ${grayScale025(theme)} 1px)`,
    }

    const sizeControls = [
        {
            name: "Width",
            value: frameWidth,
            max: 1024, min: 512, step: 1,
            onChange: (val: number[]) => {
                const width = val[0] || 600;
                console.log(width)
                setFrameWidth(width)
            }
        },
        {
            name: "Height",
            value: frameHeight,
            max: 1024, min: 128, step: 1,
            onChange: (val: number[]) => {
                const height = val[0] || 600;
                setFrameHeight(height)
            }
        }
    ]

    return (
        <div className="min-h-screen px-48" style={styles}>
            <div>
                <CopyCode payload={
                    `
                    <iframe
                    src="http://localhost:3000/?url=https://raw.githubusercontent.com/SovaSniper/contracts/main/API-Consumer.sol"
                    height={${frameHeight}} width={${frameWidth}} style={{ "overflow": "hidden" }} />`
                    .trim()
                } />
            </div>
            <div className="grid grid-cols-12 py-8">
                {sizeControls.map((control, index) => {
                    return (
                        <div key={index} className="col-span-12 lg:col-span-6 px-8">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    {control.name}
                                </label>
                                <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                                    {control.value}
                                </span>
                            </div>
                            <Slider defaultValue={[control.value]} max={1024} min={512} step={1} onValueChange={control.onChange} />
                        </div>
                    )
                })}
            </div>
            <div className="py-16">
                <iframe
                    src="http://localhost:3000/?url=https://raw.githubusercontent.com/SovaSniper/contracts/main/API-Consumer.sol"
                    height={frameHeight} width={frameWidth} style={{ "overflow": "hidden" }} />
            </div>

        </div>
    )
}
