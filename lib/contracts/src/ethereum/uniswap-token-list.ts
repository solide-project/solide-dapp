import { ContractSchema } from "@/lib/schema/contract"

export const items = async () => {
  const response = await fetch(
    "https://wispy-bird-88a7.uniswap.workers.dev/?url=http://stablecoin.cmc.eth.link"
  )
  const data = await response.json()

  const ret: ContractSchema[] = []
  data.tokens.forEach((token: any) => {
    ret.push({
      title: `${token.name} (${token.symbol})`,
      tutorial: "",
      reference: "https://tokenlists.org/token-list?url=stablecoin.cmc.eth",
      description: `Synthetix Token ${token.name}. Powered by Uniswap's Token Lists, a community-led initiative to improve discoverability, reputation and trust in ERC20 token lists in a manner that is inclusive, transparent, and decentralized.`,
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
