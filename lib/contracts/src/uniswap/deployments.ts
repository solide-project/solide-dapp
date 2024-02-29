import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { ContractSchema } from "@/lib/schema"
import { camelToWord } from "@/lib/utils"

export const items = async (chain: string): Promise<ContractSchema[]> => {
  const ret: ContractSchema[] = []

  const networkName = getNetworkNameFromChainID(chain)
  Object.entries(addresses).forEach(([key, val]) => {
    const formattedName = camelToWord(key)
    ret.push({
      title: `Uniswap Deployment: ${formattedName}`,
      tutorial: "https://github.com/Uniswap/v3-periphery/blob/main/deploys.md",
      reference: "https://docs.uniswap.org/",
      description: `Uniswap V3 ${formattedName} on ${networkName}.`,
      playground: {
        default: {
          address: val,
          chainId: chain,
        },
      },
    })
  })

  return ret
}

/**
 * https://github.com/Uniswap/v3-periphery/blob/main/deploys.md
 * Updated: 2024-02-14
 */
const addresses: Record<string, string> = {
  UniswapV3Factory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
  Multicall2: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
  ProxyAdmin: "0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2",
  TickLens: "0xbfd8137f7d1516D3ea5cA83523914859ec47F573",
  Quoter: "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6",
  SwapRouter: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
  NFTDescriptor: "0x42B24A95702b9986e82d421cC3568932790A48Ec",
  NonfungibleTokenPositionDescriptor:
    "0x91ae842A5Ffd8d12023116943e72A606179294f3",
  TransparentUpgradeableProxy: "0xEe6A57eC80ea46401049E92587E52f5Ec1c24785",
  NonfungiblePositionManager: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
  V3Migrator: "0xA5644E29708357803b5A882D272c41cC0dF92B34",
}
