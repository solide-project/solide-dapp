import { OPEN_ZEPPELIN_ID, getProtcolInfo } from "@/lib/systems"
import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = []

  return (
    <ContractPage
      protocol={getProtcolInfo(OPEN_ZEPPELIN_ID)}
      items={items}
      themeColour={"rgba(17, 19, 187, 1)"}
    />
  )
}
