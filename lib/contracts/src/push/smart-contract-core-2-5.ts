import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Push Core Contracts (v2.5)",
    url: `https://api.github.com/repos/ethereum-push-notification-service/push-smart-contracts/contents/contracts/PushCore?ref=pushContracts-v2.5.0-dev`,
    tutorial:
      "https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/notifications/07-push-smart-contracts/02-PSC-Push-Comm-Contract.mdx",
    description: "",
    remappings: {
      "@openzeppelin/contracts/": "@openzeppelin/contracts@4.7.0/",
    },
  })
