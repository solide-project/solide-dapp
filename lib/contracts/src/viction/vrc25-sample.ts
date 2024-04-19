import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/contracts"

import { description, reference, tutorial } from "./vrc25"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "VRC25 Example",
    url: "https://api.github.com/repos/BuildOnViction/vrc25/contents/contracts/tests",
    tutorial,
    reference,
    description,
  })
