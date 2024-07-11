
import { ChainID } from "@/lib/chains/id"
import { items as GRAPH_DEPLOYED_CONTRACTS } from "@/lib/contracts/src/the-graph/chain"
import { items as GRAPH_ENZYME_CONTRACTS } from "@/lib/contracts/src/the-graph/enzyme"
import { items as GRAPH_OPENSEA_CONTRACTS } from "@/lib/contracts/src/the-graph/opensea"

export const getContracts = async () => {
    const contractResults = await Promise.all([

        GRAPH_DEPLOYED_CONTRACTS(ChainID.ETHEREUM_MAINNET),
        //    GRAPH_ENZYME_CONTRACTS(),
        //    GRAPH_OPENSEA_CONTRACTS()
    ]);

    return contractResults.flat();
}