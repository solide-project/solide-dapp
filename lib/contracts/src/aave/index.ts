import { items as AAVE_V2_STAKE_CONTRACTS } from "@/lib/contracts/src/aave/aave-stake-v2"
import { items as AAVE_TOKEN_CONTRACTS } from "@/lib/contracts/src/aave/aave-token"
import { items as AAVE_V3_CORE_CONFIGURATION_CONTRACTS } from "@/lib/contracts/src/aave/aave-v3-core-configuration"
import { items as AAVE_V3_CORE_MISC_CONTRACTS } from "@/lib/contracts/src/aave/aave-v3-core-misc"
import { items as AAVE_V3_CORE_POOL_CONTRACTS } from "@/lib/contracts/src/aave/aave-v3-core-pool"
import { items as AAVE_V3_CORE_TOKENIZATION_CONTRACTS } from "@/lib/contracts/src/aave/aave-v3-core-tokenization"
import { items as AAVE_V3_PERIPHERY_MISC_CONTRACTS } from "@/lib/contracts/src/aave/aave-v3-periphery-misc"
import { items as AAVE_V3_PERIPHERY_REWARDS_CONTRACTS } from "@/lib/contracts/src/aave/aave-v3-periphery-rewards"
import { items as AAVE_ADDRESS_BOOK_FTM_CONTRACTS } from "@/lib/contracts/src/aave/address-book-ftm"
import { items as AAVE_GHO_TOKEN } from "@/lib/contracts/src/aave/gho-token"
import { items as AAVE_TOKEN_LIST } from "@/lib/contracts/src/aave/token-asset-list"
import { items as AAVE_TOKEN_WRAPPER_CONTRACTS } from "@/lib/contracts/src/aave/token-wrapper"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        AAVE_V2_STAKE_CONTRACTS(),
        AAVE_V3_CORE_CONFIGURATION_CONTRACTS(),
        AAVE_V3_CORE_POOL_CONTRACTS(),
        AAVE_V3_CORE_TOKENIZATION_CONTRACTS(),
        AAVE_V3_CORE_MISC_CONTRACTS(),
        AAVE_V3_PERIPHERY_REWARDS_CONTRACTS(),
        AAVE_V3_PERIPHERY_MISC_CONTRACTS(),
        AAVE_TOKEN_LIST(),
        AAVE_ADDRESS_BOOK_FTM_CONTRACTS(),
        AAVE_TOKEN_CONTRACTS(),
        AAVE_TOKEN_WRAPPER_CONTRACTS()
    ]);
    return contractResults.flat();
};