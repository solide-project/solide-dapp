"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Icon } from "@iconify/react"
import { isAddress } from "viem"

import { getExplorer } from "@/lib/chains/explorer"
import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/contracts"

interface ContractIconProps extends React.HTMLAttributes<HTMLDivElement> {
  item: ContractSchema
}

export const isTronAddress = (address: string): boolean =>
  address.substring(0, 1) === "T" && address.length === 34

export const isXDCAddress = (address: string) =>
  address.startsWith("xdc") && address.length === 43

export const ContractIcon = ({ item }: ContractIconProps) => {
  const [icon, setIcon] = useState<string>("iconoir:github")
  const [link, setLink] = useState<string>(item.playground.default.address)
  const isContractAddress = (link: string): boolean =>
    isAddress(link) || isTronAddress(link) || isXDCAddress(link)

  useEffect(() => {
    setLink(item.playground.default.address)
    if (isContractAddress(item.playground.default.address)) {
      setIcon("bi:box")
      setLink(
        `${getExplorer(item.playground.default.chainId || ChainID.ETHEREUM_MAINNET)}/address/${item.playground.default.address}`
      )
    }
  }, [item])

  return (
    <Link href={link} target="_blank">
      <Icon
        className="cursor-pointer hover:text-primary"
        height={48}
        icon={icon}
      />
    </Link>
  )
}
