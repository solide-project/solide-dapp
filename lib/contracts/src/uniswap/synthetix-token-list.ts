import { items as uniswapTokenListItems } from "@/lib/contracts/src/uniswap/uniswap-token-list"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> => {
  return await uniswapTokenListItems(
    "https://synths.snx.eth.link",
    "https://github.com/Synthetixio/synthetix-docs/blob/master/content/tokens/list.md",
    "https://synths.snx.eth.link"
  )
}
