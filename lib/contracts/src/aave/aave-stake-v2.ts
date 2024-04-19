import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Aave v2 Stake Contracts",
    url: "https://api.github.com/repos/aave/aave-stake-v2/contents/contracts/stake",
    tutorial: "https://github.com/aave/aave-stake-v2/blob/master/README.md",
    reference: "",
    description:
      "The core contract, AaveDistributionManager, serves as the central logic for managing various distributions with different configurations. It calculates user rewards based on a distribution index and handles configuration, state updates, and reward claims. Overall, the architecture involves a common parent contract and specific child contracts for different types of incentives, providing a conceptual separation for configuration and mathematical calculations.",
  })
