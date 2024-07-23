import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { ContractSchema } from "@/lib/contracts"

interface Contracts {
  message: string
  result: {
    items: ContractItem[]
  }
}

interface ContractItem {
  display_name: string
  address: string
  is_deprecated: boolean
  is_proxy: boolean
}

export const items = async ({
  protocols,
  title,
  tutorial = "",
  reference = "",
  description = "",
  chain = ChainID.RONIN_MAINNET,
}: {
  protocols: string[]
  title?: string
  tutorial?: string
  reference?: string
  description?: string
  chain?: string
}): Promise<ContractSchema[]> => {
  const response = await fetch("https://explorer-kintsugi.roninchain.com/v2/2020/contracts?ps=1000&p=1")
  const data: Contracts = await response.json()

  const ret: ContractSchema[] = data.result.items
    .filter(item => !item.is_deprecated && !item.is_proxy)
    .map(item => {
      return {
        title: item.display_name,
        tutorial,
        reference: "https://github.com/roninbuilders/contracts/tree/main",
        description: `Contract${chain ? " on " + getNetworkNameFromChainID(chain) : ""}. ${description}`,
        playground: {
          default: {
            address: item.address,
            chain,
          }
        },
      }
    })

  return ret
}
