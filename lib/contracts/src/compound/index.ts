import { ChainID } from "@/lib/chains/id"
import { items as COMPOUND_CHAIN_CONTRACTS } from "@/lib/contracts/src/compound/chain"
import { items as COMPOUND_COMET_WRAPPER_CONTRACTS } from "@/lib/contracts/src/compound/comet-wrapper"
import { items as COMPOUND_COMENT_CONTRACTS } from "@/lib/contracts/src/compound/compound-comet"
import { items as COMPOUND_GOVERANCE_CONTRACTS } from "@/lib/contracts/src/compound/compound-governance"
import { items as COMPOUND_PROTOCOL_CONTRACTS } from "@/lib/contracts/src/compound/compound-protocol"
import { items as COMPOUND_ENCUMBER_CONTRACTS } from "@/lib/contracts/src/compound/encumber-contracts"
import { items as COMPOUND_OPEN_ORACLE_CONTRACTS } from "@/lib/contracts/src/compound/open-oracle"
import { items as COMPOUND_TOKEN_LIST } from "@/lib/contracts/src/compound/token-list"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        COMPOUND_GOVERANCE_CONTRACTS(),
        COMPOUND_PROTOCOL_CONTRACTS(),
        COMPOUND_COMENT_CONTRACTS(),
        COMPOUND_ENCUMBER_CONTRACTS(),
        COMPOUND_CHAIN_CONTRACTS(ChainID.ETHEREUM_MAINNET),
        COMPOUND_TOKEN_LIST(ChainID.ETHEREUM_MAINNET),
        COMPOUND_COMET_WRAPPER_CONTRACTS(),
        COMPOUND_OPEN_ORACLE_CONTRACTS(),
    ]);

    return contractResults.flat();
}