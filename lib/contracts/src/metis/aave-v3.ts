// Requires npm
import { AaveV3Metis } from "@bgd-labs/aave-address-book"
import { isAddress } from "viem"

import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/contracts"
import { camelToWord } from "@/lib/utils"

export const items = async (): Promise<ContractSchema[]> => {
  const contractLibrary = AaveV3Metis as any

  const ret: ContractSchema[] = []

  for (const key in AaveV3Metis) {
    // Get only ethereum addresses
    if (
      contractLibrary[key] &&
      typeof contractLibrary[key] === "string" &&
      isAddress(contractLibrary[key])
    ) {
      const formattedKey = camelToWord(key)
      ret.push({
        title: `Aave V3 Contract: ${formattedKey}`,
        tutorial: "",
        reference:
          "https://docs.aave.com/developers/deployed-contracts/v3-mainnet/metis",
        description: `${formattedKey} is a Aave V3 contract on Metis Network. The Aave Protocol is decentralised non-custodial liquidity protocol where users can participate as suppliers, borrowers or liquidators. V3 allows users to optimise their assets supplied to the Aave Protocol in terms of yield generation and borrowing power.`,
        playground: {
          default: {
            address: contractLibrary[key],
            chainId: ChainID.METIS_ANDROMEDA,
          },
        },
      })
    }
  }

  return ret
}
