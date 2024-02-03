import { ChainID } from "@/lib/chains/id"
import { items as CHAINLINK_PRICE_FEED_ITEMS } from "@/lib/contracts/src/chainlink/price-feed"
import { items as STARGATE_CONTRACTS } from "@/lib/contracts/src/ethereum/stargate"
import { items as AAVE_V3_CONTRACTS } from "@/lib/contracts/src/metis/aave-v3"
import { items as HUMMUS_EXCHANGE_CONTRACTS } from "@/lib/contracts/src/metis/hummus-exchange-contracts"
import { items as MAIA_DAO_CONTRACTS } from "@/lib/contracts/src/metis/maia-dao-contracts"
import { items as METIS_TOKEN_ITEMS } from "@/lib/contracts/src/metis/metis-token-list"
import { items as NETSWAP_FARM_CONTRACTS } from "@/lib/contracts/src/metis/netswap-farm"
import { items as OTHER_CONTRACTS } from "@/lib/contracts/src/metis/other"
import { items as TOKEN_CONTRACTS } from "@/lib/contracts/src/metis/token"
import { METIS_ID } from "@/lib/db/ids"
import { protcols } from "@/lib/db/library"
import { ContractSchema } from "@/lib/schema/contract"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = [
    ...TOKEN_CONTRACTS,
    ...OTHER_CONTRACTS,
  ]

  items.push(...(await CHAINLINK_PRICE_FEED_ITEMS(ChainID.METIS_ANDROMEDA)))
  items.push(...(await METIS_TOKEN_ITEMS()))
  items.push(...(await AAVE_V3_CONTRACTS()))
  items.push(...(await STARGATE_CONTRACTS(ChainID.METIS_ANDROMEDA)))
  items.push(...(await HUMMUS_EXCHANGE_CONTRACTS()))
  items.push(...(await MAIA_DAO_CONTRACTS()))
  items.push(...(await NETSWAP_FARM_CONTRACTS()))

  return (
    <ContractPage
      protocol={protcols[METIS_ID]}
      items={items}
      themeColour={"rgba(0, 210, 255, 1)"}
    />
  )
}
