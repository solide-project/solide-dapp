import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> => {
  return await getContractsByGithub({
    title: "Compound Comet Wrapper",
    url: "https://api.github.com/repos/compound-finance/open-oracle/contents/contracts",
    tutorial:
      "https://github.com/compound-finance/compound-finance.github.io/blob/master/docs/pages/v2/prices.md",
    reference: "https://github.com/compound-finance/open-oracle",
    description:
      "The Open Oracle is a standard and SDK allowing reporters to sign key-value pairs (e.g. a price feed) that interested users can post to the blockchain. The system has a built-in view system that allows clients to easily share data and build aggregates.",
  })
}
