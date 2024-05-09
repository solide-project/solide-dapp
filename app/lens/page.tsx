import { LENS_PROTOCOL_ID, getProtcolInfo } from "@/lib/systems"
import { items as LENS_CORE_CONTRACTS } from "@/lib/contracts/src/lens/core"
import { items as MODULE_CONTRACTS } from "@/lib/contracts/src/lens/module"
import { items as DEPLOYMENT_CONTRACTS } from "@/lib/contracts/src/lens/deployment"
import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = []

  // items.push(...(await LENS_CORE_CONTRACTS()))
  items.push(...(await MODULE_CONTRACTS()))
  items.push(...(await DEPLOYMENT_CONTRACTS()))

  return (
    <ContractPage
      protocol={getProtcolInfo(LENS_PROTOCOL_ID)}
      items={items}
      themeColour={"rgba(195, 228, 205, 1)"}
    />
  )
}
