import { items as JBX_V2_CONTRACTS } from "@/lib/contracts/src/juice-box/depecrated-contracts-v2"
import { items as JBX_DEPECRATED_CONTRACTS } from "@/lib/contracts/src/juice-box/depecrated-deployments"
import { items as JBX_ERC721_DELEGETE } from "@/lib/contracts/src/juice-box/juice-721-delegete"
import { items as JBX_BUYBACK_CONTRACTS } from "@/lib/contracts/src/juice-box/juice-buyback"
import { items as JBX_V3_CONTRACTS } from "@/lib/contracts/src/juice-box/juice-contract-v3"
import { items as JBX_DELEGATES_REGISTRY_CONTRACTS } from "@/lib/contracts/src/juice-box/juice-delegates-registry"
import { items as JBX_OWNABLE_CONTRACTS } from "@/lib/contracts/src/juice-box/juice-ownable"
import { items as JBX_VE_NFT_CONTRACTS } from "@/lib/contracts/src/juice-box/juice-ve-nft"
import { items as JBX_V3_DEPLOYMENT_CONTRACTS } from "@/lib/contracts/src/juice-box/v3-deployments"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        JBX_V3_CONTRACTS(),
        JBX_V3_DEPLOYMENT_CONTRACTS(),
        JBX_BUYBACK_CONTRACTS(),
        JBX_OWNABLE_CONTRACTS(),
        JBX_ERC721_DELEGETE(),
        JBX_DELEGATES_REGISTRY_CONTRACTS(),
        JBX_VE_NFT_CONTRACTS(),
        JBX_V2_CONTRACTS(),
        JBX_DEPECRATED_CONTRACTS(),
    ]);

    return contractResults.flat();
}
