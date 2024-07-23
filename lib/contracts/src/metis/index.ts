import { ChainID } from "@/lib/chains/id"
import { items as CHAINLINK_PRICE_FEED_ITEMS } from "@/lib/contracts/src/chainlink/price-feed"
import { items as STARGATE_CONTRACTS } from "@/lib/contracts/src/ethereum/stargate"
import { items as AAVE_V3_CONTRACTS } from "@/lib/contracts/src/metis/aave-v3"
import { items as HUMMUS_EXCHANGE_CONTRACTS } from "@/lib/contracts/src/metis/hummus-exchange-contracts"
import { items as MAIA_DAO_CONTRACTS } from "@/lib/contracts/src/metis/maia-dao-contracts"
import { items as METIS_TOKEN_ITEMS } from "@/lib/contracts/src/metis/metis-token-list"
import { items as NETSWAP_FARM_CONTRACTS } from "@/lib/contracts/src/metis/netswap-farm"
import { items as OTHER_CONTRACTS } from "@/lib/contracts/src/metis/other"
import { items as TOKEN_CONTRACTS } from "@/lib/contracts/src/metis/token"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        CHAINLINK_PRICE_FEED_ITEMS(ChainID.METIS_ANDROMEDA),
        METIS_TOKEN_ITEMS(),
        AAVE_V3_CONTRACTS(),
        STARGATE_CONTRACTS(ChainID.METIS_ANDROMEDA),
        HUMMUS_EXCHANGE_CONTRACTS(),
        MAIA_DAO_CONTRACTS(),
        NETSWAP_FARM_CONTRACTS(),
    ]);

    return contractResults.flat()
        .concat(OTHER_CONTRACTS, TOKEN_CONTRACTS);
}