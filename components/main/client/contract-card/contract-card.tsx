"use client"

import { ContractSchema } from "@/lib/schema/contract"
import { Icon } from "@iconify/react"
import { ContractIcon } from "./components/contract-icon"
import { useEffect } from "react"
import { addVersion } from "@/lib/utils/construct-link"
import { ChainListButton } from "./components/chain-list-button"
import { LoadPlayground } from "./components/load-playground/load-playground"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface ContractCardProps extends React.HTMLAttributes<HTMLDivElement> {
    item: ContractSchema
}

export const ContractCard = ({
    item,
}: ContractCardProps) => {
    const selectedChainId = "foo";

    useEffect(() => {
        // addVersion(item.playground.chains?[selectedChainId].version)
    }, [item])

    return (
        <Card className="border-none">
            <CardHeader className="p-8">
                <ContractIcon link={item.playground.default.address} />
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
