import { ChainID } from "@/lib/chains/id"
import { getChainIdFromNetwork } from "@/lib/chains/name"
import { ContractSchema } from "@/lib/contracts"

export const items = async () => {
  const response = await fetch(
    "https://wispy-bird-88a7.uniswap.workers.dev/?url=http://stablecoin.cmc.eth.link"
  )
  const data = await response.json()

  const ret: ContractSchema[] = []
  const networkName = getChainIdFromNetwork(ChainID.ETHEREUM_MAINNET)
  data.tokens.forEach((token: any) => {
    ret.push({
      title: `${data.name}: ${token.name} (${token.symbol})`,
      tutorial: "",
      reference: "https://tokenlists.org/token-list?url=stablecoin.cmc.eth",
      description: `Stablecoin for differents assets ${token.name} on ${networkName}. Powered by Uniswap's Token Lists. A stablecoin is a type of cryptocurrency specifically designed to maintain a stable value, typically pegged to an real world asset. The primary goal of a stablecoin is to minimize volatility, providing users with a reliable and secure digital asset for transactions, investments, and as a store of value.`,
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
