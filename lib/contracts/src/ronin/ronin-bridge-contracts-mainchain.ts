import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema"
import { reference, tutorial } from "./ronin-bridge-contracts-deployments"

export const items = async (): Promise<ContractSchema[]> =>
    await getContractsByGithub({
        title: "Ronin Contract Bridge (Mainchain)",
        url: "https://api.github.com/repos/axieinfinity/ronin-bridge-contracts/contents/src/mainchain",
        tutorial,
        reference,
        description: "The mainchain contracts are bridge system designed for interoperability between two blockchain networks. It leverages OpenZeppelin's contracts and incorporates various features such as withdrawal limitations, access control roles, and mapping of tokens between the mainchain and the Ronin blockchain. The contract handles deposit and withdrawal requests, supporting both native and ERC-20 tokens. Notable functionalities include tracking deposit counts, mapping tokens, implementing withdrawal locks, and utilizing a domain separator for EIP-712 compliance.",
    })
