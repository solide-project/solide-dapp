import { items as ALPHONSE_MUCHA_CONTRACTS } from "@/lib/contracts/src/callisto/alphonse-mucha"
import { items as CALLISTO_INTERCHAIN_BRIDGE } from "@/lib/contracts/src/callisto/callisto-interchain-bridge"
import { items as CALLISTO_NFT_CONTRACTS } from "@/lib/contracts/src/callisto/callisto-nft"
import { items as CALLISTO_CLO_TOKEN_CONTRACTS } from "@/lib/contracts/src/callisto/clo-token"
import { items as ERC223_CONTRACTS } from "@/lib/contracts/src/callisto/erc223"
import { items as CALLISTO_TOKEN_CONTRACTS } from "@/lib/contracts/src/callisto/scanner-tokens"
import { items as SOY_FINANCE_CONTRACTS } from "@/lib/contracts/src/callisto/soy-finance"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        ERC223_CONTRACTS(),
        CALLISTO_NFT_CONTRACTS(),
        CALLISTO_CLO_TOKEN_CONTRACTS(),
        SOY_FINANCE_CONTRACTS(),
        CALLISTO_INTERCHAIN_BRIDGE(),
        CALLISTO_TOKEN_CONTRACTS(),
    ]);

    return contractResults.flat()
        .concat(...ALPHONSE_MUCHA_CONTRACTS);
}
