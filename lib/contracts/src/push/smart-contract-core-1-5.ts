import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Push Comm Contracts (v1.5)",
    url: "https://api.github.com/repos/ethereum-push-notification-service/push-smart-contracts/contents/contracts/EPNSCore?ref=pushContracts-v1.5.0",
    tutorial:
      "https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/notifications/07-push-smart-contracts/02-PSC-Push-Comm-Contract.mdx",
    description: "Core contracts for Push Protocol features include channel verification, updating channel metadata, and deactivating/reactivating channels. The contract utilizes various storage variables to manage funds, fees, and channel-related data. The core functionalities are protected by specific modifiers ensuring that only authorized entities can perform certain actions. The contract also interacts with other contracts through defined interfaces and includes setter functions for admin and governance addresses.",
    remappings: {
      "@openzeppelin/contracts/": "@openzeppelin/contracts@3.4.0/",
    },
  })
