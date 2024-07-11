import { items as ANYAPI_CONTRACTS } from "@/lib/contracts/src/chainlink/anyAPI"
import { items as AUTOMATION_CONTRACTS } from "@/lib/contracts/src/chainlink/automation"
import { items as CCIP_CONTRACTS } from "@/lib/contracts/src/chainlink/ccip"
import { items as DATAFEED_CONTRACTS } from "@/lib/contracts/src/chainlink/datafeed"
import { items as FUNCTION_CONTRACTS } from "@/lib/contracts/src/chainlink/function"
import { items as VRF_CONTRACTS } from "@/lib/contracts/src/chainlink/vrf"

export const getContracts = async () => {
    return [
        ...DATAFEED_CONTRACTS,
        ...AUTOMATION_CONTRACTS,
        ...CCIP_CONTRACTS,
        ...FUNCTION_CONTRACTS,
        ...VRF_CONTRACTS,
        ...ANYAPI_CONTRACTS,
    ];
}
