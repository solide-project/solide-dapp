import { items as ERC721A_CONTRACTS } from "@/lib/contracts/src/azuki/erc721a"
import { items as ERC721A_UPGRADEABLE_CONTRACTS } from "@/lib/contracts/src/azuki/erc721a-upgradeable"
import { items as AZUKI_NFT_CONTRACTS } from "@/lib/contracts/src/azuki/nfts"
import { items as PBT_CONTRACTS } from "@/lib/contracts/src/azuki/pbt"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        AZUKI_NFT_CONTRACTS(),
        ERC721A_CONTRACTS(),
        ERC721A_UPGRADEABLE_CONTRACTS(),
        PBT_CONTRACTS(),
    ]);
    return contractResults.flat();
};