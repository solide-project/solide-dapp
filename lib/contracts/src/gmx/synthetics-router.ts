import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> => {
  return await getContractsByGithub({
    title: "GMX Synthetics Router",
    url: "https://api.github.com/repos/gmx-io/gmx-synthetics/contents/contracts/router",
    tutorial: "https://github.com/gmx-io/gmx-synthetics/blob/main/README.md",
    description:
      "The contracts is designed to facilitate token transfers within a decentralized system. Users approve and utilizes the OpenZeppelin library for ERC-20 tokens and incorporates role-based access control through the RoleModule. The contract's primary purpose seems to be enabling secure and controlled token transfers, with permissions managed by the associated role system.",
  })
}
