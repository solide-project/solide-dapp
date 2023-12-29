"use client";

import { ChainID } from "@/lib/chains/id";
import { ContractCardItems, ContractsList } from "../shared/contracts-list";
import { items as TOKEN_CONTRACTS } from "@/lib/contracts/metis/token";
import { items as OTHER_CONTRACTS } from "@/lib/contracts/metis/other";
import { items as REPO_CONTRACTS } from "@/lib/contracts/metis/repo";

const items: ContractCardItems[] = [
    ...TOKEN_CONTRACTS,
    ...OTHER_CONTRACTS,
    ...REPO_CONTRACTS,
];


interface MetisListProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

export const MetisList = ({ }: MetisListProps) => {
    return (
        <ContractsList items={items} />
    )
}
