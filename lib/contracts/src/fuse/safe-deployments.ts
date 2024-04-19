import { getContractsByDeployments } from "@/lib/contracts"
import { filterFiles, GitHubFileInfo } from "@/lib/contracts/utils/utils"
import { ContractSchema } from "@/lib/contracts"

interface ContractInfo {
  defaultAddress: string
  released: boolean
  contractName: string
  version: string
  networkAddresses: { [key: string]: string }
}

export const items = async (chain: string): Promise<ContractSchema[]> => {
  const response = await fetch(
    "https://api.github.com/repos/safe-global/safe-deployments/contents/src/assets/v1.3.0"
  )
  const data: GitHubFileInfo[] = await response.json()

  const filteredFiles = filterFiles(data)
  const ret: any[] = await Promise.all(
    filteredFiles.map((file) =>
      getContractsByDeployments({
        file,
        title: "Safe Global Contracts",
        tutorial:
          "https://github.com/safe-global/safe-deployments/blob/main/README.md",
        reference: "https://github.com/safe-global/safe-smart-account",
        description:
          "Powered by Safe Global, Safe Global's Smart Accounts aim to become the standard core for smart contract-based wallets, prioritizing secure defaults through multi-signature logic, minimizing gas costs by optimizing off-chain transaction data storage, and ensuring maximum flexibility with support for alternative access patterns and complex execution logic.",
        chain: chain,
      })
    )
  )

  return ret.filter((item: any) => item !== null)
}

// export const getContractsByDeployments = async (
//     file: GitHubFileInfo,
//     {
//         tutorial,
//         reference,
//         description,
//         chain,
//     }: {
//         tutorial?: string;
//         reference?: string;
//         description?: string;
//         chain: string;
//     }): Promise<ContractCardItems | null> => {
//     const response = await fetch(file.download_url);
//     const content: ContractInfo = await response.json();
//     const address = content.networkAddresses[chain || ""] || "";

//     if (!address) {
//         return null;
//     }

//     const { dir, name } = path.parse(file.path)
//     const formattedName = camelToWord(content.contractName || name);
//     const { entity, repo } = getRepoInfo(file.html_url)

//     let playground: any = {
//         address: address,
//     }
//     if (chain) {
//         playground.chainId = chain
//     }

//     return {
//         title: `${repo}: ${formattedName}`,
//         tutorial: tutorial || "",
//         reference: file.html_url || reference || "",
//         description: `${entity} ${name} Contract on ${getNetworkNameFromChainID(chain)}. ${description}`,
//         playground: {
//             default: playground
//         },
//     };
// };
