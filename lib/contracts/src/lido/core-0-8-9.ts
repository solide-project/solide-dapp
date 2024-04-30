import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
    await getContractsByGithub({
        title: "Lido Core Contract (0.8.9)",
        url: "https://api.github.com/repos/lidofinance/core/contents/contracts/0.8.9",
        tutorial:
            "https://github.com/lidofinance/core/blob/master/contracts/COMPILERS.md|https://github.com/lidofinance/docs/blob/main/docs/introduction.mdx",
        reference: "https://github.com/lidofinance/core",
        description: "Lido Core Contract on Ethereum enables users to earn staking rewards by depositing ether, receiving stETH tokens in return, which represent staked ether with liquidity and automated withdrawal features, all governed by the Lido DAO.",
        version: "v0.8.9+commit.e5eed63a",
        remappings: {
            "@openzeppelin/contracts-v4.4/": "@openzeppelin/contracts@4.4.0/",
        }
    })
