import { ChainID } from "@/lib/chains/id"
import { items as FUSE_ACCOUNT_ABSTRACTION_CONTRACTS } from "@/lib/contracts/src/fuse/account-abstraction-deployment"
import { items as FUSE_ETHERSPOT_CONTRACTS } from "@/lib/contracts/src/fuse/etherspot-deployments"
import { items as FUSE_LP_REWARDS_CONTRACTS } from "@/lib/contracts/src/fuse/fuse-lp-rewards"
import { items as FUSE_WALLET_CONTRACTS } from "@/lib/contracts/src/fuse/fuse-wallet-contracts"
import { items as FUSE_NETWORK_CONTRACTS } from "@/lib/contracts/src/fuse/network-core"
import { items as SAFE_GLOBAL_SAFE_DEPLOYENT_CONTRACTS } from "@/lib/contracts/src/fuse/safe-deployments"
import { items as FUSE_STUDIO_ENTITIES_CONTRACTS } from "@/lib/contracts/src/fuse/studio-entities"
import { items as FUSE_TOKEN_CONTRACTS } from "@/lib/contracts/src/fuse/token-api"
import { FUSE_ID } from "@/lib/db/ids"
import { protcols } from "@/lib/db/library"
import { ContractSchema } from "@/lib/schema/contract"
import { ContractPage } from "@/components/main/client/pages/contract-page"

export default async function Page() {
  let items: ContractSchema[] = []

  items.push(...(await FUSE_TOKEN_CONTRACTS()))
  items.push(...(await FUSE_WALLET_CONTRACTS()))
  items.push(...(await FUSE_ETHERSPOT_CONTRACTS(ChainID.FUSE_MAINNET)))
  items.push(...(await FUSE_NETWORK_CONTRACTS()))
  items.push(...(await FUSE_STUDIO_ENTITIES_CONTRACTS()))
  items.push(
    ...(await SAFE_GLOBAL_SAFE_DEPLOYENT_CONTRACTS(ChainID.FUSE_MAINNET))
  )
  items.push(
    ...(await FUSE_ACCOUNT_ABSTRACTION_CONTRACTS(ChainID.FUSE_MAINNET))
  )
  items.push(...(await FUSE_LP_REWARDS_CONTRACTS()))

  return (
    <ContractPage
      protocol={protcols[FUSE_ID]}
      items={items}
      themeColour={"rgba(180, 249, 186, 1)"}
    />
  )
}
