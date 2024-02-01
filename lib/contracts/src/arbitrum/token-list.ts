import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> => {
    const response = await fetch(
        "https://tokenlist.arbitrum.io/ArbTokenLists/arbed_arb_whitelist_era.json"
    )
    const data = await response.json()

    const ret: ContractSchema[] = []
    const shuffled = data.tokens.sort(() => 0.5 - Math.random())

    // Get sub-array of first n elements after shuffled
    let tokens = shuffled.slice(0, 50)
    tokens.forEach((token: any) => {
        ret.push({
            title: `${token.name} (${token.symbol})`,
            tutorial: "",
            reference:
                "https://tokenlists.org/token-list?url=https://tokenlist.arbitrum.io/ArbTokenLists/arbed_arb_whitelist_era.json",
            description: `${token.name} on Arbitrum. Powered by Uniswap's Token Lists, a community-led initiative to improve discoverability, reputation and trust in ERC20 token lists in a manner that is inclusive, transparent, and decentralized.`,
            playground: {
                default: {
                    address: token.address,
                    chainId: token.chainId,
                },
            },
        })
    })

    return ret
}