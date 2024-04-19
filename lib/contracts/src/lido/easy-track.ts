import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
    await getContractsByGithub({
        title: "Lido Easy Track Contract",
        url: "https://api.github.com/repos/lidofinance/easy-track/contents/contracts",
        tutorial:
            "https://github.com/lidofinance/docs/blob/main/docs/guides/easy-track-guide.md",
        reference: "https://github.com/lidofinance/easy-track",
        description: "Easy Track is a lightweight voting process designed to facilitate specific governance decisions within the Lido DAO, requiring minimal objections for motion passage and focusing on efficient management of proposals affecting small groups within the DAO community.",
    })
