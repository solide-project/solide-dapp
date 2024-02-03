import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> => {
  return await getContractsByGithub({
    title: "0x Protocol Zero Ex (Core)",
    url: "https://api.github.com/repos/0xProject/protocol/contents/contracts/zero-ex/contracts/src",
    tutorial:
      "https://github.com/0xProject/protocol/blob/development/contracts/zero-ex/README.md",
    description:
      "The extensible contract architecture of 0x primarily involves three main components: the Exchange contract, ERC-20 token contracts, and additional features that can be added through plug-ins or extensions.",
  })
}
