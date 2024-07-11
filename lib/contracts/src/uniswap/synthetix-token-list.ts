import { ChainID } from "@/lib/chains/id"
import { items as uniswapTokenListItems } from "@/lib/contracts/src/uniswap/uniswap-token-list"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
  await uniswapTokenListItems({
    url: "https://wispy-bird-88a7.uniswap.workers.dev/?url=http://synths.snx.eth.link", // "https://synths.snx.eth.link",
    tutorial:
      "https://github.com/Synthetixio/synthetix-docs/blob/master/content/tokens/list.md",
    reference: "https://synths.snx.eth.link",
  })
