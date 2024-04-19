import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/contracts"

interface TokenInfo {
  _id: string
  tokenSymbol: string
  chains: string[]
  trades: number
  volume: number
  tokenAddress: string
}

const mainTitle = "0x Market Tokens"
const getAPI = (chain: string): string => {
  switch (chain) {
    case ChainID.ETHEREUM_MAINNET:
      return "Ethereum"
    case ChainID.BNB_MAINNET:
      return "BSC"
    case ChainID.POLYGON_MAINNET:
      return "Polygon"
    case ChainID.AVALANCHE_MAINNET:
      return "Avalanche"
    case ChainID.FANTOM_MAINNET:
      return "Fantom"
    case ChainID.CELO_MAINNET:
      return "Celo"
    case ChainID.OPTIMISM_MAINNET:
      return "Optimism"
    case ChainID.BASE_MAINNET:
      return "Base"
    default:
      return ""
  }
}

// CORS issue
export const items = async (chain: string): Promise<ContractSchema[]> => {
  const id = getAPI(chain)
  if (!id) {
    return []
  }

  var requestOptions: any = {
    method: "GET",
    redirect: "follow",
  }

  const response = await fetch(
    `https://explorer.0xprotocol.org/tokens?page=1&_data=routes/tokens/index&chains=${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
      mode: "cors",
      credentials: "include",
    }
  )
  const data: { data: TokenInfo[] } = await response.json()

  const ret: ContractSchema[] = []
  data.data.forEach((item) => {
    ret.push({
      title: `${mainTitle}: ${item.tokenSymbol}`,
      tutorial:
        "https://github.com/0xProject/protocol/blob/development/packages/contract-addresses/README.md",
      reference: "https://www.npmjs.com/package/@0x/contract-addresses",
      description: `Token maker ${item.tokenSymbol} on ${getNetworkNameFromChainID(chain)}. Powered by the 0x Project Explorer, ${item.tokenSymbol} has ${item.trades} trades and ${item.volume} volume.`,
      playground: {
        default: {
          address: item.tokenAddress,
          chainId: chain,
        },
      },
    })
  })

  return ret
}
