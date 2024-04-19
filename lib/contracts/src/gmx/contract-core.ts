import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> => {
  return await getContractsByGithub({
    title: "GMX Core",
    url: "https://api.github.com/repos/gmx-io/gmx-contracts/contents/contracts/core",
    tutorial: "https://github.com/gmx-io/gmx-contracts/blob/master/README.md",
    description:
      "The core contracts cover various aspects of decentralized finance (DeFi), including trading, liquidity provision, staking, and governance. Users can engage in decentralized trading by interacting with contracts such as GMX, Vault, Router, and OrderBook. The protocol's flexibility is highlighted through its compatibility with different blockchain networks, offering a diverse range of functionalities for users and developers building on the GMX.",
    version: "v0.6.12+commit.27d51765",
  })
}
