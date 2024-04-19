import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/contracts"
import { camelToWord } from "@/lib/utils"

const makerContracts = [
  {
    key: "MCD_VAT",
    tutorial:
      "https://docs.makerdao.com/smart-contract-modules/core-module/vat-detailed-documentation",
    reference:
      "https://github.com/makerdao/mcd-docs-content/blob/master/smart-contract-modules/core-module/vat-detailed-documentation.md",
    description: "",
  },
  {
    key: "MCD_JUG",
    tutorial: "https://docs.makerdao.com/smart-contract-modules/rates-module",
    reference:
      "https://github.com/makerdao/mcd-docs-content/blob/master/smart-contract-modules/rates-module/jug-detailed-documentation.md",
    description: "",
  },
  {
    key: "MCD_POT",
    tutorial: "https://docs.makerdao.com/smart-contract-modules/rates-module",
    reference:
      "https://github.com/makerdao/mcd-docs-content/blob/master/smart-contract-modules/rates-module/pot-detailed-documentation.md",
    description: "",
  },
  {
    key: "MCD_ADM",
    tutorial:
      "https://docs.makerdao.com/smart-contract-modules/governance-module/chief-detailed-documentation",
    reference:
      "https://github.com/makerdao/mcd-docs-content/blob/master/smart-contract-modules/governance-module/chief-detailed-documentation.md",
    description: "",
  },
  {
    key: "MCD_SPOT",
    tutorial:
      "https://docs.makerdao.com/smart-contract-modules/core-module/spot-detailed-documentation",
    reference:
      "https://github.com/makerdao/mcd-docs-content/blob/master/smart-contract-modules/core-module/spot-detailed-documentation.md",
    description: "",
  },
]
export const items = async (chain: string) => {
  const response = await fetch(
    `https://chainlog.makerdao.com/api/${chain}/active.json`
  )
  const data = await response.json()

  const ret: ContractSchema[] = []

  let keys = Object.keys(data)
    .filter((key) => key.includes("MCD_JOIN"))
    .slice(0, 10)
  keys.forEach((name) => {
    let contractAddress = data[name] as string
    ret.push(
      generateItems({
        name,
        contractAddress,
        reference:
          "https://docs.makerdao.com/smart-contract-modules/collateral-module",
        tutorial:
          "https://github.com/makerdao/mcd-docs-content/blob/master/smart-contract-modules/collateral-module/join-detailed-documentation.md",
        description: "",
      })
    )
  })

  keys = Object.keys(data)
    .filter((key) => key.includes("MCD_CLIP"))
    .slice(0, 10)
  keys.forEach((name) => {
    let contractAddress = data[name] as string
    ret.push(
      generateItems({
        name,
        contractAddress,
        reference:
          "https://docs.makerdao.com/smart-contract-modules/dog-and-clipper-detailed-documentation",
        tutorial:
          "https://github.com/makerdao/mcd-docs-content/blob/master/smart-contract-modules/dog-and-clipper-detailed-documentation.md",
        description: "",
      })
    )
  })

  makerContracts.forEach((item) => {
    ret.push(
      generateItems({
        name: item.key,
        contractAddress: data[item.key],
        reference: item.reference,
        tutorial: item.tutorial,
        description: item.description,
      })
    )
  })
  return ret
}

const generateItems = ({
  name,
  contractAddress,
  reference,
  tutorial,
  description,
}: {
  name: string
  contractAddress: string
  reference: string
  tutorial: string
  description: string
}) => {
  const formattedName = camelToWord(name)
  return {
    title: `Maker DAO: ${formattedName}`,
    tutorial: tutorial,
    reference: reference,
    description: `Makers DAO contracts ${formattedName} deployed on Ethereum. Powered by Maker DAO's Chainlog. ${description}`,
    playground: {
      default: {
        address: contractAddress,
        chainId: ChainID.ETHEREUM_MAINNET,
      },
    },
  }
}
