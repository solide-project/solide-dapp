"use client";

import { getExplorer } from "@/lib/chains/explorer";
import { ContractCardItems, ContractsList } from "../shared/contracts-list";
import { ChainID } from "@/lib/chains/id";

const chainId = "1";
const explorer = getExplorer(chainId);

const Tether_CONTRACT = "0xdac17f958d2ee523a2206206994597c13d831ec7";
const Link_CONTRACT = "0x514910771af9ca656af840dff83e8264ecf986ca";
const ArbitrumBridge_CONTRACT = "0x1066cecc8880948fe55e427e94f1ff221d626591";
const WrappedEth_CONTRACT = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
const ETHRegistrarController_CONTRACT = "0x253553366da8546fc250f225fe3d25d0c782303b";
const OptimismPortal_CONTRACT = "0x5fb30336a8d0841cf15d452afa297cb6d10877d7";

const items: ContractCardItems[] = [
    {
        title: "Tether Token (USDT)",
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/ethereum/TetherToken.md",
        description: "Tether (USDT) is a widely used stablecoin implemented as an Ethereum-based smart contract, providing a blockchain representation of fiat currencies, with each token pegged to the value of one US dollar.",
        playground: {
            default: {
                address: Tether_CONTRACT,
            }
        },
    },
    {
        title: "Link Token (LINK)",
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/ethereum/LinkToken.md",
        description: "The LINK token is the native cryptocurrency of the Chainlink decentralized oracle network, serving as a utility token to pay for data retrieval and smart contract execution services, enabling secure and reliable connections between smart contracts and external data sources.",
        playground: {
            default: {
                address: Link_CONTRACT,
            }
        },
    },
    // {
    //     title: "ETH Registrar Controller (ENS)",
    //     description: "The Arbitrum Bridge facilitates interoperability between the Ethereum and Arbitrum blockchains, allowing users to seamlessly transfer assets and interact with decentralized applications (DApps) across both networks.",
    //     playground: {
    //         default: {
    //             address: ETHRegistrarController_CONTRACT,
    //             chainId: ChainID.ETHEREUM_MAINNET
    //         }
    //     },
    //     reference: `${explorer}/address/${ETHRegistrarController_CONTRACT}`
    // },
    {
        title: "Arbitrum Bridge",
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/ethereum/ArbitrumBridge.md",
        description: "The Arbitrum Bridge facilitates interoperability between the Ethereum and Arbitrum blockchains, allowing users to seamlessly transfer assets and interact with decentralized applications (DApps) across both networks.",
        playground: {
            default: {
                address: ArbitrumBridge_CONTRACT,
            }
        },
    },
    {
        title: "Wrapped Ether (WETH9)",
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/ethereum/WrappedEther.md",
        description: "Wrapped Ether (WETH9) is an Ethereum-based ERC-20 token representing Ether (ETH) on the Ethereum blockchain, allowing it to be traded and utilized in decentralized finance (DeFi) applications with the same ease as other ERC-20 tokens.",
        playground: {
            default: {
                address: WrappedEth_CONTRACT,
            }
        },
    },
    {
        title: "Optimism Portal",
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/ethereum/OptimismPortal.md",
        description: "OptimismPortal is a crucial part of the Optimism Layer 2 scaling solution for Ethereum, facilitating secure communication between L1 and L2. It manages deposits, withdrawals, and ensures non-replayable messages with features like aliasing contract addresses and gas limit validation. The contract is essential for the Optimism network, providing a robust infrastructure for efficient cross-domain communication.",
        playground: {
            default: {
                address: OptimismPortal_CONTRACT,
            }
        },
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
