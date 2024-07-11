import React from "react"
import { cn } from "@/lib/utils"

import { IconLink } from "../../core/components/icon-link"
import { ProtocolSchema } from "@/lib/data"

interface ProtocolIconsProps extends React.HTMLAttributes<HTMLDivElement> {
  item: ProtocolSchema
}

export function ProtocolIcons({ className, item }: ProtocolIconsProps) {
  return (
    <div
      className={cn("flex items-center justify-center space-x-2", className)}
    >
      {item.github && (
        <IconLink href={item.github} icon="mingcute:github-line" />
      )}

      {item.website && <IconLink href={item.website} icon="gg:website" />}

      {item.documentation && (
        <IconLink
          href={item.documentation}
          icon="icon-park-outline:doc-search-two"
        />
      )}

      {item.audit && <IconLink href={item.audit} icon="iconamoon:shield-yes" />}

      {item.blog && <IconLink href={item.blog} icon="iconamoon:news" />}

      {item.discord && (
        <IconLink href={item.discord} icon="mingcute:discord-line" />
      )}

      {item.x && <IconLink href={item.x} icon="simple-icons:x" />}
    </div>
  )
}
