import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Biconomy Safety Module Contracts",
    url: "https://api.github.com/repos/bcnmy/SM-smart-contract/contents/contracts",
    tutorial: "",
    reference: "https://docs-gasless.biconomy.io/bico-staking/safety-module",
    description:
      "he Safety Module contracts provides users with a protective layer against potential risks associated with cross-chain transfers, allowing BICO holders to earn yields while contributing to protocol security and liquidity provision.",
  })
