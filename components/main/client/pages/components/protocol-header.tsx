import { useEffect, useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

import { ProtocolSchema } from "@/lib/systems"
import { cn } from "@/lib/utils"
import { CardDescription } from "@/components/ui/card"

import { CopyCode } from "../../shared/copy-code"
import { ProtocolIcons } from "./protocol-icons"
import { ChainInfo } from "@/lib/systems/settings"
import { DRPCBadge } from "../../shared/drpc-badge"
import { RPCList } from "./rpc-list"
import { BITLAYER_ID } from "@/lib/systems"

const getImage = (name: string) => {
  let ext = "svg"
  switch (name) {
    case BITLAYER_ID:
      ext = "png"
    default:
  }
  return `${name}.${ext}`
}
interface ProtocolHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  item: ProtocolSchema,
  rpcSetting?: ChainInfo[]
}

export const ProtocolHeader = ({
  item,
  rpcSetting = [],
  className }: ProtocolHeaderProps) => {
  const pathname = usePathname()
  const { theme } = useTheme()

  const [backgroundColor, setBackgroundColor] = useState<string>("")

  const [value, setValue] = useState<string>("")
  useEffect(() => {
    const path = pathname.split("/").pop()
    setValue(path || "ethereum")
    setBackgroundColor(
      theme === "light" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"
    )
  }, [value, theme])

  return (
    <div
      className={cn("p-4 rounded-lg", className)}
      style={{ backgroundColor }}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-2 order-first">
          <div className="flex items-center justify-center h-full">
            {value && (
              <Image
                src={`/icons/${getImage(value)}`}
                width={100}
                height={100}
                alt="logo"
              />
            )}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-10">
          <div>
            <div className="font-bold text-center lg:text-left leading-[1.1] text-6xl my-4">
              {item.name}
            </div>
            {item.library && (
              <CopyCode className="my-4" payload={`npm i ${item.library}`} />
            )}
            <CardDescription className="">{item.description}</CardDescription>
            <div className="flex items-center justify-between">
              <ProtocolIcons className="my-4" item={item} />

              <div>
                {rpcSetting.some((rpc) => rpc.rpcUrls.some(url => url.includes('drpc'))) &&
                  <DRPCBadge />}
                {rpcSetting && rpcSetting.length > 0 &&
                  <RPCList items={rpcSetting} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
