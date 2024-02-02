import { items as PROTOCOL_CONTRACTS } from "@/lib/contracts/src/immutable/protocol"
import { IMMUTABLE_ID } from "@/lib/db/ids"
import { protcols } from "@/lib/db/library"
import { ContractSchema } from "@/lib/schema/contract"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = [...PROTOCOL_CONTRACTS]

  return (
    <ContractPage
      protocol={protcols[IMMUTABLE_ID]}
      items={items}
      themeColour={"rgba(17, 19, 187, 1)"}
    />
  )
}
