import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"
import { camelToWord } from "@/lib/utils";
import { isAddress, zeroAddress } from "viem";

interface EigenLayerDeployment {
    addresses: any;
}

const reference = "https://docs.eigenlayer.xyz/eigenlayer/deployed-contracts"
const tutorial = "https://github.com/Layr-Labs/eigenlayer-contracts/blob/dev/docs/README.md"
export const items = async (): Promise<ContractSchema[]> => {
    const ret: ContractSchema[] = []

    const response = await fetch("https://raw.githubusercontent.com/Layr-Labs/eigenlayer-contracts/mainnet/script/configs/mainnet/Mainnet_current_deployment.config.json")
    const data: EigenLayerDeployment = await response.json()

    Object.entries(data.addresses).forEach(([key, value]) => {
        if (typeof value === "string" && isAddress(value) && value != zeroAddress) {
            ret.push({
                title: `EigenLayer Contract: ${camelToWord(key)}`,
                reference,
                tutorial,
                description: "Deployed core smart contracts used to interact with the restaking ecosystem efficiently. The StrategyManager handles deposits and withdrawals of Liquid Staking Tokens (LSTs) into specific strategies, while the DelegationManager manages Staker delegation and withdrawal processes. These contracts provide essential functionalities such as accounting for Staker deposits, tracking shares within strategies, and facilitating secure delegation to Operators. By leveraging these core contracts, users can participate in staking activities and optimize their asset management within EigenLayer.",
                playground: {
                    default: {
                        address: value
                    }
                }
            })
        }
    })

    Object.entries(data.addresses.strategies).forEach(([key, value]) => {
        ret.push({
            title: `EigenLayer Strategies: ${camelToWord(key)}`,
            reference,
            tutorial,
            description: "Strategies represent specific approaches for securing assets within the restaking ecosystem. Each strategy corresponds to a method of staking or restaking tokens, whether they are Liquid Staking Tokens (LSTs) or native ETH. Strategies are managed by smart contracts that handle the deposit and withdrawal of tokens, as well as the tracking of shares attributed to Stakers within these strategies",
            playground: {
                default: {
                    address: value as string
                }
            }
        })
    })

    return ret
}