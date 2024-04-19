import { items as PROTOCOL_CONTRACTS } from "@/lib/contracts/src/immutable/protocol"
import { IMMUTABLE_ID, getProtcolInfo, getRPCInfo } from "@/lib/systems"
import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = [...PROTOCOL_CONTRACTS]

  return (
    <ContractPage
      protocol={getProtcolInfo(IMMUTABLE_ID)}
      rpcSetting={getRPCInfo(IMMUTABLE_ID)}
      items={items}
      themeColour={"rgba(17, 19, 187, 1)"}
    />
  )
}
