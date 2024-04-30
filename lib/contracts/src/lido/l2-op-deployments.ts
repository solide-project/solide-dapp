import { ChainID } from "@/lib/chains/id"
import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"
import { camelToWord } from "@/lib/utils"

interface ContractInfo {
    artifactPath: string;
    sourcePath: string;
    name: string;
    address: string;
    txHash: string;
}

const tutorial = ""
const reference = "https://docs.juicebox.money/dev/learn/architecture/"

export const items = async (): Promise<ContractSchema[]> => {
    const ret: ContractSchema[] = []

    const chainId = ChainID.OPTIMISM_MAINNET
    const response = await fetch(
        "https://raw.githubusercontent.com/lidofinance/lido-l2/main/artifacts-opt.json"
    )

    const data: ContractInfo[] = await response.json()
    data.forEach((value: ContractInfo) => {
        ret.push({
            title: `Lido's Optimism Bridge Deployment ${value.name}`,
            tutorial,
            reference,
            description: `Lido Deployed ${value.name} contract on Mainnet. ERC20 token bridging between Ethereum and Optimism chains through Optimism's \"Standard Bridge\" focusing on scalability, simplicity, and gas efficiency for future contract extensions and developer clarity within Lido's integration into Optimism.`,
            playground: {
                default: {
                    address: value.address,
                    chainId,
                },
            },

        })
    })

    return ret
}
