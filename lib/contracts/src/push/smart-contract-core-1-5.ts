import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Push Comm Contracts (v1.5)",
    url: "https://api.github.com/repos/ethereum-push-notification-service/push-smart-contracts/contents/contracts/EPNSCore?ref=pushContracts-v1.5.0",
    tutorial:
      "https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/notifications/07-push-smart-contracts/02-PSC-Push-Comm-Contract.mdx",
    description: "",
    remappings: {
      "@openzeppelin/contracts/": "@openzeppelin/contracts@3.4.0/",
    },
  })
