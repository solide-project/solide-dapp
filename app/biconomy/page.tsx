import { ChainID } from "@/lib/chains/id"
import { items as BICO_TOKEN_CONTRACTS } from "@/lib/contracts/src/biconomy/bico-token"
import { items as BICO_TOKEN_LIST_CONTRACTS } from "@/lib/contracts/src/biconomy/biconomy-token-list"
import { items as BICO_CCMP_CONTRACTS } from "@/lib/contracts/src/biconomy/ccmp"
import { items as BICO_HYPHEN_CONTRACTS } from "@/lib/contracts/src/biconomy/hyphen"
import { items as BICO_MEXA_CONTRACTS } from "@/lib/contracts/src/biconomy/mexa"
import { items as BICO_PAYMASTER_CONTRACTS } from "@/lib/contracts/src/biconomy/paymasters"
import { items as BICO_SAFETY_MODULE_CONTRACTS } from "@/lib/contracts/src/biconomy/safety-module"
import { items as BICO_SMART_ACCOUNT_CONTRACTS } from "@/lib/contracts/src/biconomy/smart-account"
import { items as BICO_SMART_ACCOUNT_COMMON_CONTRACTS } from "@/lib/contracts/src/biconomy/smart-account-common"
import { BICONOMY_ID, getProtcolInfo } from "@/lib/systems"
import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = [...BICO_CCMP_CONTRACTS]

  items = items.concat(...(await BICO_TOKEN_CONTRACTS()))
  items = items.concat(...(await BICO_TOKEN_LIST_CONTRACTS()))
  items = items.concat(...(await BICO_HYPHEN_CONTRACTS()))
  items = items.concat(...(await BICO_MEXA_CONTRACTS()))
  items = items.concat(...(await BICO_PAYMASTER_CONTRACTS()))
  items = items.concat(...(await BICO_SAFETY_MODULE_CONTRACTS()))
  items = items.concat(...(await BICO_SMART_ACCOUNT_CONTRACTS()))
  items = items.concat(...(await BICO_SMART_ACCOUNT_COMMON_CONTRACTS()))

  return (
    <ContractPage
      protocol={getProtcolInfo(BICONOMY_ID)}
      items={items}
      themeColour={"rgba(255, 78, 23, 1)"}
    />
  )
}
