import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Push Core Contracts",
    url: "https://api.github.com/repos/ethereum-push-notification-service/push-smart-contracts/contents/contracts/token?ref=pushContracts-v2.5.0-dev",
    tutorial:
      "https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/tokenomics/01-deepdive/01-Token-Deepdive.mdx",
    description:
      "The $PUSH token serves as the native currency within the Push Protocol, underpinning a circular economy for its decentralized communication network. With a focus on community-driven governance, the token plays a vital role in securing the network through Proof of Stake consensus, rewards Push Nodes for positive contributions, and penalizes nodes acting against the network's interest.",
    remappings: {
      "@openzeppelin/contracts/": "@openzeppelin/contracts@3.4.0/",
    },
  })
