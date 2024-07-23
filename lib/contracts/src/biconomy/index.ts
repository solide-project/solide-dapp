import { items as BICO_TOKEN_CONTRACTS } from "@/lib/contracts/src/biconomy/bico-token"
import { items as BICO_TOKEN_LIST_CONTRACTS } from "@/lib/contracts/src/biconomy/biconomy-token-list"
import { items as BICO_CCMP_CONTRACTS } from "@/lib/contracts/src/biconomy/ccmp"
import { items as BICO_HYPHEN_CONTRACTS } from "@/lib/contracts/src/biconomy/hyphen"
import { items as BICO_MEXA_CONTRACTS } from "@/lib/contracts/src/biconomy/mexa"
import { items as BICO_PAYMASTER_CONTRACTS } from "@/lib/contracts/src/biconomy/paymasters"
import { items as BICO_SAFETY_MODULE_CONTRACTS } from "@/lib/contracts/src/biconomy/safety-module"
import { items as BICO_SMART_ACCOUNT_CONTRACTS } from "@/lib/contracts/src/biconomy/smart-account"
import { items as BICO_SMART_ACCOUNT_COMMON_CONTRACTS } from "@/lib/contracts/src/biconomy/smart-account-common"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        BICO_TOKEN_CONTRACTS(),
        BICO_TOKEN_LIST_CONTRACTS(),
        BICO_HYPHEN_CONTRACTS(),
        BICO_MEXA_CONTRACTS(),
        BICO_PAYMASTER_CONTRACTS(),
        BICO_SAFETY_MODULE_CONTRACTS(),
        BICO_SMART_ACCOUNT_CONTRACTS(),
        BICO_SMART_ACCOUNT_COMMON_CONTRACTS(),
    ]);

    return contractResults.flat()
        .concat(...BICO_CCMP_CONTRACTS);
}