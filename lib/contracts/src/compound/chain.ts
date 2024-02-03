import { getExplorer } from "@/lib/chains/explorer"
import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { ContractSchema } from "@/lib/schema/contract"
import { camelToWord, snakeToCamel } from "@/lib/utils"

const getAPI = (chain: string) => {
  switch (chain) {
    case ChainID.ETHEREUM_MAINNET:
      return "mainnet"
    default:
      return ""
  }
}

export const items = async (chain: string) => {
  const id = getAPI(chain)
  if (!id) {
    return []
  }

  const response = await fetch(
    `https://raw.githubusercontent.com/compound-finance/compound-protocol/master/networks/${id}.json`
  )
  const data = await response.json()
  const ret: ContractSchema[] = []

  // TODO: https://raw.githubusercontent.com/compound-finance/compound-protocol/master/networks/mainnet.json
  // Can provide a lot more information about the contracts looking at the bottom of JSON
  const networkName = getNetworkNameFromChainID(chain);
  Object.entries(data.Contracts).forEach(([key, val]) => {
    if (key.startsWith("c") && !key.includes("Delegate")) {
      ret.push({
        title: `Compound cToken: ${key}`,
        tutorial: "https://github.com/compound-finance/compound-protocol/blob/master/networks/README.md|https://github.com/compound-finance/compound-finance.github.io/blob/96bfc3e72974fe85d73f2c209aa3d41da5eb4a77/docs/pages/v2/ctokens.md",
        reference: `${getExplorer(chain)}/address/${val}`,
        description: `Compound Token contract ${key} deployed on ${networkName}. The cToken balances are fungible and tradable, and users can redeem them for the underlying assets along with earned interest. The interest rate is determined algorithmically based on the supply and demand dynamics within the Compound protocol.`,
        playground: {
          default: {
            address: val as string,
            chainId: chain,
          },
        },
      })
    } else if (key.startsWith("Pair")) {
      const formattedName = snakeToCamel(key)

      ret.push({
        title: `Compound Trading Pair: ${formattedName}`,
        tutorial: "https://github.com/compound-finance/compound-protocol/blob/master/networks/README.md",
        reference: `${getExplorer(chain)}/address/${val}`,
        description: `Compounf Trading Pairs ${formattedName} deployed on ${networkName}. Trading pairs in Compound are formed when a user supplies one type of asset to the protocol and borrows another, creating a pair of assets that are interrelated in terms of lending and borrowing activities. These pairs play a crucial role in the liquidity and functionality of the Compound protocol.`,
        playground: {
          default: {
            address: val as string,
            chainId: chain,
          },
        },
      })
    }
  })

  return ret
}
