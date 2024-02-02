import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> => {
  return await getContractsByGithub({
    title: "GMX Synthetics Router",
    url: "https://api.github.com/repos/gmx-io/gmx-synthetics/contents/contracts/router",
    tutorial: "https://github.com/gmx-io/gmx-synthetics/blob/main/README.md",
    description:
      "GMX Synthetics contracts emphasizes the interplay between market tokens, liquidity providers, and collateral tokens, detailing the execution of user requests and the calculation of token values based on factors such as the market pool's worth, pending PnL, and borrow fees. The system allows for diverse trading operations, including swaps between long and short tokens, passive orders, and strategic position adjustments based on specified price conditions.",
  })
}