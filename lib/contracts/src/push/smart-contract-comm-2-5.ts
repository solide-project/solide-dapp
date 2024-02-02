import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Push Comm Contracts (v2.5)",
    url: "https://api.github.com/repos/ethereum-push-notification-service/push-smart-contracts/contents/contracts/PushComm?ref=pushContracts-v2.5.0-dev",
    tutorial:
      "https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/notifications/07-push-smart-contracts/02-PSC-Push-Comm-Contract.mdx",
    description:
      "The Push Communicator smart contract is designed to be deployed on multiple chains, distinguishing it from the Push core contract, and is intentionally lightweight, minimizing its reliance on Push Core. This simplicity is reflected in its features, allowing users to subscribe, unsubscribe, and send notifications. The contract structure includes types, modifiers, storage variables, structs, modifiers, mappings, and methods, covering essential functionalities such as subscription management, delegation, and meta transactions.",
    remappings: {
      "@openzeppelin/contracts": "@openzeppelin/contracts@3.4.0",
    },
  })
