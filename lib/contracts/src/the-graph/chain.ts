import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/schema/contract"
import { camelToWord } from "@/lib/utils"

export const items = async (chain: string) => {
  const response = await fetch(
    `https://raw.githubusercontent.com/graphprotocol/contracts/main/packages/contracts/addresses.json`
  )
  const data = await response.json()

  const ret: ContractSchema[] = []
  Object.entries(data[chain] || {})
    .filter(([, val]: any) => !val.proxy)
    .forEach(([key, val]: any) => {
      const formattedName = camelToWord(key)
      ret.push({
        title: `The Graph Contract: ${formattedName}`,
        tutorial:
          "https://github.com/graphprotocol/contracts/blob/main/packages/contracts/README.md",
        reference: "https://github.com/graphprotocol/contracts/",
        description: `The Graph deployed contracts ${formattedName} deployed on ${chain}. Powered by The Graph Protocol.`,
        playground: {
          default: {
            address: val.address,
            chainId: chain,
          },
        },
      })
    })

  return ret
}
