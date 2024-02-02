import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> => {
  return await getContractsByGithub({
    title: "0x v3 Exchange",
    url: "https://api.github.com/repos/0xProject/exchange-v3/contents/contracts/exchange/contracts/src",
    tutorial:
      "https://github.com/0xProject/exchange-v3/blob/development/contracts/exchange/README.md",
    description:
      "This contract is responsible for settling trades and is typically the entry point for all transactions that interact with the 0x protocol.",
    outdated: "This contract is outdated. Please use the new version.",
  })
}
