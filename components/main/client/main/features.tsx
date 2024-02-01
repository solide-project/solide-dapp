"use client"

import { ContractSchema } from "@/lib/schema/contract"
import { Icon } from "@iconify/react"
import { useEffect } from "react"
import { addVersion } from "@/lib/utils/construct-link"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

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


interface FeaturesProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const Features = ({
}: FeaturesProps) => {
    return <div className="container max-w-[90%] lg:max-w-7xl m-auto py-24 lg:py-48">
        <div className="grid grid-cols-12 gap-5">
            {items.map((item, index) => {
                return (
                    <div key={index} className="col-span-12 md:col-span-4">
                        <Card className="border-none shadow-none">
                            <CardHeader className="p-8">
                                {item.icon}

                                <CardHeader className="p-0 pt-12 mb-8 text-2xl font-bold">{item.title}</CardHeader>
                                <div>
                                    {item.description}
                                </div>
                            </CardHeader>
                        </Card>
                    </div>
                )
            })}
        </div>
    </div>
}
