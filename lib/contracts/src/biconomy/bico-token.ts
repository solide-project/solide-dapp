import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Bico Token Contracts",
    url: "https://api.github.com/repos/bcnmy/biconomy-contracts/contents/contracts/bico-token/bico",
    tutorial:
      "https://github.com/bcnmy/biconomy-contracts/blob/master/README.md",
    reference: "https://github.com/bcnmy/biconomy-contracts/tree/master",
    description:
      "The Bico Tokens serves as the foundation for a versatile ERC-20 token, equipped with features for role-based access control, token minting and burning, and integration with EIP-2771 context. It incorporates a governance framework enabling adjustable parameters such as minting restrictions, pause functionality, and trusted forwarder assignment. The implementation is designed to facilitate efficient and secure value exchange within decentralized networks while offering flexibility and control to token administrators through governance mechanisms.",
    version: "v0.8.4+commit.c7e474f2",
    remappings: {
      "@openzeppelin/contracts/": "openzeppelin/contracts@4.4.0/",
      "@openzeppelin/contracts-upgradeable/": "@openzeppelin/contracts-upgradeable@4.4.0/",
    }
  })
