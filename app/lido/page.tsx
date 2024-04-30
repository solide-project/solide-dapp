import { LIDO_ID, getProtcolInfo } from "@/lib/systems"
import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/main/client/pages/contract-page"

import { items as LIDO_DEPLOYMENTS } from "@/lib/contracts/src/lido/deployment"
import { items as LIDO_CORE_0_8_9 } from "@/lib/contracts/src/lido/core-0-8-9"
import { items as LIDO_CORE_0_8_4 } from "@/lib/contracts/src/lido/core-0-8-4"
import { items as LIDO_L2_OP } from "@/lib/contracts/src/lido/l2-op"
import { items as LIDO_L2_ARB } from "@/lib/contracts/src/lido/l2-arb"
import { items as LIDO_L2_OP_DEPLOYMENTS } from "@/lib/contracts/src/lido/l2-op-deployments"
import { items as LIDO_DUAL_GOVERANCE } from "@/lib/contracts/src/lido/dual-goverance"
import { items as LIDO_ON_POLYGON } from "@/lib/contracts/src/lido/lido-on-polygon"
import { items as LIDO_ON_POLYGON_DEPLOYMENTS } from "@/lib/contracts/src/lido/lido-on-polygon-deployments"
import { items as LIDO_EASY_TRACK } from "@/lib/contracts/src/lido/easy-track"

export default async function Page() {
  let items: ContractSchema[] = []

  items.push(...(await LIDO_DEPLOYMENTS()))
  items.push(...(await LIDO_CORE_0_8_9()))
  items.push(...(await LIDO_CORE_0_8_4()))
  items.push(...(await LIDO_L2_OP()))
  items.push(...(await LIDO_L2_ARB()))
  items.push(...(await LIDO_L2_OP_DEPLOYMENTS()))
  items.push(...(await LIDO_DUAL_GOVERANCE()))
  items.push(...(await LIDO_ON_POLYGON()))
  items.push(...(await LIDO_ON_POLYGON_DEPLOYMENTS()))
  items.push(...(await LIDO_EASY_TRACK()))
  
  return (
    <ContractPage
      protocol={getProtcolInfo(LIDO_ID)}
      items={items}
      themeColour={"rgba(255, 170, 125, 1)"}
    />
  )
}
