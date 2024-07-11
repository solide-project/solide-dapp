import { ChainID } from "@/lib/chains/id"
import { items as SOLIDE_GUIDES_ITEMS } from "@/lib/contracts/src/arbitrum/solide-guides"
import { items as ARBITRUM_TOKEN_LIST_CONTRACTS } from "@/lib/contracts/src/arbitrum/token-list"
import { items as BALANCER_DEPLOYMENT_CONTRACTS } from "@/lib/contracts/src/balancer/contract-deployments"
import { items as CHAINLINK_PRICE_FEED_ITEMS } from "@/lib/contracts/src/chainlink/price-feed"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        ARBITRUM_TOKEN_LIST_CONTRACTS(),
        BALANCER_DEPLOYMENT_CONTRACTS(ChainID.ARBITRUM_ONE),
        CHAINLINK_PRICE_FEED_ITEMS(ChainID.ARBITRUM_ONE),
        // GMX_SYNTHETICS_CONTRACTS(ChainID.ARBITRUM_ONE),
    ]);
    return contractResults.flat()
        .concat(...SOLIDE_GUIDES_ITEMS);
};
