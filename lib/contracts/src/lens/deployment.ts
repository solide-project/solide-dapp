import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"
import { camelToWord } from "@/lib/utils"
import { ethers } from "ethers"

export interface ContractAddress {
    mainnet: {
        Modules: ModulesAddress,
        [key: string]: any
    },
    testnet: {
        Modules: ModulesAddress,
    }
}

export interface ModulesAddress {
    v1: {
        [key: string]: { name: string, addy: string }[]
    },
    v2: {
        [key: string]: { name: string, addy: string }[]
    },
}

export const items = async (): Promise<ContractSchema[]> => {
    const ret: ContractSchema[] = []

    const response = await fetch("https://github.com/lens-protocol/core/raw/master/addresses.json")
    const data: ContractAddress = await response.json()

    const chainId = ChainID.POLYGON_MAINNET
    const networkName = getNetworkNameFromChainID(chainId)
    Object.entries(data.mainnet)
        .filter(([_, address]) => typeof address === "string" && ethers.utils.isAddress(address))
        .forEach(([name, address]) => {
            ret.push({
                title: `Lens Core Contract ${camelToWord(name)}`,
                tutorial: "",
                reference: "https://docs.lens.xyz/docs/whats-new-in-lens-v2",
                description: `Lens Core Base Contract deployed contract: "${address}"`,
                playground: {
                    default: {
                        address: address as string,
                        chainId
                    },
                },
            })
        })

    Object.entries(data.mainnet.Modules.v1)
        .forEach(([name, addresses]) => {
            addresses.forEach((address) => {
                const name = camelToWord(address.name)
                ret.push({
                    title: `Lens Module ${camelToWord(name)} v1: ${name}`,
                    tutorial: "https://github.com/lens-protocol/modules/blob/master/README.md",
                    reference: "https://docs.lens.xyz/docs/module-interfaces",
                    description: `Lens v1 Modules ${name} on ${networkName}. Modules in the Lens Protocol are customizable smart contracts that enable profile owners to add unique functionalities to their profiles, publications, and interactions within the Lens social graph. Follow modules control how users can follow profiles, allowing for features like subscription mechanisms or fee-on-follow logic. Reference modules govern interactions with publications, controlling who can comment, quote, or mirror a publication based on custom rules such as NFT ownership."`,
                    playground: {
                        default: {
                            address: address.addy,
                            chainId
                        },
                    },
                })
            })
        })

    Object.entries(data.mainnet.Modules.v2)
        .forEach(([name, addresses]) => {
            addresses.forEach((address) => {
                ret.push({
                    title: `Lens Module ${camelToWord(name)} v2: ${camelToWord(address.name)}`,
                    tutorial: "https://github.com/lens-protocol/modules/blob/master/README.md",
                    reference: "https://docs.lens.xyz/docs/module-interfaces",
                    description: `Lens v2 Modules ${name} on ${networkName}. Modules in the Lens Protocol are customizable smart contracts that enable profile owners to add unique functionalities to their profiles, publications, and interactions within the Lens social graph. Follow modules control how users can follow profiles, allowing for features like subscription mechanisms or fee-on-follow logic. Reference modules govern interactions with publications, controlling who can comment, quote, or mirror a publication based on custom rules such as NFT ownership."`,
                    playground: {
                        default: {
                            address: address.addy,
                            chainId
                        },
                    },
                })
            })
        })

    return ret
}