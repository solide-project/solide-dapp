import { ContractSchema } from "@/lib/schema/contract"
import { getNetworkNameFromChainID } from "@/lib/chains/name"

export const items = async ({
    url,
    chainId,
    mainTitle,
    tutorial,
    reference,
    description,
}: {
    url: string,
    chainId: string,
    mainTitle?: string,
    tutorial?: string,
    reference?: string,
    description?: string,
}) => {
    const response = await fetch(url)
    const data = await response.json() as Record<string, string>;

    const ret: ContractSchema[] = []
    Object.entries(data).forEach(([key, contract]) => {
        let title = ""
        if (mainTitle) {
            title = `${mainTitle}: ${key}`
        } else {
            title = `${key}`
        }

        ret.push({
            title: title,
            tutorial: tutorial,
            reference: reference || url,
            description: `${key} is a ${mainTitle} contract on ${getNetworkNameFromChainID(chainId)}. ${description}`,
            playground: {
                default: {
                    address: contract as string,
                    chainId: chainId,
                },
            },
        })
    })

    return ret
}
