"use client"

import { useEffect, useState } from "react"

import { ContractSchema, SolideIDESchema } from "@/lib/contracts"

import { ChainListButton } from "../../ecosystem/contract-card/chain-list-button"
import { Playground } from "../../ecosystem/playground"

interface LoadPlaygroundProps extends React.HTMLAttributes<HTMLDivElement> {
  item: ContractSchema
}

export const LoadPlayground = ({ item }: LoadPlaygroundProps) => {
  const [contract, setContract] = useState<SolideIDESchema>(
    item.playground.default
  )

  useEffect(() => {
    setContract(item.playground.default)
  }, [item])

  const handlePlaygroundChange = (key: string) => {
    if (!item.playground.chains) return
    setContract(item.playground.chains[key])
  }

  return (
    <div className="mt-auto flex flex-col w-full">
      {item.playground.chains && (
        <ChainListButton
          items={Object.keys(item.playground.chains)}
          handleOnChange={handlePlaygroundChange}
        />
      )}
      <Playground item={item} contract={contract} />
    </div>
  )
}
