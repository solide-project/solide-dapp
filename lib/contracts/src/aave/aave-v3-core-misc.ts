import { ContractSchema } from "@/lib/schema/contract"
import { getContractsByGithub } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> => await getContractsByGithub({
  title: "Aave v3 Misc Contracts",
  url: "https://api.github.com/repos/aave/aave-v3-core/contents/contracts/misc",
  tutorial: "https://github.com/aave/docs-v3/blob/main/getting-started/contracts-overview.md|https://github.com/aave/aave-v3-core/blob/master/README.md",
  reference: "https://docs.aave.com/developers/getting-started/contracts-overview#misc",
  description:
    "In the realm of miscellaneous components within the Aave ecosystem, the AaveOracle stands out as a crucial contract responsible for obtaining asset prices, overseeing price sources, and managing updates to the fallback oracle. Simultaneously, the AaveProtocolDataProvider takes on a pivotal role as a peripheral contract, dedicated to collecting and pre-processing essential information from the Pool. Together, these contracts play integral roles in ensuring data accuracy, facilitating efficient decision-making.",
})
