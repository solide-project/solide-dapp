import { ChainID } from "@/lib/chains/id"
import { items as ZERO_EX_DEPLOYMENTS } from "@/lib/contracts/src/0x/contract-deployments"
import { items as EXCHANGE_V3_DEV_UTILS_CONTRACTS } from "@/lib/contracts/src/0x/exchange-v3-dev-utils"
import { items as EXCHANGE_V3_EXCHANGE_CONTRACTS } from "@/lib/contracts/src/0x/exchange-v3-exchange"
import { items as EXCHANGE_V3_MULTISIG_CONTRACTS } from "@/lib/contracts/src/0x/exchange-v3-multisig"
import { items as GASLESS_APPROVAL_TOKENS } from "@/lib/contracts/src/0x/gasless-approval-token"
import { items as ZERO_EX_VDF_CONTRACTS } from "@/lib/contracts/src/0x/vdf-contracts"
import { items as ZERO_EX_CORE_CONTRACTS } from "@/lib/contracts/src/0x/zero-ex-contracts-core"
import { items as ZERO_EX_FEATURES_CONTRACTS } from "@/lib/contracts/src/0x/zero-ex-contracts-features"
import { items as ZERO_EX_LP_CONTRACTS } from "@/lib/contracts/src/0x/zero-ex-contracts-lp"
import { ZEROX_ID, getProtcolInfo } from "@/lib/systems"
import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = []

  items.push(...(await ZERO_EX_VDF_CONTRACTS()))
  items.push(...(await ZERO_EX_LP_CONTRACTS()))
  items.push(...(await ZERO_EX_FEATURES_CONTRACTS()))
  items.push(...(await ZERO_EX_CORE_CONTRACTS()))
  items.push(...(await ZERO_EX_DEPLOYMENTS(ChainID.ETHEREUM_MAINNET)))
  items.push(...(await EXCHANGE_V3_EXCHANGE_CONTRACTS()))
  items.push(...(await EXCHANGE_V3_MULTISIG_CONTRACTS()))
  items.push(...(await EXCHANGE_V3_DEV_UTILS_CONTRACTS()))
  items.push(...(await GASLESS_APPROVAL_TOKENS()))

  return (
    <ContractPage
      protocol={getProtcolInfo(ZEROX_ID)}
      items={items}
      themeColour={"rgba(38, 39, 43, 1)"}
    />
  )
}
