import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Compound III Comet",
    url: "https://api.github.com/repos/compound-finance/comet/contents/contracts",
    tutorial:
      "https://github.com/compound-finance/compound-finance.github.io/blob/master/docs/pages/compound-js/comet.md",
    reference: "https://github.com/compound-finance/comet",
    description:
      "Comet is a contract that inherits from CometMainInterface.sol and acts as the implementation for the majority of Comet's core functionalities. CometMainInterface.sol likely defines an interface that outlines the required functions, and Comet implements these functions to provide the essential features of the protocol. Additionally, some functions that might not fit directly within the Comet contract are implemented in CometExt.sol. In such cases, Comet utilizes DELEGATECALL to invoke these specific functions from CometExt.sol, ensuring a modular and extendable architecture.",
  })
