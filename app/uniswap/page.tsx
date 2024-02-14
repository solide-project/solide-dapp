import { items as CHAIN_ITEMS } from "@/lib/contracts/src/uniswap/chain"
import { items as DOC_ITEMS } from "@/lib/contracts/src/uniswap/docs"
import { items as SYNTHETIX_TOKEN_ITEMS } from "@/lib/contracts/src/uniswap/synthetix-token-list"
import { items as UNISWAP_ITEMS } from "@/lib/contracts/src/uniswap/single-contracts"
import { items as UNISWAP_V3_CORE_CONTRACTS } from "@/lib/contracts/src/uniswap/v3-core"
import { items as UNISWAP_V3_PERIPHERY_CONTRACTS } from "@/lib/contracts/src/uniswap/v3-periphery"
import { items as UNISWAP_TOKEN_LIST_ITEMS } from "@/lib/contracts/src/uniswap/default-token-list"
import { items as UNISWAP_ROUTER_DEPLOYMENT_CONTRACTS } from "@/lib/contracts/src/uniswap/router-deployment"
import { items as UNISWAP_V4_CORE_CONTRACTS } from "@/lib/contracts/src/uniswap/v4-core"
import { items as UNISWAP_V4_PERIPHERY_CONTRACTS } from "@/lib/contracts/src/uniswap/v4-periphery"
import { items as UNISWAP_V4_HOOKS_CONTRACTS } from "@/lib/contracts/src/uniswap/v4-hooks"
import { items as UNISWAP_X_CONTRACTS } from "@/lib/contracts/src/uniswap/uniswap-x"
import { items as UNISWAP_PERMIT2_CONTRACTS } from "@/lib/contracts/src/uniswap/permit2"
import { items as UNISWAP_V3_DPELOYMENTS_CONTRACTS } from "@/lib/contracts/src/uniswap/deployments"
import { UNISWAP_ID } from "@/lib/db/ids"
import { protcols } from "@/lib/db/library"
import { ContractSchema } from "@/lib/schema/contract"
import { ContractPage } from "@/components/main/client/pages/contract-page"
import { ChainID } from "@/lib/chains/id"

export default async function Page() {
  let items: ContractSchema[] = [
    // ...DOC_ITEMS,
    // ...CHAIN_ITEMS
    ...UNISWAP_ITEMS
  ]

  items.push(...(await UNISWAP_V3_DPELOYMENTS_CONTRACTS(ChainID.ETHEREUM_MAINNET)))
  items.push(...(await UNISWAP_PERMIT2_CONTRACTS()))
  items.push(...(await UNISWAP_X_CONTRACTS()))
  items.push(...(await UNISWAP_V4_PERIPHERY_CONTRACTS()))
  items.push(...(await UNISWAP_V4_HOOKS_CONTRACTS()))
  items.push(...(await UNISWAP_V4_CORE_CONTRACTS()))
  items.push(...(await UNISWAP_ROUTER_DEPLOYMENT_CONTRACTS(ChainID.ETHEREUM_MAINNET)))
  items.push(...(await UNISWAP_TOKEN_LIST_ITEMS(ChainID.POLYGON_MAINNET)))
  items.push(...(await UNISWAP_V3_CORE_CONTRACTS()))
  items.push(...(await UNISWAP_V3_PERIPHERY_CONTRACTS()))
  items.push(...(await SYNTHETIX_TOKEN_ITEMS()))

  return (
    <ContractPage
      protocol={protcols[UNISWAP_ID]}
      items={items}
      themeColour={"rgba(255, 0, 122, 1)"}
    />
  )
}
