"use client"

import { useState } from "react"
import { useTheme } from "next-themes"

import { SOLIDE_URL } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { CodeBlock } from "@/components/core/components/code-block"

export default function PlayPage() {
  const { theme } = useTheme()

  const [frameWidth, setFrameWidth] = useState(600)
  const [frameHeight, setFrameHeight] = useState(600)

  const sizeControls = [
    {
      name: "Width",
      value: frameWidth,
      max: 1024,
      min: 512,
      step: 1,
      onChange: (val: number[]) => {
        const width = val[0] || 600
        console.log(width)
        setFrameWidth(width)
      },
    },
    {
      name: "Height",
      value: frameHeight,
      max: 1024,
      min: 128,
      step: 1,
      onChange: (val: number[]) => {
        const height = val[0] || 600
        setFrameHeight(height)
      },
    },
  ]

  return (
    <div className="min-h-screen px-16 lg:px-48 dotted-pattern">
      <div className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center py-8">
        Solide Play
      </div>

      <CodeBlock
        code={`
<iframe
    className="border rounded-lg"
    src="${SOLIDE_URL}"
    height=${frameHeight} width=${frameWidth}
    style={{ "overflow": "hidden" }}
    allow="clipboard-write" />
                `.trim()}
      />

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
              <Slider
                defaultValue={[control.value]}
                max={1024}
                min={512}
                step={1}
                onValueChange={control.onChange}
              />
            </div>
          )
        })}
      </div>
      <div className="py-16">
        <iframe
          className="border rounded-lg"
          src={`${SOLIDE_URL}/address/1088/0xb27BbeaACA2C00d6258C3118BAB6b5B6975161c8`}
          height={frameHeight}
          width={frameWidth}
          style={{ overflow: "hidden" }}
          allow="clipboard-write"
        />
      </div>
    </div>
  )
}
