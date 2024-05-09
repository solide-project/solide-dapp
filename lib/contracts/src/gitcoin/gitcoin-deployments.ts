import { ContractSchema } from "@/lib/contracts"
import { camelToWord } from "@/lib/utils"
import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { ethers } from "ethers"

const getId = (chain: string) => {
    switch (chain) {
        case ChainID.OPTIMISM_MAINNET:
            return "0xa"
        case ChainID.OPTIMISM_SEPOLIA:
            return "0xaa37dc"
        case ChainID.LINEA_TESTNET:
            return "0xe704"
        case ChainID.LINEA_MAINNET:
        default: return "0xe708"
    }
}

const reference = "https://github.com/allo-protocol/allo-v2/blob/main/contracts/strategies/SpecTemplate.md"
const tutorial = ""
export const items = async (): Promise<ContractSchema[]> => {
    const ret: ContractSchema[] = []
    const response = await fetch("https://raw.githubusercontent.com/gitcoinco/eas-proxy/main/deployments/onchainInfo.json")
    const data = await response.json()

    const chainId = ChainID.LINEA_MAINNET
    const networkName = getNetworkNameFromChainID(chainId)
    const contracts = data[getId(chainId)]

    Object.entries(contracts).forEach(([key, val]: any) => {
        if (typeof val !== "object") return

        if (val.address && ethers.utils.isAddress(val.address)) {
            ret.push({
                title: `Gitcoin Deployments: ${camelToWord(key)}`,
                tutorial: "https://github.com/gitcoinco/eas-proxy/blob/main/docs/00-onchain-data.md|https://github.com/gitcoinco/eas-proxy/blob/main/docs/01-onchain-passport-attestation.md|https://github.com/gitcoinco/eas-proxy/blob/main/docs/02-onchain-stamp-attestation.md",
                reference: "https://github.com/gitcoinco/eas-proxy",
                description: `The ${camelToWord(key)} on ${networkName} are part of decentralized identity and verification system for Gitcoin or a similar platform. They include contracts for issuing credentials, managing identity and access services (EAS), resolving, verifying, and attesting data, defining data schemas for user profiles or scoring, and decoding specific passport data within the ecosystem. Together, these contracts form a comprehensive framework supporting identity management and data integrity within a decentralized application environment.`,
                playground: {
                    default: {
                        address: val.address.toString(),
                        chainId,
                    }
                }
            })
        }
    })
    return ret;
}
