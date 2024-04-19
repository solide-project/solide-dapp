import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { ContractSchema } from "@/lib/contracts"

export interface TokenInfo {
  chainId: number
  address: string
  decimals: number
  name: string
  symbol: string
  logoURI: string
}

export const items = async ({
  url,
  chain = ChainID.ETHEREUM_MAINNET,
  title = "Token List",
  tutorial = "",
  reference = "",
}: {
  url: string
  chain?: string
  title?: string
  tutorial?: string
  reference?: string
}): Promise<ContractSchema[]> => {
  const response = await fetch(url)
  const data = await response.json()

  const ret: ContractSchema[] = []
  data.tokens
    .filter((token: TokenInfo) => token.chainId.toString() === chain)
    .forEach((token: TokenInfo) => {
      ret.push({
        title: `${title}: ${token.name} (${token.symbol})`,
        tutorial: tutorial,
        reference: reference || `https://tokenlists.org/token-list?url=${url}`,
        description: `${token.name} is a Coin on ${getNetworkNameFromChainID(token.chainId.toString())}. Powered by Uniswap's Token Lists, a community-led initiative to improve discoverability, reputation and trust in ERC20 token lists in a manner that is inclusive, transparent, and decentralized.`,
        playground: {
          default: {
            address: token.address,
            chainId: chain || token.chainId.toString(),
          },
        },
      })
    })

  return ret
}
