import { ChainID } from "@/lib/chains/id"
import { OPEN_ZEPPELIN_ID } from "@/lib/db/ids"
import { protcols } from "@/lib/db/library"
import { ContractSchema } from "@/lib/schema/contract"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = []

  return (
    <ContractPage
      protocol={protcols[OPEN_ZEPPELIN_ID]}
      items={items}
      themeColour={"rgba(17, 19, 187, 1)"}
    />
  )
}
