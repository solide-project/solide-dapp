import { items as OPZEP_ETHERNAUTS_CONTRACTS } from "@/lib/contracts/src/openzeppelin/ethernauts"
import { items as OPZEP_ERC20_IMPLEMENTATION } from "@/lib/contracts/src/openzeppelin/erc20"
import { items as OPZEP_ERC721_IMPLEMENTATION } from "@/lib/contracts/src/openzeppelin/erc721"
import { items as OPZEP_ERC1155_IMPLEMENTATION } from "@/lib/contracts/src/openzeppelin/erc1155"
import { items as OPZEP_ACCESS_IMPLEMENTATION } from "@/lib/contracts/src/openzeppelin/access"
import { items as OPZEP_PROXY_IMPLEMENTATION } from "@/lib/contracts/src/openzeppelin/proxy"
import { items as OPZEP_GOVERANCE_IMPLEMENTATION } from "@/lib/contracts/src/openzeppelin/goverance"
import { items as OPZEP_SOLIDE_EXAMPLES } from "@/lib/contracts/src/openzeppelin/solide-example"

export const getContracts = async () => {
    const contractResults = await Promise.all([
        OPZEP_SOLIDE_EXAMPLES(),
        OPZEP_ERC20_IMPLEMENTATION(),
        OPZEP_ERC721_IMPLEMENTATION(),
        OPZEP_ERC1155_IMPLEMENTATION(),
        OPZEP_ERC1155_IMPLEMENTATION(),
        OPZEP_PROXY_IMPLEMENTATION(),
        OPZEP_ACCESS_IMPLEMENTATION(),
        OPZEP_GOVERANCE_IMPLEMENTATION(),
        OPZEP_ETHERNAUTS_CONTRACTS(),
    ]);

    return contractResults.flat();
}
