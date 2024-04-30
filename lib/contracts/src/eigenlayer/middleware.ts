import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"


const reference = "https://github.com/Layr-Labs/eigenlayer-middleware"
const tutorial = "https://github.com/Layr-Labs/eigenlayer-middleware/blob/dev/docs/README.md"
const remappings = {
    "eigenlayer-contracts/": "@eigenlayer/contracts/",
    "@openzeppelin/contracts/": "@openzeppelin/contracts@4.7.0/",
    "@openzeppelin-upgrades/contracts/": "@openzeppelin/contracts-upgradeable@4.7.0/",
}
export const items = async (): Promise<ContractSchema[]> =>
    await getContractsByGithub({
        title: "Eigenlayer Middleware Contracts",
        url: "https://api.github.com/repos/Layr-Labs/eigenlayer-middleware/contents/src?ref=dev",
        tutorial,
        reference,
        description: "The EigenLayer Middleware contracts facilitate the integration of Actively Validated Services (AVSs) with EigenLayer's restaking system. AVSs use these contracts to interact with Operators validated by delegated restaked assets. The middleware provides building blocks for AVSs, including quorums (configurations of stake types), strategies (weighted shares based on stake types), and mechanisms for replacing Operators based on predefined parameters. These contracts enable AVSs to securely hook into EigenLayer's core contracts and customize security offerings through configurable stake types and governance.",
        remappings,
        docRemappings: {
            BLSApkRegistry: "https://github.com/Layr-Labs/eigenlayer-middleware/blob/dev/docs/registries/BLSApkRegistry.md",
            IndexRegistry: "https://github.com/Layr-Labs/eigenlayer-middleware/blob/dev/docs/registries/IndexRegistry.md",
            StakeRegistry: "https://github.com/Layr-Labs/eigenlayer-middleware/blob/dev/docs/registries/StakeRegistry.md",
            BLSSignatureChecker: "https://github.com/Layr-Labs/eigenlayer-middleware/blob/dev/docs/BLSSignatureChecker.md",
            RegistryCoordinator: "https://github.com/Layr-Labs/eigenlayer-middleware/blob/dev/docs/RegistryCoordinator.md",
            ServiceManagerBase: "https://github.com/Layr-Labs/eigenlayer-middleware/blob/dev/docs/ServiceManagerBase.md",
        }
    })
