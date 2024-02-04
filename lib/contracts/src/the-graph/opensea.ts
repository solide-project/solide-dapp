import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (chain?: string) => {
  var myHeaders = new Headers()
  var raw = JSON.stringify({
    query:
      "query MyQuery {\n  collections(first: 5, orderBy: totalRevenueETH, orderDirection: desc) {\n    id\n    name\n    totalRevenueETH\n    symbol\n  }\n}",
    operationName: "MyQuery",
    extensions: {},
  })

  var requestOptions: any = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  }

  const response = await fetch(
    "https://api.thegraph.com/subgraphs/name/messari/opensea-v1-ethereum",
    requestOptions
  )
  const data = await response.json()

  const ret: ContractSchema[] = []
  data.data.collections.forEach((item: any) => {
    ret.push({
      title: `NFT on OpenSea: ${item.name} (${item.symbol})`,
      tutorial: "",
      reference:
        "https://thegraph.com/hosted-service/subgraph/messari/opensea-v1-ethereum",
      description: `Top total Revenue ETH (${item.totalRevenueETH} ETH) from NFT on OpenSea: ${item.name} deployed on ${chain}. Powered by The GraphQL Subgraphs.`,
      playground: {
        default: {
          address: item.id,
          chainId: ChainID.ETHEREUM_MAINNET,
        },
      },
    })
  })

  return ret
}
