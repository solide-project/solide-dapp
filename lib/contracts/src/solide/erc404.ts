import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/schema/contract"

const mainTitle = "Pandora Lab"
export const items: ContractSchema[] = [
    {
        title: `${mainTitle}: ERC404 Implementation`,
        tutorial: "https://github.com/Pandora-Labs-Org/erc404/blob/main/README.md",
        reference: "https://github.com/Pandora-Labs-Org/erc404",
        description: "ERC-404 is an experimental token standard aiming to merge fungible and non-fungible characteristics into what creators call 'semi-fungible' digital assets. Unlike traditional ERC-20 and ERC-721 tokens, ERC-404 introduces fractionalization to NFTs, allowing for the division and transfer of fractions of a token linked to an NFT. This innovation enables native liquidity, encouraging trading and engagement within the ecosystem.",
        playground: {
            default: {
                address: "https://github.com/Pandora-Labs-Org/erc404/blob/main/contracts/ERC404.sol",
            }
        }
    },
    {
        title: `${mainTitle}: ERC404 Example`,
        tutorial: "https://github.com/Pandora-Labs-Org/erc404/blob/main/README.md",
        reference: "https://github.com/Pandora-Labs-Org/erc404",
        description: "ERC-404 is an experimental token standard aiming to merge fungible and non-fungible characteristics into what creators call 'semi-fungible' digital assets. Unlike traditional ERC-20 and ERC-721 tokens, ERC-404 introduces fractionalization to NFTs, allowing for the division and transfer of fractions of a token linked to an NFT. This innovation enables native liquidity, encouraging trading and engagement within the ecosystem.",
        playground: {
            default: {
                address: "https://github.com/Pandora-Labs-Org/erc404/blob/main/contracts/examples/ExampleERC404.sol",
            }
        }
    },
    {
        title: `DeFrogs ERC404 NFT`,
        tutorial: "",
        reference: "",
        description: "A collection of 10,000 DeFrogs enabled by erc404, an experimental token standard on Ethereum. The 1st ERC404 PFP.",
        playground: {
            default: {
                address: "0xd555498a524612c67f286dF0e0a9a64a73a7Cdc7",
                chainId: ChainID.ETHEREUM_MAINNET
            }
        }
    },
]