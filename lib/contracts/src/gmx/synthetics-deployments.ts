import { ChainID } from "@/lib/chains/id"
import { getContractsByDeployments } from "@/lib/contracts/utils/get-contracts-by-deployments"
import { filterFiles, GitHubFileInfo } from "@/lib/contracts/utils/utils"
import { ContractSchema } from "@/lib/schema/contract"

const getAPI = (chain: string): string => {
  switch (chain) {
    case ChainID.ARBITRUM_ONE:
    case ChainID.ARBITRUM_NOVA:
      return "arbitrum"
    case ChainID.AVALANCHE_MAINNET:
      return "avalanche"
    default:
      return ""
  }
}
export const items = async (chain: string): Promise<ContractSchema[]> => {
  const id = getAPI(chain)
  if (!id) {
    return []
  }

  const response = await fetch(
    `https://api.github.com/repos/gmx-io/gmx-synthetics/contents/deployments/${id}`
  )
  const directory: GitHubFileInfo[] = await response.json()

  const filteredFiles = filterFiles(directory)
  const ret: any[] = await Promise.all(
    filteredFiles.map((file) =>
      getContractsByDeployments({
        file,
        title: "GMX Synthetics Deployments",
        chain,
        tutorial:
          "https://github.com/gmx-io/gmx-synthetics/blob/main/README.md",
        description:
          "GMX Synthetics contracts emphasizes the interplay between market tokens, liquidity providers, and collateral tokens, detailing the execution of user requests and the calculation of token values based on factors such as the market pool's worth, pending PnL, and borrow fees. The system allows for diverse trading operations, including swaps between long and short tokens, passive orders, and strategic position adjustments based on specified price conditions.",
      })
    )
  )

  return ret.filter((result) => result !== undefined)
}
