import { ContractSchema } from "@/lib/schema/contract"
import { getContractsByGithub } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> => await getContractsByGithub({
  title: "Aave v3 Misc Contracts",
  url: "https://api.github.com/repos/aave/token-wrappers/contents/src",
  tutorial: "",
  reference: "Token wrappers for supply/withdrawal from v3 Pools",
  version: "v0.8.10+commit.fc410830",
  description:
    "Token wrappers for supply/withdrawal from v3 Pools.",
  remappings: {
    "aave-v3-core/": "@aave/core-v3/"
  }
})
