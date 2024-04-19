import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Aave Token Vault Contracts",
    url: "https://api.github.com/repos/aave/Aave-Vault/contents/src",
    tutorial: "https://github.com/aave/Aave-Vault/blob/main/README.md",
    reference:
      "https://docs.aave.com/developers/v/2.0/the-core-protocol/aave-token",
    description:
      "An ERC-4626 vault which allows users to deposit/withdraw ERC-20 tokens supported by Aave v3, manages the supply and withdrawal of these assets in Aave, and allows a vault manager to take a fee on yield earned.",
  })
