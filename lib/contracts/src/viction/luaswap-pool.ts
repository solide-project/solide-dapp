import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { ContractSchema } from "@/lib/contracts"

interface PoolInfo {
  masterAddresses: string
  pid: number
  lpAddresses: string
  tokenAddresses: string
  token2Addresses: string
  multiplier: number[]
  halvingAfterBlock: number
  maxRewardPerBlock: string[]
  minRewardPerBlock: string
  isActive: boolean
  name: string
  symbol: string
  symbolShort: string
  description: string
  tokenSymbol: string
  token2Symbol: string
}

export const tutorial =
  "https://github.com/luaswap/luaswap-core/blob/master/README.md"
export const reference = "https://luaswap.org/#/"
export const items = async (): Promise<ContractSchema[]> => {
  const response = await fetch(
    "https://raw.githubusercontent.com/luaswap/tomowallet-rpc/master/luaswapOnTomochain/poolList.json"
  )
  const data: { pools: PoolInfo[] } = await response.json()

  const chain = ChainID.VICTION_MAINNET
  const networkName = getNetworkNameFromChainID(chain)
  const ret: ContractSchema[] = []
  data.pools.forEach((pool: PoolInfo) => {
    ret.push({
      title: `Luaswap Pool: ${pool.symbol}`,
      tutorial,
      reference,
      description: `Luswap's ${pool.name} LP Pair ${networkName}. The LuaMasterFarmer contract facilitates liquidity pool management and yield farming. Users can deposit, withdraw, and claim rewards from pools while the contract securely handles token transfers and calculates rewards based on allocated points and block numbers. It allows for the adjustment of reward parameters and supports emergency withdrawals. Overall, it serves as a platform for decentralized liquidity provision and yield generation, empowering users to participate in farming activities and earn rewards.`,
      playground: {
        default: {
          address: pool.masterAddresses,
          chainId: chain,
        },
      },
    })
  })
  return ret
}
