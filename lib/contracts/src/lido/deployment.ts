import { ChainID } from "@/lib/chains/id"
import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"
import { camelToWord } from "@/lib/utils"

const tutorial = ""
const reference = "https://docs.juicebox.money/dev/learn/architecture/"

export const items = async (): Promise<ContractSchema[]> => {
    const ret: ContractSchema[] = []

    const chainId = ChainID.ETHEREUM_MAINNET
    const response = await fetch(
        "https://raw.githubusercontent.com/lidofinance/lido-cli/eb094050e75bc276e13895efc676ff01cb4632fb/configs/deployed-mainnet.json"
    )

    const data = await response.json()
    Object.entries(data).forEach(([key, value]: [string, any]) => {
        if (value.proxy?.address) {
            ret.push({
                title: `Lido Deployment ${camelToWord(key)} Contract`,
                tutorial,
                reference,
                description: `Key contracts and protocols within the Lido ecosystem, including core protocol contracts such as Lido Locator, Lido and stETH token proxies, wstETH token, and various other contracts related to staking, node operators, DAO governance, oracles, liquidity pools (like Curve and Balancer), price feeds (Chainlink), reward programs, and managers for different chains like Arbitrum and Optimism`,
                playground: {
                    default: {
                        address: value.proxy?.address,
                        chainId,
                    },
                },
            })
        }
    })
    return ret
}
