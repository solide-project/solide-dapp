"use client"

import * as React from "react"
import { useState } from "react"
import { Icon } from "@iconify/react"

import { cn } from "@/lib/utils"

interface CopyIconProps extends React.HTMLAttributes<HTMLDivElement> {
  payload: string,
  copyIcon?: string,
  height?: number,
}

export function CopyIcon({
  payload,
  className,
  copyIcon = "lucide:copy",
  height = 24,
}: CopyIconProps) {
  const [icon, setIcon] = useState<string>(copyIcon)

  function copyText(entryText: string) {
    setIcon("lucide:check")
    navigator.clipboard.writeText(payload)
    setTimeout(() => {
      setIcon(copyIcon)
    }, 1000)
  }

  return (
    <Icon
      icon={icon}
      className="cursor-pointer"
      inline={true}
      height={height}
      onClick={() => copyText(payload)}
    />
  )
}
