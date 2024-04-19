import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import {
  getContractsByDeployments,
  getContractsByGithub,
} from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"
import { camelToWord } from "@/lib/utils"

import { filterFiles, GitHubFileInfo } from "../../utils/utils"

const getAPI = (chain: string): string => {
  switch (chain) {
    case ChainID.RONIN_SAIGON_TESTNET:
      return "ronin-testnet"
    case ChainID.RONIN_MAINNET:
    default:
      return "ronin-mainnet"
  }
}

export const items = async (chain: string): Promise<ContractSchema[]> => {
  const id = getAPI(chain)
  if (!id) {
    return []
  }

  // const response = await fetch(
  //     `https://api.github.com/repos/axieinfinity/rns-contracts/contents/deployments/${id}`
  // )
  // const directory: GitHubFileInfo[] = await response.json()

  // const filteredFiles = filterFiles(directory)
  // const ret: any[] = await Promise.all(
  //     filteredFiles.map((file) =>
  //         getContractsByDeployments({
  //             file,
  //             title: "Ronin Name Service (RNS) Deployments",
  //             // url: `https://api.github.com/repos/axieinfinity/rns-contracts/contents/deployments/${id}`,
  //             tutorial:
  //                 "https://github.com/axieinfinity/ronin-documentation/blob/main/docs/apps/rns/overview.md?plain=1#L2",
  //             description: "",
  //             chain,
  //         })
  //     )
  // )

  const networkName = getNetworkNameFromChainID(chain)
  const ret: ContractSchema[] = Object.entries(addresses).map(([key, val]) => {
    const formattedName = camelToWord(key)
    return {
      title: `Ronin Name Service (RNS) Deployments: ${formattedName}`,
      tutorial:
        "https://github.com/axieinfinity/ronin-documentation/blob/main/docs/apps/rns/overview.md",
      reference:
        "https://github.com/axieinfinity/ronin-bridge-contracts/tree/mainnet/deployments",
      description: `${formattedName} deployment on ${networkName}.`,
      playground: {
        default: {
          address: val,
          chainId: chain,
        },
      },
    }
  })

  return ret.filter((result) => result !== undefined)
}

const addresses: Record<string, string> = {
  NameCheckerLogic: "0xdB8eABf4F27baA9C5EBaD23fEe1cB12037B58065",
  NameCheckerProxy: "0x486334aB27FfdC989FD6CBaF44e711ffA80A7BC2",
  OwnedMulticaller: "0x8975923D01132bEB6c412F827f63D44712726E13",
  PublicResolverLogic: "0x507eB5107c59A2B5Af923c38e83Af8d59443b62D",
  PublicResolverProxy: "0xadb077d236d9E81fB24b96AE9cb8089aB9942d48",
  RNSAuctionLogic: "0x20143137cB90c8663e575BF509D8f370cd711cB8",
  RNSAuctionProxy: "0xD55e6d80aeA1FF4650BC952C1653ab3CF1b940A9",
  RNSDomainPriceLogic: "0x2f8c5E6BbE526d0C88979269F2B249271491717c",
  RNSDomainPriceProxy: "0x2BdC555A87Db9207E5d175f0c12B237736181675",
  RNSReverseRegistrarLogic: "0x2DcFb418410Bc9c58Ee58029fA3C69833A8F3231",
  RNSReverseRegistrarProxy: "0xb8618A73CC08d2c4097D5c0E0F32FA4AF4547e2F",
  RNSUnifiedLogic: "0x31b0E375f0eB97deDa644209D18749244d2f831e",
  RNSUnifiedProxy: "0x67C409DaB0EE741A1B1Be874bd1333234cfDBF44",
  RONRegistrarControllerLogic: "0x7DF2732B400ed050C0cFDe58A0DBD870c0502792",
  RONRegistrarControllerProxy: "0x662852853614cbBb5D04BF2E29955b97E3C50B69",
}
