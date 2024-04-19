import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { TokenInfo } from "@/lib/contracts/src/uniswap/uniswap-token-list"
import { ContractSchema } from "@/lib/contracts"

const getAPI = (chain: string) => {
  switch (chain) {
    case ChainID.ETHEREUM_MAINNET:
      return "mainnet"
    case ChainID.AVALANCHE_MAINNET:
      return "avalanche"
    case ChainID.ARBITRUM_ONE:
      return "arbitrum"
    case ChainID.BNB_MAINNET:
      return "bnb"
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
    `https://raw.githubusercontent.com/Uniswap/default-token-list/main/src/tokens/${id}.json`
  )
  const data: TokenInfo[] = await response.json()

  const ret: ContractSchema[] = []
  const networkName = getNetworkNameFromChainID(chain)
  data.forEach((token: TokenInfo) => {
    ret.push({
      title: `Uniswap Default Token List: ${token.name} (${token.symbol})`,
      tutorial:
        "https://github.com/Uniswap/default-token-list/blob/main/README.md",
      reference: "https://github.com/Uniswap/default-token-list/tree/main",
      description: `${token.name} is a Coin on ${networkName}. Powered by Uniswap's Token Lists, a community-led initiative to improve discoverability, reputation and trust in ERC20 token lists in a manner that is inclusive, transparent, and decentralized.`,
      playground: {
        default: {
          address: token.address,
          chainId: token.chainId.toString(),
        },
      },
    })
  })

  return ret
  return []
}
