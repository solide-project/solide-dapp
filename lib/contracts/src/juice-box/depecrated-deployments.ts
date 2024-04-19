import { ChainID } from "@/lib/chains/id"
import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"
import { camelToWord } from "@/lib/utils"

interface configData {
  [key: string]: {
    address: string
    startBlock: number
  }
}
export const items = async (): Promise<ContractSchema[]> => {
  const ret: ContractSchema[] = []

  const response = await fetch(
    "https://raw.githubusercontent.com/jbx-protocol/juice-subgraph/735f40902c60d57c06b994e2c3b472f10592bb36/config/mainnet.json"
  )
  const data: {
    v1: configData
    v2: configData
    v3: configData
  } = await response.json()

  const mainTitle = "Juice Box Core Deployments"
  const outdated =
    "These contracts are outdate and should only be used for reference. See v3 contracts for current version."
  ret.push(
    ...Object.entries(data.v2).map(([key, val]) => {
      const formattedName = camelToWord(key)
      return {
        title: `${mainTitle} v2: ${formattedName}`,
        tutorial:
          "https://github.com/jbx-protocol/juice-docs/blob/809265e97fa6144c7566c2495da973c5660a59c6/docs/dev/deprecated/v2/README.md|https://github.com/jbx-protocol/juice-docs/tree/809265e97fa6144c7566c2495da973c5660a59c6/docs/dev/deprecated/v2/contracts|https://github.com/jbx-protocol/juice-docs/blob/809265e97fa6144c7566c2495da973c5660a59c6/docs/dev/deprecated/v2/addresses.md",
        reference: "https://docs.juicebox.money/dev/deprecated/v2",
        description:
          "The Juicebox protocol, operating on Ethereum, facilitates transparent project funding and management through smart contracts. It provides capabilities such as deploying NFTs with administrative privileges, setting up customizable funding cycles, and accommodating diverse token standards. Additional features include pre-programmed token distributions, protocol fee structures, and adaptable treasury strategies, all contributing to its flexibility and functionality.",
        playground: {
          default: {
            address: val.address,
            chain: ChainID.ETHEREUM_MAINNET,
          },
        },
        outdated,
      }
    })
  )

  ret.push(
    ...Object.entries(data.v1).map(([key, val]) => {
      const formattedName = camelToWord(key)
      return {
        title: `${mainTitle} v1: ${formattedName}`,
        tutorial:
          "https://github.com/jbx-protocol/juice-docs/blob/809265e97fa6144c7566c2495da973c5660a59c6/docs/dev/deprecated/v1/README.md|https://github.com/jbx-protocol/juice-docs/blob/809265e97fa6144c7566c2495da973c5660a59c6/docs/dev/deprecated/v1/resources/understanding-tokens.md",
        reference: "https://docs.juicebox.money/dev/deprecated/v1/",
        description:
          "v1 for Juice Box protocol. Juicebox v1 is not formally audited. All projects built on it may be vulnerable to bugs or exploits.",
        playground: {
          default: {
            address: val.address,
            chain: ChainID.ETHEREUM_MAINNET,
          },
        },
        outdated,
      }
    })
  )

  return ret
}
