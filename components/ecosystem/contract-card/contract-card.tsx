"use client"


import { ContractSchema } from "@/lib/contracts"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { ContractIcon } from "./contract-icon"
import { ContractInfo } from "./contract-info"
import { LoadPlayground } from "../../core/ide/load-playground"

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
