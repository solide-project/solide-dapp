import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/contracts"
import { camelToWord, snakeToCamel } from "@/lib/utils"

const tutorial = "https://github.com/lidofinance/polygon-contracts/blob/main/README.md"
const reference = "https://docs.lido.fi/multisigs/lido-on-x#31-lido-on-polygon"

export const items = async (): Promise<ContractSchema[]> => {
    const ret: ContractSchema[] = []

    const chainId = ChainID.POLYGON_MAINNET
    const response = await fetch(
        "https://raw.githubusercontent.com/lidofinance/polygon-contracts/main/mainnet-deployment-info.json"
    )

    const data = await response.json()
    Object.entries(data).forEach(([key, value]: [string, any]) => {
        if (typeof value === "string") {
            ret.push({
                title: `Lido on Polygon Deployment ${snakeToCamel(camelToWord(key))}`,
                tutorial,
                reference,
                description: "Lido On Polygon Liquid Staking Protocol V2 is a DAO-governed system enabling users to stake ERC20 MATIC tokens on Ethereum, generating stMATIC tokens representing their share in staking rewards delegated across validators managed exclusively by Lido on Polygon contracts, facilitating Polygon's decentralization and integration with Ethereum DeFi protocols.",
                playground: {
                    default: {
                        address: value,
                        chainId,
                    },
                },
            })
        }
    })

    return ret
}
