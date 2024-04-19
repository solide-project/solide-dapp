import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> => {
  return await getContractsByGithub({
    title: "Fuse Studio",
    url: "https://api.github.com/repos/fuseio/fuse-studio/contents/contracts/token-factory/contracts",
    tutorial: "https://github.com/fuseio/fuse-studio/blob/master/README.md",
    description:
      "The core is the community contract, managing members and ERC20 tokens on Fuse and Ethereum with a Multitoken bridge. This integration offers a user-friendly solution for launching and managing DeFi communities.",
  })
}
