import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Biconomy Hyphen Contracts",
    url: "https://api.github.com/repos/bcnmy/hyphen-contract/contents/contracts/hyphen",
    tutorial: "https://github.com/bcnmy/hyphen-contract/blob/master/README.md",
    reference:
      "https://docs-gasless.biconomy.io/products/hyphen-instant-cross-chain-transfers",
    description:
      "The Hyphen smart contract provides a solution for instant and cost-effective token transfers between different blockchain networks, addressing challenges in moving funds from Layer 2 to Layer 1 blockchains. By maintaining token liquidity on both sides of the chains and executing transfers instantly, Hyphen minimizes transfer times and costs.",
    remappings: {
      "@openzeppelin/contracts/": "openzeppelin/contracts@4.4.0/",
      "@openzeppelin/contracts-upgradeable/": "@openzeppelin/contracts-upgradeable@4.4.0/",
    }
  })
