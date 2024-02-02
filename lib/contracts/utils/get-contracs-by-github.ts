import path from "path"

import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { ContractSchema } from "@/lib/schema"
import { snakeToCamel } from "@/lib/utils"

import {
  fetchGithub,
  filterFiles,
  generateContractSchemaTitle,
  getRepoInfo,
  GitHubFileInfo,
} from "./utils"

export const getContractsByGithub = async ({
  url,
  title,
  tutorial,
  reference,
  description,
  version,
  outdated,
  remappings,
}: {
  url: string
  title?: string
  tutorial?: string
  reference?: string
  description?: string
  version?: string
  outdated?: string
  remappings?: Record<string, string>
}): Promise<ContractSchema[]> => {
  const response = await fetchGithub(url)
  const directory: GitHubFileInfo[] = await response.json()
  const filteredFiles = filterFiles(directory, ".sol")
  const ret: any[] = await Promise.all(
    filteredFiles.map((file) =>
      fetchSolidityData({
        file,
        mainTitle: title,
        tutorial,
        reference,
        description,
        version,
        outdated,
        remappings,
      })
    )
  )

  return ret.filter((result) => result !== undefined)
}

const fetchSolidityData = async ({
  file,
  mainTitle = "",
  tutorial = "",
  reference = "",
  description = "",
  chain = "",
  version = "",
  outdated = "",
  remappings = {},
}: {
  file: GitHubFileInfo
  mainTitle?: string
  tutorial?: string
  reference?: string
  description?: string
  chain?: string
  version?: string
  outdated?: string
  remappings?: Record<string, string>
}): Promise<ContractSchema> => {
  const { dir, name } = path.parse(file.path)
  const formattedName = snakeToCamel(name)

  const { entity } = getRepoInfo(file.html_url)

  let playground: any = {
    address: file.html_url,
  }

  if (chain) {
    playground.chainId = chain
  }

  if (version) {
    playground.version = version
  }

  if (remappings) {
    playground.remappings = remappings
  }

  return {
    title: generateContractSchemaTitle(mainTitle || dir, name),
    tutorial,
    reference: file.html_url || reference,
    description: `${entity} ${name} Contract${chain ? " on " + getNetworkNameFromChainID(chain) : ""}. ${description}`,
    playground: {
      default: playground,
    },
    outdated,
  }
}
