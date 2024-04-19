import { items as SOLIDE_GUIDES_ITEMS } from "@/lib/contracts/src/tableland/solide-guides"
import { TABLELAND_ID, getProtcolInfo } from "@/lib/systems"
import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = [...SOLIDE_GUIDES_ITEMS]

  return (
    <ContractPage
      protocol={getProtcolInfo(TABLELAND_ID)}
      items={items}
      themeColour={"rgba(98, 126, 234, 1)"}
    />
  )
}
