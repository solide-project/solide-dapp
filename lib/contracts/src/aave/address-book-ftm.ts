// Requires npm
import { AaveV3Fantom } from "@bgd-labs/aave-address-book"
import { ethers } from "ethers"

import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { ContractSchema } from "@/lib/schema/contract"
import { camelToWord, snakeToCamel, snakeToWord } from "@/lib/utils"

const isValidAddress = (address: any): boolean =>
  address && typeof address === "string" && ethers.isAddress(address)
export const items = async (): Promise<ContractSchema[]> => {
  const contractLibrary = AaveV3Fantom as any

  const ret: ContractSchema[] = []
  const networkName = getNetworkNameFromChainID(ChainID.FANTOM_MAINNET)
  for (const key in AaveV3Fantom) {
    // Get only ethereum addresses
    if (isValidAddress(contractLibrary[key])) {
      const formattedKey = snakeToWord(key)
      ret.push({
        title: `Aave V3 Contract: ${formattedKey}`,
        tutorial:
          "https://github.com/aave/docs-v3/blob/main/deployed-contracts/v3-mainnet/fantom.md",
        reference:
          "https://docs.aave.com/developers/deployed-contracts/v3-mainnet/fantom",
        description: `${formattedKey} is a Aave V3 contract on ${networkName}. Powered by Aave Address Book Package, the contracts are provide Aave a decentralised non-custodial liquidity protocol where users can participate as suppliers, borrowers or liquidators. V3 allows users to optimise their assets supplied to the Aave Protocol in terms of yield generation and borrowing power.`,
        playground: {
          default: {
            address: contractLibrary[key],
            chainId: ChainID.FANTOM_MAINNET,
          },
        },
      })
    }
  }

  return ret
}
