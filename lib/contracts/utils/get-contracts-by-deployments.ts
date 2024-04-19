import path from "path"

import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { ContractSchema } from "@/lib/contracts"

import {
  fetchGithub,
  generateContractSchemaTitle,
  getRepoInfo,
  GitHubFileInfo,
} from "./utils"

export const getContractsByDeployments = async ({
  file,
  title,
  tutorial,
  reference,
  description,
  chain,
}: {
  file: GitHubFileInfo
  title?: string
  tutorial?: string
  reference?: string
  description?: string
  chain?: string
}): Promise<ContractSchema | null> => {
  const response = await fetchGithub(file.download_url)
  const content = await response.json()
  const address = content.address || ""

  if (!address) {
    return null
  }

  const { dir, name } = path.parse(file.path)
  const { entity, repo } = getRepoInfo(file.html_url)

  let playground: any = {
    address: address,
  }
  if (chain) {
    playground.chainId = chain
  }

  return {
    title: generateContractSchemaTitle(title || repo, name),
    tutorial,
    reference: file.html_url || reference,
    description: `${entity} ${name} Contract${chain && " on " + getNetworkNameFromChainID(chain)}. ${description}`,
    playground: {
      default: playground,
    },
  }
}
