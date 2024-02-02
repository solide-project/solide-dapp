import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Push Goverance Contracts",
    url: "https://api.github.com/repos/ethereum-push-notification-service/push-governance-smart-contracts/contents/contracts",
    tutorial:
      "https://github.com/ethereum-push-notification-service/push-governance-smart-contracts/blob/main/README.md",
    description:
      "The Push Protocol's smart contract repository serves as the foundation for its decentralized communication network. This integral repository hosts the core code, powering a web3 communication protocol that revolutionizes cross-chain notifications and messaging for decentralized applications (dApps), wallets, and services.",
    remappings: {
      "@openzeppelin/contracts/": "@openzeppelin/contracts@3.4.0/",
    },
  })
