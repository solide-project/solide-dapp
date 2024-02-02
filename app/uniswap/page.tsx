import { items as CHAIN_ITEMS } from "@/lib/contracts/src/uniswap/chain"
import { items as DOC_ITEMS } from "@/lib/contracts/src/uniswap/docs"
import { items as SYNTHETIX_TOKEN_ITEMS } from "@/lib/contracts/src/uniswap/synthetix-token-list"
import { UNISWAP_ID } from "@/lib/db/ids"
import { protcols } from "@/lib/db/library"
import { ContractSchema } from "@/lib/schema/contract"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = [...DOC_ITEMS, ...CHAIN_ITEMS]

  items.push(...(await SYNTHETIX_TOKEN_ITEMS()))

  return (
    <ContractPage
      protocol={protcols[UNISWAP_ID]}
      items={items}
      themeColour={"rgba(255, 0, 122, 1)"}
    />
  )
}
