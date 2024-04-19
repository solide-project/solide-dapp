import { ChainID } from "@/lib/chains/id"
import { items as SOLIDE_GUIDES_ITEMS } from "@/lib/contracts/src/arbitrum/solide-guides"
import { items as ARBITRUM_TOKEN_LIST_CONTRACTS } from "@/lib/contracts/src/arbitrum/token-list"
import { items as BALANCER_DEPLOYMENT_CONTRACTS } from "@/lib/contracts/src/balancer/contract-deployments"
import { items as CHAINLINK_PRICE_FEED_ITEMS } from "@/lib/contracts/src/chainlink/price-feed"
import { items as GMX_SYNTHETICS_CONTRACTS } from "@/lib/contracts/src/gmx/synthetics-deployments"
import { ARBITRUM_ID, getProtcolInfo, getRPCInfo } from "@/lib/systems"
import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = [...SOLIDE_GUIDES_ITEMS]

  items.push(...(await ARBITRUM_TOKEN_LIST_CONTRACTS()))
  items.push(...(await BALANCER_DEPLOYMENT_CONTRACTS(ChainID.ARBITRUM_ONE)))
  items.push(...(await CHAINLINK_PRICE_FEED_ITEMS(ChainID.ARBITRUM_ONE)))
  items.push(...(await GMX_SYNTHETICS_CONTRACTS(ChainID.ARBITRUM_ONE)))

  return (
    <ContractPage
      protocol={getProtcolInfo(ARBITRUM_ID)}
      rpcSetting={getRPCInfo(ARBITRUM_ID)}
      items={items}
      themeColour={"rgba(17, 19, 187, 1)"}
    />
  )
}
