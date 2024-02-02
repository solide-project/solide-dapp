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

import { ChainListButton } from "./components/chain-list-button"
import { ContractIcon } from "./components/contract-icon"
import { LoadPlayground } from "./components/load-playground/load-playground"

interface ContractCardProps extends React.HTMLAttributes<HTMLDivElement> {
  item: ContractSchema
}

export const ContractCard = ({ item }: ContractCardProps) => {
  return (
    <Card className="border-none">
      <CardHeader className="p-8">
        <ContractIcon item={item} />
        <div className="pt-4">
          <CardTitle className="my-4">{item.title}</CardTitle>
          <CardDescription className="">{item.description}</CardDescription>
        </div>
      </CardHeader>
      <CardFooter>
        <LoadPlayground item={item} />
      </CardFooter>
    </Card>
  )
}
