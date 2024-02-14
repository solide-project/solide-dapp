import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema"

export const items = async (): Promise<ContractSchema[]> => await getContractsByGithub({
    title: "Uniswap v4 Hooks",
    url: "https://api.github.com/repos/Uniswap/v4-periphery/contents/contracts/hooks/examples",
    tutorial:
        "https://github.com/Uniswap/docs/blob/main/docs/contracts/v4/overview.mdx|https://github.com/Uniswap/docs/blob/main/docs/contracts/v4/concepts/02-1-overview.mdx",
    reference: "https://docs.uniswap.org/contracts/v4/overview",
    description:
        "Uniswap V4 smart contracts hooks operate at different stages of a pool action's lifecycle, enabling high customization in liquidity provision and token trading on-chain. These contracts offer pool creators options to maintain V3 tradeoff decisions or explore new features like dynamic fees, on-chain limit orders, and time-weighted average market maker (TWAMM) functionalities. The architecture includes a new \"singleton\" contract housing all pools, enhancing platform efficiency and reducing costs.",
})
