"use client";

import { ContractCardItems, ContractsList } from "../shared/contracts-list";

const items: ContractCardItems[] = [
    {
        source: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol",
        title: "ERC 20",
        description: "A simple ERC20 token and its implementation, adhering to the ERC20 standard, featuring a fixed total supply, absence of minting function, and additional functions for allowance management.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/openzeppelin/ERC20.sol",
            }
        },
        reference: "https://www.openzeppelin.com/contracts"
    },
    {
        source: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol",
        title: "ERC 721",
        description: "The ERC721 standard for non-fungible tokens (NFTs) with features such as minting, ownership transfer, balance checking, approval management, and metadata functions for token names, symbols, and URIs.",
        playground: {
            default: {
                address:  "https://raw.githubusercontent.com/SovaSniper/contracts/master/openzeppelin/ERC721.sol",
            }
        },
        reference: "https://www.openzeppelin.com/contracts"
    },
    {
        source: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol",
        title: "ERC 1155",
        description: "ERC1155 contract implements the ERC1155 standard, facilitating the creation and management of multiple token types with functions for transferring tokens, checking balances, and supporting batch operations.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/openzeppelin/ERC1155.sol",
            }
        },
        reference: "https://www.openzeppelin.com/contracts"
    },
];

interface OpenzeppelinListProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

export const OpenzeppelinList = ({ children, className }: OpenzeppelinListProps) => {
    return (
        <ContractsList items={items} />
    )
}
