import { getNetworkNameFromChainID } from "@/lib/chains/name";
import { ContractSchema } from "@/lib/schema/contract";
import { camelToWord } from "@/lib/utils";
import { ethers } from "ethers";

const mainTitle = "0x Protocol Contracts"
export const items = async (chain: string): Promise<ContractSchema[]> => {
    const response = await fetch("https://raw.githubusercontent.com/0xProject/protocol/development/packages/contract-addresses/addresses.json")
    const data = await response.json()
    const contracts = data[chain] || {};

    const ret: ContractSchema[] = []
    Object.entries(contracts).forEach(([key, val]: any) => {
        if (typeof val === "string" && ethers.isAddress(val) && ethers.ZeroAddress !== val) {
            const formattedName = camelToWord(key);
            ret.push({
                title: `${mainTitle}: ${formattedName}`,
                tutorial: "https://github.com/0xProject/protocol/blob/development/packages/contract-addresses/README.md",
                reference: "https://www.npmjs.com/package/@0x/contract-addresses",
                description: `Deployed ${formattedName} on ${getNetworkNameFromChainID(chain)}. Powered by the 0x Project, these known deployed contract addresses for a particular network.`,
                playground: {
                    default: {
                        address: val,
                        chainId: chain,
                    },
                },
            })
        }
    })

    return ret;
}