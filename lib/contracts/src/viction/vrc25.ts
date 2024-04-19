import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/contracts"

export const tutorial =
  "https://github.com/BuildOnViction/gitbook/blob/main/developer-guide/standards-and-specification/vrc25-specification.md"
export const reference =
  "https://docs.viction.xyz/developer-guide/standards-and-specification/vrc25-specification"
export const description =
  "VRC25 is a fungible token standard designed for the Viction ecosystem, providing a standardized API for token implementation in smart contracts. This standard facilitates token transfers and approvals, with a focus on managing fees to prevent misuse. Developed to simplify token usage, especially for new users transitioning from traditional web platforms to blockchain, VRC25 eliminates the need for users to hold native tokens for gas fees, enabling payment of network fees with the tokens themselves."
export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "VRC25",
    url: "https://api.github.com/repos/BuildOnViction/vrc25/contents/contracts",
    tutorial,
    reference,
    description,
  })
