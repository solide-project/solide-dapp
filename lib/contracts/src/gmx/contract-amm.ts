import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> => {
  return await getContractsByGithub({
    title: "GMX AMM",
    url: "https://api.github.com/repos/gmx-io/gmx-contracts/contents/contracts/amm",
    tutorial: "https://github.com/gmx-io/gmx-contracts/blob/master/README.md",
    description:
      "GMX AMM (Automated Market Maker) is a decentralized finance (DeFi) protocol that leverages automated market-making algorithms to facilitate efficient and decentralized trading of various assets on blockchain networks. GMX employs advanced mathematical models to determine optimal pricing and liquidity, enabling users to trade digital assets seamlessly without the need for traditional intermediaries.",
    version: "v0.6.12+commit.27d51765",
  })
}
