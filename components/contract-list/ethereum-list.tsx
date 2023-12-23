"use client";

import { getExplorer } from "@/lib/chains/explorer";
import { ContractCardItems, ContractsList } from "../shared/contracts-list";

const chainId = "1";
const explorer = getExplorer(chainId);

const TETHER_CONTRACT = "0xdac17f958d2ee523a2206206994597c13d831ec7";
const LINK_CONTRACT = "0x514910771af9ca656af840dff83e8264ecf986ca";
const ARBITRUM_BRIDGE_CONTRACT = "0x8315177ab297ba92a06054ce80a67ed4dbd7ed3a";
const WRAPPED_ETHER_CONTRACT = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
const ENS_REGISTRAR_CONTRACT = "0xa58e81fe9b61b5c3fe2afd33cf304c454abfc7cb";
const items: ContractCardItems[] = [
    {
        source: `${explorer}/address/${TETHER_CONTRACT}`,
        title: "TetherToken",
        description: "Tether (USDT) is a widely used stablecoin implemented as an Ethereum-based smart contract, providing a blockchain representation of fiat currencies, with each token pegged to the value of one US dollar.",
        playground: {
            default: {
                address: TETHER_CONTRACT,
            }
        },
        reference: `${explorer}/address/${TETHER_CONTRACT}`
    },
    {
        source: `${explorer}/address/${LINK_CONTRACT}`,
        title: "LinkToken",
        description: "The LINK token is the native cryptocurrency of the Chainlink decentralized oracle network, serving as a utility token to pay for data retrieval and smart contract execution services, enabling secure and reliable connections between smart contracts and external data sources.",
        playground: {
            default: {
                address: LINK_CONTRACT,
            }
        },
        reference: `${explorer}/address/${LINK_CONTRACT}`
    },
    {
        source: `${explorer}/address/${ARBITRUM_BRIDGE_CONTRACT}`,
        title: "Arbitrum Bridge",
        description: "The Arbitrum Bridge facilitates interoperability between the Ethereum and Arbitrum blockchains, allowing users to seamlessly transfer assets and interact with decentralized applications (DApps) across both networks.",
        playground: {
            default: {
                address: ARBITRUM_BRIDGE_CONTRACT,
            }
        },
        reference: `${explorer}/address/${ARBITRUM_BRIDGE_CONTRACT}`
    },
    {
        source: `${explorer}/address/${ENS_REGISTRAR_CONTRACT}`,
        title: "ENS Registrar",
        description: "The Arbitrum Bridge facilitates interoperability between the Ethereum and Arbitrum blockchains, allowing users to seamlessly transfer assets and interact with decentralized applications (DApps) across both networks.",
        playground: {
            default: {
                address: "0xa58e81fe9b61b5c3fe2afd33cf304c454abfc7cb",
            }
        },
        reference: `${explorer}/address/${ENS_REGISTRAR_CONTRACT}`
    },
    {
        source: `${explorer}/address/${WRAPPED_ETHER_CONTRACT}`,
        title: "Wrapped Ether",
        description: "Wrapped Ether (WETH) is an Ethereum-based ERC-20 token representing Ether (ETH) on the Ethereum blockchain, allowing it to be traded and utilized in decentralized finance (DeFi) applications with the same ease as other ERC-20 tokens.",
        playground: {
            default: {
                address: WRAPPED_ETHER_CONTRACT,
            }
        },
        reference: `${explorer}/address/${WRAPPED_ETHER_CONTRACT}`
    },
];


interface EthereumListProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

export const EthereumList = ({ children, className }: EthereumListProps) => {
    return (
        <ContractsList items={items} />
    )
}
