import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

interface EigenLayerPodDeployment {
    chainInfo: {
        chainId: number;
        deploymentBlock: number;
    }
    eigenPods: {
        multiValidators: string[];
        singleValidators: string[];
        inActive: string[];
        allEigenPods: string[];
    };
}

const reference = "https://docs.eigenlayer.xyz/eigenlayer/deployed-contracts"
const tutorial = "https://github.com/Layr-Labs/eigenlayer-contracts/blob/dev/docs/README.md"
export const items = async (): Promise<ContractSchema[]> => {
    const ret: ContractSchema[] = []

    const response = await fetch("https://raw.githubusercontent.com/Layr-Labs/eigenlayer-contracts/mainnet/script/configs/mainnet/Mainnet_current_eigenPods.config.json")
    const data: EigenLayerPodDeployment = await response.json()

    data.eigenPods.multiValidators.forEach((address) => {
        ret.push({
            title: `EigenLayer Pod (Multi Validators): ${address.slice(0, 10)}`,
            reference,
            tutorial,
            description: "Multi Validators EigenPod is a user-deployed contract facilitating native restaking by configuring beacon chain withdrawal credentials to EigenPod addresses. This allows users to restake and manage validator balances efficiently within EigenLayer.",
            playground: {
                default: {
                    address: address
                }
            }
        })
    })

    data.eigenPods.singleValidators.forEach((address) => {
        ret.push({
            title: `EigenLayer Pod (Single Validator): ${address.slice(0, 10)}`,
            reference,
            tutorial,
            description: "Single Validators EigenPod is a user-deployed contract facilitating native restaking by configuring beacon chain withdrawal credentials to EigenPod addresses. This allows users to restake and manage validator balances efficiently within EigenLayer.",
            playground: {
                default: {
                    address: address
                }
            }
        })
    })

    data.eigenPods.inActive.forEach((address) => {
        ret.push({
            title: `EigenLayer Pod: ${address.slice(0, 10)}`,
            reference,
            tutorial,
            description: "Inactive EigenPod. May not be in use.",
            playground: {
                default: {
                    address: address
                }
            },
            outdated: "Inactive Contract. May not be in use."
        })
    })

    return ret
}