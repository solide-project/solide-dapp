import { ContractSchema } from "@/lib/schema/contract"
import { getContractsByGithub } from "@/lib/contracts"

/**
 * Note this is note used as it is deprecated for v3, but we can provide it for reference
 * https://github.com/jbx-protocol/juice-contracts-v2
 * @returns 
 */
export const items = async (): Promise<ContractSchema[]> => await getContractsByGithub({
    title: "Juice Box V2 Core Contracts",
    url: "https://api.github.com/repos/jbx-protocol/juice-contracts-v2/contents/contracts",
    tutorial: "",
    reference: "https://docs.juicebox.money/dev/learn/architecture/",
    description: "The Juicebox protocol, operating on Ethereum, facilitates transparent project funding and management through smart contracts. It provides capabilities such as deploying NFTs with administrative privileges, setting up customizable funding cycles, and accommodating diverse token standards. Additional features include pre-programmed token distributions, protocol fee structures, and adaptable treasury strategies, all contributing to its flexibility and functionality.",
    outdated: "These contracts are outdate and should only be used for reference. See v3 contracts for current version."
})