"use client";

import { ChainID } from "@/lib/chains/id";
import { ContractCardItems, ContractsList } from "../shared/contracts-list";
import { items as CCIP_CONTRACTS } from "@/lib/contracts/chainlink/ccip";
import { items as FUNCTION_CONTRACTS } from "@/lib/contracts/chainlink/function";
import { items as VRF_CONTRACTS } from "@/lib/contracts/chainlink/vrf";
import { items as ANYAPI_CONTRACTS } from "@/lib/contracts/chainlink/anyAPI";

const items: ContractCardItems[] = [
    {
        title: "PYUSD / USD Data Feed Oracle",
        tutorial: "",
        reference: "https://data.chain.link/ethereum/mainnet/stablecoins/pyusd-usd",
        description: "A Chainlink VRF v2-compatible smart contract on the Sepolia test network, emphasizing security considerations and providing an example contract for requesting and receiving random values.",
        playground: {
            default: {
                address: "0x8f1df6d7f2db73eece86a18b4381f4707b918fb1",
                chainId: ChainID.ETHEREUM_MAINNET,
            }
        },
    },
    {
        title: "Link Token",
        tutorial: "",
        reference: "https://data.chain.link/ethereum/mainnet/stablecoins/pyusd-usd",
        description: "A Chainlink VRF v2-compatible smart contract on the Sepolia test network, emphasizing security considerations and providing an example contract for requesting and receiving random values.",
        playground: {
            default: {
                address: "0x514910771af9ca656af840dff83e8264ecf986ca",
                chainId: ChainID.ETHEREUM_MAINNET,
            }
        },
    },
    {
        title: "Link Token",
        tutorial: "",
        reference: "https://data.chain.link/ethereum/mainnet/stablecoins/pyusd-usd",
        description: "A Chainlink VRF v2-compatible smart contract on the Sepolia test network, emphasizing security considerations and providing an example contract for requesting and receiving random values.",
        playground: {
            default: {
                address: "0x65Dcc24F8ff9e51F10DCc7Ed1e4e2A61e6E14bd6",
                chainId: ChainID.ETHEREUM_MAINNET,
            }
        },
    },
    ...CCIP_CONTRACTS,
    ...FUNCTION_CONTRACTS,
    ...VRF_CONTRACTS,
    ...ANYAPI_CONTRACTS
];

interface ChainlinkListProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

export const ChainlinkList = ({ children, className }: ChainlinkListProps) => {
    return (
        <ContractsList items={items.map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)} />
    )
}
