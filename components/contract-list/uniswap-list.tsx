"use client";

import { useEffect, useState } from "react";
import { ContractCardItems, ContractsList } from "../shared/contracts-list";
import { items as DOC_ITEMS } from "@/lib/contracts/uniswap/docs";
import { items as CHAIN_ITEMS } from "@/lib/contracts/uniswap/chain";
import { items as UNISWAP_TOKEN_ITEMS } from "@/lib/contracts/uniswap/uniswap-token-list";

const items: ContractCardItems[] = [
    ...DOC_ITEMS,
    ...CHAIN_ITEMS,
    // {
    //     source: "https://raw.githubusercontent.com/Uniswap/v3-periphery/697c2474757ea89fec12a4e6db16a574fe259610/contracts/examples/PairFlash.sol",
    //     title: "Pair Flash",
    //     description: "The guide outlines making an HTTP GET request from a smart contract using Chainlink to receive a single-word response, highlighting the use of Chainlink Functions and prerequisites for the Chainlink Basic Request Model.",
    //     playground: {
    //         default: {
    //             address: "https://raw.githubusercontent.com/Uniswap/v3-periphery/697c2474757ea89fec12a4e6db16a574fe259610/contracts/examples/PairFlash.sol",
    //             version: "v0.8.17+commit.8df45f5f"
    //         }
    //     },
    //     reference: "https://github.com/Uniswap/v3-periphery/tree/697c2474757ea89fec12a4e6db16a574fe259610",
    // },
    // {
    //     source: "https://docs.uniswap.org/contracts/v3/guides/providing-liquidity/setting-up",
    //     title: "SafeProtocolManager",
    //     description: "The guide outlines making an HTTP GET request from a smart contract using Chainlink to receive a single-word response, highlighting the use of Chainlink Functions and prerequisites for the Chainlink Basic Request Model.",
    //     playground: {
    //         default: {
    //             address: "https://raw.githubusercontent.com/safe-global/safe-core-protocol/main/contracts/SafeProtocolManager.sol",
    //             version: "v0.8.17+commit.8df45f5f"
    //         }
    //     },
    //     reference: "https://docs.chain.link/any-api/get-request/examples/single-word-response",
    // },
];


interface UniswapListProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

export const UniswapList = ({ }: UniswapListProps) => {
    const [uniswapTokenList, setUniswapTokenList] = useState<ContractCardItems[]>([]);

    useEffect(() => {
        (async () => {
            const uniswapTokenList = await UNISWAP_TOKEN_ITEMS();
            setUniswapTokenList(uniswapTokenList);
        })()
    }, [])

    return (
        <ContractsList items={items
            .concat(uniswapTokenList)} />
    )
}
