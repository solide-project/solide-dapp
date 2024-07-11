import { ChainID } from "@/lib/chains/id"
import { items as GMX_CONTRACTS_AMM_ITEMS } from "@/lib/contracts/src/gmx/contract-amm"
import { items as GMX_CONTRACTS_CORE_ITEMS } from "@/lib/contracts/src/gmx/contract-core"
import { items as GMX_CONTRACTS_DEPLOYMENTS } from "@/lib/contracts/src/gmx/contract-deployments"
import { items as GMX_GAMBIT_TOKEN_ITEMS } from "@/lib/contracts/src/gmx/contract-gambit-token"
import { items as GMX_CONTRACTS_PERIPHERALS_ITEMS } from "@/lib/contracts/src/gmx/contract-peripherals"
import { items as GMX_SYNTHETICS_CONTRACTS } from "@/lib/contracts/src/gmx/synthetics-deployments"
import { items as GMX_SYNTHETICS_ROUTER_ITEMS } from "@/lib/contracts/src/gmx/synthetics-router"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        GMX_CONTRACTS_CORE_ITEMS(),
        GMX_CONTRACTS_AMM_ITEMS(),
        // GMX_SYNTHETICS_CONTRACTS(ChainID.ARBITRUM_ONE),
        GMX_SYNTHETICS_ROUTER_ITEMS(),
        GMX_CONTRACTS_PERIPHERALS_ITEMS(),
        GMX_GAMBIT_TOKEN_ITEMS(),
        GMX_CONTRACTS_DEPLOYMENTS(ChainID.ARBITRUM_ONE),
    ]);

    return contractResults.flat();
}
