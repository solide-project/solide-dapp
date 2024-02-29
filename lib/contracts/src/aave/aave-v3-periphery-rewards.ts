import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Aave v3 Periphery Rewards Contracts",
    url: "https://api.github.com/repos/aave/aave-v3-periphery/contents/contracts/rewards",
    tutorial:
      "https://github.com/aave/docs-v3/blob/main/getting-started/contracts-overview.md|https://github.com/aave/aave-v3-core/blob/master/README.md",
    reference:
      "https://docs.aave.com/developers/getting-started/contracts-overview#rewards",
    description:
      "The peripheral contracts consist of a RewardsController responsible for configuring different rewards and managing the claim process. Within this system, Transfer Strategies, represented as isolated contracts, handle the intricacies of reward transfers during the claim process. This modular design enables the RewardsController to accommodate diverse reward types, including Staked Aave, common ERC20 tokens, and NFTs, by leveraging the flexibility provided by these separate Transfer Strategy contracts.",
  })
