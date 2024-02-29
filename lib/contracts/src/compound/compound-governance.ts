import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Compound Governance Contracts",
    url: "https://api.github.com/repos/compound-finance/compound-governance/contents/contracts",
    tutorial:
      "https://github.com/compound-finance/compound-finance.github.io/blob/master/docs/pages/v3/governance.md",
    reference:
      "https://github.com/compound-finance/compound-governance/tree/main",
    description:
      "The governance system, controlled by the Timelock contract, oversees various aspects such as proxies, the Configurator implementation, the Comet factory, and the Comet implementation. Governance proposals are executed on Mainnet and relayed to other chains through bridges. The documentation details key governance functions, such as setting the Comet factory, Governor, and Pause Guardian addresses, pausing protocol functionalities, adjusting interest rates, updating asset configurations, and managing reserves withdrawals. Additionally, the ERC-20 Approve Manager Address function is highlighted for its potential security implications, emphasizing the importance of careful governance scrutiny.",
  })
