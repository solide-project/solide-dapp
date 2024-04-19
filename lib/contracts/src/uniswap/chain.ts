import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/contracts"

export const items: ContractSchema[] = [
  {
    title: `Uniswap V3 Staker`,
    tutorial:
      "https://github.com/Uniswap/docs/blob/main/docs/contracts/v3/reference/periphery/staker/UniswapV3Staker.md",
    reference:
      "https://docs.uniswap.org/contracts/v3/reference/periphery/staker/UniswapV3Staker",
    description:
      "The UniswapV3Staker smart contract part of the Uniswap V3 ecosystem, enable users to participate in liquidity mining incentives and stake their Uniswap V3 LP tokens. It offers a comprehensive set of functions for creating, managing, and ending liquidity mining programs, as well as facilitating the staking and unstaking of LP tokens.",
    playground: {
      default: {
        address: "0xe34139463ba50bd61336e0c446bd8c0867c6fe65",
        chainId: ChainID.ETHEREUM_MAINNET,
      },
      chains: {
        [ChainID.ETHEREUM_MAINNET]: {
          address: "0xe34139463ba50bd61336e0c446bd8c0867c6fe65",
        },
        [ChainID.ARBITRUM_ONE]: {
          address: "0xe34139463bA50bD61336E0c446Bd8C0867c6fE65",
        },
      },
    },
  },
  {
    title: `Uniswap Tick Lens`,
    tutorial:
      "https://github.com/Uniswap/docs/blob/main/docs/contracts/v3/reference/periphery/lens/TickLens.md",
    reference:
      "https://github.com/Uniswap/v3-periphery/blob/main/contracts/lens/TickLens.sol",
    description:
      "The TickLens smart contract, implements the ITickLens interface to provide a utility for retrieving detailed information about populated ticks within a Uniswap V3 pool's tick bitmap. By efficiently counting set bits in the bitmap and fetching corresponding tick data from the pool, it allows users to understand the distribution of liquidity at specific price levels (ticks) in a Uniswap V3 pool.",
    playground: {
      default: {
        address: "0x000000000022d473030f116ddee9f6b43ac78ba3",
        chainId: ChainID.ETHEREUM_MAINNET,
      },
    },
  },
  {
    title: `Uniswap Permit2 (On chain)`,
    tutorial:
      "https://github.com/Uniswap/docs/blob/main/docs/contracts/permit2/overview.md|https://github.com/dragonfly-xyz/useful-solidity-patterns/blob/main/patterns/permit2/README.md",
    reference: "https://github.com/Uniswap/permit2",
    description:
      "Permit2 combines SignatureTransfer for signature-based transfers and AllowanceTransfer for managing token allowances. SignatureTransfer grants temporary permissions during one-time signature transactions, while AllowanceTransfer enables users to set permissions for spenders on specific amounts and durations, validating subsequent transactions accordingly.",
    playground: {
      default: {
        address: "0xbfd8137f7d1516D3ea5cA83523914859ec47F573",
        chainId: ChainID.ETHEREUM_MAINNET,
      },
    },
  },
  {
    title: `Uniswap NFT Descriptor`,
    tutorial:
      "https://github.com/Uniswap/docs/blob/main/docs/contracts/v3/reference/periphery/libraries/NFTDescriptor.md",
    reference:
      "https://github.com/Uniswap/v3-periphery/blob/main/contracts/libraries/NFTDescriptor.sol",
    description:
      "The NFTDescriptor.sol file, functions as a critical component in generating token URIs for Non-Fungible Tokens (NFTs) representing liquidity positions in Uniswap V3 pools. It utilizes Solidity libraries for safe mathematical operations and string manipulation to construct detailed metadata, including the name, description, and SVG image, ensuring informative and visually appealing representations.",
    playground: {
      default: {
        address: "0x42B24A95702b9986e82d421cC3568932790A48Ec",
        chainId: ChainID.ETHEREUM_MAINNET,
      },
    },
  },
]
