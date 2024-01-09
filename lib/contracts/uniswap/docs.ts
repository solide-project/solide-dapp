import { ContractCardItems } from "@/components/shared/contracts-list";
import { ChainID } from "@/lib/chains/id";

export const items: ContractCardItems[] = [
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
    {
        title: `Uniswap V3 Pool`,
        tutorial: "https://github.com/Uniswap/docs/blob/main/docs/contracts/v3/reference/core/UniswapV3Pool.md",
        reference: "https://docs.uniswap.org/contracts/v3/reference/core/UniswapV3Pool",
        description: "A time-locked multi-signature wallet designed for secure governance. It enables the execution of critical administrative functions, including ownership transfers, and system administration. Through a multisignature mechanism and careful consideration of custom time locks, the contract ensures that changes are subject to consensus among authorized parties, enhancing the security and reliability of the 0x Protocol on Arbitrum blockchain.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/Uniswap/v3-core/main/contracts/UniswapV3Pool.sol",
            },
        },
    },
]