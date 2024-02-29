import { items as ERC721A_CONTRACTS } from "@/lib/contracts/src/azuki/erc721a"
import { items as ERC721A_UPGRADEABLE_CONTRACTS } from "@/lib/contracts/src/azuki/erc721a-upgradeable"
import { items as AZUKI_NFT_CONTRACTS } from "@/lib/contracts/src/azuki/nfts"
import { items as PBT_CONTRACTS } from "@/lib/contracts/src/azuki/pbt"
import { AZUKI_ID } from "@/lib/db/ids"
import { protcols } from "@/lib/db/library"
import { ContractSchema } from "@/lib/schema/contract"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = []

  items.push(...(await AZUKI_NFT_CONTRACTS()))
  items.push(...(await ERC721A_CONTRACTS()))
  items.push(...(await ERC721A_UPGRADEABLE_CONTRACTS()))
  items.push(...(await PBT_CONTRACTS()))

  return (
    <ContractPage
      protocol={protcols[AZUKI_ID]}
      items={items}
      themeColour={"rgba(192, 53, 64, 1)"}
    />
  )
}
