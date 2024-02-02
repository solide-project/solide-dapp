import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> => {
  return await getContractsByGithub({
    title: "0x Protocol Teasury",
    url: "https://api.github.com/repos/0xProject/protocol/contents/contracts/treasury/contracts/src",
    tutorial:
      "https://github.com/0xProject/protocol/blob/development/contracts/treasury/README.md",
    description:
      "The extensible contract architecture of ZeroEx primarily involves three main components: the Exchange contract, ERC-20 token contracts, and additional features that can be added through plug-ins or extensions.",
  })
}
