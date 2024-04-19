import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Juice Box ERC721 Delegate Contract",
    url: "https://api.github.com/repos/jbx-protocol/juice-721-delegate/contents/contracts",
    tutorial:
      "https://github.com/jbx-protocol/juice-docs/blob/809265e97fa6144c7566c2495da973c5660a59c6/docs/dev/extensions/juice-721-delegate/README.md",
    reference: "https://docs.juicebox.money/dev/learn/architecture/",
    description:
      "The ERC-721 Delegate smart contract enables the creation of NFT tiers within a collection, each tier offering customizable properties such as price, max quantity, and token URI. Payments can specify multiple tiers to mint, with excess payments stored as credit for future use. Contract owners can mint tokens manually and NFTs can be redeemed against the underlying Juicebox treasury.",
    remappings: {
      "@openzeppelin/contracts/": "@openzeppelin/contracts@4.9.0/",
    },
    docRemappings: {
      JBTiered721Delegate:
        "https://github.com/jbx-protocol/juice-docs/blob/809265e97fa6144c7566c2495da973c5660a59c6/docs/dev/extensions/juice-721-delegate/jbtiered721delegate.md",
      JBTiered721DelegateDeployer:
        "https://github.com/jbx-protocol/juice-docs/blob/809265e97fa6144c7566c2495da973c5660a59c6/docs/dev/extensions/juice-721-delegate/jbtiered721delegatedeployer.md",
      JBTiered721DelegateStore:
        "https://github.com/jbx-protocol/juice-docs/blob/809265e97fa6144c7566c2495da973c5660a59c6/docs/dev/extensions/juice-721-delegate/jbtiered721delegatestore.md",
      JBTiered721GovernanceDelegate:
        "https://github.com/jbx-protocol/juice-docs/blob/809265e97fa6144c7566c2495da973c5660a59c6/docs/dev/extensions/juice-721-delegate/jbtiered721governancedelegate.md",
    },
  })
