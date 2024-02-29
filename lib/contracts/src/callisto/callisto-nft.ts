import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema/contract"

const tutorial = "https://github.com/Dexaran/CallistoNFT/blob/main/README.md"
const reference =
  "https://docs.callisto.network/security-department/documentation/callistonft-standard"
export const items = async (): Promise<ContractSchema[]> => [
  ...(await getContractsByGithub({
    title: "Callisto NFT ERC 721 Token",
    url: "https://api.github.com/repos/Dexaran/CallistoNFT/contents/ERC721Compatible",
    tutorial,
    reference,
    description:
      "The CallistoNFT standard as an innovative advancement over the existing ERC721 standard for non-fungible tokens (NFTs) in the cryptocurrency industry. Addressing limitations and flaws in ERC721, CallistoNFT offers several significant improvements. Notably, it introduces built-in trade functionalities, allowing users to directly trade NFTs through token contracts, eliminating the need for third-party marketplaces and enhancing trust and scalability.",
  })),
  ...(await getContractsByGithub({
    title: "Callisto NFT Token",
    url: "https://api.github.com/repos/Dexaran/CallistoNFT/contents/Extensions",
    tutorial,
    reference,
    description:
      "The CallistoNFT standard as an innovative advancement over the existing ERC721 standard for non-fungible tokens (NFTs) in the cryptocurrency industry. Addressing limitations and flaws in ERC721, CallistoNFT offers several significant improvements. Notably, it introduces built-in trade functionalities, allowing users to directly trade NFTs through token contracts, eliminating the need for third-party marketplaces and enhancing trust and scalability.",
  })),
]
