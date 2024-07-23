
import { items as CORE_CONTRACTS } from "@/lib/contracts/src/eigenlayer/core"
import { items as PODS_DEPLOYMENT } from "@/lib/contracts/src/eigenlayer/deployments-pods"
import { items as MIDDLEWARE_COTRACTS } from "@/lib/contracts/src/eigenlayer/middleware"
import { items as DEPLOYMENT_CONTRACTS } from "@/lib/contracts/src/eigenlayer/deployments"
import { items as RENZO_CONTRACTS } from "@/lib/contracts/src/eigenlayer/renzo"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        DEPLOYMENT_CONTRACTS(),
        CORE_CONTRACTS(),
        PODS_DEPLOYMENT(),
        MIDDLEWARE_COTRACTS(),
        RENZO_CONTRACTS(),
    ]);

    return contractResults.flat();
}