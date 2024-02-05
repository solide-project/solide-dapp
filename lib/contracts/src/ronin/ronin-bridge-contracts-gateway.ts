import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema"
import { reference, tutorial } from "./ronin-bridge-contracts-deployments"

export const items = async (): Promise<ContractSchema[]> =>
    await getContractsByGithub({
        title: "Ronin Contract Bridge (Gateway)",
        url: "https://api.github.com/repos/axieinfinity/ronin-bridge-contracts/contents/src/ronin/gateway",
        tutorial,
        reference,
        description: "Gateway are various components related to a bridge system, possibly involving reward mechanisms, slashing logic, tracking functionalities, a pause enforcer, and specific managers or gateways related to the Ronin blockchain. Currently the Ronin Gateway is version 3 of a gateway contract, specific for managing or gateways tailored for the Ronin blockchain.",
    })
