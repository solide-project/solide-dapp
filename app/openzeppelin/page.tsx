import { OPEN_ZEPPELIN_ID, getProtcolInfo } from "@/lib/systems"
import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/main/client/pages/contract-page"
import { items as OPZEP_ETHERNAUTS_CONTRACTS } from "@/lib/contracts/src/openzeppelin/ethernauts"
import { items as OPZEP_ERC20_IMPLEMENTATION } from "@/lib/contracts/src/openzeppelin/erc20"
import { items as OPZEP_ERC721_IMPLEMENTATION } from "@/lib/contracts/src/openzeppelin/erc721"
import { items as OPZEP_ERC1155_IMPLEMENTATION } from "@/lib/contracts/src/openzeppelin/erc1155"
import { items as OPZEP_ACCESS_IMPLEMENTATION } from "@/lib/contracts/src/openzeppelin/access"
import { items as OPZEP_PROXY_IMPLEMENTATION } from "@/lib/contracts/src/openzeppelin/proxy"
import { items as OPZEP_GOVERANCE_IMPLEMENTATION } from "@/lib/contracts/src/openzeppelin/goverance"
import { items as OPZEP_SOLIDE_EXAMPLES } from "@/lib/contracts/src/openzeppelin/solide-example"

export default async function Page() {
  let items: ContractSchema[] = []

  items.push(...(await OPZEP_SOLIDE_EXAMPLES()))
  items.push(...(await OPZEP_ERC20_IMPLEMENTATION()))
  items.push(...(await OPZEP_ERC721_IMPLEMENTATION()))
  items.push(...(await OPZEP_ERC1155_IMPLEMENTATION()))
  items.push(...(await OPZEP_ERC1155_IMPLEMENTATION()))
  items.push(...(await OPZEP_PROXY_IMPLEMENTATION()))
  items.push(...(await OPZEP_ACCESS_IMPLEMENTATION()))
  items.push(...(await OPZEP_GOVERANCE_IMPLEMENTATION()))
  items.push(...(await OPZEP_ETHERNAUTS_CONTRACTS()))

  return (
    <ContractPage
      protocol={getProtcolInfo(OPEN_ZEPPELIN_ID)}
      items={items}
      themeColour={"rgba(17, 19, 187, 1)"}
    />
  )
}
