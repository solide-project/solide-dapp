import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
    await getContractsByGithub({
        title: "Lido's Optimism Bridge",
        url: "https://api.github.com/repos/lidofinance/lido-l2/contents/contracts/optimism",
        tutorial:
            "https://github.com/lidofinance/lido-l2/blob/main/contracts/optimism/README.md",
        reference: "https://github.com/lidofinance/lido-l2/tree/main/contracts/optimism",
        description: "Implementation of ERC20 token bridging between Ethereum and Optimism chains through Optimism's \"Standard Bridge\" focusing on scalability, simplicity, and gas efficiency for future contract extensions and developer clarity within Lido's integration into Optimism.",
        version: "v0.8.10+commit.fc410830",
        remappings: {
            "@openzeppelin/contracts/": "@openzeppelin/contracts@4.4.0/"
        },
    })