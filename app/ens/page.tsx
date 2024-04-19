import { ENS_ID, getProtcolInfo } from "@/lib/systems"
import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = []

  return (
    <ContractPage
      protocol={getProtcolInfo(ENS_ID)}
      items={items}
      themeColour={"rgba(85, 175 ,243 ,1)"}
    />
  )
}
