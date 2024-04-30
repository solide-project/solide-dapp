import { ethers } from "ethers"

import { ChainID } from "../chains/id"
import { SOLIDE_URL } from "../utils"
import { SolideIDESchema } from "../contracts"

export const addType = (uri: string, type: string): string => `${uri}/${type}`
export const addVersion = (uri: string, version: string): string =>
  `${uri}&version=${encodeURIComponent(version)}`
export const addContractAddress = ({
  uri,
  chainId = ChainID.ETHEREUM_MAINNET,
  address,
}: {
  uri: string
  chainId?: string
  address: string
}): string => (uri += `/address/${chainId}/${address}`)

export const addContractUrl = ({
  uri,
  address,
}: {
  uri: string
  address: string
}): string => `${uri}?url=${address}`

export const generateUri = ({
  item,
  type = "",
}: {
  item: SolideIDESchema
  type?: string
}): string => {
  let uri = `${SOLIDE_URL}`

  if (ethers.utils.isAddress(item.address)) {
    const chainId = item.chainId // Note: Mostly provided but default to Ethereum Mainnet
    const address = item.address
    uri = addContractAddress({ uri, chainId, address })
  } else {
    if (type) {
      uri = addType(uri, type)
    }

    const address = item.address
    uri = addContractUrl({ uri, address })
  }

  // Add additional query if exist

  if (item.version) {
    uri = addVersion(uri, item.version)
  }

  if (item.remappings && Object.keys(item.remappings).length > 0) {
    uri += `&remappings=`
    const remappings: string[] = Object.entries(item.remappings || {}).map(
      ([key, val]) => encodeURIComponent(`${key}=${val}`)
    )
    uri += remappings.join(",")
  }

  return uri
}
