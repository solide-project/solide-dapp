import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> => {
  return await getContractsByGithub({
    title: "0x V3 Multisig",
    url: "https://api.github.com/repos/0xProject/exchange-v3/contents/contracts/multisig/contracts/src",
    tutorial:
      "https://github.com/0xProject/exchange-v3/blob/development/contracts/multisig/README.md",
    description:
      "This package contains various types of multisignature wallet contracts, including the AssetProxyOwner contract that is responsible for upgrading the 0x protocol smart contracts.",
    outdated: "This contract is outdated. Please use the new version.",
  })
}
