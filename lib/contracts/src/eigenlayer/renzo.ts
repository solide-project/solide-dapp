import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"


const reference = "https://github.com/Renzo-Protocol/contracts-public"
const tutorial = "https://github.com/Renzo-Protocol/contracts-public/blob/master/README.md"
const remappings = {
    "@openzeppelin/contracts/": "@openzeppelin/contracts@4.9.3/",
    "@openzeppelin/contracts-upgradeable/": "@openzeppelin/contracts-upgradeable@4.9.3/",
}
const version = "v0.8.19+commit.7dd6d404"
export const items = async (): Promise<ContractSchema[]> => [
    ...await getContractsByGithub({
        title: "Renzo Protocol Core",
        url: "https://api.github.com/repos/Renzo-Protocol/contracts-public/contents/contracts",
        tutorial,
        reference,
        description: "Renzo, operating on the EigenLayer platform, acts as the primary gateway for Ethereum restaking through smart contracts and operator nodes, optimizing risk-reward profiles. When users deposit Liquid Staking Tokens (LSTs) or ETH into Renzo, it mints an equivalent amount of ezETH. This process facilitates restaking strategies, where users can secure Actively Validated Services (AVSs) through various combinations of AVS selections. Each AVS represents a unique opportunity for rewards and risks, and the number of possible strategies grows exponentially with the number of AVSs available. The underlying smart contracts manage the minting of ezETH upon LST or ETH deposits and orchestrate the selection and execution of restaking strategies within the EigenLayer ecosystem.",
        remappings,
        version,
    }),
    ...await getContractsByGithub({
        title: "Renzo Protocol Oracles",
        url: "https://api.github.com/repos/Renzo-Protocol/contracts-public/contents/contracts/Oracle",
        tutorial: "https://github.com/Layr-Labs/eigenlayer-contracts/blob/dev/docs/core/EigenPodManager.md",
        reference,
        description: "Renzo, operating on the EigenLayer platform, acts as the primary gateway for Ethereum restaking through smart contracts and operator nodes, optimizing risk-reward profiles. When users deposit Liquid Staking Tokens (LSTs) or ETH into Renzo, it mints an equivalent amount of ezETH. This process facilitates restaking strategies, where users can secure Actively Validated Services (AVSs) through various combinations of AVS selections. Each AVS represents a unique opportunity for rewards and risks, and the number of possible strategies grows exponentially with the number of AVSs available. The underlying smart contracts manage the minting of ezETH upon LST or ETH deposits and orchestrate the selection and execution of restaking strategies within the EigenLayer ecosystem.",
        remappings,
        version,
    }),
]
