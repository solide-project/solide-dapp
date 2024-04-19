import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> => {
  return await getContractsByGithub({
    title: "GMX",
    url: "https://api.github.com/repos/gmx-io/gmx-contracts/contents/contracts/gmx",
    tutorial: "https://github.com/gmx-io/gmx-contracts/blob/master/README.md",
    description:
      "GMX and GLP tokens appear to be associated with a decentralized finance (DeFi) project, with GMX potentially serving as a governance token for decision-making within the ecosystem and facilitating liquidity provision, while GLP may be linked to providing liquidity and participating in yield farming activities.",
    version: "v0.6.12+commit.27d51765",
  })
}
