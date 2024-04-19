import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/contracts"

const mainTitle = "Pandora Lab"
const outdated =
  "This contract is new and highly experimental and not fully audited. Please process with caution, when using these contracts. Use at your own risk and make sure your fully understand before deploying to mainnets."
export const items: ContractSchema[] = [
  {
    title: `${mainTitle}: ERC404 Implementation`,
    tutorial: "https://github.com/Pandora-Labs-Org/erc404/blob/main/README.md",
    reference: "https://github.com/Pandora-Labs-Org/erc404",
    description:
      "ERC-404 is an experimental token standard aiming to merge fungible and non-fungible characteristics into what creators call 'semi-fungible' digital assets. Unlike traditional ERC-20 and ERC-721 tokens, ERC-404 introduces fractionalization to NFTs, allowing for the division and transfer of fractions of a token linked to an NFT. This innovation enables native liquidity, encouraging trading and engagement within the ecosystem.",
    playground: {
      default: {
        address:
          "https://github.com/Pandora-Labs-Org/erc404/blob/main/contracts/ERC404.sol",
      },
    },
    outdated,
  },
  {
    title: `${mainTitle}: ERC404 Example`,
    tutorial: "https://github.com/Pandora-Labs-Org/erc404/blob/main/README.md",
    reference: "https://github.com/Pandora-Labs-Org/erc404",
    description:
      "ERC-404 is an experimental token standard aiming to merge fungible and non-fungible characteristics into what creators call 'semi-fungible' digital assets. Unlike traditional ERC-20 and ERC-721 tokens, ERC-404 introduces fractionalization to NFTs, allowing for the division and transfer of fractions of a token linked to an NFT. This innovation enables native liquidity, encouraging trading and engagement within the ecosystem.",
    playground: {
      default: {
        address:
          "https://github.com/Pandora-Labs-Org/erc404/blob/main/contracts/examples/ERC404Example.sol",
      },
    },
    outdated,
  },
  {
    title: `DeFrogs ERC404 NFT`,
    tutorial: "",
    reference: "",
    description:
      "A collection of 10,000 DeFrogs enabled by erc404, an experimental token standard on Ethereum. The 1st ERC404 PFP.",
    playground: {
      default: {
        address: "0xd555498a524612c67f286dF0e0a9a64a73a7Cdc7",
        chainId: ChainID.ETHEREUM_MAINNET,
      },
    },
    outdated,
  },
]
