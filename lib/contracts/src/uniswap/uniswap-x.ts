import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema"

export const items = async (): Promise<ContractSchema[]> => await getContractsByGithub({
    title: "Uniswap X Reactors",
    url: "https://api.github.com/repos/Uniswap/UniswapX/contents/src/reactors",
    tutorial:
        "https://github.com/Uniswap/UniswapX/blob/main/README.md",
    reference: "https://docs.uniswap.org/contracts/uniswapx/overview",
    description:
        "UniswapX is a new permissionless auction-based routing protocol designed for trading across Automated Market Makers (AMMs) and other liquidity sources. It offers improved swapping by aggregating liquidity sources, enabling gas-free swapping, providing protection against Maximal Extractable Value (MEV), and ensuring no cost for failed transactions.",
})
