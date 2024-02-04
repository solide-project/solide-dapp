import { AAVE_ID } from "@/lib/db/ids"
import { protcols } from "@/lib/db/library"
import { ContractSchema } from "@/lib/schema/contract"
import { ContractPage } from "@/components/main/client/pages/contract-page"

import { items as AAVE_GHO_TOKEN } from "@/lib/contracts/src/aave/gho-token"
import { items as AAVE_V3_CORE_CONFIGURATION_CONTRACTS } from "@/lib/contracts/src/aave/aave-v3-core-configuration"
import { items as AAVE_V3_CORE_POOL_CONTRACTS } from "@/lib/contracts/src/aave/aave-v3-core-pool"
import { items as AAVE_V3_CORE_TOKENIZATION_CONTRACTS } from "@/lib/contracts/src/aave/aave-v3-core-tokenization"
import { items as AAVE_V3_CORE_MISC_CONTRACTS } from "@/lib/contracts/src/aave/aave-v3-core-misc"
import { items as AAVE_V3_PERIPHERY_REWARDS_CONTRACTS } from "@/lib/contracts/src/aave/aave-v3-periphery-rewards"
import { items as AAVE_V3_PERIPHERY_MISC_CONTRACTS } from "@/lib/contracts/src/aave/aave-v3-periphery-misc"
import { items as AAVE_ADDRESS_BOOK_FTM_CONTRACTS } from "@/lib/contracts/src/aave/address-book-ftm"
import { items as AAVE_TOKEN_LIST } from "@/lib/contracts/src/aave/token-asset-list"
import { items as AAVE_TOKEN_CONTRACTS } from "@/lib/contracts/src/aave/aave-token"
import { items as AAVE_TOKEN_WRAPPER_CONTRACTS } from "@/lib/contracts/src/aave/token-wrapper"
import { items as AAVE_V2_STAKE_CONTRACTS } from "@/lib/contracts/src/aave/aave-stake-v2"

export default async function Page() {
  let items: ContractSchema[] = [
    ...AAVE_GHO_TOKEN
  ]

  items.push(...(await AAVE_V2_STAKE_CONTRACTS()))
  items.push(...(await AAVE_V3_CORE_CONFIGURATION_CONTRACTS()))
  items.push(...(await AAVE_V3_CORE_POOL_CONTRACTS()))
  items.push(...(await AAVE_V3_CORE_TOKENIZATION_CONTRACTS()))
  items.push(...(await AAVE_V3_CORE_MISC_CONTRACTS()))
  items.push(...(await AAVE_V3_PERIPHERY_REWARDS_CONTRACTS()))
  items.push(...(await AAVE_V3_PERIPHERY_MISC_CONTRACTS()))
  items.push(...(await AAVE_TOKEN_LIST()))
  items.push(...(await AAVE_ADDRESS_BOOK_FTM_CONTRACTS()))
  items.push(...(await AAVE_TOKEN_CONTRACTS()))
  items.push(...(await AAVE_TOKEN_WRAPPER_CONTRACTS()))

  return (
    <ContractPage
      protocol={protcols[AAVE_ID]}
      items={items}
      themeColour={"rgba(139, 113, 170, 1)"}
    />
  )
}
