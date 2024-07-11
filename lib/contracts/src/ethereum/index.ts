
import { ChainID } from "@/lib/chains/id"
import { items as BALANCER_ITEMS } from "@/lib/contracts/src/balancer/contract-deployments"
import { items as CHAINLINK_PRICE_FEED_ITEMS } from "@/lib/contracts/src/chainlink/price-feed"
import { items as DEFI_CONTRACTS } from "@/lib/contracts/src/ethereum/defi"
import { items as MAKER_DAO_ITEMS } from "@/lib/contracts/src/ethereum/maker-dao"
import { items as NFT_CONTRACTS } from "@/lib/contracts/src/ethereum/nft"
import { items as STARGATE_CONTRACTS } from "@/lib/contracts/src/ethereum/stargate"
import { items as TOKEN_CONTRACTS } from "@/lib/contracts/src/ethereum/token"
import { items as UNISWAP_TOKEN_ITEMS } from "@/lib/contracts/src/ethereum/uniswap-token-list"
import { items as OPENSEA_CONTRACTS } from "@/lib/contracts/src/the-graph/opensea"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        // OPENSEA_CONTRACTS(),
        UNISWAP_TOKEN_ITEMS(),
        MAKER_DAO_ITEMS("mainnet"),
        BALANCER_ITEMS(ChainID.ETHEREUM_MAINNET),
        STARGATE_CONTRACTS(ChainID.ETHEREUM_MAINNET),
        CHAINLINK_PRICE_FEED_ITEMS(ChainID.ETHEREUM_MAINNET),
    ]);

    return contractResults.flat()
        .concat(...DEFI_CONTRACTS);
}