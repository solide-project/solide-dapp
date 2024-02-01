import { getExplorer } from "@/lib/chains/explorer"
import { ChainID } from "@/lib/chains/id"
import { camelToWord } from "@/lib/utils"
import { ContractSchema } from "@/lib/schema/contract"

const getAPI = (chain: string) => {
  switch (chain) {
    case ChainID.ETHEREUM_MAINNET:
      return "mainnet"
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
    `https://raw.githubusercontent.com/compound-finance/compound-protocol/master/networks/${id}.json`
  )
  const data = await response.json()
  const ret: ContractSchema[] = []

  Object.entries(data.Contracts).forEach(([key, val]) => {
    if (key.startsWith("c") && !key.includes("Delegate")) {
      ret.push({
        title: `Compound cToken: ${key}`,
        tutorial: "",
        reference: `${getExplorer(chain)}/address/${val}`,
        description: `Balancer contracts ${key} deployed on ${chain}. Powered by Compound Finance deployments from Github.`,
        playground: {
          default: {
            address: val as string,
            chainId: chain,
          },
        },
      })
    } else if (key.startsWith("Pair")) {
      const formattedName = camelToWord(key)

      ret.push({
        title: `Compound Trading Pair: ${formattedName}`,
        tutorial: "",
        reference: `${getExplorer(chain)}/address/${val}`,
        description: `Balancer contracts ${formattedName} deployed on ${chain}. Powered by Compound Finance deployments from Github.`,
        playground: {
          default: {
            address: val as string,
            chainId: chain,
          },
        },
      })
    }
  })

  return ret
}
