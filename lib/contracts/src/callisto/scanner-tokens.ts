import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { ContractSchema } from "@/lib/schema"

import { data } from "./tokens"

export const items = async (): Promise<ContractSchema[]> => {
  const ret: ContractSchema[] = []

  const chain = ChainID.CALLISTO_MAINNET
  const networkName = getNetworkNameFromChainID(chain)
  data
    .filter((token) => token.category !== 0)
    .forEach((token) => {
      ret.push({
        title: `${token.name} (${token.symbol})`,
        description: `${token.symbol} on ${networkName}`,
        tutorial: "",
        reference: "https://explorer.callisto.network/trusted",
        playground: {
          default: {
            address: token.address,
            chainId: chain,
          },
        },
      })
    })

  return ret
}
