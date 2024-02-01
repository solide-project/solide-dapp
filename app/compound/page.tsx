import { ContractPage } from "@/components/main/client/pages/contract-page";
import { ChainID } from "@/lib/chains/id";

import { items as COMPOUND_CHAIN_CONTRACTS } from "@/lib/contracts/src/compound/chain"
import { COMPOUND_ID } from "@/lib/db/ids";
import { protcols } from "@/lib/db/library";
import { ContractSchema } from "@/lib/schema/contract";

export default async function Page() {
  let items: ContractSchema[] = [
  ]

  items.push(...(await COMPOUND_CHAIN_CONTRACTS(ChainID.ETHEREUM_MAINNET)))
  return <ContractPage
    protocol={protcols[COMPOUND_ID]}
    items={items}
    themeColour={"rgba(0, 211, 149, 1)"} />
}
