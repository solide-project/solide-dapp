import { ContractSchema } from "@/lib/schema/contract"
import { ChainID } from "@/lib/chains/id"
import { GitHubFileInfo, filterFiles } from "@/lib/contracts/utils/utils"
import { getContractsByDeployments } from "@/lib/contracts/utils/get-contracts-by-deployments"

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

    const response = await fetch(`https://api.github.com/repos/fuseio/account-abstraction/contents/deployments/${id}`)
    const directory: GitHubFileInfo[] = await response.json()

    const filteredFiles = filterFiles(directory);
    const ret: any[] = await Promise.all(filteredFiles.map(file => 
        getContractsByDeployments(
            {
                file,
                title: "Account Abstraction",
                chain,
                tutorial: "https://github.com/fuseio/account-abstraction/blob/develop/README.md",
                description: "Fuse io implementaton of account abstraction using ERC-4337 account abstraction via alternative mempool.",
            })));

    return ret.filter(result => result !== undefined);;
}
