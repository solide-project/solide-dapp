"use client"

import { Icon } from "@iconify/react"

import { getIconByChainId } from "@/lib/chains/icon"
import { ChainID } from "@/lib/chains/id"
import { SUPPORTED_CHAIN, cn } from "@/lib/utils"

import { HoverIcons } from "./hover-icon"
import Link from "next/link"

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

interface InformationTabProps extends React.HTMLAttributes<HTMLDivElement> {}

export const InformationTab = ({ className }: InformationTabProps) => {
  return (
    <section
      className={cn(
        "font-semibold text-4xl tracking-tight lg:text-5xl flex items-center justify-center text-center my-32",
        className
      )}
    >
      <span className="leading-relaxed	">
        With
        <Link href="#ide">
          <HoverIcons text="Solide" />
        </Link>
        , you can interact and deploy smart contracts on 90+
        <Link href={SUPPORTED_CHAIN} target="_blank">
          <HoverIcons
            text="Chains"
            background="bg-orange-400"
            images={chainImages}
          />
        </Link>
        and support for over 24
        <HoverIcons
          text="Protocols"
          background="bg-green-400"
          images={protocolImages}
        />
      </span>
    </section>
  )
}
