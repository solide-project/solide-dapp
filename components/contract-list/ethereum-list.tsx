"use client";

import { getExplorer } from "@/lib/chains/explorer";
import { ContractCardItems, ContractsList } from "../shared/contracts-list";
import { ChainID } from "@/lib/chains/id";
import { items as NFT_CONTRACTS } from "@/lib/contracts/ethereum/nft";
import { items as DEFI_CONTRACTS } from "@/lib/contracts/ethereum/defi";
import { items as TOKEN_CONTRACTS } from "@/lib/contracts/ethereum/token";

const chainId = ChainID.ETHEREUM_MAINNET;
const explorer = getExplorer(chainId);

const items: ContractCardItems[] = [
    ...NFT_CONTRACTS,
    ...DEFI_CONTRACTS,
    ...TOKEN_CONTRACTS
];

interface EthereumListProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

export const EthereumList = ({ children, className }: EthereumListProps) => {
    return (
        <ContractsList items={items.map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)} />
    )
}
