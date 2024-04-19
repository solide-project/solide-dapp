import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Juice Box Ownable Contract",
    url: "https://api.github.com/repos/jbx-protocol/juice-buyback/contents/contracts",
    tutorial:
      "https://github.com/jbx-protocol/juice-buyback/blob/main/README.md",
    reference: "https://github.com/jbx-protocol/juice-buyback",
    description:
      "The Juice Buyback Delegate introduces a datasource and delegate aiming to maximize the project token received by contributors when invoking the pay function on the terminal. This delegate employs a strategy of either minting new tokens or swapping existing tokens in a Uniswap V3 pool, based on the best quote available at the time of the call and user preferences. The delegate, currently used with ETH by JBDAO but adaptable to any ERC20 token as a terminal token, utilizes a frontend to pass quotes and swapping amounts to pay, with the option to utilize a time-weighted average price (TWAP) if no quote is provided.",
  })
