import { ChainID } from "@/lib/chains/id"
import { BERACHAIN_ID } from "@/lib/db/ids"
import { protcols } from "@/lib/db/library"
import { ContractSchema } from "@/lib/schema/contract"
import { ContractPage } from "@/components/main/client/pages/contract-page"
import { items as BERACHAIN_VERIFIED_CONTRACTS } from "@/lib/contracts/src/berachain/verified-contracts"
import { items as PRECOMPILE_TEST_CONTRACTS } from "@/lib/contracts/src/berachain/polaris"
import { items as ARTIO_CONTRACTS } from "@/lib/contracts/src/berachain/artio-contracts"

export default async function Page() {
  let items: ContractSchema[] = [
    ...ARTIO_CONTRACTS
  ]

  items.push(...(await PRECOMPILE_TEST_CONTRACTS()))
  items.push(...(await BERACHAIN_VERIFIED_CONTRACTS()))

  return (
    <ContractPage
      protocol={protcols[BERACHAIN_ID]}
      items={items}
      themeColour={"rgba(244, 114, 38, 1)"}
    />
  )
}
