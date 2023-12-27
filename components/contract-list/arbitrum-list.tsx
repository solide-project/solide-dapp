"use client";

import { ChainID } from "@/lib/chains/id";
import { ContractCardItems, ContractsList } from "../shared/contracts-list";

const items: ContractCardItems[] = [
    {
        source: "https://docs.uniswap.org/contracts/v3/guides/swaps/single-swaps#a-complete-single-swap-contract",
        title: "Single Swap",
        description: "Facilitates single swaps on the Uniswap protocol, allowing users to exchange DAI for WETH9 with both exact input and exact output functionalities.",
        playground: {
            default: {
                address: "0x9B4F541D6A82Beb594Ee2A1EfF14d88f2898176c",
                chainId: ChainID.ETHEREUM_GOERLI,
            },

        },
        reference: "https://docs.uniswap.org/contracts/v3/guides/swaps/single-swaps#a-complete-single-swap-contract"
    },
    {
        source: "https://raw.githubusercontent.com/OffchainLabs/nitro-contracts/main/src/osp/OneStepProverMath.sol",
        title: "One Step Prover Math",
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
        reference: "https://docs.uniswap.org/contracts/v3/guides/swaps/single-swaps#a-complete-single-swap-contract"
    },
    {
        source: "https://raw.githubusercontent.com/OffchainLabs/nitro-contracts/main/src/osp/OneStepProverMemory.soll",
        title: "One Step Prover Memory",
        description: "OneStepProverMemory contract is a fraud proof contract for handling secure memory operations, including reads, writes, and size adjustments, within a virtual machine executing WebAssembly modules, incorporating Merkle proofs for verification.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/OffchainLabs/nitro-contracts/main/src/osp/OneStepProverMemory.sol",
            },

        },
        reference: "https://github.com/OffchainLabs/nitro-contracts/blob/main/src/osp/OneStepProverMemory.sol/"
    },
];


interface ArbitrumListProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

export const ArbitrumList = ({ }: ArbitrumListProps) => {
    return (
        <ContractsList items={items} />
    )
}
