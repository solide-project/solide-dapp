import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Uniswap v3 Periphery",
    url: "https://api.github.com/repos/Uniswap/v3-periphery/contents/contracts",
    tutorial:
      "https://github.com/Uniswap/docs/blob/main/docs/contracts/v3/reference/overview.md",
    reference:
      "https://docs.uniswap.org/contracts/v3/reference/overview#periphery",
    description:
      "Uniswap v3-Periphery consists of auxiliary contracts enhancing Uniswap v3's core functionality. These contracts manage liquidity positions, execute swaps, and interact with the core Uniswap v3 contracts. They enable customizable liquidity provision, NFT position management, automated liquidity strategies, price oracles for accurate asset pricing, and gas-efficient token swaps, offering users increased flexibility, efficiency, and automation in decentralized trading and liquidity provision.",
    remappings: {
      "@openzeppelin/contracts/": "@openzeppelin/contracts@3.4.0/",
    },
    version: "v0.7.6+commit.7338295f",
    docRemappings: {
      UniswapV3Factory:
        "https://github.com/Uniswap/docs/blob/main/docs/contracts/v3/reference/core/UniswapV3Factory.md",
      UniswapV3Pool:
        "https://github.com/Uniswap/docs/blob/main/docs/contracts/v3/reference/core/UniswapV3Pool.md",
      UniswapV3PoolDeployer:
        "https://github.com/Uniswap/docs/blob/main/docs/contracts/v3/reference/core/UniswapV3PoolDeployer.md",
    },
  })
