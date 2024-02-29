import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema"

const tutorial = "https://github.com/chiru-labs/PBT/blob/main/README.md"
const reference = "https://github.com/chiru-labs/PBT"
const description =
  "PBT (Physical Backed Token) addresses the lack of a standardized method for showcasing physical assets as NFTs, providing a decentralized solution to challenges in existing implementations. Unlike current practices where NFTs and physical items are often decoupled after minting, PBT introduces a new token standard, extending EIP-721, to seamlessly integrate the ownership of physical items within the NFT itself. This innovation ensures that the NFT serves as a genuine proxy for ownership of the corresponding physical asset."
const remappings = {
  "@openzeppelin/contracts/": "@openzeppelin/contracts@4.7.0/",
}
export const items = async (): Promise<ContractSchema[]> => [
  ...(await getContractsByGithub({
    title: "Physical Backed Token (PBT)",
    url: "https://api.github.com/repos/chiru-labs/PBT/contents/src",
    tutorial,
    reference,
    description,
    remappings,
  })),
  ...(await getContractsByGithub({
    title: "Physical Backed Token (PBT) Mocks",
    url: "https://api.github.com/repos/chiru-labs/PBT/contents/src/mocks",
    tutorial,
    reference,
    description,
    remappings,
  })),
]
