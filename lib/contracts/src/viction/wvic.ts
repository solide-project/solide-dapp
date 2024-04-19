import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/contracts"

export const items: ContractSchema[] = [
  {
    title: "Wrapped Viction Implementation",
    description:
      "The WVIC (Wrapped Viction) contract implementation that acts as a bridge between native tokens and ERC-25 compliant tokens, allowing users to deposit native tokens and receive equivalent wrapped VRC25 tokens. It integrates the VRC25Permit library for efficient fee calculation and management. Users can deposit native tokens by sending them to the contract, which then mints an equivalent amount of wrapped tokens to the sender while deducting a fee. ",
    tutorial: "",
    reference:
      "https://github.com/BuildOnViction/wvic-token/blob/main/contracts/WVIC.sol",
    playground: {
      default: {
        address:
          "https://github.com/BuildOnViction/wvic-token/blob/main/contracts/WVIC.sol",
      },
    },
  },
  {
    title: "Wrapped Token: Wrapped Viction (WVIC)",
    description:
      "The WVIC (Wrapped Viction) deployed contract that acts as a bridge between native tokens and ERC-25 compliant tokens, allowing users to deposit native tokens and receive equivalent wrapped VRC25 tokens. It integrates the VRC25Permit library for efficient fee calculation and management. Users can deposit native tokens by sending them to the contract, which then mints an equivalent amount of wrapped tokens to the sender while deducting a fee.",
    tutorial: "",
    reference:
      "https://www.vicscan.xyz/token/0xC054751BdBD24Ae713BA3Dc9Bd9434aBe2abc1ce#code",
    playground: {
      default: {
        address: "0xC054751BdBD24Ae713BA3Dc9Bd9434aBe2abc1ce",
        chainId: ChainID.VICTION_MAINNET,
      },
    },
  },
  {
    title: "MoriSwap: SwapRouter",
    description:
      "The SwapRouter contract is designed to facilitate stateless execution of swaps against the Mori V3 protocol. It allows users to swap tokens efficiently by interacting with Moridex's liquidity pools. The contract is equipped with functionalities for exact input and exact output swaps, handling token swaps with multiple pools involved. It utilizes various libraries for safe mathematical operations, path decoding, pool address computation, callback validation, and more. Additionally, it incorporates features for fee payments and validation, along with deadline checks to ensure swaps are executed within a specified timeframe.",
    tutorial: "",
    reference: "",
    playground: {
      default: {
        address: "0x673DF37Bc1218d6a1fCa09CB1fDbD34803ec5230",
        chainId: ChainID.VICTION_MAINNET,
      },
    },
  },
  {
    title: "Wrapped ETH: TOMOE",
    description:
      "VIC-wrapped ETH, called TOMOE, is an ERC20 token hosted on the Ethereum blockchain and backed by an equal amount of native VIC (on the Viction blockchain). One TOMOE is worth the same as one native VIC at any given moment.",
    tutorial:
      "https://github.com/BuildOnViction/gitbook/blob/main/victionbridge/tomoe.md",
    reference: "https://docs.viction.xyz/victionbridge/tomoe",
    playground: {
      default: {
        address: "0x05d3606d5c81eb9b7b18530995ec9b29da05faba",
        chainId: ChainID.VICTION_MAINNET,
      },
    },
  },
]
