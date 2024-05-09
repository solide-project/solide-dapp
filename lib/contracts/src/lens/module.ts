import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

const moduleRepo = "https://api.github.com/repos/lens-protocol/modules/contents/contracts"
const tutorial = "https://github.com/lens-protocol/modules/blob/master/README.md"
const reference = "https://docs.lens.xyz/docs/module-interfaces"
const remappings = {
    "@openzeppelin/contracts/": "@openzeppelin/contracts@4.7.3/",
}

export const items = async (): Promise<ContractSchema[]> => [
    ...(await getContractsByGithub({
        title: "Lens Collect Module",
        url: `${moduleRepo}/collect`,
        tutorial,
        reference,
        description: "Smart contracts include various modules designed to handle fee collection and distribution within different contexts. These modules cover functionalities such as depositing received fees into specific markets like Aave Polygon Market (if applicable), conducting English auctions for publications where only the auction winner can collect, implementing flexible fee collection mechanisms with multiple recipients and proportions, and minting ERC-721 ownership-NFTs for authors to manage parameters required for successful fee collection operations on their publications. The modules offer diverse ways to manage and distribute fees associated with publications and assets within the ecosystem.",
        remappings,
    })),
    ...(await getContractsByGithub({
        title: "Lens Reference",
        url: `${moduleRepo}/reference`,
        tutorial,
        reference,
        description: "Reference modules are used to govern interactions between profiles and publications. They are configured when a publication is created and enforce rules like allowing only specific NFT holders to comment or requiring users to hold a minimum balance of ERC20/ERC721 tokens to interact. These modules ensure controlled and customized interactions within the platform.",
        remappings,
    })),
    ...(await getContractsByGithub({
        title: "Lens Module Mocks",
        url: `${moduleRepo}/mocks`,
        tutorial,
        reference,
        description: "Mocks examples contracts utilising Lens modules. These contracts are used for testing and development purposes.",
        remappings,
    })),
]
