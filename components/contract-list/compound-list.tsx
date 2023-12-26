"use client";

import { getExplorer } from "@/lib/chains/explorer";
import { ContractCardItems, ContractsList } from "../shared/contracts-list";

const chainId = "1";
const explorer = getExplorer(chainId);

const COMPOUND_CUSDCv3_ETHER_CONTRACT = "0xc00e94Cb662C3520282E6f5717214004A7f26888";
const items: ContractCardItems[] = [
    {
        source: "https://raw.githubusercontent.com/compound-finance/compound-protocol/master/contracts/CErc20.sol",
        title: "CErc20",
        description: "Compound's CErc20 represents a token on the Compound protocol, wrapping an EIP-20 underlying asset with additional functionality for supplying, redeeming, borrowing, repaying, and liquidating assets, while also providing methods for managing reserves and handling ERC-20 token transfers.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/compound-finance/compound-protocol/master/contracts/CErc20.sol",
            }
        },
        reference: "https://docs.compound.finance/#protocol-contracts"
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
        title: "cUSDCv3",
        description: "Compound's cUSDCv3.",
        playground: {
            default: {
                address: COMPOUND_CUSDCv3_ETHER_CONTRACT,
            }
        },
        reference: `${explorer}/address/${COMPOUND_CUSDCv3_ETHER_CONTRACT}`
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
];

interface CompoundListProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

export const CompoundList = ({ children, className }: CompoundListProps) => {
    return (
        <ContractsList items={items} />
    )
}
