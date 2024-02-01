"use client"

import { ContractSchema, SolideIDESchema } from "@/lib/schema/contract";
import { Icon } from "@iconify/react"
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { ChainListButton } from "../chain-list-button";
import { Play } from "next/font/google";
import { Playground } from "./playground";

interface LoadPlaygroundProps extends React.HTMLAttributes<HTMLDivElement> {
    item: ContractSchema;
}

export const LoadPlayground = ({
    item,
}: LoadPlaygroundProps) => {
    const [contract, setContract] = useState<SolideIDESchema>(item.playground.default);

    const handlePlaygroundChange = (key: string) => {
        if (!item.playground.chains) return;
        setContract(item.playground.chains[key])
    }

    return <div className="mt-auto flex flex-col w-full">
        {item.playground.chains &&
            <ChainListButton items={Object.keys(item.playground.chains)}
                handleOnChange={handlePlaygroundChange} />}
        <Playground item={item} contract={contract} />
    </div>

}
