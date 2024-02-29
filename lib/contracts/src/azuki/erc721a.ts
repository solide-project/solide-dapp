import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema"

export const items = async (): Promise<ContractSchema[]> => [
  {
    title: `ERC721A: Implementation`,
    tutorial: "https://github.com/chiru-labs/ERC721A/blob/main/docs/erc721a.md",
    reference: "https://chiru-labs.github.io/ERC721A/#/",
    description: `ERC721A is an improved implementation of the ERC721 Non-Fungible Token Standard that supports minting multiple tokens for close to the cost of one.`,
    playground: {
      default: {
        address:
          "https://github.com/chiru-labs/ERC721A/blob/main/contracts/ERC721A.sol",
      },
    },
  },
  ...(await getContractsByGithub({
    title: "ERC721A Extensions",
    url: "https://api.github.com/repos/chiru-labs/ERC721A/contents/contracts/extensions",
    tutorial: "https://github.com/chiru-labs/ERC721A/blob/main/docs/erc721a.md",
    reference:
      "https://github.com/chiru-labs/ERC721A/tree/main/contracts/extensions",
    description: `ERC721A is an improved implementation of the ERC721 Non-Fungible Token Standard that supports minting multiple tokens for close to the cost of one.`,
    docRemappings: {
      ERC721ABurnable:
        "https://github.com/chiru-labs/ERC721A/blob/main/docs/erc721a-burnable.md",
      ERC721AQueryable:
        "https://github.com/chiru-labs/ERC721A/blob/main/docs/erc721a-queryable.md",
      ERC4907A:
        "https://github.com/chiru-labs/ERC721A/blob/main/docs/erc4907a.md",
    },
  })),
  ...(await getContractsByGithub({
    title: "ERC721A Mocks Example",
    url: "https://api.github.com/repos/chiru-labs/ERC721A/contents/contracts/mocks",
    tutorial: "https://github.com/chiru-labs/ERC721A/blob/main/docs/erc721a.md",
    reference:
      "https://github.com/chiru-labs/ERC721A/tree/main/contracts/mocks",
    description: `ERC721A is an improved implementation of the ERC721 Non-Fungible Token Standard that supports minting multiple tokens for close to the cost of one.`,
  })),
]
