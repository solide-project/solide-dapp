import { ChainID } from "@/lib/chains/id"
import { items as ZERO_EX_DEPLOYMENTS } from "@/lib/contracts/src/0x/contract-deployments"
import { items as EXCHANGE_V3_DEV_UTILS_CONTRACTS } from "@/lib/contracts/src/0x/exchange-v3-dev-utils"
import { items as EXCHANGE_V3_EXCHANGE_CONTRACTS } from "@/lib/contracts/src/0x/exchange-v3-exchange"
import { items as EXCHANGE_V3_MULTISIG_CONTRACTS } from "@/lib/contracts/src/0x/exchange-v3-multisig"
import { items as GASLESS_APPROVAL_TOKENS } from "@/lib/contracts/src/0x/gasless-approval-token"
import { items as ZERO_EX_VDF_CONTRACTS } from "@/lib/contracts/src/0x/vdf-contracts"
import { items as ZERO_EX_CORE_CONTRACTS } from "@/lib/contracts/src/0x/zero-ex-contracts-core"
import { items as ZERO_EX_FEATURES_CONTRACTS } from "@/lib/contracts/src/0x/zero-ex-contracts-features"
import { items as ZERO_EX_LP_CONTRACTS } from "@/lib/contracts/src/0x/zero-ex-contracts-lp"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        ZERO_EX_VDF_CONTRACTS(),
        ZERO_EX_LP_CONTRACTS(),
        ZERO_EX_FEATURES_CONTRACTS(),
        ZERO_EX_CORE_CONTRACTS(),
        ZERO_EX_DEPLOYMENTS(ChainID.ETHEREUM_MAINNET),
        EXCHANGE_V3_EXCHANGE_CONTRACTS(),
        EXCHANGE_V3_MULTISIG_CONTRACTS(),
        EXCHANGE_V3_DEV_UTILS_CONTRACTS(),
        GASLESS_APPROVAL_TOKENS(),
    ]);
    return contractResults.flat();
};