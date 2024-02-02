import { items as uniswapTokenListItems } from "@/lib/contracts/src/uniswap/uniswap-token-list"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> => {
  return await uniswapTokenListItems(
    "https://raw.githubusercontent.com/MetisProtocol/metis/master/tokenlist/toptoken.json",
    "https://github.com/MetisProtocol/metis/blob/master/README.md"
  )
}