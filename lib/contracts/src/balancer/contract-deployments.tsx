import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/schema/contract"

interface Contract {
  name: string
  address: string
}

const getAPI = (chain: string) => {
  switch (chain) {
    case ChainID.ETHEREUM_MAINNET:
      return "mainnet"
    case ChainID.ARBITRUM_ONE:
      return "arbitrum"
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
    `https://raw.githubusercontent.com/balancer/balancer-deployments/master/addresses/${id}.json`
  )
  const data = await response.json()

  const ret: ContractSchema[] = []
  const activeObjects = Object.values(data).filter(
    (obj: any) => obj.status === "ACTIVE"
  )
  activeObjects.forEach((obj: any) => {
    obj.contracts
      .filter(
        (contract: Contract) =>
          !(
            contract.name.toLowerCase().includes("factory") ||
            contract.name.toLowerCase().includes("proxy")
          )
      )
      .forEach((contract: Contract) => {
        ret.push({
          title: `Balancer: ${contract.name.replace(/([a-z])([A-Z])/g, "$1 $2")}`,
          tutorial:
            "https://github.com/balancer/balancer-deployments/blob/master/README.md",
          reference: `https://github.com/balancer/balancer-deployments/tree/master`,
          description: `Balancer contracts ${contract.name} deployed on ${chain}. Powered by Balancer.`,
          playground: {
            default: {
              address: contract.address,
              chainId: chain,
            },
          },
        })
      })
  })

  return ret
}
