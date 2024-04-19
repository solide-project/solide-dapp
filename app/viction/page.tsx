import { ChainID } from "@/lib/chains/id"
import { items as VICTION_GENESIS_CONTRACTS } from "@/lib/contracts/src/viction/genesis"
import { items as LUASWAP_PAIR_CONTRACTS } from "@/lib/contracts/src/viction/luaswap-lp"
import { items as LUASWAP_POOL_CONTRACT } from "@/lib/contracts/src/viction/luaswap-pool"
import { items as VICTION_TOKEN_CONTRACTS } from "@/lib/contracts/src/viction/scanner-tokens"
import { items as TOMO_ISSUER_CONTRACTS } from "@/lib/contracts/src/viction/tomo-issuer"
import { items as VICTION_VRC_25_CONTRACTS } from "@/lib/contracts/src/viction/vrc25"
import { items as VICTION_VRC_25_SAMPLE_CONTRACTS } from "@/lib/contracts/src/viction/vrc25-sample"
import { items as VICTION_VRC_725_CONTRACTS } from "@/lib/contracts/src/viction/vrc725"
import { items as VICTION_VRC_725_SAMPLE_CONTRACTS } from "@/lib/contracts/src/viction/vrc725-sample"
import { items as WVIC_CONTRACTS } from "@/lib/contracts/src/viction/wvic"
import { VICTION_ID, getProtcolInfo, getRPCInfo } from "@/lib/systems"
import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = [...WVIC_CONTRACTS]

  items.push(...(await TOMO_ISSUER_CONTRACTS()))
  items.push(...(await VICTION_VRC_25_CONTRACTS()))
  items.push(...(await VICTION_VRC_25_SAMPLE_CONTRACTS()))
  items.push(...(await VICTION_VRC_725_CONTRACTS()))
  items.push(...(await VICTION_VRC_725_SAMPLE_CONTRACTS()))
  items.push(...(await VICTION_TOKEN_CONTRACTS()))
  items.push(...(await VICTION_GENESIS_CONTRACTS()))
  items.push(...(await LUASWAP_POOL_CONTRACT()))
  items.push(...(await LUASWAP_PAIR_CONTRACTS()))

  return (
    <ContractPage
      protocol={getProtcolInfo(VICTION_ID)}
      rpcSetting={getRPCInfo(VICTION_ID)}
      items={items}
      themeColour={"rgba(248, 246, 215, 1)"}
    />
  )
}
