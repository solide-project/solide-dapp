import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Uniswap v4 Hooks",
    url: "https://api.github.com/repos/Uniswap/v4-periphery/contents/contracts",
    tutorial: "https://github.com/Uniswap/v4-periphery/blob/main/README.md",
    reference: "https://github.com/Uniswap/v4-periphery",
    description:
      "v4-periphery contracts serve as an extension to the core pool logic, providing additional functionalities such as hook contracts, position managers, and necessary libraries for integrations. These contracts build upon the foundational framework established by v4-core, offering developers a comprehensive toolkit to enhance and customize their decentralized exchange (DEX) and automated market maker (AMM) solutions.",
  })
