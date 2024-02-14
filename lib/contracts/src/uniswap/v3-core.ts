import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema"

export const items = async (): Promise<ContractSchema[]> => await getContractsByGithub({
    title: "Uniswap v3 Core",
    url: "https://api.github.com/repos/Uniswap/v3-core/contents/contracts",
    tutorial:
        "https://github.com/Uniswap/docs/blob/main/docs/contracts/v3/reference/overview.md",
    reference: "https://docs.uniswap.org/contracts/v3/reference/overview#core",
    description:
        "Uniswap v3 Core smart contracts featuring advanced smart contracts that introduce concentrated liquidity and multiple fee tiers. With these contracts, liquidity providers can focus funds within specific price ranges, optimizing capital allocation, and customize strategies based on risk preferences.",
    docRemappings: {
        "UniswapV3Factory": "https://github.com/Uniswap/docs/blob/main/docs/contracts/v3/reference/core/UniswapV3Factory.md",
        "UniswapV3Pool": "https://github.com/Uniswap/docs/blob/main/docs/contracts/v3/reference/core/UniswapV3Pool.md",
        "UniswapV3PoolDeployer": "https://github.com/Uniswap/docs/blob/main/docs/contracts/v3/reference/core/UniswapV3PoolDeployer.md",

    }
})
