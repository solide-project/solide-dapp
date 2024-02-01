import { ContractPage } from "@/components/main/client/pages/contract-page";

import { items as SOLIDE_GUIDES_ITEMS } from "@/lib/contracts/src/tableland/solide-guides";
import { TABLELAND_ID } from "@/lib/db/ids";
import { protcols } from "@/lib/db/library";
import { ContractSchema } from "@/lib/schema/contract";

export default async function Page() {
  let items: ContractSchema[] = [
    ...SOLIDE_GUIDES_ITEMS
  ]

  return <ContractPage
    protocol={protcols[TABLELAND_ID]}
    items={items}
    themeColour={"rgba(98, 126, 234, 1)"} />
}
