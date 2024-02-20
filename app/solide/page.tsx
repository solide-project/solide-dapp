import { protcols } from "@/lib/db/library"
import { ContractSchema } from "@/lib/schema/contract"
import { SOLIDE_URL } from "@/lib/utils"
import { ContractPage } from "@/components/main/client/pages/contract-page"

import { items as ERC404 } from "@/lib/contracts/src/solide/erc404"
import { items as ERC4437 } from "@/lib/contracts/src/solide/erc4337"

export default async function Page() {
  let items: ContractSchema[] = [
    ...ERC4437,
    ...ERC404,
  ]

  return (
    <ContractPage
      protocol={protcols[SOLIDE_URL]}
      items={items}
      themeColour={"rgba(70, 25, 147, 1)"}
    />
  )
}
