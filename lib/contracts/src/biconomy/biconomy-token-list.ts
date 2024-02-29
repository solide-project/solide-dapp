import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema/contract"

interface TokenInterface {
  symbol: string
  address: string
  nativeOracleAddress: string
  tokenOracleAddress: string
  description: string
  priceFeedFunction: string
  priceFeedAddress: string
  feedSalt: string
  derivedFeed: boolean
}

export const items = async (): Promise<ContractSchema[]> => {
  const response = await fetch(
    "https://raw.githubusercontent.com/bcnmy/biconomy-paymasters/4b0a5aecbb3c1d142bb42ccb1f00c67f981fc58c/scripts/configs/prod/token-config-polygon-mainnet.json"
  )
  const data: { tokens: TokenInterface[] } = await response.json()

  const ret: ContractSchema[] = []

  const chainId = ChainID.POLYGON_MAINNET
  const networkName = getNetworkNameFromChainID(chainId)
  const mainTitle = "Biconomy Token List"
  const tutorial =
    "https://github.com/bcnmy/biconomy-paymasters/blob/main/README.md"
  const reference =
    "https://github.com/bcnmy/biconomy-paymasters/blob/main/scripts/configs/prod/token-config-polygon-mainnet.json"
  data.tokens.forEach((token) => {
    ret.push(
      ...[
        {
          title: `${mainTitle}: ${token.symbol}`,
          tutorial,
          reference,
          description: `${token.description} on ${networkName}. The Biconomy ERC-20 token list serves as a valuable resource for developers, investors, and users within the blockchain ecosystem, providing insights into token availability, market capitalization, trading volume, and other relevant metrics within the Biconomy ecosytem.`,
          playground: {
            default: {
              address: token.address,
              chainId,
            },
          },
        },
        {
          title: `${mainTitle} Price Feed: ${token.symbol}`,
          tutorial,
          reference,
          description: `${token.description} Price Oracle on ${networkName}. Call ${token.priceFeedFunction} to get the value. The Price Oracles service Biconomy uses for fetching and broadcasting real-time price data from various sources to smart contracts and decentralized applications (DApps) within Biconomy ecosystem. These oracles play a critical role to access accurate and reliable price feeds for assets, facilitating functionalities such as stable coin pegging, asset valuation, liquidation mechanisms, and more. By leveraging decentralized consensus mechanisms, aggregation techniques, and cryptographic proofs, Price Oracles ensure transparency, resilience against manipulation, and trustlessness.`,
          playground: {
            default: {
              address: token.priceFeedAddress,
              chainId,
            },
          },
        },
      ]
    )
  })

  return ret
}
