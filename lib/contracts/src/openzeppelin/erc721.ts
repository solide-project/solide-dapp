import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
    await getContractsByGithub({
        title: "ERC721 Implementation",
        url: "https://api.github.com/repos/OpenZeppelin/openzeppelin-contracts/contents/contracts/token/ERC721/extensions",
        tutorial: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/README.adoc",
        reference: "https://docs.openzeppelin.com/contracts/5.x/erc721",
        description: "ERC721 is a standard for Ethereum token contracts representing ownership of unique, non-fungible tokens, used for assets like collectibles or game items, each with distinct metadata and without a decimals field, allowing custom attributes and behaviors per token.",
    })