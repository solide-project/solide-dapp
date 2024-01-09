"use client";

import { ChainID } from "@/lib/chains/id";
import { ContractCardItems, ContractsList } from "../shared/contracts-list";
import { items as ETH_CONTRACTS } from "@/lib/contracts/arbitrum/ethereum";
import { items as OTHER_CONTRACTS } from "@/lib/contracts/arbitrum/other";
import { items as TUTORIAL_CONTRACTS } from "@/lib/contracts/arbitrum/tutorial";
import { useEffect, useState } from "react";

const items: ContractCardItems[] = [
    ...OTHER_CONTRACTS,
    ...TUTORIAL_CONTRACTS,
    ...ETH_CONTRACTS,
];


interface ArbitrumListProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

export const ArbitrumList = ({ }: ArbitrumListProps) => {
    const [uniswapTokenList, setUniswapTokenList] = useState<ContractCardItems[]>([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("https://tokenlist.arbitrum.io/ArbTokenLists/arbed_arb_whitelist_era.json");
            const data = await response.json();

            const uniswapTokenList: ContractCardItems[] = [];
            const shuffled = data.tokens.sort(() => 0.5 - Math.random());

            // Get sub-array of first n elements after shuffled
            let tokens = shuffled.slice(0, 50);
            tokens.forEach((token: any) => {
                uniswapTokenList.push({
                    title: `${token.name} (${token.symbol})`,
                    tutorial: "",
                    reference: "https://tokenlists.org/token-list?url=https://tokenlist.arbitrum.io/ArbTokenLists/arbed_arb_whitelist_era.json",
                    description: `${token.name} on Arbitrum. Powered by Uniswap's Token Lists, a community-led initiative to improve discoverability, reputation and trust in ERC20 token lists in a manner that is inclusive, transparent, and decentralized.`,
                    playground: {
                        default: {
                            address: token.address,
                            chainId: token.chainId,
                        }
                    },
                });
            })
            setUniswapTokenList(uniswapTokenList);
        })()
    }, [])

    return (
        <ContractsList items={items.concat(uniswapTokenList)} />
    )
}
