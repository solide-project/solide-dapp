import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Aave v3 Configuration Contracts",
    url: "https://api.github.com/repos/aave/aave-v3-core/contents/contracts/protocol/configuration",
    tutorial:
      "https://github.com/aave/docs-v3/blob/main/getting-started/contracts-overview.md|https://github.com/aave/aave-v3-core/blob/master/README.md",
    reference:
      "https://docs.aave.com/developers/getting-started/contracts-overview#configuration",
    description:
      "In Aave's Configuration, the ACLManager ensures precise power allocation, while the PoolAddressesProvider facilitates modular designs and market indexing. The PoolAddressesProviderRegistry maintains active addresses, and the PriceOracleSentinel enhances protocol resilience during downtime. Together, they create a robust framework for decentralized finance in the Aave ecosystem.",
  })
