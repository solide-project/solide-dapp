import * as Contracts from "@roninbuilders/contracts"

import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { ContractSchema } from "@/lib/contracts"

interface ContractsModule {
  [key: string]: any
}

const addresses = Contracts as ContractsModule
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
  const mainTitle = title
  const networkName = getNetworkNameFromChainID(chain)
  return Object.entries(addresses)
    .filter(([key, _]) =>
      protocols.some((protocol) => key.toLowerCase().includes(protocol))
    )
    .map(([key, val]) => {
      const formattedName = formattedString(key)
      return {
        title: `${mainTitle} Contract: ${formattedName}`,
        tutorial,
        reference,
        description: `Contract deployment on ${networkName} for the ${title} ecosystem. ${description}`,
        playground: {
          default: {
            address: val.address,
            chainId: chain,
          },
        },
      }
    })
}

const formattedString = (inputString: string): string =>
  inputString
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
