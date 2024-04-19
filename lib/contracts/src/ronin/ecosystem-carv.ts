import { ContractSchema } from "@/lib/contracts"

import { items as getRoninEcosystemContract } from "./ronin-ecosystem"

export const items = async (): Promise<ContractSchema[]> =>
  await getRoninEcosystemContract({
    protocols: ["carv"],
    title: "CARV",
    tutorial: "",
    reference:
      "https://docs.carv.io/carv-protocol/tech-architecture-and-core-components#smart-contract",
    description:
      "The architecture incorporates key components like CARV ID, a unique ERC 7231 proposal binding Web2 and Web3 identities to NFTs and soulbound tokens (SBTs), facilitating interoperable data flow. CARV Link serves as a decentralized oracle for secure blockchain interoperability. Trusted Execution Environment (TEE) in the confidential computation layer ensures secure processing of user data, enabling operations like verification and encryption without revealing content.",
  })
