import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "RNS Core Contracts",
    url: "https://api.github.com/repos/axieinfinity/rns-contracts/contents/src",
    tutorial:
      "https://github.com/axieinfinity/ronin-documentation/blob/main/docs/apps/rns/overview.md",
    reference: "https://docs.skymavis.com/ronin/rns",
    description: "",
    remappings: {
      "@openzeppelin/contracts/": "@openzeppelin/contracts@4.7.0/",
    },
  })
