import { ChainID } from "@/lib/chains/id"
import { items as FUSE_ACCOUNT_ABSTRACTION_CONTRACTS } from "@/lib/contracts/src/fuse/account-abstraction-deployment"
import { items as FUSE_ETHERSPOT_CONTRACTS } from "@/lib/contracts/src/fuse/etherspot-deployments"
import { items as FUSE_LP_REWARDS_CONTRACTS } from "@/lib/contracts/src/fuse/fuse-lp-rewards"
import { items as FUSE_WALLET_CONTRACTS } from "@/lib/contracts/src/fuse/fuse-wallet-contracts"
import { items as FUSE_NETWORK_CONTRACTS } from "@/lib/contracts/src/fuse/network-core"
import { items as SAFE_GLOBAL_SAFE_DEPLOYENT_CONTRACTS } from "@/lib/contracts/src/fuse/safe-deployments"
import { items as FUSE_STUDIO_ENTITIES_CONTRACTS } from "@/lib/contracts/src/fuse/studio-entities"
import { items as FUSE_TOKEN_CONTRACTS } from "@/lib/contracts/src/fuse/token-api"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        FUSE_TOKEN_CONTRACTS(),
        FUSE_WALLET_CONTRACTS(),
        FUSE_ETHERSPOT_CONTRACTS(ChainID.FUSE_MAINNET),
        FUSE_NETWORK_CONTRACTS(),
        FUSE_STUDIO_ENTITIES_CONTRACTS(),
        SAFE_GLOBAL_SAFE_DEPLOYENT_CONTRACTS(ChainID.FUSE_MAINNET),
        FUSE_ACCOUNT_ABSTRACTION_CONTRACTS(ChainID.FUSE_MAINNET),
        FUSE_LP_REWARDS_CONTRACTS(),
    ]);

    return contractResults.flat();
}
