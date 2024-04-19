import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
    await getContractsByGithub({
        title: "Lido's Arbitrum Bridge",
        url: "https://api.github.com/repos/lidofinance/lido-l2/contents/contracts/arbitrum",
        tutorial:
            "https://github.com/lidofinance/lido-l2/blob/main/contracts/arbitrum/README.md",
        reference: "https://github.com/lidofinance/lido-l2/tree/main/contracts/arbitrum",
        description: "implementation of ERC20 token bridging between Ethereum and Arbitrum chains via Arbitrum's \"Canonical Bridge\" as part of Lido's integration into Arbitrum, focusing on scalability, simplicity, and gas efficiency for future contract extensions and developer clarity",
        version: "v0.8.10+commit.fc410830",
        remappings: {
            "@openzeppelin/contracts/": "@openzeppelin/contracts@4.4.0/"
        }
    })