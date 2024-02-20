"use client"

import * as React from "react"
import { useState } from "react"
import { Icon } from "@iconify/react"

import { cn } from "@/lib/utils"

interface CopyIconProps extends React.HTMLAttributes<HTMLDivElement> {
    payload: string
}

export function CopyIcon({ payload, className }: CopyIconProps) {
    const [icon, setIcon] = useState<string>("lucide:copy")

    function copyText(entryText: string) {
        setIcon("lucide:check")
        navigator.clipboard.writeText(payload)
        setTimeout(() => {
            setIcon("lucide:copy")
        }, 1000)
    }

    return (
        <Icon
            icon={icon}
            className="cursor-pointer"
            inline={true}
            height={24}
            onClick={() => copyText(payload)}
        />
    )
}
