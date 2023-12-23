"use client";

import { ContractCardItems, ContractsList } from "../shared/contracts-list";

const items: ContractCardItems[] = [
    {
        source: "https://docs.tableland.xyz/smart-contracts/contract-owned-tables",
        title: "Contract owned tables",
        description: "Smart contract based tableland table creation implemented with the ability to receive ERC721 tokens minted by the TablelandTables registry contract. The implementation options include inheriting from OpenZeppelin's ERC721Holder or implementing the IERC721Receiver interface.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/tableland/BasicCreate.sol",
            }
        },
        reference: "https://docs.tableland.xyz/smart-contracts/contract-owned-tables"
    },
    {
        source: "https://docs.tableland.xyz/tutorials/dynamic-nft-solidity",
        title: "Build a dynamic NFT in Solidity",
        description: "Dynamic onchain game using Solidity ERC721s and SQL queries through Tableland, allowing NFT owners to update specific properties of their NFTs, with mutations reflecting on all platforms, marketplaces, and wallets displaying the NFT.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/tableland/CanvasGame.sol",
            }
        },
        reference: "https://docs.tableland.xyz/tutorials/dynamic-nft-solidity"
    },
    {
        source: "https://github.com/dtbuchholz/tutorial-chainlink-dynamic-nft/blob/main/contracts/dynNFT.sol",
        title: "Dynamic NFT with Chainlink automation",
        description: "dynamic NFT leveraging Chainlink for automated mutations, integrating Tableland for onchain rules, and providing step-by-step instructions for deploying and interacting with the smart contract, as well as setting up Chainlink Automation for periodic updates of the NFT's properties and metadata based on onchain logic and external data sources.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/tableland/DynNFT.sol",
            }
        },
        reference: "https://docs.tableland.xyz/tutorials/dynamic-nft-chainlink"
    },
];

interface TablelandListProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

export const TablelandList = ({ }: TablelandListProps) => {
    return (
        <ContractsList items={items} />
    )
}
