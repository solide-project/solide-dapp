import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> => {
  return await getContractsByGithub({
    title: "0x Protocol Teasury",
    url: "https://api.github.com/repos/0xProject/protocol/contents/contracts/treasury/contracts/src",
    tutorial:
      "https://github.com/0xProject/protocol/blob/development/contracts/treasury/README.md",
    description:
      "hese contracts include components such as governors, timelocks, and voting mechanisms tailored for decision-making related to the management and utilization of the ZRX treasury.",
  })
}
