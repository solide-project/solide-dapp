import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

const tutorial = "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/governance/README.adoc"
const reference = "https://docs.openzeppelin.com/contracts/5.x/api/governance"
const description = "The governance contracts offered by OpenZeppelin provide modular and customizable on-chain voting protocols, enabling various governance aspects such as voting power extraction, quorum settings, and integration with timelock mechanisms for secure and efficient governance processes."
export const items = async (): Promise<ContractSchema[]> => [
    ...(await getContractsByGithub({
        title: "Goverance Implementation",
        url: "https://api.github.com/repos/OpenZeppelin/openzeppelin-contracts/contents/contracts/governance",
        tutorial,
        reference,
        description,
    })),
    ...(await getContractsByGithub({
        title: "Goverance Extensions Implementation",
        url: "https://api.github.com/repos/OpenZeppelin/openzeppelin-contracts/contents/contracts/governance/extensions",
        tutorial,
        reference,
        description,
    })),
]