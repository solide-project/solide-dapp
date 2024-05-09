import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const remappings = {
    "openzeppelin-contracts/contracts/": "@openzeppelin/contracts@4.9.5/",
    "openzeppelin-contracts-upgradeable/contracts/": "@openzeppelin/contracts-upgradeable@4.9.5/",
    "@openzeppelin/contracts/": "@openzeppelin/contracts@4.9.5/",
    "@openzeppelin/contracts-upgradeable/": "@openzeppelin/contracts-upgradeable@4.9.5/",
    "solady/": "solady/src/",
    "permit2/": "permit2/src/interfaces/"
}
export const version = "v0.8.19+commit.7dd6d404"
export const items = async (): Promise<ContractSchema[]> => [
    ...await getContractsByGithub({
        title: "Allo V2 Core",
        url: "https://api.github.com/repos/allo-protocol/allo-v2/contents/contracts/core",
        tutorial: "https://github.com/allo-protocol/allo-v2/blob/main/contracts/core/README.md",
        reference: "https://docs.eigenlayer.xyz/eigenlayer/deployed-contracts",
        description: `Smart contract designed to facilitate democratic capital allocation and distribution. Originally developed by Gitcoin to support the Grants Stack, these contracts serve broader applications beyond grants and quadratic funding. The protocol addresses the challenge of effectively allocating capital within the crypto ecosystem, leveraging tools like token drops, NFTs, treasury diversification, staking, and yield mechanisms.`,
        remappings,
        version,
        docRemappings: {
            Allo: "https://github.com/allo-protocol/allo-v2/blob/main/contracts/core/Allo.md",
            Anchor: "https://github.com/allo-protocol/allo-v2/blob/main/contracts/core/Anchor.md",
            Registry: "https://github.com/allo-protocol/allo-v2/blob/main/contracts/core/Allo.md",
        }
    }),
]
