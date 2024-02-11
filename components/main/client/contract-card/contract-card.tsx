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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ChainListButton } from "./components/chain-list-button"
import { ContractIcon } from "./components/contract-icon"
import { LoadPlayground } from "./components/load-playground/load-playground"
import { ContractInfo } from "./components/contract-info"

interface ContractCardProps extends React.HTMLAttributes<HTMLDivElement> {
  item: ContractSchema
}

export const ContractCard = ({ item }: ContractCardProps) => {
  return (
    <Card className="border-none">
      <CardHeader className="p-8">
        <div className="flex items-center justify-between">
          <ContractIcon item={item} />
          <ContractInfo info={item.outdated} />
        </div>
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
