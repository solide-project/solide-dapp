import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> => {
  return await getContractsByGithub({
    title: "0x Verifiable Delay Function",
    url: "https://api.github.com/repos/0xProject/VDF/contents/contracts",
    tutorial: "https://github.com/0xProject/VDF/blob/master/README.md",
    description:
      "Verifiable Delay Function (VDF) verifier contract. VDFs are cryptographic functions designed to introduce a time delay in their evaluation, and they have applications in various fields, including blockchain and decentralized systems implemented by 0x Project.",
  })
}
