import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema"

const tutorial =
  "https://github.com/chiru-labs/ERC721A-Upgradeable/blob/main/README.md"
const reference = "https://github.com/chiru-labs/ERC721A-Upgradeable/tree/main"
const description =
  "The ERC721A Upgradeable is a variant of the ERC721A Non-Fungible Token (NFT) Standard designed for use in upgradeable contracts. Utilizing the OpenZeppelin Upgrade Plugins, this version adopts the Diamond storage pattern outlined in EIP-2535, offering enhanced flexibility and upgradability for smart contracts."
export const items = async (): Promise<ContractSchema[]> => [
  ...(await getContractsByGithub({
    title: "ERC721A Upgradeable",
    url: "https://api.github.com/repos/chiru-labs/ERC721A-Upgradeable/contents/contracts",
    tutorial,
    reference,
    description,
  })),
  ...(await getContractsByGithub({
    title: "ERC721A Upgradeable Mocks",
    url: "https://api.github.com/repos/chiru-labs/ERC721A-Upgradeable/contents/contracts/mocks",
    tutorial,
    reference,
    description,
  })),
]
