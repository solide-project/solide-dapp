import { items as LENS_CORE_CONTRACTS } from "@/lib/contracts/src/lens/core"
import { items as MODULE_CONTRACTS } from "@/lib/contracts/src/lens/module"
import { items as DEPLOYMENT_CONTRACTS } from "@/lib/contracts/src/lens/deployment"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        //  LENS_CORE_CONTRACTS(),
        MODULE_CONTRACTS(),
        DEPLOYMENT_CONTRACTS(),


    ]);

    return contractResults.flat();
}
