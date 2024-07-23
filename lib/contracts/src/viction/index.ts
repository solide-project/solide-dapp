import { items as VICTION_GENESIS_CONTRACTS } from "@/lib/contracts/src/viction/genesis"
import { items as LUASWAP_PAIR_CONTRACTS } from "@/lib/contracts/src/viction/luaswap-lp"
import { items as LUASWAP_POOL_CONTRACT } from "@/lib/contracts/src/viction/luaswap-pool"
import { items as VICTION_TOKEN_CONTRACTS } from "@/lib/contracts/src/viction/scanner-tokens"
import { items as TOMO_ISSUER_CONTRACTS } from "@/lib/contracts/src/viction/tomo-issuer"
import { items as VICTION_VRC_25_CONTRACTS } from "@/lib/contracts/src/viction/vrc25"
import { items as VICTION_VRC_25_SAMPLE_CONTRACTS } from "@/lib/contracts/src/viction/vrc25-sample"
import { items as VICTION_VRC_725_CONTRACTS } from "@/lib/contracts/src/viction/vrc725"
import { items as VICTION_VRC_725_SAMPLE_CONTRACTS } from "@/lib/contracts/src/viction/vrc725-sample"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        TOMO_ISSUER_CONTRACTS(),
        VICTION_VRC_25_CONTRACTS(),
        VICTION_VRC_25_SAMPLE_CONTRACTS(),
        VICTION_VRC_725_CONTRACTS(),
        VICTION_VRC_725_SAMPLE_CONTRACTS(),
        VICTION_TOKEN_CONTRACTS(),
        VICTION_GENESIS_CONTRACTS(),
        LUASWAP_POOL_CONTRACT(),
        LUASWAP_PAIR_CONTRACTS(),
    ]);

    return contractResults.flat();
}

