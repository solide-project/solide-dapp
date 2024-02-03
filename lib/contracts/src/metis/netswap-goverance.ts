import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { ContractSchema } from "@/lib/schema/contract"

interface FarmContract {
  id: number
  name: string
  pair: string
  allocPoint: number
}

export const items = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/Netswap/nett-farmlists/main/mainnet/NETTFarms.json"
  )
  const data = await response.json()

  const ret: ContractSchema[] = []
  data.farms.forEach((token: FarmContract) => {
    ret.push({
      title: `Netswap Farms: (${token.name})`,
      tutorial: "",
      reference: "https://github.com/Netswap",
      description: `Netswap's Farm ${token.name} Pair on ${getNetworkNameFromChainID(ChainID.METIS_ANDROMEDA)}. In Netswap's ecosystem, NETT operates with every aspect of Metis. Netswap is building a comprehensive decentralized trading platform for the future DeFi.`,
      playground: {
        default: {
          address: token.pair,
          chainId: ChainID.METIS_ANDROMEDA,
        },
      },
    })
  })

  return ret
}
