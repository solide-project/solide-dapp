import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Aave v3 Core Contracts",
    url: "https://api.github.com/repos/aave/aave-v3-core/contents/contracts/protocol/tokenization",
    tutorial:
      "https://github.com/aave/docs-v3/blob/main/getting-started/contracts-overview.md|https://github.com/aave/aave-v3-core/blob/master/README.md",
    reference:
      "https://docs.aave.com/developers/getting-started/contracts-overview#tokenization",
    description:
      "Tokenization within Aave introduces a range of specialized tokens to enhance functionality. AToken and DelegationAwareAToken serve as yield-generating assets, with the latter having voting power and delegation features. On the borrowing side, StableDebtToken and VariableDebtToken represent non-transferable tokens that accrue interest for stable and variable rate borrowings, respectively. This tokenized framework allows users to seamlessly engage in lending, borrowing, and governance, providing a robust and comprehensive ecosystem within Aave for decentralized finance activities.",
  })
