import { items as PUSH_PROTOCOL_DEPLOYENTS_CONTRACTS } from "@/lib/contracts/src/push/contract-deployment"
import {
  items as PUSH_PROTOCOL_COMM_1_5_CONTRACTS,
  items as PUSH_PROTOCOL_CORE_1_5_CONTRACTS,
} from "@/lib/contracts/src/push/smart-contract-comm-1-5"
import { items as PUSH_PROTOCOL_COMM_CONTRACTS } from "@/lib/contracts/src/push/smart-contract-comm-2-5"
import { items as PUSH_PROTOCOL_CORE_CONTRACTS } from "@/lib/contracts/src/push/smart-contract-core-2-5"
import { items as PUSH_PROTOCOL_GOVERANCE_CONTRACTS } from "@/lib/contracts/src/push/smart-contract-goverance"
import { items as PUSH_PROTOCOL_TOKEN_CONTRACTS } from "@/lib/contracts/src/push/smart-contract-token"
import { PUSH_PROTOCOL_ID, getProtcolInfo } from "@/lib/systems"
import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = []

  items.push(...(await PUSH_PROTOCOL_CORE_CONTRACTS()))
  items.push(...(await PUSH_PROTOCOL_COMM_CONTRACTS()))
  items.push(...(await PUSH_PROTOCOL_TOKEN_CONTRACTS()))
  items.push(...(await PUSH_PROTOCOL_GOVERANCE_CONTRACTS()))
  items.push(...(await PUSH_PROTOCOL_CORE_1_5_CONTRACTS()))
  items.push(...(await PUSH_PROTOCOL_COMM_1_5_CONTRACTS()))
  items.push(...(await PUSH_PROTOCOL_DEPLOYENTS_CONTRACTS()))

  return (
    <ContractPage
      protocol={getProtcolInfo(PUSH_PROTOCOL_ID)}
      items={items}
      themeColour={"rgba(224, 61 ,193, 1)"}
    />
  )
}
