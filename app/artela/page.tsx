import { items as EXAMPLE_CONTRACTS } from "@/lib/contracts/src/aspect/example"
import { items as OTHER_CONTRACTS } from "@/lib/contracts/src/aspect/other"
import { items as ASPECT_TOOLING_CONTRACTS } from "@/lib/contracts/src/aspect/tooling"
import { ARTELA_ID, getProtcolInfo, getRPCInfo } from "@/lib/systems"
import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = [
    ...OTHER_CONTRACTS,
    ...ASPECT_TOOLING_CONTRACTS,
  ]

  items.push(...(await EXAMPLE_CONTRACTS()))

  return (
    <ContractPage
      protocol={getProtcolInfo(ARTELA_ID)}
      rpcSetting={getRPCInfo(ARTELA_ID)}
      items={items}
      themeColour={"rgba(92, 124, 255, 1)"}
    />
  )
}
