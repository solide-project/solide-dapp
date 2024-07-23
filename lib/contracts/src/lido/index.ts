import { items as LIDO_DEPLOYMENTS } from "@/lib/contracts/src/lido/deployment"
import { items as LIDO_CORE_0_8_9 } from "@/lib/contracts/src/lido/core-0-8-9"
import { items as LIDO_CORE_0_8_4 } from "@/lib/contracts/src/lido/core-0-8-4"
import { items as LIDO_L2_OP } from "@/lib/contracts/src/lido/l2-op"
import { items as LIDO_L2_ARB } from "@/lib/contracts/src/lido/l2-arb"
import { items as LIDO_L2_OP_DEPLOYMENTS } from "@/lib/contracts/src/lido/l2-op-deployments"
import { items as LIDO_DUAL_GOVERANCE } from "@/lib/contracts/src/lido/dual-goverance"
import { items as LIDO_ON_POLYGON } from "@/lib/contracts/src/lido/lido-on-polygon"
import { items as LIDO_ON_POLYGON_DEPLOYMENTS } from "@/lib/contracts/src/lido/lido-on-polygon-deployments"
import { items as LIDO_EASY_TRACK } from "@/lib/contracts/src/lido/easy-track"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        LIDO_DEPLOYMENTS(),
        LIDO_CORE_0_8_9(),
        LIDO_CORE_0_8_4(),
        LIDO_L2_OP(),
        LIDO_L2_ARB(),
        LIDO_L2_OP_DEPLOYMENTS(),
        LIDO_DUAL_GOVERANCE(),
        LIDO_ON_POLYGON(),
        LIDO_ON_POLYGON_DEPLOYMENTS(),
        LIDO_EASY_TRACK(),

    ]);

    return contractResults.flat();
}
