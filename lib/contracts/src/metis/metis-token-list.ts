import { ChainID } from "@/lib/chains/id"
import { items as uniswapTokenListItems } from "@/lib/contracts/src/uniswap/uniswap-token-list"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> =>
  await uniswapTokenListItems({
    url: "https://raw.githubusercontent.com/MetisProtocol/metis/master/tokenlist/toptoken.json",
    chain: ChainID.METIS_ANDROMEDA,
    tutorial: "https://github.com/MetisProtocol/metis/blob/master/README.md",
  })
