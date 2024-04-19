import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/contracts"

interface TokenInfo {
  address: string
  circulating_market_cap: string
  decimals: string
  exchange_rate: string
  holders: string
  icon_url: string
  is_bridged: boolean
  name: string
  symbol: string
  total_supply: string
  type: string
}

interface TokenInfoResponse {
  items: TokenInfo[]
}

export const items = async (): Promise<ContractSchema[]> => {
  const response = await fetch("https://explorer.fuse.io/api/v2/tokens")
  const data: TokenInfoResponse = await response.json()

  const ret: ContractSchema[] = []
  data.items.forEach((item) => {
    ret.push({
      title: `${item.name} (${item.symbol})`,
      tutorial: "",
      reference: "https://explorer.fuse.io/tokens",
      description:
        "Powered by Fuse Network, displaying the top tokens on Fuse Mainnet.",
      playground: {
        default: {
          address: item.address,
          chainId: ChainID.FUSE_MAINNET,
        },
      },
    })
  })
  return ret
}
