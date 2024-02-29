import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema/contract"

interface AaveTokenAssetList {
  [key: string]: TokenInfo[]
}

interface TokenInfo {
  aTokenAddress: string
  aTokenSymbol: string
  stableDebtTokenAddress: string
  variableDebtTokenAddress: string
  symbol: string
  address: string
  decimals: number
}

export const items = async (): Promise<ContractSchema[]> => {
  const response = await fetch(
    "https://aave.github.io/aave-addresses/mainnet.json"
  )
  const data: AaveTokenAssetList = await response.json()

  const ret: ContractSchema[] = []
  const chain: string = ChainID.ETHEREUM_MAINNET
  const networkName = getNetworkNameFromChainID(chain)
  data.proto.forEach((token: TokenInfo) => {
    ret.push(
      ...[
        {
          title: `Aave aToken: ${token.aTokenSymbol}`,
          tutorial:
            "https://github.com/aave/docs-v3/blob/main/tokens/atoken.md",
          reference:
            "https://docs.aave.com/developers/v/2.0/deployed-contracts/deployed-contracts",
          description: `${token.aTokenSymbol} is a Aave V3 a on ${networkName}. aTokens are tokens minted and burnt upon supply and withdraw of assets to an Aave market, which denote the amount of crypto assets supplied and the yield earned on those assets. The aTokens’ value is pegged to the value of the corresponding supplied asset at a 1:1 ratio and can be safely stored, transferred or traded.`,
          playground: {
            default: {
              address: token.aTokenAddress,
              chainId: chain,
            },
          },
        },
        {
          title: `Aave Stable Debt: ${token.symbol}`,
          tutorial:
            "https://github.com/aave/docs-v3/blob/main/tokens/debttoken.md",
          reference:
            "https://docs.aave.com/developers/v/2.0/deployed-contracts/deployed-contracts",
          description: `Stable Debt token for ${token.aTokenSymbol} on ${networkName}. The DebtToken within Aave introduces interest-accruing tokens, categorized into Stable Debt Tokens and Variable Debt Tokens, minted and burned upon borrow and repayment. These tokens, embodying the debt owed by holders, align with the ERC20 standard but are non-transferable. Stable Debt Token methods delve into average stable rates, user last updated timestamps, user stable rates, supply data, total supply and average rate, total supply last updated timestamp, and principal balances.`,
          playground: {
            default: {
              address: token.stableDebtTokenAddress,
              chainId: chain,
            },
          },
        },
        {
          title: `Aave Variable Debt: ${token.symbol}`,
          tutorial:
            "https://github.com/aave/docs-v3/blob/main/tokens/debttoken.md",
          reference:
            "https://docs.aave.com/developers/v/2.0/deployed-contracts/deployed-contracts",
          description: `Variable Debt token for ${token.aTokenSymbol} on ${networkName}. The DebtToken within Aave introduces interest-accruing tokens, categorized into Stable Debt Tokens and Variable Debt Tokens, minted and burned upon borrow and repayment. These tokens, embodying the debt owed by holders, align with the ERC20 standard but are non-transferable. Variable Debt Token methods focus on scaled balances, scaled user balances and supply, scaled total supply, and previous index interest accrual for users.`,
          playground: {
            default: {
              address: token.variableDebtTokenAddress,
              chainId: chain,
            },
          },
        },
      ]
    )
  })
  return ret
}
