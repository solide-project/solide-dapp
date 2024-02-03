import { ChainID } from "@/lib/chains/id"
import { getContractsByDeployments } from "@/lib/contracts/utils/get-contracts-by-deployments"
import { filterFiles, GitHubFileInfo } from "@/lib/contracts/utils/utils"
import { ContractSchema } from "@/lib/schema/contract"

const getAPI = (chain: string): string => {
  switch (chain) {
    case ChainID.FUSE_MAINNET:
      return "fuse"
    case ChainID.FUSE_SPARK:
      return "spark"
    case ChainID.ETHEREUM_MAINNET:
      return "mainet"
    case ChainID.POLYGON_MAINNET:
      return "matic"
    case ChainID.POLYGON_MUMBAI:
      return "mumbai"
    case ChainID.OPTIMISM_MAINNET:
      return "optimism"
    case ChainID.ARBITRUM_ONE:
    case ChainID.ARBITRUM_NOVA:
      return "arbitrum"
    default:
      return ""
  }
}
export const items = async (chain: string): Promise<ContractSchema[]> => {
  const id = getAPI(chain)
  if (!id) {
    return []
  }

  const response = await fetch(
    `https://api.github.com/repos/fuseio/account-abstraction/contents/deployments/${id}`
  )
  const directory: GitHubFileInfo[] = await response.json()

  const filteredFiles = filterFiles(directory)
  const ret: any[] = await Promise.all(
    filteredFiles.map((file) =>
      getContractsByDeployments({
        file,
        title: "Account Abstraction",
        chain,
        tutorial:
          "https://github.com/fuseio/account-abstraction/blob/develop/README.md",
        reference:
          "https://github.com/fuseio/account-abstraction",
        description:
          "The Fuse Network's implemented set of contracts for ERC-4337 account abstraction, leveraging an alternative mempool infrastructure. These contracts enhances the account abstraction functionality, allowing users greater flexibility in managing their transactions. The ERC-4337 standard facilitates a seamless interaction between different smart contracts, and Fuse Network's implementation introduces an alternative mempool, optimizing transaction processing and increasing the overall efficiency of the blockchain.",
      })
    )
  )

  return ret.filter((result) => result !== undefined)
}
