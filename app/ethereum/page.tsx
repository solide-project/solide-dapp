import { ContractPage } from "@/components/main/client/pages/contract-page";

import { items as CHAINLINK_PRICE_FEED_ITEMS } from "@/lib/contracts/src/chainlink/price-feed"
import { items as BALANCER_ITEMS } from "@/lib/contracts/src/balancer/contract-deployments"
import { items as DEFI_CONTRACTS } from "@/lib/contracts/src/ethereum/defi"
import { items as MAKER_DAO_ITEMS } from "@/lib/contracts/src/ethereum/maker-dao"
import { items as NFT_CONTRACTS } from "@/lib/contracts/src/ethereum/nft"
import { items as TOKEN_CONTRACTS } from "@/lib/contracts/src/ethereum/token"
import { items as UNISWAP_TOKEN_ITEMS } from "@/lib/contracts/src/ethereum/uniswap-token-list"
import { items as STARGATE_CONTRACTS } from "@/lib/contracts/src/ethereum/stargate"
import { ETHEREUM_ID } from "@/lib/db/ids";
import { protcols } from "@/lib/db/library";
import { ContractSchema } from "@/lib/schema/contract";
import { ChainID } from "@/lib/chains/id";

export default async function Page() {
  let items: ContractSchema[] = [
  ]

  items.push(...(await UNISWAP_TOKEN_ITEMS()))
  items.push(...(await MAKER_DAO_ITEMS("mainnet")))
  items.push(...(await BALANCER_ITEMS(ChainID.ETHEREUM_MAINNET)))
  items.push(...(await STARGATE_CONTRACTS(ChainID.ETHEREUM_MAINNET)))
  items.push(...(await CHAINLINK_PRICE_FEED_ITEMS(ChainID.ETHEREUM_MAINNET)))

  return <ContractPage
    protocol={protcols[ETHEREUM_ID]}
    items={items}
    themeColour={"rgba(98, 126, 234, 1)"} />
}
