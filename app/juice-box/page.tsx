import { items as JBX_V2_CONTRACTS } from "@/lib/contracts/src/juice-box/depecrated-contracts-v2"
import { items as JBX_DEPECRATED_CONTRACTS } from "@/lib/contracts/src/juice-box/depecrated-deployments"
import { items as JBX_ERC721_DELEGETE } from "@/lib/contracts/src/juice-box/juice-721-delegete"
import { items as JBX_BUYBACK_CONTRACTS } from "@/lib/contracts/src/juice-box/juice-buyback"
import { items as JBX_V3_CONTRACTS } from "@/lib/contracts/src/juice-box/juice-contract-v3"
import { items as JBX_DELEGATES_REGISTRY_CONTRACTS } from "@/lib/contracts/src/juice-box/juice-delegates-registry"
import { items as JBX_OWNABLE_CONTRACTS } from "@/lib/contracts/src/juice-box/juice-ownable"
import { items as JBX_VE_NFT_CONTRACTS } from "@/lib/contracts/src/juice-box/juice-ve-nft"
import { items as JBX_V3_DEPLOYMENT_CONTRACTS } from "@/lib/contracts/src/juice-box/v3-deployments"
import { JUICE_BOX_DAO_ID } from "@/lib/db/ids"
import { protcols } from "@/lib/db/library"
import { ContractSchema } from "@/lib/schema/contract"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = []

  items.push(...(await JBX_V3_CONTRACTS()))
  items.push(...(await JBX_V3_DEPLOYMENT_CONTRACTS()))
  items.push(...(await JBX_BUYBACK_CONTRACTS()))
  items.push(...(await JBX_OWNABLE_CONTRACTS()))
  items.push(...(await JBX_ERC721_DELEGETE()))
  items.push(...(await JBX_DELEGATES_REGISTRY_CONTRACTS()))
  items.push(...(await JBX_VE_NFT_CONTRACTS()))
  items.push(...(await JBX_V2_CONTRACTS()))
  items.push(...(await JBX_DEPECRATED_CONTRACTS()))

  return (
    <ContractPage
      protocol={protcols[JUICE_BOX_DAO_ID]}
      items={items}
      themeColour={"rgba(255, 187, 69, 1)"}
    />
  )
}
