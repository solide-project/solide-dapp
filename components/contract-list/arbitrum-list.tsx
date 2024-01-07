"use client";

import { ChainID } from "@/lib/chains/id";
import { ContractCardItems, ContractsList } from "../shared/contracts-list";
import { items as ETH_CONTRACTS } from "@/lib/contracts/arbitrum/ethereum";
import { items as OTHER_CONTRACTS } from "@/lib/contracts/arbitrum/other";
import { items as TUTORIAL_CONTRACTS } from "@/lib/contracts/arbitrum/tutorial";

const items: ContractCardItems[] = [
    ...OTHER_CONTRACTS,
    ...TUTORIAL_CONTRACTS,
    ...ETH_CONTRACTS,
];


interface ArbitrumListProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

export const ArbitrumList = ({ }: ArbitrumListProps) => {
    return (
        <ContractsList items={items} />
    )
}
