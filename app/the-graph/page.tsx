import { ChainID } from "@/lib/chains/id"
import { items as GRAPH_DEPLOYED_CONTRACTS } from "@/lib/contracts/src/the-graph/chain"
import { items as GRAPH_ENZYME_CONTRACTS } from "@/lib/contracts/src/the-graph/enzyme"
import { items as GRAPH_OPENSEA_CONTRACTS } from "@/lib/contracts/src/the-graph/opensea"
import { THEGRAPH_ID, getProtcolInfo } from "@/lib/systems"
import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = []

  items.push(...(await GRAPH_DEPLOYED_CONTRACTS(ChainID.ETHEREUM_MAINNET)))
  items.push(...(await GRAPH_ENZYME_CONTRACTS()))
  // items.push(...await GRAPH_OPENSEA_CONTRACTS());

  return (
    <ContractPage
      protocol={getProtcolInfo(THEGRAPH_ID)}
      items={items}
      themeColour={"rgba(111, 76, 255, 0.64)"}
    />
  )
}
