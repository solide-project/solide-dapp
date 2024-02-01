import { ContractSchema } from "@/lib/schema/contract"
import { getNetworkNameFromChainID } from "@/lib/chains/name"

interface TokenInfo {
  chainId: number;
  address: string;
  decimals: number;
  name: string;
  symbol: string;
  logoURI: string;
}

export const items = async (
  url: string,
  tutorial: string = "",
  reference: string = "",
): Promise<ContractSchema[]> => {
  const response = await fetch(url)
  const data = await response.json()

  const ret: ContractSchema[] = []
  data.tokens.forEach((token: TokenInfo) => {
    ret.push({
      title: `${token.name} (${token.symbol})`,
      tutorial: tutorial,
      reference: reference || `https://tokenlists.org/token-list?url=${url}`,
      description: `${token.name} is a Coin on ${getNetworkNameFromChainID(token.chainId.toString())}. Powered by Uniswap's Token Lists, a community-led initiative to improve discoverability, reputation and trust in ERC20 token lists in a manner that is inclusive, transparent, and decentralized.`,
      playground: {
        default: {
          address: token.address,
          chainId: token.chainId.toString(),
        },
      },
    })
  })

  return ret
}
