import { getExplorer } from "@/lib/chains/explorer"
import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { ContractSchema } from "@/lib/schema/contract"
import { camelToWord, snakeToCamel } from "@/lib/utils"

import { AddressBook } from "../../utils/utils"

interface COMPContracts {
  [key: string]: COMPContractInfo
}

interface COMPContractInfo {
  address: string
  contract: string
  description: string
}

interface COMPToken {
  address: string
  contract: string
  decimals: number
  initial_exchange_rate_mantissa: string
  name: string
  symbol: string
  underlying: string
}

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
  const networkName = getNetworkNameFromChainID(chain)
  const explorer = getExplorer(chain)
  Object.entries(data.Comptroller as COMPContracts).forEach(([key, val]) => {
    const formattedName = camelToWord(key)
    ret.push({
      title: `Compound Comptroller: ${formattedName}`,
      tutorial:
        "https://github.com/compound-finance/compound-finance.github.io/blob/master/docs/pages/v2/comptroller.md",
      reference: "https://docs.compound.finance/v2/comptroller",
      description: `${val.description} ${formattedName} deployed on ${networkName}. The cToken balances are fungible and tradable, and users can redeem them for the underlying assets along with earned interest. The interest rate is determined algorithmically based on the supply and demand dynamics within the Compound protocol.`,
      playground: {
        default: {
          address: val.address,
          chainId: chain,
        },
      },
    })
  })

  Object.entries(data.CTokenDelegate as COMPContracts).forEach(([key, val]) => {
    const formattedName = camelToWord(key)
    ret.push({
      title: `Compound CTokenDelegate: ${formattedName}`,
      tutorial: "",
      reference:
        "https://github.com/compound-finance/compound-protocol/blob/master/contracts/CErc20Delegate.sol",
      description: `${val.description} ${formattedName} deployed on ${networkName}. The CErc20Delegate serves as a delegate for CTokens, which are tokens that wrap an EIP-20 underlying token and are delegated to by a delegator. The main purpose of this contract is to handle the initialization and resignation of the delegate, allowing the delegator to assign and relinquish responsibilities to the delegate. The contract ensures that only the admin (presumably the owner or authorized entity) can call these functions, maintaining control over the delegation process.`,
      playground: {
        default: {
          address: val.address,
          chainId: chain,
        },
      },
    })
  })

  Object.entries(data.cTokens as Record<string, COMPToken>).forEach(
    ([key, val]) => {
      ret.push({
        title: `Compound cTokens: ${val.name} (${val.symbol})`,
        tutorial:
          "https://github.com/compound-finance/compound-finance.github.io/blob/master/docs/pages/v2/ctokens.md",
        reference:
          "https://github.com/compound-finance/compound-protocol/blob/master/contracts/CErc20Delegate.sol",
        description: `cToken ${val.name} deployed on ${networkName}. The cTokens are compliant with the EIP-20 standard and are used for various interactions within the protocol, such as minting, redeeming, borrowing, and repaying. There are two types of cTokens: CErc20, representing ERC-20 assets, and CEther, representing Ether. Users can earn interest through the cToken's exchange rate, which increases relative to the underlying asset.`,
        playground: {
          default: {
            address: val.address,
            chainId: chain,
          },
        },
      })
    }
  )

  Object.entries(data.Contracts as AddressBook)
    .filter(([key, _]) => key.startsWith("Pair"))
    .forEach(([key, val]) => {
      const formattedName = snakeToCamel(key)
      ret.push({
        title: `Compound Trading Pair: ${formattedName}`,
        tutorial:
          "https://github.com/compound-finance/compound-protocol/blob/master/networks/README.md",
        reference: "",
        description: `Compounf Trading Pairs ${formattedName} deployed on ${networkName}. Trading pairs in Compound are formed when a user supplies one type of asset to the protocol and borrows another, creating a pair of assets that are interrelated in terms of lending and borrowing activities. These pairs play a crucial role in the liquidity and functionality of the Compound protocol.`,
        playground: {
          default: {
            address: val as string,
            chainId: chain,
          },
        },
      })
    })

  return ret
}
