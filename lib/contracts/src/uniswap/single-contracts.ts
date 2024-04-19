import { ContractSchema } from "@/lib/contracts"

export const items: ContractSchema[] = [
  {
    title: "Uniswap View Quoter v3: Quoter",
    description:
      "The Quoter contract facilitates precise quoting of token swaps using Uniswap v3 smart contracts, allowing users to estimate the input or output amounts, obtain the current square root price, and determine the gas estimate for a given transaction.",
    tutorial:
      "https://github.com/Uniswap/view-quoter-v3/blob/064967017bd1a0df11e9d71ff024b29584aafaa5/README.md|https://github.com/Uniswap/docs/blob/main/docs/contracts/v3/reference/periphery/lens/QuoterV2.md",
    reference:
      "https://docs.uniswap.org/contracts/v3/reference/periphery/lens/QuoterV2",
    playground: {
      default: {
        address:
          "https://github.com/Uniswap/view-quoter-v3/blob/master/contracts/Quoter.sol",
        remappings: {
          "v3-core/": "@uniswap/v3-core/",
          "v3-periphery/": "@uniswap/v3-periphery/",
        },
      },
    },
  },
  {
    title: "Uniswap: Flash Swap",
    description:
      "The ExampleFlashSwap contract facilitates flash swaps between Uniswap V1 and V2, allowing users to obtain tokens or ETH from a V2 flash swap, swap them on a V1 exchange, repay the V2 swap, and keep the remaining tokens or ETH.",
    tutorial:
      "https://github.com/Uniswap/docs/blob/main/docs/contracts/v2/guides/smart-contract-integration/05-using-flash-swaps.md",
    reference:
      "https://docs.uniswap.org/contracts/v2/guides/smart-contract-integration/using-flash-swaps",
    playground: {
      default: {
        address:
          "https://github.com/Uniswap/v2-periphery/blob/master/contracts/examples/ExampleFlashSwap.sol",
      },
    },
  },
  {
    title: "Uniswap Market Depth v3: Depth",
    description:
      "In Uniswap v3, market depth is calculated by summing the liquidity provided by liquidity providers within a specific price range, enabling traders to assess available liquidity more precisely and optimize trading strategies accordingly.",
    tutorial: "https://github.com/Uniswap/marketdepth-v3/blob/main/README.md",
    reference: "https://github.com/Uniswap/marketdepth-v3",
    playground: {
      default: {
        address:
          "https://github.com/Uniswap/marketdepth-v3/blob/main/src/Depth.sol",
        remappings: {
          "v3-core/": "@uniswap/v3-core@1.0.0/",
        },
      },
    },
  },
]
