import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> => {
  return await getContractsByGithub({
    title: "0x v3 Dev Utils",
    url: "https://api.github.com/repos/0xProject/exchange-v3/contents/contracts/dev-utils/contracts/src",
    tutorial:
      "https://github.com/0xProject/exchange-v3/blob/development/contracts/dev-utils/README.md",
    description:
      "This package implements various utilities for developers. For example, the DevUtils contract can query batches of balances or allowances given some assetData, can validate batches of orders, and can decode 0x-specific calldata.",
    outdated: "This contract is outdated. Please use the new version.",
  })
}
