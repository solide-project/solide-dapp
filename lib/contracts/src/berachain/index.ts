import { items as ARTIO_CONTRACTS } from "@/lib/contracts/src/berachain/artio-contracts"
import { items as PRECOMPILE_TEST_CONTRACTS } from "@/lib/contracts/src/berachain/polaris"
import { items as BERACHAIN_VERIFIED_CONTRACTS } from "@/lib/contracts/src/berachain/verified-contracts"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        PRECOMPILE_TEST_CONTRACTS(),
        BERACHAIN_VERIFIED_CONTRACTS(),
    ]);
    return contractResults.flat()
        .concat(...ARTIO_CONTRACTS);
};