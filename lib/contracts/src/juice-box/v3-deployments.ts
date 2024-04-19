import { getContractsByDeployments } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"
import { camelToWord, snakeToWord } from "@/lib/utils"

import { fetchGithub, filterFiles, GitHubFileInfo } from "../../utils/utils"

const addresses: Record<string, string> = {
  JB1DayReconfigurationBufferBallot:
    "0xDd9303491328F899796319C2b6bD614324b86314",
  JB3DayReconfigurationBufferBallot:
    "0x19D8C293D35EA4b2879A864A68D45a2025694929",
  JB7DayReconfigurationBufferBallot:
    "0x8E1AEc30063565e597705E71Ba14Dffc4C390Ef0",
  JBChainlinkV3PriceFeed: "0x87Ee2F4b8eE8F4C79523f36fEcBb5f76B23e7d6F",
  JBController: "0xFFdD70C318915879d5192e8a0dcbFcB0285b3C98",
  JBController3_0_1: "0xA139D37275d1fF7275e6F33821898934Bc8Cb7B6",
  JBController3_1: "0x97a5b9D9F0F7cD676B69f584F29048D0Ef4BB59b",
  JBCurrencies: "0xFf3959118dF1a391F77841346c6857Eb37A55A50",
  JBDirectory: "0x65572FB928b46f9aDB7cfe5A4c41226F636161ea",
  JBETHERC20ProjectPayerDeployer: "0xa5ca9CEa71Df4b680484e5Ff753a1b1185ba5b43",
  JBETHERC20SplitsPayerDeployer: "0x3ff1f0583a41CE8B9463F74a1227C75FC13f7C27",
  JBETHPaymentTerminal: "0x594Cb208b5BB48db1bcbC9354d1694998864ec63",
  JBETHPaymentTerminal3_1: "0xFA391De95Fcbcd3157268B91d8c7af083E607A5C",
  JBETHPaymentTerminal3_1_1: "0x457cD63bee88ac01f3cD4a67D5DCc921D8C0D573",
  JBETHPaymentTerminal3_1_2: "0x1d9619E10086FdC1065B114298384aAe3F680CC0",
  JBFundAccessConstraintsStore: "0xA4425A1E5b7B28Cb689719B1428e3088C1F89E30",
  JBFundingCycleStore: "0x6f18cF9173136c0B5A6eBF45f19D58d3ff2E17e6",
  JBOperatorStore: "0x6F3C5afCa0c9eDf3926eF2dDF17c8ae6391afEfb",
  JBPrices: "0x63CF55ab55ABcaD4E84335B80bbE3D2DefA09410",
  JBProjects: "0xD8B4359143eda5B2d763E127Ed27c77addBc47d3",
  JBSingleTokenPaymentTerminalStore:
    "0xdF7Ca703225c5da79A86E08E03A206c267B7470C",
  JBSingleTokenPaymentTerminalStore3_1:
    "0x77b0A81AeB61d08C0b23c739969d22c5C9950336",
  JBSingleTokenPaymentTerminalStore3_1_1:
    "0x82129d4109625F94582bDdF6101a8Cd1a27919f5",
  JBSplitsStore: "0x0D25194ABE95185Db8e4B0294F5669E21C534785",
  JBTokenStore: "0x6FA996581D7edaABE62C15eaE19fEeD4F1DdDfE7",
}

const tutorial =
  "https://github.com/jbx-protocol/juice-docs-v3/blob/master/docs/dev/learn/architecture/README.md|https://github.com/jbx-protocol/juice-docs-v3/blob/master/docs/dev/learn/architecture/terminals.md"
const reference = "https://docs.juicebox.money/dev/learn/architecture/"

/**
 * Using cache version, if want to update use below items function
 * @returns
 */
export const items = async (): Promise<ContractSchema[]> =>
  Object.entries(addresses).map(([name, address]) => ({
    title: `Juicebox V3 ${snakeToWord(camelToWord(name))}`,
    tutorial,
    reference,
    description: `Juicebox V3 ${name} contract. The Juicebox protocol on Ethereum facilitates transparent project funding and management via smart contracts. It enables users to deploy NFTs representing project ownership with administrative privileges. These contracts allow for flexible funding cycles, configurable token minting and burning, and support for various token standards. Additionally, projects can pre-program token distributions and incur protocol fees for distributions outside the ecosystem. Custom treasury strategies, multi-token acceptance, and administrative delegation add further versatility to the protocol's functionalities.`,
    playground: {
      default: {
        address,
      },
    },
  }))

// export const items = async (): Promise<ContractSchema[]> => {
//     const response = await fetch(
//         `https://api.github.com/repos/jbx-protocol/juice-contracts-v3/contents/deployments/mainnet`
//     )
//     const directory: GitHubFileInfo[] = await response.json()

//     const chain = ChainID.ETHEREUM_MAINNET
//     const filteredFiles = filterFiles(directory)
//     const ret: any[] = await Promise.all(
//         filteredFiles.map((file) =>
//             getContractsByDeployments({
//                 file,
//                 title: "Juice Contracts v3 Deployment",
//                 chain,
//                 tutorial:
//                     "https://github.com/jbx-protocol/juice-docs-v3/blob/master/docs/dev/learn/architecture/README.md|https://github.com/jbx-protocol/juice-docs-v3/blob/master/docs/dev/learn/architecture/terminals.md",
//                 reference: "https://docs.juicebox.money/dev/learn/architecture/",
//                 description:
//                     "",
//             })
//         )
//     )

//     return ret.filter((result) => result !== undefined)
// }
