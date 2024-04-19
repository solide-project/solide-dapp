import { ContractSchema } from "@/lib/contracts"

export const items: ContractSchema[] = [
  {
    title: "Contract Owned Tables",
    tutorial:
      "https://github.com/tablelandnetwork/docs/blob/main/docs/smart-contracts/contract-owned-tables.md",
    reference:
      "https://docs.tableland.xyz/smart-contracts/contract-owned-tables",
    description:
      "Smart contract based tableland table creation implemented with the ability to receive ERC721 tokens minted by the TablelandTables registry contract. The implementation options include inheriting from OpenZeppelin's ERC721Holder or implementing the IERC721Receiver interface.",
    playground: {
      default: {
        address:
          "https://github.com/SovaSniper/contracts/blob/master/tableland/BasicCreate.sol",
      },
    },
  },
  {
    title: "Build a dynamic NFT in Solidity",
    tutorial:
      "https://github.com/tablelandnetwork/docs/blob/main/docs/tutorials/dynamic-nft-solidity.md",
    reference: "https://docs.tableland.xyz/tutorials/dynamic-nft-solidity",
    description:
      "Dynamic onchain game using Solidity ERC721s and SQL queries through Tableland, allowing NFT owners to update specific properties of their NFTs, with mutations reflecting on all platforms, marketplaces, and wallets displaying the NFT.",
    playground: {
      default: {
        address:
          "https://github.com/SovaSniper/contracts/blob/master/tableland/CanvasGame.sol",
        remappings: {
          "@openzeppelin/contracts/": "@openzeppelin/contracts@3.4.0/",
        },
      },
    },
  },
  {
    title: "Dynamic NFT with Chainlink automation",
    tutorial:
      "https://github.com/tablelandnetwork/docs/blob/main/docs/tutorials/dynamic-nft-chainlink.md",
    reference: "https://docs.tableland.xyz/tutorials/dynamic-nft-chainlink",
    description:
      "dynamic NFT leveraging Chainlink for automated mutations, integrating Tableland for onchain rules, and providing step-by-step instructions for deploying and interacting with the smart contract, as well as setting up Chainlink Automation for periodic updates of the NFT's properties and metadata based on onchain logic and external data sources.",
    playground: {
      default: {
        address:
          "https://github.com/SovaSniper/contracts/blob/master/tableland/DynNFT.sol",
        remappings: {
          "@openzeppelin/contracts/": "@openzeppelin/contracts@4.7.0/",
          "@openzeppelin/contracts-upgradeable/":
            "@openzeppelin/contracts-upgradeable@4.7.0/",
        },
      },
    },
  },
]
