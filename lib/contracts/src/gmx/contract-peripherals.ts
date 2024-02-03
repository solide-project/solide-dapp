import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> => {
  return await getContractsByGithub({
    title: "GMX Peripherals",
    url: "https://api.github.com/repos/gmx-io/gmx-contracts/contents/contracts/peripherals",
    tutorial: "https://github.com/gmx-io/gmx-contracts/blob/master/README.md",
    description:
      "Peripherals Contracts for GMX Contracts",
  })
}
