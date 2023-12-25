"use client";

import { ContractCardItems, ContractsList } from "../shared/contracts-list";

const items: ContractCardItems[] = [
    {
        source: "https://docs.uniswap.org/contracts/v3/guides/swaps/single-swaps#a-complete-single-swap-contract",
        title: "Single Swap",
        description: "Facilitates single swaps on the Uniswap protocol, allowing users to exchange DAI for WETH9 with both exact input and exact output functionalities.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/uniswap/SingleSwap.sol",
            }
        },
        reference: "https://docs.uniswap.org/contracts/v3/guides/swaps/single-swaps#a-complete-single-swap-contract"
    },
    {
        source: "https://docs.uniswap.org/contracts/v3/guides/swaps/multihop-swaps",
        title: "Multihop Swaps",
        description: "Facilitates multi-hop swaps on the Uniswap v3 protocol, allowing users to perform exact input and exact output swaps involving multiple tokens, such as swapping DAI for WETH9 through intermediary USDC swaps, with the contract implementing the necessary functionalities for these operations.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/uniswap/MultihopSwap.sol",
            }
        },
        reference: "https://docs.uniswap.org/contracts/v3/guides/swaps/multihop-swaps"
    },
    {
        source: "https://docs.uniswap.org/contracts/permit2/reference/signature-transfer",
        title: "SignatureTransfer",
        description: "The guide outlines making an HTTP GET request from a smart contract using Chainlink to receive a single-word response, highlighting the use of Chainlink Functions and prerequisites for the Chainlink Basic Request Model.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/Uniswap/permit2/main/src/SignatureTransfer.sol",
                version: "v0.8.17+commit.8df45f5f"
            }
        },
        reference: "hhttps://docs.uniswap.org/contracts/permit2/reference/signature-transfer",
    },
    {
        source: "https://github.com/Uniswap/permit2/blob/main/src/AllowanceTransfer.sol",
        title: "AllowanceTransfer",
        description: "The guide outlines making an HTTP GET request from a smart contract using Chainlink to receive a single-word response, highlighting the use of Chainlink Functions and prerequisites for the Chainlink Basic Request Model.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/Uniswap/permit2/main/src/AllowanceTransfer.sol",
                version: "v0.8.17+commit.8df45f5f"
            }
        },
        reference: "https://docs.uniswap.org/contracts/permit2/reference/allowance-transfer",
    },
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
    return (
        <ContractsList items={items} />
    )
}
