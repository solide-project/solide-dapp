import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/schema/contract"
import { tutorial, reference, description } from "./vrc25"

export const items = async (): Promise<ContractSchema[]> => await getContractsByGithub({
  title: "VRC25 Example",
  url: "https://api.github.com/repos/BuildOnViction/vrc25/contents/contracts/tests",
  tutorial,
  reference,
  description,
})
