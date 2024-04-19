"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { ContractSchema } from "@/lib/contracts"
import { ProtocolSchema } from "@/lib/systems"

import { ContractsList } from "../contract-list/contract-list"
import { ContributionCTA } from "../main/contribution-cta"
import { ProtocolHeader } from "./components/protocol-header"
import { ChainInfo } from "@/lib/systems/settings"

interface ContractPageProps extends React.HTMLAttributes<HTMLDivElement> {
  protocol: ProtocolSchema
  items: ContractSchema[]
  rpcSetting?: ChainInfo[]
  themeColour?: string
}

export const ContractPage = ({
  protocol,
  items,
  rpcSetting = [],
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
          <ProtocolHeader item={protocol} rpcSetting={rpcSetting} />
        </div>
        <ContractsList protocol={protocol} items={items} />
      </div>
      <div className="container my-14">
        <ContributionCTA className="border" />
      </div>
    </div>
  )
}
