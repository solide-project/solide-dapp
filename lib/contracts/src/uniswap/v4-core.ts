import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema"

export const items = async (): Promise<ContractSchema[]> => await getContractsByGithub({
    title: "Uniswap v4 Core",
    url: "https://api.github.com/repos/Uniswap/v4-core/contents/src",
    tutorial:
        "https://github.com/Uniswap/docs/blob/main/docs/contracts/v4/concepts/01-intro-to-v4.mdx",
    reference: "https://docs.uniswap.org/contracts/v4/concepts/intro-to-v4",
    description:
        "the v4-core contracts utilize a singleton-style architecture, centralizing pool state management within the PoolManager.sol contract. This design enables various pool actions through the acquisition of a lock on the contract, allowing for operations such as swapping, modifying positions, donating, settling, and minting. The contracts also supports the integration of hook contracts, which can execute specific callbacks throughout the pool action lifecycle, including initialization, liquidity management, swapping, and fee imposition.",
    docRemappings: {
        "ERC6909": "https://github.com/ethereum/ercs/blob/master/ERCS/erc-6909.md",
    }
})
