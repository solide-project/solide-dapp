import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { ContractSchema } from "@/lib/contracts"
import { camelToWord } from "@/lib/utils"

const getAPI = (chain: string) => {
  switch (chain) {
    case ChainID.ETHEREUM_MAINNET:
      return "mainnet"
    case ChainID.AVALANCHE_MAINNET:
      return "avalanche"
    case ChainID.ARBITRUM_ONE:
      return "arbitrum"
    case ChainID.BNB_MAINNET:
      return "bsc"
    case ChainID.BASE_MAINNET:
      return "base"
    case ChainID.CELO_MAINNET:
      return "celo"
    case ChainID.POLYGON_MAINNET:
      return "polygon"
    default:
      return ""
  }
}

export const items = async (chain: string) => {
  const id = getAPI(chain)
  if (!id) {
    return []
  }

  const response = await fetch(
    `https://raw.githubusercontent.com/Uniswap/universal-router/main/deploy-addresses/${id}.json`
  )
  const data: Record<string, string> = await response.json()

  const networkName = getNetworkNameFromChainID(chain)
  const ret: ContractSchema[] = []
  Object.entries(data).forEach(([key, val]) => {
    const formattedName = camelToWord(key)
    ret.push({
      title: `Universal Router: ${formattedName}`,
      tutorial:
        "https://github.com/Uniswap/docs/blob/main/docs/contracts/universal-router/01-overview.md|https://github.com/Uniswap/docs/blob/main/docs/contracts/universal-router/02-technical-reference.md",
      reference: "https://docs.uniswap.org/contracts/universal-router/overview",
      description: `${formattedName} Router Contract on ${networkName}. The UniversalRouter is a decentralized exchange router supporting ETH, ERC20, and NFT swaps, capable of aggregating trades across various protocols for highly personalized transactions. Operating as an unowned and non-upgradable contract, it offers users a wide range of functionalities, including splitting and interleaving Uniswap trades, purchasing NFTs from eight marketplaces, partial fills of trades, wrapping and unwrapping ETH, and time-bound token approvals using Permit2.`,
      playground: {
        default: {
          address: val,
          chainId: chain,
        },
      },
      outdated: `${key.toLowerCase().includes("unsupported") ? "Outdated and unsupported" : ""}`,
    })
  })

  return ret
}
