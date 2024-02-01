import { ContractPage } from "@/components/main/client/pages/contract-page";

import { items as ASPECT_TOOLING_CONTRACTS } from "@/lib/contracts/src/aspect/tooling"
import { items as OTHER_CONTRACTS } from "@/lib/contracts/src/aspect/other"
import { items as EXAMPLE_CONTRACTS } from "@/lib/contracts/src/aspect/example"
import { ARTELA_ID } from "@/lib/db/ids";
import { protcols } from "@/lib/db/library";
import { ContractSchema } from "@/lib/schema/contract";

export default async function Page() {
  let items: ContractSchema[] = [
    ...OTHER_CONTRACTS,
    ...ASPECT_TOOLING_CONTRACTS,
  ]

  items.push(...(await EXAMPLE_CONTRACTS()))

  return <ContractPage
    protocol={protcols[ARTELA_ID]}
    items={items}
    themeColour={"rgba(92, 124, 255, 1)"} />
}
