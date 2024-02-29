import { items as uniswapTokenListItems } from "@/lib/contracts/src/uniswap/uniswap-token-list"
import { ContractSchema } from "@/lib/schema"

export const items = async (chain: string): Promise<ContractSchema[]> =>
  await uniswapTokenListItems({
    url: "https://raw.githubusercontent.com/compound-finance/token-list/6246e5dda653ad2cad67a549b93cb29bd4e0011d/compound.tokenlist.json",
    chain,
  })
