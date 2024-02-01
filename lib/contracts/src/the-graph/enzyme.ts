import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (chain?: string) => {
  var myHeaders = new Headers()
  var raw = JSON.stringify({
    query: "query MyQuery {\n  assets(first: 30) {\n    name\n    id\n  }\n}",
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
    "https://api.thegraph.com/subgraphs/name/enzymefinance/enzyme",
    requestOptions
  )
  const data = await response.json()

  const ret: ContractSchema[] = []
  data.data.assets.forEach((item: any) => {
    ret.push({
      title: `Enzyme Finance Token: ${item.name}`,
      tutorial: "https://github.com/enzymefinance/protocol/blob/dev/README.md",
      reference:
        "https://thegraph.com/hosted-service/subgraph/enzymefinance/enzyme",
      description: `Token Trading on Enzyme Finance ${item.name} deployed on ${chain}. Powered by The GraphQL Subgraphs.`,
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
