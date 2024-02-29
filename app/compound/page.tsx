import { ChainID } from "@/lib/chains/id"
import { items as COMPOUND_CHAIN_CONTRACTS } from "@/lib/contracts/src/compound/chain"
import { items as COMPOUND_COMET_WRAPPER_CONTRACTS } from "@/lib/contracts/src/compound/comet-wrapper"
import { items as COMPOUND_COMENT_CONTRACTS } from "@/lib/contracts/src/compound/compound-comet"
import { items as COMPOUND_GOVERANCE_CONTRACTS } from "@/lib/contracts/src/compound/compound-governance"
import { items as COMPOUND_PROTOCOL_CONTRACTS } from "@/lib/contracts/src/compound/compound-protocol"
import { items as COMPOUND_ENCUMBER_CONTRACTS } from "@/lib/contracts/src/compound/encumber-contracts"
import { items as COMPOUND_OPEN_ORACLE_CONTRACTS } from "@/lib/contracts/src/compound/open-oracle"
import { items as COMPOUND_TOKEN_LIST } from "@/lib/contracts/src/compound/token-list"
import { COMPOUND_ID } from "@/lib/db/ids"
import { protcols } from "@/lib/db/library"
import { ContractSchema } from "@/lib/schema/contract"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = []

  items.push(...(await COMPOUND_GOVERANCE_CONTRACTS()))
  items.push(...(await COMPOUND_PROTOCOL_CONTRACTS()))
  items.push(...(await COMPOUND_COMENT_CONTRACTS()))
  items.push(...(await COMPOUND_ENCUMBER_CONTRACTS()))
  items.push(...(await COMPOUND_CHAIN_CONTRACTS(ChainID.ETHEREUM_MAINNET)))
  items.push(...(await COMPOUND_TOKEN_LIST(ChainID.ETHEREUM_MAINNET)))
  items.push(...(await COMPOUND_COMET_WRAPPER_CONTRACTS()))
  items.push(...(await COMPOUND_OPEN_ORACLE_CONTRACTS()))

  return (
    <ContractPage
      protocol={protcols[COMPOUND_ID]}
      items={items}
      themeColour={"rgba(0, 211, 149, 1)"}
    />
  )
}
