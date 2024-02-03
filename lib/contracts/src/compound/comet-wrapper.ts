import { ContractSchema } from "@/lib/schema/contract"
import { getContractsByGithub } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> => await getContractsByGithub({
  title: "Compound Comet Wrapper",
  url: "https://api.github.com/repos/compound-finance/comet-wrapper/contents/src",
  tutorial: "https://github.com/compound-finance/comet-wrapper/blob/main/README.md",
  reference: "https://github.com/compound-finance/comet-wrapper/tree/main",
  description:
    "The Comet Wrapper is a tokenization solution designed to convert rebasing Compound III tokens, such as cUSDCv3 and cWETHv3, into non-rebasing ERC-4626 vaults with ERC-7246 (Encumber) support. As rebasing tokens can present integration challenges for most protocols, the Comet Wrapper acts as an interface, allowing easier integration with Compound III tokens by other protocols.",
})
