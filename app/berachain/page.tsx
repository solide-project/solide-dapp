import { items as ARTIO_CONTRACTS } from "@/lib/contracts/src/berachain/artio-contracts"
import { items as PRECOMPILE_TEST_CONTRACTS } from "@/lib/contracts/src/berachain/polaris"
import { items as BERACHAIN_VERIFIED_CONTRACTS } from "@/lib/contracts/src/berachain/verified-contracts"
import { BERACHAIN_ID, getProtcolInfo, getRPCInfo } from "@/lib/systems"
import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = [...ARTIO_CONTRACTS]

  items.push(...(await PRECOMPILE_TEST_CONTRACTS()))
  items.push(...(await BERACHAIN_VERIFIED_CONTRACTS()))

  return (
    <ContractPage
      protocol={getProtcolInfo(BERACHAIN_ID)}
      rpcSetting={getRPCInfo(BERACHAIN_ID)}
      items={items}
      themeColour={"rgba(244, 114, 38, 1)"}
    />
  )
}
