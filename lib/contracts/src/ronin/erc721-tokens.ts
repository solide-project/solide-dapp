import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { ContractSchema } from "@/lib/contracts"

interface Item {
  contractAddress: string
  name: string
  symbol: string
  standard: string
  decimals: number
  totalSupply: string
  totalOwners: number
  totalTransfers: number
  createdAtBlock: number
  updatedAt: number
}

interface Paging {
  total: number
}

interface Result {
  items: Item[]
  paging: Paging
}

interface ResponseData {
  result: Result
}

export const items = async ({
  standard,
  limit = 50,
}: {
  standard: "ERC1155" | "ERC721" | "ERC20"
  limit?: number
}) => {
  let ret: ContractSchema[] = []
  var myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")

  var raw = JSON.stringify({
    tokenStandards: [standard],
    sort: [
      {
        fieldName: "totalTransfers",
        order: "desc",
      },
    ],
    paging: {
      offset: 0,
      limit,
    },
  })

  var requestOptions: any = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  }

  const response = await fetch(
    "https://skynet-api.roninchain.com/ronin/tokens/search",
    requestOptions
  )
  const data: ResponseData = await response.json()

  const chain = ChainID.RONIN_MAINNET
  const networkName = getNetworkNameFromChainID(chain)
  data.result.items
    .filter((item: Item) => item.name && item.symbol)
    .forEach((item: Item) => {
      ret.push({
        title: `Ronin ${standard}: ${item.name} (${item.symbol})`,
        tutorial: "",
        reference: "https://app.roninchain.com/tokens",
        description: `Top verified ${standard} tokens on ${chain} by token transfer and transactions.`,
        playground: {
          default: {
            address: item.contractAddress,
            chainId: chain,
          },
        },
        outdated:
          "Note these tokens are not audited nor officially supported by Ronin, please explore these token at your own risk.",
      })
    })
  return ret
}
