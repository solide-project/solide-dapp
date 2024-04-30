import { BITLAYER_ID, getProtcolInfo, getRPCInfo } from "@/lib/systems"
import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/main/client/pages/contract-page"
import { items as BITLAYER_CONTRACTS } from "@/lib/contracts/src/bitlayer/predeploy"
import { items as PEG_TOKENS } from "@/lib/contracts/src/bitlayer/peg-tokens"

export default async function Page() {
  let items: ContractSchema[] = []

  items = items.concat(...(await BITLAYER_CONTRACTS()))
  items = items.concat(...(await PEG_TOKENS()))

  return (
    <ContractPage
      protocol={getProtcolInfo(BITLAYER_ID)}
      rpcSetting={getRPCInfo(BITLAYER_ID)}
      items={items}
      themeColour={"rgba(227, 110, 27, 1)"}
    />
  )
}
