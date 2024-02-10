import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema"
import { reference, tutorial } from "./ronin-bridge-contracts-deployments"

export const items = async (): Promise<ContractSchema[]> =>
    await getContractsByGithub({
        title: "Ronin Contract Bridge (Extensions)",
        url: "https://api.github.com/repos/axieinfinity/ronin-bridge-contracts/contents/src/extensions",
        tutorial,
        reference,
        description: "The extensions smart contracts is for decision-making structures and sequential task execution, with the core smart contracts likely facilitate the bridge's essential operations, including asset transfers and upgrades.",
    })
