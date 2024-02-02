import { ContractSchema } from "@/lib/schema"
import { camelToWord } from "@/lib/utils"

export const items = (): ContractSchema[] =>
  Object.entries(addresses).map(([key, val]) => {
    const formattedName = camelToWord(key)
    return {
      title: `Push Protocol Deployments: ${formattedName}`,
      tutorial:
        "https://github.com/ethereum-push-notification-service/push-dapp/blob/5a8eda775f2821efb9b39f7b7c1c3f24f39b3879/README.md",
      reference:
        "https://github.com/ethereum-push-notification-service/push-dapp/blob/5a8eda775f2821efb9b39f7b7c1c3f24f39b3879/src/config/config-prod.js",
      description: `${formattedName} contract deployed on mainnet at Ethereum. These components deployed within the context of the Push Protocol. These deployments encompass a range of functionalities crucial to the seamless execution of the push protocol, enabling efficient communication and data transfer. These include LP, Token and the Core contracts.`,
      playground: {
        default: {
          address: val,
        },
      },
    }
  })

/**
 * https://github.com/ethereum-push-notification-service/push-dapp/blob/5a8eda775f2821efb9b39f7b7c1c3f24f39b3879/src/config/config-prod.js
 * Last Updated: 2024-01-30
 */
const addresses: Record<string, string> = {
  ceaErc20: "0xc1C0472c0C80bCcDC7F5D01A376Bd97a734B8815", // mainnet address
  epnscore: "0x66329Fdd4042928BfCAB60b179e1538D56eeeeeE", // mainnet address core
  epnsEthComm: "0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa", // mainnet address eth comm
  epnsPolyComm: "0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa", // mainnet address polygon comm
  pushToken: "0xf418588522d5dd018b425E472991E52EBBeEEEEE", // mainnet address
  aDai: "0xcB1Fe6F440c49E9290c3eb7f158534c2dC374201", // mainnet address
  staking: "0xB72ff1e675117beDefF05a7D0a472c3844cfec85", // mainnet address
  yieldFarmPUSH: "0x6019B84E2eE9EB62BC42E32AB6375A7095886366", // mainnet address
  yieldFarmLP: "0xbB2A70e67770D0A7F5f42d883C5BBE9b85e0DcD6", // mainnet address
  epnsToken: "0xf418588522d5dd018b425E472991E52EBBeEEEEE", // mainnet address
  epnsLPToken: "0xaf31fd9c3b0350424bf96e551d2d1264d8466205", // mainnet address
  rockstar: "0x3f8C2152b79276b78315CAF66cCF951780580A8a", // mainnet address
  batchMintNFT: "0x6BaeeD93336B277D8949Cb89161269032698f443", // mainnet address
  NFTRewards: "0xc4708BB6EC3B797344f123126171302e4e3E68E2", // mainnet address
  distributor: "0x64CfAb2eA55ADAe08c9040fdA247828444fB9D0D", // mainnet address
  uniswapV2Router02: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  WETHAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", // mainnet address
  USDTAddress: "0xdac17f958d2ee523a2206206994597c13d831ec7", // mainnet address
  rockstarV2: "0xA2b885e7065EA59a3251489715ca80DE5Ff642f8", //mainnet address
  NFTRewardsV2: "0xdc66567a990B7fa10730459537620857c9e03287", //mainnet address

  //For Yield Farm V2
  stakingV2: "0x9D2513F5b539DC774C66b28ACEc94e4bD00105C2", //mainnet address
  uniV2LPToken: "0xaf31fd9c3b0350424bf96e551d2d1264d8466205", //same as epnsLPToken
  pushCoreV2: "0x66329Fdd4042928BfCAB60b179e1538D56eeeeeE", //not upgraded
}
