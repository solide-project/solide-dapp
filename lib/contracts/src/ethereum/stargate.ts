// Requires npm
import {
  LZ_ADDRESS,
  LZ_RELAYER,
  LZ_RELAYER_V2,
  LZ_ULTRA_LIGHT_NODE_V1,
  LZ_ULTRA_LIGHT_NODE_V2,
} from "@layerzerolabs/lz-sdk"
import { ethers } from "ethers"

import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { ContractSchema } from "@/lib/schema/contract"
import { camelToWord } from "@/lib/utils"

const getAPI = (chain: string) => {
  switch (chain) {
    case ChainID.ETHEREUM_MAINNET:
      return "ethereum"
    case ChainID.POLYGON_MAINNET:
      return "polygon"
    case ChainID.POLYGON_MUMBAI:
      return "mumbai"
    case ChainID.METIS_ANDROMEDA:
      return "metis"
    case ChainID.METIS_SEPOLIA:
      return "metis-testnet"
    default:
      return ""
  }
}

export const items = async (chain: string) => {
  const ret: ContractSchema[] = []
  ret.push(...getStargateContract(LZ_ADDRESS, chain, camelToWord("LZ_ADDRESS")))
  ret.push(...getStargateContract(LZ_RELAYER, chain, camelToWord("LZ_RELAYER")))
  ret.push(
    ...getStargateContract(LZ_RELAYER_V2, chain, camelToWord("LZ_RELAYER_V2"))
  )
  ret.push(
    ...getStargateContract(
      LZ_ULTRA_LIGHT_NODE_V1,
      chain,
      camelToWord("LZ_ULTRA_LIGHT_NODE_V1")
    )
  )
  ret.push(
    ...getStargateContract(
      LZ_ULTRA_LIGHT_NODE_V2,
      chain,
      camelToWord("LZ_ULTRA_LIGHT_NODE_V2")
    )
  )
  return ret
}

const getStargateContract = (
  contracts: any,
  chain: string,
  name: string
): ContractSchema[] => {
  const id = getAPI(chain)
  if (!id) {
    return []
  }

  const ret: ContractSchema[] = []
  const contract: string = contracts[id] || ""
  if (ethers.isAddress(contract)) {
    ret.push({
      title: `LayerZero Contract: ${name}`,
      tutorial: "",
      reference:
        "https://stargateprotocol.gitbook.io/stargate/developers/contract-addresses/mainnet#contract-addresses",
      description: `LayerZero Contract: ${name} contract on ${getNetworkNameFromChainID(chain)}.`,
      playground: {
        default: {
          address: contract as string,
          chainId: chain,
        },
      },
    })
  }
  return ret
}
