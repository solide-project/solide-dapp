import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Aave v3 Periphery Misc Contracts",
    url: "https://api.github.com/repos/aave/aave-v3-periphery/contents/contracts/misc",
    tutorial:
      "https://github.com/aave/docs-v3/blob/main/getting-started/contracts-overview.md|https://github.com/aave/aave-v3-core/blob/master/README.md",
    reference:
      "https://docs.aave.com/developers/getting-started/contracts-overview#misc-1",
    description:
      "The Aave protocol incorporates several helper contracts to enhance functionality. UiIncentiveDataProviderV3 serves as a contract facilitating the retrieval of incentive data, primarily employed by the Aave UI to access reward balance information. UiPoolDataProviderV3, another helper contract for the Aave UI, specializes in fetching pool data, encompassing reserves lists, liquidity, token addresses, and rate strategies. WETHGateway functions as a helper contract streamlining interactions with Aave Protocol V3 pools, allowing the single transaction supply, borrow, repay, and withdraw of ERC20 tokens, and accommodating native tokens like ETH on Ethereum or Matic on Polygon. Lastly, WalletBalanceProvider, employed by the Aave backend, efficiently retrieves the balances of multiple tokens for a specified user address, minimizing blockchain calls required for fetching user balances.",
  })
