import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/schema/contract"
import { reference, tutorial, description } from "./vrc725"

export const items = async (): Promise<ContractSchema[]> => await getContractsByGithub({
  title: "VRC725 Example",
  url: "https://api.github.com/repos/BuildOnViction/vrc725/contents/contracts/tests",
  tutorial,
  reference,
  description,
})
