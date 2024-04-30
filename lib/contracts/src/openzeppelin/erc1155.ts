import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
    await getContractsByGithub({
        title: "ERC1155 Implementation",
        url: "https://api.github.com/repos/OpenZeppelin/openzeppelin-contracts/contents/contracts/token/ERC1155/extensions",
        tutorial: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/README.adoc",
        reference: "https://docs.openzeppelin.com/contracts/5.x/erc1155",
        description: "ERC1155 is an Ethereum token standard that allows for efficient management of both fungible and non-fungible tokens within a single smart contract, enabling batch operations and reducing deployment complexity by representing multiple tokens in one contract, with each token having unique properties and metadata accessible via URI.",
    })