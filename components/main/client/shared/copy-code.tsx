"use client"

import * as React from "react"
import { useState } from "react"
import { Icon } from "@iconify/react"

import { cn } from "@/lib/utils"

interface CopyCodeProps extends React.HTMLAttributes<HTMLDivElement> {
  payload: string
}

export function CopyCode({ payload, className, children }: CopyCodeProps) {
  const [text, setText] = useState<string>(payload)

  function copyText(entryText: string) {
    setText("Copied!")
    navigator.clipboard.writeText(payload)
    setTimeout(() => {
      setText(payload)
    }, 1000)
  }

  return (
    <div className="flex gap-5 items-center my-2">
      <div
        className={cn(
          "flex border-2 bg-card rounded-xl px-3 sm:px-5 py-1 gap-2",
          className
        )}
      >
        <p className="m-0 text-center text-sm sm:text-base">{text}</p>
        <Icon
          icon="lucide:copy"
          className="cursor-pointer"
          inline={true}
          height={24}
          onClick={() => copyText(payload)}
        />
      </div>
    </div>
  )
}
