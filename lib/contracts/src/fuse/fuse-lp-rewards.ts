import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/contracts"

const mainTitle = "Fuse LP Rewards"

export const items = async (): Promise<ContractSchema[]> => {
  const response = await fetch(
    "https://raw.githubusercontent.com/fuseio/fuse-lp-rewards/master/config/default.json"
  )
  const data = await response.json()

  const ret: ContractSchema[] = []
  Object.entries(data.contracts.fuse).forEach(([key, val]: any) => {
    ret.push({
      title: `${mainTitle}: ${val.pairName}`,
      tutorial:
        "https://github.com/fuseio/fuse-lp-rewards/blob/master/solidity/README.md",
      reference: "https://github.com/fuseio/fuse-lp-rewards/tree/master",
      description: `${val.pairName} LP on Fuse Mainnet provided by ${val.platform}. Rewards for Fuse Liquidity Providers based of PlotX implementation smart contracts`,
      playground: {
        default: {
          address: key,
          chainId: ChainID.FUSE_MAINNET,
        },
      },
      outdated: "This contract may be outdated.",
    })
  })
  return ret
}
