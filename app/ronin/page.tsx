import { ChainID } from "@/lib/chains/id"
import { items as APERION_CONTRACTS } from "@/lib/contracts/src/ronin/ecosystem-apeiron"
import { items as AXIE_INFINITY_CONTRACTS } from "@/lib/contracts/src/ronin/ecosystem-axie-inifinity"
import { items as CARV_CONTRACTS } from "@/lib/contracts/src/ronin/ecosystem-carv"
import { items as KATANA_CONTRACTS } from "@/lib/contracts/src/ronin/ecosystem-katana"
import { items as MAVIS_CONTRACTS } from "@/lib/contracts/src/ronin/ecosystem-mavis"
import { items as RONIN_ERC_TOKENS } from "@/lib/contracts/src/ronin/erc721-tokens"
import { items as RNS_CORE_CONTRACTS } from "@/lib/contracts/src/ronin/rns-core"
import { items as RNS_DEPLOYMENTS } from "@/lib/contracts/src/ronin/rns-deployment"
import { items as RONIN_BRIDGE_DEPLOYMENTS } from "@/lib/contracts/src/ronin/ronin-bridge-contracts-deployments"
import { items as RONIN_BRIDGE_EXTENSION_CONTRACTS } from "@/lib/contracts/src/ronin/ronin-bridge-contracts-extension"
import { items as RONIN_BRIDGE_GATEWAY_CONTRACTS } from "@/lib/contracts/src/ronin/ronin-bridge-contracts-gateway"
import { items as RONIN_BRIDGE_MAINCHAIN_CONTRACTS } from "@/lib/contracts/src/ronin/ronin-bridge-contracts-mainchain"
import { CHAINLINK_ID, RONIN_ID } from "@/lib/db/ids"
import { protcols } from "@/lib/db/library"
import { ContractSchema } from "@/lib/schema/contract"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = []

  items.push(...(await APERION_CONTRACTS()))
  items.push(...(await AXIE_INFINITY_CONTRACTS()))
  items.push(...(await KATANA_CONTRACTS()))
  items.push(...(await CARV_CONTRACTS()))
  items.push(...(await MAVIS_CONTRACTS()))
  items.push(...(await RONIN_BRIDGE_DEPLOYMENTS(ChainID.RONIN_MAINNET)))
  items.push(...(await RONIN_BRIDGE_EXTENSION_CONTRACTS()))
  items.push(...(await RONIN_BRIDGE_MAINCHAIN_CONTRACTS()))
  items.push(...(await RONIN_BRIDGE_GATEWAY_CONTRACTS()))
  items.push(...(await RNS_CORE_CONTRACTS()))
  items.push(...(await RNS_DEPLOYMENTS(ChainID.RONIN_MAINNET)))
  items.push(...(await RONIN_ERC_TOKENS({ standard: "ERC721", limit: 20 })))
  items.push(...(await RONIN_ERC_TOKENS({ standard: "ERC1155", limit: 20 })))
  items.push(...(await RONIN_ERC_TOKENS({ standard: "ERC20", limit: 20 })))

  return (
    <ContractPage
      protocol={protcols[RONIN_ID]}
      items={items}
      themeColour={"rgba(6, 102, 220, 1)"}
    />
  )
}
