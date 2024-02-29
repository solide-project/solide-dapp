import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/schema/contract"

export const tutorial =
  "https://github.com/BuildOnViction/gitbook/blob/main/developer-guide/standards-and-specification/vrc725-specification.md"
export const reference =
  "https://docs.viction.xyz/developer-guide/standards-and-specification/vrc725-specification"
export const description =
  "The VRC725 contract is an implementation of the ERC721 Non-Fungible Token (NFT) standard on the Ethereum blockchain. It includes functions for minting, burning, and transferring tokens, as well as support for permit signatures (EIP-712), safe transfers, and ownership management. The contract maintains mappings for token ownership, approvals, and operator approvals, and emits events for fee transfers and ownership changes."
export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "VRC725",
    url: "https://api.github.com/repos/BuildOnViction/vrc725/contents/contracts",
    tutorial,
    reference,
    description,
  })
