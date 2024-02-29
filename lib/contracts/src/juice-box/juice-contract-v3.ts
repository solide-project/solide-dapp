import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Juice Box V3 Core Contracts",
    url: "https://api.github.com/repos/jbx-protocol/juice-contracts-v3/contents/contracts",
    tutorial:
      "https://github.com/jbx-protocol/juice-docs-v3/blob/master/docs/dev/learn/architecture/README.md|https://github.com/jbx-protocol/juice-docs-v3/blob/master/docs/dev/learn/architecture/terminals.md",
    reference: "https://docs.juicebox.money/dev/learn/architecture/",
    description:
      "The Juicebox protocol on Ethereum facilitates transparent project funding and management via smart contracts. It enables users to deploy NFTs representing project ownership with administrative privileges. These contracts allow for flexible funding cycles, configurable token minting and burning, and support for various token standards. Additionally, projects can pre-program token distributions and incur protocol fees for distributions outside the ecosystem. Custom treasury strategies, multi-token acceptance, and administrative delegation add further versatility to the protocol's functionalities.",
  })
