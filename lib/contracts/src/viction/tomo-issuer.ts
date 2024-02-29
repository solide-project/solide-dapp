import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Vic Issuer Contracts",
    url: "https://api.github.com/repos/BuildOnViction/tomoissuer/contents/contracts",
    tutorial:
      "https://github.com/BuildOnViction/gitbook/blob/main/faq/products/vicissuer.md",
    reference: "https://docs.viction.xyz/faq/products/vicissuer",
    description:
      "VicIssuer is a platform offering a user-friendly interface and backend system for issuing VRC20 and VRC21 tokens with minimal effort. It simplifies the token issuance process, requiring no coding experience, and allows for customization of token parameters such as supply, name, and transaction fees through its dashboard.",
  })
