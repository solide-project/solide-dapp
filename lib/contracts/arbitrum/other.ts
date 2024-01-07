import { ContractCardItems } from "@/components/shared/contracts-list";
import { ChainID } from "@/lib/chains/id";


export const items: ContractCardItems[] = [
    {
        title: `0x: Exchange Proxy Governor`,
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/other/ZeroExGoverance.md",
        reference: "https://docs.0xprotocol.org/en/latest/architecture/governor.html",
        description: "A time-locked multi-signature wallet designed for secure governance. It enables the execution of critical administrative functions, including ownership transfers, and system administration. Through a multisignature mechanism and careful consideration of custom time locks, the contract ensures that changes are subject to consensus among authorized parties, enhancing the security and reliability of the 0x Protocol on Arbitrum blockchain.",
        playground: {
            default: {
                address: "0x1fe80d5ad9464dba2d60b88e449305f184823f8a",
                chainId: ChainID.ARBITRUM_ONE,
            },
        },
    },
    {
        title: `Biconomy Token (BICO)`,
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/other/BiconomyToken.md",
        reference: "",
        description: "The token for Biconomy on Arbitrum offering ERC-20 compatibility with a focus on interoperability between Layer 1 and Layer 2 of the Ethereum network. If not available in the corresponding Layer 1 contract, ensuring adaptability to variations in ERC-20 implementations.",
        outdated: true,
        playground: {
            default: {
                address: "0x3f770ac673856f105b586bb393d122721265ad46",
                chainId: ChainID.ARBITRUM_ONE,
            },
        },
    },
    {
        title: `Token Bridge: StandardArbERC20`,
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/other/StandardArbERC20.md",
        reference: "https://github.com/OffchainLabs/token-bridge-contracts/blob/main/contracts/tokenbridge/arbitrum/StandardArbERC20.sol",
        description: "From the OffchainLabs token-bridge-contracts repository, the smart contract is designed for managing ERC20 tokens on the Arbitrum Layer 2 scaling solution. It supports efficient token transfers between Layer 1 and Layer 2. With dynamic initialization and adaptive getter handling, the contract ensures compatibility, flexibility, and adaptability within the Arbitrum ecosystem, serving as a fundamental tool for ERC20 token management.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/OffchainLabs/token-bridge-contracts/main/contracts/tokenbridge/arbitrum/StandardArbERC20.sol",
            },
        },
    },
    {
        title: `1Inch: Aggregation Router V5`,
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/other/AggregationRouterV5.md",
        reference: "https://docs.1inch.io/docs/aggregation-protocol/smart-contract/AggregationRouterV5/",
        description: "The AggregationRouterV5 contract, is part of the 1inch Network which orchestrates a diverse array of routers for token swaps and incorporates the Limit Orders Protocol for advanced trading capabilities. It introduces features like fund rescue functionality to retrieve mistakenly sent tokens and an emergency contract destruction mechanism for urgent situations.",
        playground: {
            default: {
                address: "0x1111111254eeb25477b68fb85ed929f73a960582",
                chainId: ChainID.ARBITRUM_ONE,
            },
        },
    },
    {
        title: `Lyra Finance: Distributor`,
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/other/MultiDistributor.md",
        reference: "",
        description: "The MultiDistributor smart contract, created by Lyra Finance, serves as a comprehensive token distribution solution, allowing whitelisted addresses to efficiently create batches of token claims for specified users. Users can redeem their claims, and the contract provides insightful querying functions for users to assess claimable amounts and associated batch IDs, contributing to a transparent and secure token distribution process.",
        playground: {
            default: {
                address: "0x835f827e3d4ab11dd0b4a0b894b43b308a0e41ff",
                chainId: ChainID.ARBITRUM_ONE,
            },
        },
    },
    {
        title: `Paraswap v5: Augustus Swapper`,
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/other/MultiDistributor.md",
        reference: "https://v5.paraswap.io/#/",
        description: "ParaSwap contracts aims to provide users with the most favorable market prices by aggregating liquidity from various lending protocols with tokens adhering to the ERC-20 standard. This focus on compatibility with popular networks and standards enhances the platform's accessibility and utility for decentralized trading on Arbitrum.",
        playground: {
            default: {
                address: "0xdef171fe48cf0115b1d80b88dc8eab59176fee57",
                chainId: ChainID.ARBITRUM_ONE,
            },
        },
    },
    {
        title: `Galxe OAT: StarNFTV4`,
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/other/StarNFTV4.md",
        reference: "https://github.com/generalgalactic/ERC721S",
        description: "The StarNFTV4 smart contract by an Project Galaxy and of the ERC-721 standard, introducing a unique NFT structure called \"Star\" with individual owners and associated campaign IDs. It provides comprehensive functionalities for minting, transferring, and burning stars, with additional features such as flexible metadata management, minter access control, and customizable contract parameters. The contract prioritizes security considerations and ERC-721 compliance.",
        playground: {
            default: {
                address: "0x8659a4876369b94515a86048fe7f99daba6b9a7d",
                chainId: ChainID.ARBITRUM_ONE,
            },
        },
    },
    {
        title: `One Step Prover Math`,
        tutorial: "",
        reference: "https://github.com/OffchainLabs/nitro-contracts/blob/main/src/osp/OneStepProverMath.sol",
        description: "OneStepProverMath is a Fraud proof smart contract facilitating mathematical and logical operations within a VM, specifically designed for Arbitrum's layer 2 scaling solutions on Ethereum, incorporating functions for arithmetic, logical, and bitwise operations on 32-bit and 64-bit integers with error-handling mechanisms.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/OffchainLabs/nitro-contracts/main/src/osp/OneStepProverMath.sol",
            },
            chains: {
                [ChainID.ARBITRUM_ONE]: {
                    address: "0xb556F3Bb0FdCFeAf81a1c393e024a69a3327B676",
                    displaychain: ChainID.ETHEREUM_MAINNET,
                },
                [ChainID.ARBITRUM_NOVA]: {
                    address: "0x7a6C0503107858f82a790E481024134092e19979",
                    displaychain: ChainID.ETHEREUM_MAINNET,
                },
                [ChainID.ETHEREUM_GOERLI]: {
                    address: "0xFe18aB9B105a8C13Fbd67a0DaCb1C70e84Bb5d5E",
                },
                [ChainID.ETHEREUM_SEPOLIA]: {
                    address: "0xfEe5c93D21b1b036eD6C250ca08F274a1a7d42F4",
                }
            }
        },
    },
    {
        title: `One Step Prover Memory`,
        tutorial: "",
        reference: "https://github.com/OffchainLabs/nitro-contracts/blob/main/src/osp/OneStepProverMemory.sol",
        description: "OneStepProverMemory contract is a fraud proof contract for handling secure memory operations, including reads, writes, and size adjustments, within a virtual machine executing WebAssembly modules, incorporating Merkle proofs for verification.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/OffchainLabs/nitro-contracts/main/src/osp/OneStepProverMemory.sol",
            },

        },
    },
]