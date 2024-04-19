import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> => {
  return await getContractsByGithub({
    title: "GMX Gambit Token",
    url: "https://api.github.com/repos/gmx-io/gmx-contracts/contents/contracts/gambit-token",
    tutorial: "https://github.com/gmx-io/gmx-contracts/blob/master/README.md",
    description:
      "The smart contract is a Solidity implementation that represents the Gambit token on the Ethereum blockchain. It adheres to the ERC-20 standard and includes additional functionalities specified by the IGMT and ITimelockTarget interfaces. The contract supports basic token operations such as transfers and allowances, and it provides features for governance control, administration, and migration management.",
    version: "v0.6.12+commit.27d51765",
  })
}
