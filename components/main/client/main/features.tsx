"use client"

import { useEffect } from "react"
import { Icon } from "@iconify/react"

import { ContractSchema } from "@/lib/schema/contract"
import { addVersion } from "@/lib/utils/construct-link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { HoverIcons } from "./hover-icon"
import { ChainID } from "@/lib/chains/id"
import { getIconByChainId } from "@/lib/chains/icon"

const items = [
  {
    icon: <Icon icon="ph:currency-eth" inline={true} height={48} />,
    title: "EVM and Metamask",
    description:
      "Integrated with Metamask, so you can deploy from all EVM chains.",
  },
  {
    icon: <Icon icon="lucide:scroll" inline={true} height={48} />,
    title: "Contracts",
    description:
      "Compatible with Chainlink Oracle Contract, OpenZeppelin, and many more open source contracts.",
  },
  {
    icon: <Icon icon="solar:widget-bold" inline={true} height={48} />,
    title: "Extension",
    description:
      "Lightweight Solidity IDE, that can be integrated into your website, tutorials. Use Solide to demo smart contract, teach Solidity, or just to play around.",
  },
]

const chainImages = [
  ChainID.ETHEREUM_MAINNET,
  ChainID.METIS_ANDROMEDA,
  ChainID.POLYGON_MAINNET,
  ChainID.AVALANCHE_MAINNET,
  ChainID.FANTOM_MAINNET,
  ChainID.CELO_MAINNET,
].map((value) => getIconByChainId(value))

const protocolImages = [
  "artela",
  "0x",
  "aave",
  "uniswap",
  "compound",
  "chainlink",
].map((value) => `/icons/${value}.svg`)

interface FeaturesProps extends React.HTMLAttributes<HTMLDivElement> { }

export const Features = ({
  className,
}: FeaturesProps) => {
  return (
    <div className={cn("text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-16", className)}>
      <span className="leading-relaxed	">
        With
        <a href="#ide"><HoverIcons text="Solide" /></a>,
        you can interact and deploy smart contracts on 90+
        <a href="https://github.com" target="_blank"><HoverIcons text="Chains" background="bg-orange-400" images={chainImages} /></a>
        and support for over 24
        <HoverIcons text="Protocols" background="bg-green-400" images={protocolImages} />
      </span>
    </div>
  )
}
