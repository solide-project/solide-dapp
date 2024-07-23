import { items as ALLO_V2_CONTRACTS } from "@/lib/contracts/src/gitcoin/allo-v2"
import { items as ALLO_V2_STRATEGIES_CONTRACTS } from "@/lib/contracts/src/gitcoin/allo-v2-strategies"
import { items as GITCOIN_DEPLOYMENTS } from "@/lib/contracts/src/gitcoin/gitcoin-deployments"
import { items as EAS_PROXY_CONTRACTS } from "@/lib/contracts/src/gitcoin/eas-proxy"
import { items as STACKS_CONTRACTS } from "@/lib/contracts/src/gitcoin/gitcoin-stack"
import { items as OTHER_CONTRACTS } from "@/lib/contracts/src/gitcoin/others"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        ALLO_V2_CONTRACTS(),
        ALLO_V2_STRATEGIES_CONTRACTS(),
        GITCOIN_DEPLOYMENTS(),
        STACKS_CONTRACTS(),
        EAS_PROXY_CONTRACTS(),
    ]);

    return contractResults.flat();
}
