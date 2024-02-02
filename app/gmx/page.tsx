import { ChainID } from "@/lib/chains/id"
import { items as GMX_CONTRACTS_AMM_ITEMS } from "@/lib/contracts/src/gmx/contract-amm"
import { items as GMX_CONTRACTS_CORE_ITEMS } from "@/lib/contracts/src/gmx/contract-core"
import { items as GMX_CONTRACTS_DEPLOYMENTS } from "@/lib/contracts/src/gmx/contract-deployments"
import { items as GMX_GAMBIT_TOKEN_ITEMS } from "@/lib/contracts/src/gmx/contract-gambit-token"
import { items as GMX_CONTRACTS_PERIPHERALS_ITEMS } from "@/lib/contracts/src/gmx/contract-peripherals"
import { items as GMX_SYNTHETICS_CONTRACTS } from "@/lib/contracts/src/gmx/synthetics-deployments"
import { items as GMX_SYNTHETICS_ROUTER_ITEMS } from "@/lib/contracts/src/gmx/synthetics-router"
import { GMX_ID } from "@/lib/db/ids"
import { protcols } from "@/lib/db/library"
import { ContractSchema } from "@/lib/schema/contract"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = []

  items.push(...(await GMX_CONTRACTS_CORE_ITEMS()))
  items.push(...(await GMX_CONTRACTS_AMM_ITEMS()))
  items.push(...(await GMX_SYNTHETICS_CONTRACTS(ChainID.ARBITRUM_ONE)))
  items.push(...(await GMX_SYNTHETICS_ROUTER_ITEMS()))
  items.push(...(await GMX_CONTRACTS_PERIPHERALS_ITEMS()))
  items.push(...(await GMX_GAMBIT_TOKEN_ITEMS()))
  items.push(...(await GMX_CONTRACTS_DEPLOYMENTS(ChainID.ARBITRUM_ONE)))

  return (
    <ContractPage
      protocol={protcols[GMX_ID]}
      items={items}
      themeColour={"rgba(45, 66, 252, 1)"}
    />
  )
}
