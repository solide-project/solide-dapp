import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"


const reference = "https://docs.eigenlayer.xyz/eigenlayer/deployed-contracts"
const remappings = {
    "@openzeppelin/contracts/": "@openzeppelin/contracts@4.7.0/",
    "@openzeppelin-upgrades/contracts/": "@openzeppelin/contracts-upgradeable@4.7.3/",
    "@openzeppelin/contracts-upgradeable/": "@openzeppelin/contracts-upgradeable@4.7.3/",
}
export const items = async (): Promise<ContractSchema[]> => [
    ...await getContractsByGithub({
        title: "Eigenlayer Core Contracts",
        url: "https://api.github.com/repos/Layr-Labs/eigenlayer-contracts/contents/src/contracts/core?ref=dev",
        tutorial: "https://github.com/Layr-Labs/eigenlayer-contracts/blob/dev/docs/README.md",
        reference,
        description: "EigenLayer's core smartc contracts includes the EigenPodManager for deploying and validating EigenPods, the StrategyManager for managing Liquid Staking Token (LST) deposits and withdrawals, and the DelegationManager for Staker delegation to Operators and withdrawal operations. These contracts enable Stakers to deposit assets, delegate to Operators, and initiate withdrawals efficiently within the EigenLayer system, supported by additional components like the DelayedWithdrawalRouter, EigenLayerBeaconOracle, AVSDirectory, and Slasher.",
        remappings,
        docRemappings: {
            DelegationManager: "https://github.com/Layr-Labs/eigenlayer-contracts/blob/dev/docs/core/DelegationManager.md",
            AVSDirectory: "https://github.com/Layr-Labs/eigenlayer-contracts/blob/dev/docs/core/AVSDirectory.md",
            StrategyManager: "https://github.com/Layr-Labs/eigenlayer-contracts/blob/dev/docs/core/StrategyManager.md",
        }
    }),
    ...await getContractsByGithub({
        title: "Eigenlayer Pods Contracts",
        url: "https://api.github.com/repos/Layr-Labs/eigenlayer-contracts/contents/src/contracts/pods?ref=dev",
        tutorial: "https://github.com/Layr-Labs/eigenlayer-contracts/blob/dev/docs/core/EigenPodManager.md",
        reference,
        description: "These contracts are critical components of a system enabling Stakers to restake and delegate beacon chain ETH to Operators through the DelegationManager. The EigenPodManager facilitates EigenPod deployment and restaking processes, allowing Stakers to validate validator balances and withdrawal status using EigenPods. When Stakers exit, they use the DelegationManager to withdraw from EigenLayer, utilizing EigenPods as withdrawal credentials for multiple validators. These contracts manage complex interactions such as delegation, validator status changes, and balance updates, ensuring accurate tracking and management of Staker balances and validator statuses within the system.",
        remappings,
    }),
    ...await getContractsByGithub({
        title: "Eigenlayer Strategies Contracts",
        url: "https://api.github.com/repos/Layr-Labs/eigenlayer-contracts/contents/src/contracts/strategies?ref=dev",
        tutorial: "https://github.com/Layr-Labs/eigenlayer-contracts/blob/dev/docs/core/StrategyManager.md",
        reference,
        description: "These contract coordinates depositing and withdrawing LSTs (tokens) into specific strategies for Stakers, managing shares, and enabling efficient withdrawals through the DelegationManager. Multiple LSTs are supported with separate instances of StrategyBaseTVLLimits as of M2, handling deposit and withdrawal operations. StrategyManager maintains mappings to track Staker balances across strategies and manages strategy whitelisting for deposits. Its methods handle token deposits, strategy whitelisting, and third-party transfer permissions for specific strategies, ensuring accurate accounting and efficient withdrawals for Stakers.",
        remappings,
    })
]
