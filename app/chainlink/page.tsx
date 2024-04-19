import { items as ANYAPI_CONTRACTS } from "@/lib/contracts/src/chainlink/anyAPI"
import { items as AUTOMATION_CONTRACTS } from "@/lib/contracts/src/chainlink/automation"
import { items as CCIP_CONTRACTS } from "@/lib/contracts/src/chainlink/ccip"
import { items as DATAFEED_CONTRACTS } from "@/lib/contracts/src/chainlink/datafeed"
import { items as FUNCTION_CONTRACTS } from "@/lib/contracts/src/chainlink/function"
import { items as VRF_CONTRACTS } from "@/lib/contracts/src/chainlink/vrf"
import { CHAINLINK_ID, getProtcolInfo } from "@/lib/systems"

import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = [
    ...DATAFEED_CONTRACTS,
    ...AUTOMATION_CONTRACTS,
    ...CCIP_CONTRACTS,
    ...FUNCTION_CONTRACTS,
    ...VRF_CONTRACTS,
    ...ANYAPI_CONTRACTS,
  ]

  return (
    <ContractPage
      protocol={getProtcolInfo(CHAINLINK_ID)}
      items={items}
      themeColour={"rgba(55, 91, 210, 1)"}
    />
  )
}
