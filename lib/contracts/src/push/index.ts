import { items as PUSH_PROTOCOL_DEPLOYENTS_CONTRACTS } from "@/lib/contracts/src/push/contract-deployment"
import {
    items as PUSH_PROTOCOL_COMM_1_5_CONTRACTS,
    items as PUSH_PROTOCOL_CORE_1_5_CONTRACTS,
} from "@/lib/contracts/src/push/smart-contract-comm-1-5"
import { items as PUSH_PROTOCOL_COMM_CONTRACTS } from "@/lib/contracts/src/push/smart-contract-comm-2-5"
import { items as PUSH_PROTOCOL_CORE_CONTRACTS } from "@/lib/contracts/src/push/smart-contract-core-2-5"
import { items as PUSH_PROTOCOL_GOVERANCE_CONTRACTS } from "@/lib/contracts/src/push/smart-contract-goverance"
import { items as PUSH_PROTOCOL_TOKEN_CONTRACTS } from "@/lib/contracts/src/push/smart-contract-token"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        PUSH_PROTOCOL_CORE_CONTRACTS(),
        PUSH_PROTOCOL_COMM_CONTRACTS(),
        PUSH_PROTOCOL_TOKEN_CONTRACTS(),
        PUSH_PROTOCOL_GOVERANCE_CONTRACTS(),
        PUSH_PROTOCOL_CORE_1_5_CONTRACTS(),
        PUSH_PROTOCOL_COMM_1_5_CONTRACTS(),
        PUSH_PROTOCOL_DEPLOYENTS_CONTRACTS(),
    ]);

    return contractResults.flat();
}
