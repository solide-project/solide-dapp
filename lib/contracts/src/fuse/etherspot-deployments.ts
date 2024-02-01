import { ContractSchema } from "@/lib/schema/contract"
import { ChainID } from "@/lib/chains/id"
import { GitHubFileInfo, filterFiles } from "@/lib/contracts/utils/utils"
import { getContractsByDeployments } from "@/lib/contracts/utils/get-contracts-by-deployments"

const getAPI = (chain: string): string => {
    switch (chain) {
        case ChainID.FUSE_MAINNET:
            return "fuse"
        default:
            return ""
    }
}
export const items = async (chain: string): Promise<ContractSchema[]> => {
    const id = getAPI(chain)
    if (!id) {
        return []
    }

    const response = await fetch(`https://api.github.com/repos/etherspot/etherspot-prime-contracts/contents/deployments/${id}`)
    const directory: GitHubFileInfo[] = await response.json()

    const filteredFiles = filterFiles(directory);
    const ret: any[] = await Promise.all(filteredFiles.map(file =>
        getContractsByDeployments(
            {
                file,
                title: "Etherspot Prime Contracts",
                chain,
                tutorial: "https://github.com/etherspot/etherspot-prime-contracts/blob/master/README.md",
                description: "Etherspot Primes are smart cotracts that allows developers to harness advanced features, including account abstraction, within their decentralized applications on the EVM based chains.",
            })));

    return ret.filter(result => result !== undefined);;
}