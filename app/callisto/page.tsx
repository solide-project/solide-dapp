import { items as ALPHONSE_MUCHA_CONTRACTS } from "@/lib/contracts/src/callisto/alphonse-mucha"
import { items as CALLISTO_INTERCHAIN_BRIDGE } from "@/lib/contracts/src/callisto/callisto-interchain-bridge"
import { items as CALLISTO_NFT_CONTRACTS } from "@/lib/contracts/src/callisto/callisto-nft"
import { items as CALLISTO_CLO_TOKEN_CONTRACTS } from "@/lib/contracts/src/callisto/clo-token"
import { items as ERC223_CONTRACTS } from "@/lib/contracts/src/callisto/erc223"
import { items as CALLISTO_TOKEN_CONTRACTS } from "@/lib/contracts/src/callisto/scanner-tokens"
import { items as SOY_FINANCE_CONTRACTS } from "@/lib/contracts/src/callisto/soy-finance"
import { CALLISTO_ID, getProtcolInfo } from "@/lib/systems"
import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = []

  items.push(...(await ERC223_CONTRACTS()))
  items.push(...(await CALLISTO_NFT_CONTRACTS()))
  items.push(...(await CALLISTO_CLO_TOKEN_CONTRACTS()))
  items.push(...(await SOY_FINANCE_CONTRACTS()))
  items.push(...(await CALLISTO_INTERCHAIN_BRIDGE()))
  items.push(...ALPHONSE_MUCHA_CONTRACTS)
  items.push(...(await CALLISTO_TOKEN_CONTRACTS()))

  return (
    <ContractPage
      protocol={getProtcolInfo(CALLISTO_ID)}
      items={items}
      themeColour={"rgba(0, 193, 207, 1)"}
    />
  )
}
