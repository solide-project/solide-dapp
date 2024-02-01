import { ContractPage } from "@/components/main/client/pages/contract-page";

import { protcols } from "@/lib/db/library";
import { ContractSchema } from "@/lib/schema/contract";
import { SOLIDE_URL } from "@/lib/utils";

export default async function Page() {
  let items: ContractSchema[] = [

  ]

  return <ContractPage
    protocol={protcols[SOLIDE_URL]}
    items={items}
    themeColour={"rgba(70, 25, 147, 1)"} />
}
