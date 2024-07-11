import { items as BITLAYER_CONTRACTS } from "@/lib/contracts/src/bitlayer/predeploy"
import { items as PEG_TOKENS } from "@/lib/contracts/src/bitlayer/peg-tokens"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        BITLAYER_CONTRACTS(),
        PEG_TOKENS(),
    ]);

    return contractResults.flat();
}
