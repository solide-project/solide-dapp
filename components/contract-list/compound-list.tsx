"use client";

import { getExplorer } from "@/lib/chains/explorer";
import { ContractCardItems, ContractsList } from "../shared/contracts-list";
import { ChainID } from "@/lib/chains/id";

const chainId = "1";
const explorer = getExplorer(chainId);

const COMPOUND_CUSDCv3_ETHER_CONTRACT = "0xc3d688B66703497DAA19211EEdff47f25384cdc3";
const COMPOUND_COMP_CONTRACT = "0xc3d688B66703497DAA19211EEdff47f25384cdc3";
const items: ContractCardItems[] = [
    {
        title: "CErc20",
        description: "Compound's CErc20 represents a token on the Compound protocol, wrapping an EIP-20 underlying asset with additional functionality for supplying, redeeming, borrowing, repaying, and liquidating assets, while also providing methods for managing reserves and handling ERC-20 token transfers.",
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/compound/cToken.md",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/compound-finance/compound-protocol/master/contracts/CErc20.sol",
            }
        },
        reference: "https://docs.compound.finance/#protocol-contracts"
    },
    {
        source: "https://raw.githubusercontent.com/compound-finance/comet/main/contracts/Comet.sol",
        title: "Comet",
        description: "The contract is an implementation of the core functionalities of the Comet money market protocol, inheriting from CometMainInterface.sol and utilizing delegate calls to CometExt.sol for specific functions, providing modularity and upgradability.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/compound-finance/comet/main/contracts/Comet.sol",
                version: "v0.8.15+commit.e14f2714"
            }
        },
        reference: "https://github.com/compound-finance/comet"
    },
    {
        source: "https://raw.githubusercontent.com/compound-finance/compound-protocol/master/contracts/CEther.sol",
        title: "CEther",
        description: "Wrapped Ether designed for interacting with Ether within the Compound protocol, featuring functionalities for minting, redeeming, borrowing, repaying, and liquidating assets, along with safety measures for Ether transfers and reserve management.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/compound-finance/compound-protocol/master/contracts/CEther.sol",
            }
        },
        reference: "https://docs.compound.finance/#protocol-contracts"
    },
    {
        source: "https://raw.githubusercontent.com/compound-finance/compound-protocol/master/contracts/PriceOracle.sol",
        title: "Price Oracle",
        description: "Price oracle providing a method to retrieve the underlying price of a given cToken asset.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/compound-finance/compound-protocol/master/contracts/PriceOracle.sol",
            }
        },
        reference: "https://docs.compound.finance/#protocol-contracts"
    },
    {
        source: "https://raw.githubusercontent.com/compound-finance/compound-protocol/master/contracts/Timelock.sol",
        title: "Timelock",
        description: "Time-delayed execution system with an admin control mechanism, enabling the scheduling, cancellation, and execution of transactions.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/compound-finance/compound-protocol/master/contracts/Timelock.sol",
            }
        },
        reference: "https://docs.compound.finance/#protocol-contracts"
    },
    {
        source: "https://docs.compound.finance/#protocol-contracts",
        title: "cUSDCv3 (Proxy)",
        description: "Compound's cUSDCv3.",
        playground: {
            default: {
                address: COMPOUND_CUSDCv3_ETHER_CONTRACT,
                chainId: ChainID.ETHEREUM_MAINNET,
            }
        },
        reference: `${explorer}/address/${COMPOUND_CUSDCv3_ETHER_CONTRACT}`
    },
    {
        source: "https://docs.compound.finance/#protocol-contracts",
        title: "COMP",
        description: "COMP Token",
        playground: {
            default: {
                address: COMPOUND_COMP_CONTRACT,
                chainId: ChainID.ETHEREUM_MAINNET,
            },
            chains: {
                [ChainID.ETHEREUM_MAINNET]: {
                    address: COMPOUND_COMP_CONTRACT,
                },
                [ChainID.ETHEREUM_GOERLI]: {
                    address: "0x3587b2F7E0E2D6166d6C14230e7Fe160252B0ba4",
                },
            }
        },
        reference: `${explorer}/address/${COMPOUND_COMP_CONTRACT}`
    },
    {
        source: "https://raw.githubusercontent.com/compound-finance/compound-protocol/master/contracts/CToken.sol",
        title: "CToken",
        description: "CToken smart contract implements a decentralized financial protocol enabling users to lend, borrow, redeem, repay, liquidate, and administer the protocol through various functions, with a focus on ensuring safe and controlled token transfers and interest rate model updates.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/compound-finance/compound-protocol/master/contracts/CToken.sol",
            }
        },
        reference: "https://compound.finance/Developers#ctokens"
    },
    {
        source: "https://raw.githubusercontent.com/compound-finance/compound-protocol/master/contracts/CToken.sol",
        title: "Price Oracle",
        description: "Price Oracle.",
        playground: {
            default: {
                address: "0x0238247E71AD0aB272203Af13bAEa72e99EE7c3c",
                chainId: ChainID.ETHEREUM_MAINNET,
            }
        },
        reference: "https://compound.finance/Developers#ctokens"
    },
    {
        source: "https://raw.githubusercontent.com/compound-finance/compound-protocol/master/contracts/CToken.sol",
        title: "Uniswap Anchored View",
        description: "Uniswap Anchored View.",
        playground: {
            default: {
                address: "0x50ce56A3239671Ab62f185704Caedf626352741e",
                chainId: ChainID.ETHEREUM_MAINNET,
            }
        },
        reference: "https://compound.finance/Developers#ctokens"
    },
];

interface CompoundListProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

export const CompoundList = ({ children, className }: CompoundListProps) => {
    return (
        <ContractsList items={items} />
    )
}
