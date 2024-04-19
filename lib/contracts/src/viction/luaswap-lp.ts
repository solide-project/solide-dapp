import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { ContractSchema } from "@/lib/contracts"

import { reference, tutorial } from "./luaswap-pool"

interface PairInfo {
  lpAddresses: string
  token0Addresses: string
  token1Addresses: string
  name: string
}

export const items = async (): Promise<ContractSchema[]> => {
  const response = await fetch(
    "https://raw.githubusercontent.com/luaswap/tomowallet-rpc/master/luaswapOnTomochain/pairList.json"
  )
  const data: { pairs: PairInfo[] } = await response.json()

  const chain = ChainID.VICTION_MAINNET
  const networkName = getNetworkNameFromChainID(chain)
  const ret: ContractSchema[] = []
  data.pairs.forEach((pair: PairInfo) => {
    ret.push({
      title: `Luaswap LP: ${pair.name}`,
      tutorial,
      reference,
      description: `The ${pair.name} contract serves as a factory for creating pairs of tokens, with functions for managing fees, setting fee recipients, and checking token types. Additionally, the code features interfaces for interacting with ERC20 and TRC21 tokens, as well as SafeMath and UQ112x112 libraries for safe mathematical operations and fixed-point arithmetic. The implementation supports features like liquidity provision, token swapping, fee management, and migration of liquidity, providing a decentralized trading infrastructure on the ${networkName} blockchain.`,
      playground: {
        default: {
          address: pair.lpAddresses,
          chainId: chain,
        },
      },
    })
  })
  return ret
}
