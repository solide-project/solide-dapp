
import { EIGENLAYER_ID, getProtcolInfo } from "@/lib/systems"
import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/main/client/pages/contract-page"
import { items as CORE_CONTRACTS } from "@/lib/contracts/src/eigenlayer/core"
import { items as PODS_DEPLOYMENT } from "@/lib/contracts/src/eigenlayer/deployments-pods"
import { items as MIDDLEWARE_COTRACTS } from "@/lib/contracts/src/eigenlayer/middleware"
import { items as DEPLOYMENT_CONTRACTS } from "@/lib/contracts/src/eigenlayer/deployments"
import { items as RENZO_CONTRACTS } from "@/lib/contracts/src/eigenlayer/renzo"

export default async function Page() {
  let items: ContractSchema[] = []

  items.push(...(await DEPLOYMENT_CONTRACTS()))
  items.push(...(await CORE_CONTRACTS()))
  items.push(...(await PODS_DEPLOYMENT()))
  items.push(...(await MIDDLEWARE_COTRACTS()))
  items.push(...(await RENZO_CONTRACTS()))

  return (
    <ContractPage
      protocol={getProtcolInfo(EIGENLAYER_ID)}
      items={items}
      themeColour={"rgba(26, 12, 109, 1)"}
    />
  )
}
