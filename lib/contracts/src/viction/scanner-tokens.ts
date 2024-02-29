import { getExplorer } from "@/lib/chains/explorer"
import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { ContractSchema } from "@/lib/schema"

interface TokenInfo {
  _id: string
  address: string
  circulatingSupply: string
  circulatingSupplyNumber: number
  decimals: number
  isMintable: boolean
  name: string
  owner: string
  status: boolean
  symbol: string
  timestamp: number
  totalSupply: string
  totalSupplyNumber: number
  type: string
  transferCount: number
  coingeckoId: string
  id: string
  marketcap: number
  price: number
  priceChange: number
  priceChangePercentage: number
  volume: number
  holder: number
  contractVerified: boolean
  projectVerified: boolean
}

const vrc21 =
  "The VRC21 implementing a standard TRC21 token with functionalities such as token transfer, allowance management, and fee calculation. The contract includes methods for minting, burning, and changing the token issuer. Additionally the VRC21 and adds functionality for multisig wallet management, including adding/removing owners, confirming transactions, and altering fees. The contract also allows token burning with associated fees and maintains a list of burned tokens along with relevant data."
const vrc25 =
  "VRC25 is a fungible token standard designed for the Viction ecosystem, providing a standardized API for token implementation in smart contracts. This standard facilitates token transfers and approvals, with a focus on managing fees to prevent misuse."
const vrc20 =
  "The VRC20 contract implements the standard token interface with functions like transfer, approve, and transferFrom. It contains the TRC20 contract standard and adds features such as owner management (addition, removal, replacement), transaction confirmation by owners, and token burning with optional fee charging."
export const items = async (): Promise<ContractSchema[]> => {
  const response = await fetch("https://www.vicscan.xyz/api/token/list")
  const data: { data: TokenInfo[] } = await response.json()

  const chain = ChainID.VICTION_MAINNET
  const explorer = getExplorer(chain)
  const networkName = getNetworkNameFromChainID(chain)
  const outdated =
    "Contract verified, however project not verified. Please view with caution."
  const ret: ContractSchema[] = []
  data.data
    .filter((token) => token.contractVerified && token.marketcap > 0)
    .forEach((token) => {
      let description = ""
      switch (token.type) {
        case "vrc20":
          description = vrc20
          break
        case "vrc21":
          description = vrc21
          break
        case "vrc25":
          description = vrc25
          break
      }
      ret.push({
        title: `${token.name} (${token.symbol})`,
        reference: `${explorer}/address/${token.address}`,
        description: `${token.symbol} on ${networkName}, with $${token.marketcap} Marketcap. Powered by VicScan. ${description}`,
        playground: {
          default: {
            address: token.address,
            chainId: chain,
          },
        },
        outdated: !token.projectVerified ? outdated : "",
      })
    })

  return ret
}
