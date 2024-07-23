import { isAddress, zeroAddress } from "viem"

import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { camelToWord } from "@/lib/utils"
import { ContractSchema } from "@/lib/contracts"

export const items = async (chain: string): Promise<ContractSchema[]> => {
  const response = await fetch(
    "https://raw.githubusercontent.com/0xProject/protocol/development/packages/contract-addresses/addresses.json"
  )
  const data = await response.json()
  const contracts = data[chain] || {}

  const ret: ContractSchema[] = []
  Object.entries(contracts).map(([key, val]: any) => {
    if (isValidAddress(val)) {
      const formattedName = camelToWord(key)
      ret.push({
        title: `0x Protocol Contracts: ${formattedName}`,
        tutorial:
          "https://github.com/0xProject/protocol/blob/development/packages/contract-addresses/README.md",
        reference: "https://www.npmjs.com/package/@0x/contract-addresses",
        description: `Deployed ${formattedName} on ${getNetworkNameFromChainID(chain)}. Powered by the 0x Project package, @0x/contract-addresses, A tiny utility library for getting known deployed contract addresses for a particular network.`,
        playground: {
          default: {
            address: val,
            chainId: chain,
          },
        },
      })
    }
  })

  return ret
}

const isValidAddress = (val: string): boolean =>
  typeof val === "string" && isAddress(val) && zeroAddress !== val
