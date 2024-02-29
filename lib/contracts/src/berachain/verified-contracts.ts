import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { ContractSchema } from "@/lib/schema"
import { camelToWord } from "@/lib/utils"

const verifiedContracts = require("./verified-contracts.json").items

interface VerifiedContracts {
  chainId: string
  address: string
  createOperation: {
    timestamp: string
    txHash: string
    index: number
    type: string
    from: string
  }
  name: string
  verified: boolean
  verifiedAt: string
  hasConstructorArguments: boolean
  compilerName: string
  compilerVersion: string
  compilerSettings: {
    optimizer: {
      enabled: boolean
      runs: number
    }
  }
}

interface VerifiedContractsResponse {
  items: VerifiedContracts[]
  link: { nextToken: string }
}

/**
 * Looping a lot but for now it's fine, as this is testnet and should be removed or updated in mainnet
 */
export const items = async (): Promise<ContractSchema[]> => {
  const networkName = getNetworkNameFromChainID(ChainID.BERACHAIN_TESTNET)
  return [
    ...verifiedContracts
      .filter((item: VerifiedContracts) =>
        item.name.toLocaleLowerCase().includes("lssvm")
      )
      .map((item: VerifiedContracts) => ({
        title: `Sudoswap LSSVM Contracts: ${camelToWord(item.name)}`,
        description: `${camelToWord(item.name)} contract deployed on ${networkName}. These contracts are based of Sudoswap DEX.`,
        tutorial: "https://github.com/sudoswap/lssvm/blob/main/README.md",
        reference: "https://blog.0xmons.xyz/83017366310",
        playground: {
          default: {
            address: item.address,
            chainId: item.chainId,
          },
        },
      })),
    ...verifiedContracts
      .filter((item: VerifiedContracts) =>
        item.name.toLocaleLowerCase().includes("uniswap")
      )
      .map((item: VerifiedContracts) => ({
        title: `Uniswap Contracts: ${camelToWord(item.name)}`,
        description: `${camelToWord(item.name)} contract deployed on ${networkName}. These contracts are based of Uniswap Protocols.`,
        tutorial:
          "https://github.com/Uniswap/v3-periphery/blob/main/README.md|https://github.com/Uniswap/docs/blob/main/docs/contracts/v3/overview.md",
        reference: "https://docs.uniswap.org/contracts/v3/overview",
        playground: {
          default: {
            address: item.address,
            chainId: item.chainId,
          },
        },
      })),
    ...verifiedContracts
      .filter((item: VerifiedContracts) =>
        item.name.toLocaleLowerCase().includes("timeswapv2")
      )
      .map((item: VerifiedContracts) => ({
        title: `Timeswap Contracts: ${camelToWord(item.name)}`,
        description: `${camelToWord(item.name)} contract deployed on ${networkName}. These contracts are based of Timeswap Protocol.`,
        tutorial:
          "https://github.com/Timeswap-Labs/Timeswap-V1-Core/blob/main/README.md",
        reference: "https://timeswap.gitbook.io/docs/introduction/introduction",
        playground: {
          default: {
            address: item.address,
            chainId: item.chainId,
          },
        },
      })),
    ...verifiedContracts
      .filter((item: VerifiedContracts) =>
        item.name.toLocaleLowerCase().includes("waymont")
      )
      .map((item: VerifiedContracts) => ({
        title: `Waymont Safe Contracts: ${camelToWord(item.name)}`,
        description: `${camelToWord(item.name)} contract deployed on ${networkName}. These contracts are based of Waymont Safe.`,
        tutorial:
          "https://github.com/pentagonxyz/waymont-contracts/blob/master/README.md|https://github.com/pentagonxyz/waymont-contracts/blob/master/INTEGRATION.md",
        reference: "",
        playground: {
          default: {
            address: item.address,
            chainId: item.chainId,
          },
        },
      })),
  ]
}

/**
 * Used to collect verified contracts from the API
 * Last updated: 2024-02-06
 */
// import fs from 'fs';
// const collectVerifiedContracts = async (): Promise<void> => {
//     const uri = "https://api.routescan.io/v2/network/testnet/evm/80085/contracts?limit=100&verified=true"
//     const response = await fetch(uri)
//     const data: VerifiedContractsResponse = await response.json()

//     let verifiedContracts: VerifiedContracts[] = data.items;
//     let nextToken = data.link.nextToken;
//     while (nextToken) {
//         if (nextToken) {
//             const response = await fetch(`${uri}&next=${nextToken}`)
//             const data: VerifiedContractsResponse = await response.json()
//             verifiedContracts = verifiedContracts.concat(data.items);
//             nextToken = data.link.nextToken;
//         }
//     }

//     fs.writeFile("./verified-contracts.json", JSON.stringify({ items: verifiedContracts }, null, 4), (err) => {
//         if (err) {  console.error(err);  return; };
//         console.log("File has been created");
//     });
// }
