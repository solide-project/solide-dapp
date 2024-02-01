import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/schema/contract"

interface PriceFeed {
  compareOffchain: string
  contractAddress: string
  contractType: string
  contractVersion: number
  decimalPlaces: number | null
  ens: string
  formatDecimalPlaces: number | null
  healthPrice: string
  heartbeat: number
  history: boolean
  multiply: string
  name: string
  pair: [string, string]
  path: string
  proxyAddress: string
  threshold: number
  valuePrefix: string
  assetName: string
  feedCategory: string
  feedType: string
  docs: {
    blockchainName: string
    deliveryChannelCode: string
    hidden: boolean
    productSubType: string
    productType: string
    productTypeCode: string
  }
  decimals: number
}

const getAPI = (chain: string) => {
  switch (chain) {
    case ChainID.ETHEREUM_MAINNET:
      return "mainnet"
    case ChainID.ARBITRUM_ONE:
      return "ethereum-mainnet-arbitrum-1"
    case ChainID.METIS_ANDROMEDA:
      return "ethereum-mainnet-andromeda-1"
    default:
      return ""
  }
}

export const items = async (chain: string): Promise<ContractSchema[]> => {
  const id = getAPI(chain)
  if (!id) {
    return []
  }

  const response = await fetch(
    `https://reference-data-directory.vercel.app/feeds-${id}.json`
  )
  const data = await response.json()

  const ret: ContractSchema[] = []
  data
    .filter((obj: PriceFeed) => obj.feedCategory === "verified")
    .forEach((obj: PriceFeed) => {
      ret.push({
        title: `Chainlink Price Feed: ${obj.name}`,
        tutorial: "",
        reference:
          obj.compareOffchain ||
          `https://docs.chain.link/data-feeds/price-feeds/addresses?network=ethereum&page=1`,
        description: `Price Feed contracts ${obj.name} deployed on ${chain}. Powered by Chainlink API.`,
        playground: {
          default: {
            address: obj.contractAddress,
            chainId: chain,
          },
        },
      })
    })

  return ret
}
