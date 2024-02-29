import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Aave v3 Pool Contracts",
    url: "https://api.github.com/repos/aave/aave-v3-core/contents/contracts/protocol/pool",
    tutorial:
      "https://github.com/aave/docs-v3/blob/main/getting-started/contracts-overview.md|https://github.com/aave/aave-v3-core/blob/master/README.md",
    reference:
      "https://docs.aave.com/developers/getting-started/contracts-overview#pool-logic",
    description:
      "The Pool Logic contract lies at the heart of the Aave Protocol, orchestrating interest rate calculations based on the dynamic state of reserves. It leverages optimized base curves, uniquely tailored for specific asset parameters, facilitating flexible yield adjustments in response to changes in borrowed funds and overall liquidity within each pool. Acting as the primary gateway to Aave, the Pool contract is owned by the market-specific PoolAddressesProvider, handling user interactions. Admin functions are managed through the PoolConfigurator contract, ensuring secure and permissioned access through ACLManager-controlled system roles.",
  })
