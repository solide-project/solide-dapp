import React, { useEffect, useRef, useState } from "react"
import { Icon } from "@iconify/react"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import { ProtocolIcons } from "./protocol-icons"
import { ProtocolSchema } from "@/lib/systems"

interface ProtocolSearchProps extends React.HTMLAttributes<HTMLDivElement> {
  item: ProtocolSchema
  counter?: number
}

export function ProtocolSearch({
  onChange,
  item,
  counter = 0,
}: ProtocolSearchProps) {
  const [offset, setOffset] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = (ref.current as any).getBoundingClientRect()
        setOffset(rect.top) // Set the offset from the top
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Card
      ref={ref}
      className={`top-24 p-0 m-0 sticky z-20 w-full px-16 py-3 my-12 md:grid-cols-4 border-none rounded-lg flex items-center justify-between`}
    >
      <div className="flex items-center space-x-4 w-full">
        <Icon icon="akar-icons:search" className="text-gray-400" />
        <Input type="text" onChange={onChange} />
        <div>{counter}</div>
      </div>

      <div
        className={cn(
          `${offset === 96 ? "hidden lg:block animate-fade-in" : "hidden"}`,
          "w-full"
        )}
      >
        <ProtocolIcons item={item} />
      </div>
    </Card>
  )
}
