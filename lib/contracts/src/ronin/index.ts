import { ChainID } from "@/lib/chains/id"
import { items as RONIN_ERC_TOKENS } from "@/lib/contracts/src/ronin/erc721-tokens"
import { items as RNS_CORE_CONTRACTS } from "@/lib/contracts/src/ronin/rns-core"
import { items as RNS_DEPLOYMENTS } from "@/lib/contracts/src/ronin/rns-deployment"
import { items as RONIN_BRIDGE_DEPLOYMENTS } from "@/lib/contracts/src/ronin/ronin-bridge-contracts-deployments"
import { items as RONIN_BRIDGE_EXTENSION_CONTRACTS } from "@/lib/contracts/src/ronin/ronin-bridge-contracts-extension"
import { items as RONIN_BRIDGE_GATEWAY_CONTRACTS } from "@/lib/contracts/src/ronin/ronin-bridge-contracts-gateway"
import { items as RONIN_BRIDGE_MAINCHAIN_CONTRACTS } from "@/lib/contracts/src/ronin/ronin-bridge-contracts-mainchain"
import { items as RONIN_ECOSYSTEM_CONTRACTS } from "@/lib/contracts/src/ronin/ronin-ecosystem"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        RONIN_BRIDGE_DEPLOYMENTS(ChainID.RONIN_MAINNET),
        RONIN_BRIDGE_EXTENSION_CONTRACTS(),
        RONIN_BRIDGE_MAINCHAIN_CONTRACTS(),
        RONIN_BRIDGE_GATEWAY_CONTRACTS(),
        RNS_CORE_CONTRACTS(),
        RNS_DEPLOYMENTS(ChainID.RONIN_MAINNET),
        RONIN_ERC_TOKENS({ standard: "ERC721", limit: 20 }),
        RONIN_ERC_TOKENS({ standard: "ERC1155", limit: 20 }),
        RONIN_ERC_TOKENS({ standard: "ERC20", limit: 20 }),
        RONIN_ECOSYSTEM_CONTRACTS({ protocols: [], }),
    ]);

    return contractResults.flat();
}
