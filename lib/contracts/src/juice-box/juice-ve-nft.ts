import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Juice Ve NFT Contracts",
    url: "https://api.github.com/repos/jbx-protocol/juice-ve-nft/contents/contracts",
    tutorial:
      "https://github.com/jbx-protocol/juice-ve-nft/blob/master/README.md",
    reference: "https://github.com/jbx-protocol/juice-ve-nft/tree/master",
    description:
      "Issue an NFT that represents a locked position of juicebox project tokens (unclaimed or as ERC20s).",
    remappings: {
      "@openzeppelin/contracts/": "@openzeppelin/contracts@4.5.0/",
    },
    version: "v0.8.6+commit.11564f7e",
  })
