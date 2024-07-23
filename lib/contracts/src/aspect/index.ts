import { items as EXAMPLE_CONTRACTS } from "@/lib/contracts/src/aspect/example"
import { items as OTHER_CONTRACTS } from "@/lib/contracts/src/aspect/other"
import { items as ASPECT_TOOLING_CONTRACTS } from "@/lib/contracts/src/aspect/tooling"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        EXAMPLE_CONTRACTS()
    ]);

    return contractResults.flat()
        .concat(...OTHER_CONTRACTS, ...ASPECT_TOOLING_CONTRACTS);
};