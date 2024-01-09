"use client";

import { getExplorer } from "@/lib/chains/explorer";
import { ContractCardItems, ContractsList } from "../shared/contracts-list";
import { ChainID } from "@/lib/chains/id";
import { items as NFT_CONTRACTS } from "@/lib/contracts/ethereum/nft";
import { items as DEFI_CONTRACTS } from "@/lib/contracts/ethereum/defi";
import { items as TOKEN_CONTRACTS } from "@/lib/contracts/ethereum/token";
import { items as UNISWAP_TOKEN_ITEMS } from "@/lib/contracts/ethereum/uniswap-token-list";

import { useEffect, useState } from "react";

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
    const [uniswapTokenList, setUniswapTokenList] = useState<ContractCardItems[]>([]);

    useEffect(() => {
        (async () => {
            const uniswapTokenList = await UNISWAP_TOKEN_ITEMS();
            console.log(uniswapTokenList)
            setUniswapTokenList(uniswapTokenList);
        })()
    }, [])

    return (
        <ContractsList items={items
            .concat(uniswapTokenList)} />
    )
}
