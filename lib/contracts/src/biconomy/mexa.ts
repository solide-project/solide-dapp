import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Biconomy Mexa (v6) Contracts",
    url: "https://api.github.com/repos/bcnmy/mexa/contents/contracts/6/forwarder",
    tutorial: "https://github.com/bcnmy/mexa/blob/main/README.md",
    reference: "https://github.com/bcnmy/mexa",
    description:
      "Mexa contracts are a comprehensive implementation of meta transactions, offering a suite of tools and contracts for gasless transactions in decentralized applications (dApps). Contracts such as Custom Meta Transactions, BasicMetaTransaction, and EIP712MetaTransaction, providing different approaches for integrating meta transactions into smart contracts. Additionally, Mexa supports EIP-2771 Secure Native Meta Transactions, enabling native meta transactions by inheriting the BaseRelayRecipient contract and setting a trusted forwarder address. With the Biconomy Forward module, users can pay gas fees in ERC20 tokens, offering a seamless transaction experience while saving ETH.",
    remappings: {
      "@openzeppelin/contracts/": "@openzeppelin/contracts@3.4.0/",
    },
    version: "v0.7.6+commit.7338295f",
  })
