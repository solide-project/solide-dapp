import { ChainID } from "@/lib/chains/id"
import { GITCOIN_ID, getProtcolInfo } from "@/lib/systems"
import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/main/client/pages/contract-page"
import { items as ALLO_V2_CONTRACTS } from "@/lib/contracts/src/gitcoin/allo-v2"
import { items as ALLO_V2_STRATEGIES_CONTRACTS } from "@/lib/contracts/src/gitcoin/allo-v2-strategies"
import { items as GITCOIN_DEPLOYMENTS } from "@/lib/contracts/src/gitcoin/gitcoin-deployments"
import { items as EAS_PROXY_CONTRACTS } from "@/lib/contracts/src/gitcoin/eas-proxy"
import { items as STACKS_CONTRACTS } from "@/lib/contracts/src/gitcoin/gitcoin-stack"
import { items as OTHER_CONTRACTS } from "@/lib/contracts/src/gitcoin/others"

export default async function Page() {
  let items: ContractSchema[] = []

  items.push(...(await ALLO_V2_CONTRACTS()))
  items.push(...(await ALLO_V2_STRATEGIES_CONTRACTS()))
  items.push(...(await GITCOIN_DEPLOYMENTS()))
  items.push(...(await STACKS_CONTRACTS()))
  items.push(...(await EAS_PROXY_CONTRACTS()))
  items.push(...OTHER_CONTRACTS)

  return (
    <ContractPage
      protocol={getProtcolInfo(GITCOIN_ID)}
      items={items}
      themeColour={"rgba(53, 232, 189, 1)"}
    />
  )
}
