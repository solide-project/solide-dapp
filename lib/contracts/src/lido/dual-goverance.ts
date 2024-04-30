import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
    await getContractsByGithub({
        title: "Lido Dual Governance",
        url: "https://api.github.com/repos/lidofinance/dual-governance/contents/contracts",
        tutorial:
            "https://github.com/lidofinance/dual-governance/blob/main/docs/mechanism.md|https://github.com/lidofinance/dual-governance/blob/main/docs/specification.md",
        reference: "https://github.com/lidofinance/dual-governance/tree/main",
        description: "Dual governance model enhances alignment and foot voting efficiency, aiming to introduce mechanisms for stakers to signal disagreement with DAO decisions and negotiate resolutions, with ongoing research focused on minimizing governance risks and improving stakeholder coordination.",
    })