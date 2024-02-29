import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/schema"

const mainTitle = "Alphonse Mucha"
const tutorial =
  "https://github.com/CallistoEnterprise/nftadmin-muchaemotion-com/blob/main/README.md"
const reference =
  "https://github.com/CallistoEnterprise/nftadmin-muchaemotion-com"
export const items: ContractSchema[] = [
  {
    title: `${mainTitle}: Contract`,
    tutorial,
    reference,
    description:
      "Onchain CallistoNFT deployment on Callisto Mainnet. Discover Alphonse Mucha eMOTION NFT Collection on Callisto Network. The art of 19th century artist Alphonse Mucha has an exciting new dimension.",
    playground: {
      default: {
        address: "0xd0725743f665B8041DcfbB0c4B55bbC3679Fb033",
        chainId: ChainID.CALLISTO_MAINNET,
      },
    },
  },
  {
    title: `${mainTitle}: Source Code`,
    tutorial,
    reference,
    description:
      "Discover Alphonse Mucha eMOTION NFT Collection on Callisto Network. The art of 19th century artist Alphonse Mucha has an exciting new dimension.",
    playground: {
      default: {
        address:
          "https://github.com/CallistoEnterprise/nftadmin-muchaemotion-com/blob/main/contracts/Mucha.sol",
      },
    },
  },
]
