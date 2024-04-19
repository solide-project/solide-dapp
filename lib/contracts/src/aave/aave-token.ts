import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Aave Token Contract",
    url: "https://api.github.com/repos/aave/aave-token/contents/contracts/token",
    tutorial: "https://github.com/aave/aave-token/blob/master/README.md",
    reference:
      "https://docs.aave.com/developers/v/2.0/the-core-protocol/aave-token",
    description:
      "AAVE is an ERC-20 compatible token. It implements governance-inspired features, and will allow Aave to bootstrap the rewards program for safety and ecosystem growth. The following document explains the main features of AAVE, it's monetary policy, and the redemption process from LEND.",
  })
