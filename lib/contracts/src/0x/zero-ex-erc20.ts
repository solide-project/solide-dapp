import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> => {
  return await getContractsByGithub({
    title: "0x Protocol ERC20",
    url: "https://api.github.com/repos/0xProject/protocol/contents/contracts/treasury/contracts/erc20/src",
    tutorial:
      "https://github.com/0xProject/protocol/blob/development/contracts/erc20/README.md",
    description:
      "The extensible contract architecture of ZeroEx primarily involves three main components: the Exchange contract, ERC-20 token contracts, and additional features that can be added through plug-ins or extensions.",
  })
}
