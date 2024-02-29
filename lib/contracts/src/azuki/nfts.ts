import { getExplorer } from "@/lib/chains/explorer"
import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { ContractSchema } from "@/lib/schema"

export const items = async (): Promise<ContractSchema[]> => {
  const chain = ChainID.ETHEREUM_MAINNET
  const networkName = getNetworkNameFromChainID(chain)
  const explorer = getExplorer(chain)
  return Object.entries(addresses).map(([key, val]) => {
    return {
      title: `Azuki NFT Deployment: ${key}`,
      reference: `${explorer}/address/${val}`,
      description: `${key} NFT contract deployed on mainnet at ${networkName}.`,
      playground: {
        default: {
          address: val,
          chainId: chain,
        },
      },
    }
  })
}

/**
 * No source code is available
 */
const addresses: Record<string, string> = {
  Azuki: "0xed5af388653567af2f388e6224dc7c4b3241c544",
  "Azuki Elementals": "0xb6a37b5d14d502c3ab0ae6f3a0e058bc9517786e",
  "Azuki Elementals Beans": "0x3af2a97414d1101e2107a70e7f33955da1346305",
  Beanz: "0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949",
}
