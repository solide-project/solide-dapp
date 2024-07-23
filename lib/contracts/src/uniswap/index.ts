import { ChainID } from "@/lib/chains/id"
import { items as UNISWAP_TOKEN_LIST_ITEMS } from "@/lib/contracts/src/uniswap/default-token-list"
import { items as UNISWAP_V3_DPELOYMENTS_CONTRACTS } from "@/lib/contracts/src/uniswap/deployments"
import { items as UNISWAP_PERMIT2_CONTRACTS } from "@/lib/contracts/src/uniswap/permit2"
import { items as UNISWAP_ROUTER_DEPLOYMENT_CONTRACTS } from "@/lib/contracts/src/uniswap/router-deployment"
import { items as UNISWAP_ITEMS } from "@/lib/contracts/src/uniswap/single-contracts"
import { items as SYNTHETIX_TOKEN_ITEMS } from "@/lib/contracts/src/uniswap/synthetix-token-list"
import { items as UNISWAP_X_CONTRACTS } from "@/lib/contracts/src/uniswap/uniswap-x"
import { items as UNISWAP_V3_CORE_CONTRACTS } from "@/lib/contracts/src/uniswap/v3-core"
import { items as UNISWAP_V3_PERIPHERY_CONTRACTS } from "@/lib/contracts/src/uniswap/v3-periphery"
import { items as UNISWAP_V4_CORE_CONTRACTS } from "@/lib/contracts/src/uniswap/v4-core"
import { items as UNISWAP_V4_HOOKS_CONTRACTS } from "@/lib/contracts/src/uniswap/v4-hooks"
import { items as UNISWAP_V4_PERIPHERY_CONTRACTS } from "@/lib/contracts/src/uniswap/v4-periphery"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        UNISWAP_V3_DPELOYMENTS_CONTRACTS(ChainID.ETHEREUM_MAINNET),
        UNISWAP_PERMIT2_CONTRACTS(),
        UNISWAP_X_CONTRACTS(),
        UNISWAP_V4_PERIPHERY_CONTRACTS(),
        UNISWAP_V4_HOOKS_CONTRACTS(),
        UNISWAP_V4_CORE_CONTRACTS(),
        UNISWAP_ROUTER_DEPLOYMENT_CONTRACTS(ChainID.ETHEREUM_MAINNET),
        UNISWAP_TOKEN_LIST_ITEMS(ChainID.POLYGON_MAINNET),
        UNISWAP_V3_CORE_CONTRACTS(),
        UNISWAP_V3_PERIPHERY_CONTRACTS(),
        SYNTHETIX_TOKEN_ITEMS(),
    ]);

    return contractResults.flat()
        .concat(
            // ...DOC_ITEMS,
            // ...CHAIN_ITEMS
            ...UNISWAP_ITEMS,
        );
}