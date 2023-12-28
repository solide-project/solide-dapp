export const items = [
    {
        title: "CCIP Guide: Transfer Tokens Between Chains",
        tutorial: "",
        reference: "https://docs.chain.link/ccip/tutorials/programmable-token-transfers",
        description: "A Chainlink VRF v2-compatible smart contract on the Sepolia test network, emphasizing security considerations and providing an example contract for requesting and receiving random values.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/smartcontractkit/ccip-cross-chain-nft/main/contracts/MyNFT.sol",
                version: "v0.8.19+commit.7dd6d404",
            },
            chains: {
                ["MyNFT.sol"]: {
                    address: "https://raw.githubusercontent.com/smartcontractkit/ccip-cross-chain-nft/main/contracts/MyNFT.sol",
                    version: "v0.8.19+commit.7dd6d404",
                },
                ["DestinationMinter.sol"]: {
                    address: "https://raw.githubusercontent.com/smartcontractkit/ccip-cross-chain-nft/main/contracts/DestinationMinter.sol",
                    version: "v0.8.19+commit.7dd6d404",
                },
                ["SourceMinter.sol"]: {
                    address: "https://raw.githubusercontent.com/smartcontractkit/ccip-cross-chain-nft/main/contracts/SourceMinter.sol",
                    version: "v0.8.19+commit.7dd6d404",
                },
            }
        },
    },
    {
        title: "CCIP Example: NFT",
        tutorial: "",
        reference: "https://docs.chain.link/ccip/tutorials/programmable-token-transfers",
        description: "A Chainlink VRF v2-compatible smart contract on the Sepolia test network, emphasizing security considerations and providing an example contract for requesting and receiving random values.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/smartcontractkit/ccip-cross-chain-nft/main/contracts/MyNFT.sol",
                version: "v0.8.19+commit.7dd6d404",
            },
            chains: {
                ["MyNFT.sol"]: {
                    address: "https://raw.githubusercontent.com/smartcontractkit/ccip-cross-chain-nft/main/contracts/MyNFT.sol",
                    version: "v0.8.19+commit.7dd6d404",
                },
                ["DestinationMinter.sol"]: {
                    address: "https://raw.githubusercontent.com/smartcontractkit/ccip-cross-chain-nft/main/contracts/DestinationMinter.sol",
                    version: "v0.8.19+commit.7dd6d404",
                },
                ["SourceMinter.sol"]: {
                    address: "https://raw.githubusercontent.com/smartcontractkit/ccip-cross-chain-nft/main/contracts/SourceMinter.sol",
                    version: "v0.8.19+commit.7dd6d404",
                },
            }
        },
    },
    {
        title: "CCIP Example: Tic Tac",
        tutorial: "",
        reference: "https://docs.chain.link/ccip/tutorials/programmable-token-transfers",
        description: "A Chainlink VRF v2-compatible smart contract on the Sepolia test network, emphasizing security considerations and providing an example contract for requesting and receiving random values.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/smartcontractkit/ccip-tic-tac-toe/main/contracts/TTTDemo.sol",
            },
        },
    },
]