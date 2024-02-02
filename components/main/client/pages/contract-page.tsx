"use client"

import { useEffect, useState } from "react"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useTheme } from "next-themes"

import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/schema/contract"
import { ProtocolSchema } from "@/lib/schema/protocol"

import { LoadingScreen } from "../../server/loading-screen"
import { ContractsList } from "../contract-list/contract-list"
import { Jumbotron } from "../main/jumbotron"
import { Sidebar } from "../shared/side-bar"
import { ProtocolHeader } from "./components/protocol-header"
import { ProtocolSearch } from "./components/protocol-search"

interface ContractPageProps extends React.HTMLAttributes<HTMLDivElement> {
  protocol: ProtocolSchema
  items: ContractSchema[]
  themeColour?: string
}

export const ContractPage = ({
  protocol,
  items,
  themeColour = "rgba(180, 249, 186, 1)",
}: ContractPageProps) => {
  const [secondaryColour, setSecondaryColour] = useState<string>("#FAFAFA")
  const { theme } = useTheme()

  useEffect(() => {
    if (!theme) return
    setSecondaryColour(theme === "light" ? "#FAFAFA" : "#131417")
  }, [theme])

  const styles = {
    backgroundSize: "10px 10px",
    backgroundImage: `radial-gradient(
        ${themeColour} 1px, 
        ${secondaryColour} 1px)`,
  }

  return (
    <div>
      <div className="px-0 md:px-8 lg:px-16" style={styles}>
        <div className="py-4">
          <ProtocolHeader item={protocol} />
        </div>
        <ContractsList protocol={protocol} items={items} />
      </div>
      <div className="container my-14">
        <Jumbotron className="border" />
      </div>
    </div>
  )
}
