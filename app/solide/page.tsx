import { items as ERC404 } from "@/lib/contracts/src/solide/erc404"
import { items as ERC4437 } from "@/lib/contracts/src/solide/erc4337"
import { SOLIDE, getProtcolInfo } from "@/lib/systems"
import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = [...ERC4437, ...ERC404]

  return (
    <ContractPage
      protocol={getProtcolInfo(SOLIDE)}
      items={items}
      themeColour={"rgba(70, 25, 147, 1)"}
    />
  )
}
