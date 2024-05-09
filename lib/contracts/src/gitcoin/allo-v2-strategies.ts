import { ContractSchema } from "@/lib/contracts"
import { GitHubFileInfo } from "../../utils/utils"
import { camelToWord } from "@/lib/utils"
import { remappings, version } from "./allo-v2"

const reference = "https://github.com/allo-protocol/allo-v2/blob/main/contracts/strategies/SpecTemplate.md"
const tutorial = ""
export const items = async (): Promise<ContractSchema[]> => {
    const ret: ContractSchema[] = []
    const response = await fetch("https://api.github.com/repos/allo-protocol/allo-v2/contents/contracts/strategies")
    const data: GitHubFileInfo[] = await response.json()

    const files: string[] = data.filter((file) => file.type === "dir").map((file) => file.url)

    // Fetch all files in the directory
    const filesData: GitHubFileInfo[][] = await Promise.all(files.map(async (file) => {
        const response = await fetch(file)
        return response.json()
    }))

    filesData.forEach((fileData) => {
        const stratTutorial: string = fileData
            .filter((file) => file.name.endsWith(".sol"))
            .pop()?.html_url || tutorial;
        fileData.filter((file) => file.name.endsWith(".sol")).forEach((file) => {
            const name = camelToWord(file.name)
            ret.push({
                title: `Allo V2 Strategy: ${name}`,
                reference: "https://github.com/allo-protocol/allo-v2/blob/main/contracts/strategies/SpecTemplate.md",
                tutorial: stratTutorial,
                description: `The ${name} is a strategies that will manages recipient registration and fund allocation within a pool. Recipients are added based on specific eligibility criteria, and their registration statuses are tracked through custom functions. Eligible allocators can express opinions on fund allocations, subject to conditions ensuring their eligibility and managing allocation periods. Payouts are calculated based on allocation inputs, potentially involving token donations, and distributed to eligible recipients.`,
                playground: {
                    default: {
                        address: file.html_url,
                        remappings,
                        version
                    }
                }
            })
        })
    })

    return ret;
}
