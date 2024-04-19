import { ContractSchema } from "@/lib/contracts"

export const items: ContractSchema[] = [
  {
    title: "CCIP Guide: Transfer Tokens Between Chains",
    tutorial: "",
    reference:
      "https://docs.chain.link/ccip/tutorials/programmable-token-transfers",
    description:
      "A Chainlink VRF v2-compatible smart contract on the Sepolia test network, emphasizing security considerations and providing an example contract for requesting and receiving random values.",
    playground: {
      default: {
        address:
          "https://github.com/smartcontractkit/ccip-cross-chain-nft/blob/main/contracts/MyNFT.sol",
        version: "v0.8.19+commit.7dd6d404",
      },
      chains: {
        ["MyNFT.sol"]: {
          address:
            "https://github.com/smartcontractkit/ccip-cross-chain-nft/blob/main/contracts/MyNFT.sol",
          version: "v0.8.19+commit.7dd6d404",
        },
        ["DestinationMinter.sol"]: {
          address:
            "https://github.com/smartcontractkit/ccip-cross-chain-nft/blob/main/contracts/DestinationMinter.sol",
          version: "v0.8.19+commit.7dd6d404",
        },
        ["SourceMinter.sol"]: {
          address:
            "https://github.com/smartcontractkit/ccip-cross-chain-nft/blob/main/contracts/SourceMinter.sol",
          version: "v0.8.19+commit.7dd6d404",
        },
      },
    },
  },
  {
    title: "CCIP Example: NFT",
    tutorial:
      "https://github.com/smartcontractkit/ccip-cross-chain-nft/blob/main/README.md",
    reference:
      "https://docs.chain.link/ccip/tutorials/programmable-token-transfers",
    description:
      "A Chainlink VRF v2-compatible smart contract on the Sepolia test network, emphasizing security considerations and providing an example contract for requesting and receiving random values.",
    playground: {
      default: {
        address:
          "https://github.com/smartcontractkit/ccip-cross-chain-nft/blob/main/contracts/MyNFT.sol",
        version: "v0.8.19+commit.7dd6d404",
      },
      chains: {
        ["MyNFT.sol"]: {
          address:
            "https://github.com/smartcontractkit/ccip-cross-chain-nft/blob/main/contracts/MyNFT.sol",
          version: "v0.8.19+commit.7dd6d404",
        },
        ["DestinationMinter.sol"]: {
          address:
            "https://github.com/smartcontractkit/ccip-cross-chain-nft/blob/main/contracts/DestinationMinter.sol",
          version: "v0.8.19+commit.7dd6d404",
        },
        ["SourceMinter.sol"]: {
          address:
            "https://github.com/smartcontractkit/ccip-cross-chain-nft/blob/main/contracts/SourceMinter.sol",
          version: "v0.8.19+commit.7dd6d404",
        },
      },
    },
  },
  {
    title: "CCIP Example: Tic Tac",
    tutorial:
      "https://github.com/smartcontractkit/ccip-tic-tac-toe/blob/main/README.md",
    reference: "https://github.com/smartcontractkit/ccip-tic-tac-toe",
    description:
      "The Chainlink CCIP Tic-Tac-Toe project offers a practical example of cross-chain gaming, demonstrating the potential for decentralized applications to seamlessly interact across different blockchains. Developers can leverage this example to understand CCIP integration, enhance security measures.",
    playground: {
      default: {
        address:
          "https://github.com/smartcontractkit/ccip-tic-tac-toe/blob/main/contracts/TTTDemo.sol",
        version: "v0.8.19+commit.7dd6d404",
      },
    },
  },
  {
    title: "CCIP Example: Cross Chain Name Service Lookup",
    tutorial:
      "https://github.com/smartcontractkit/ccip-cross-chain-name-service/blob/main/README.md",
    reference:
      "https://github.com/smartcontractkit/ccip-cross-chain-name-service",
    description:
      "The CCIP Cross Chain Name Service (CCNS) exemplified in this project illustrating the implementation of a minimal cross-chain name service using Chainlink CCIP (Cross-Chain Interoperability Protocol). It allows users to register and resolve custom .ccns handles across multiple supported blockchains, providing a decentralized and interoperable naming solution.",
    playground: {
      default: {
        address:
          "https://github.com/smartcontractkit/ccip-cross-chain-name-service/blob/main/contracts/CrossChainNameServiceLookup.sol",
        version: "v0.8.19+commit.7dd6d404",
      },
      chains: {
        ["CrossChainNameServiceLookup.sol"]: {
          address:
            "https://github.com/smartcontractkit/ccip-cross-chain-name-service/blob/main/contracts/CrossChainNameServiceLookup.sol",
          version: "v0.8.19+commit.7dd6d404",
        },
        ["CrossChainNameServiceReceiver.sol"]: {
          address:
            "https://github.com/smartcontractkit/ccip-cross-chain-name-service/blob/main/contracts/CrossChainNameServiceReceiver.sol",
          version: "v0.8.19+commit.7dd6d404",
        },
        ["CrossChainNameServiceRegister.sol"]: {
          address:
            "https://github.com/smartcontractkit/ccip-cross-chain-name-service/blob/main/contracts/CrossChainNameServiceRegister.sol",
          version: "v0.8.19+commit.7dd6d404",
        },
      },
    },
  },
  {
    title: "CCIP Example: Cross Chain DEFI Lending and Borrowing",
    tutorial:
      "https://github.com/smartcontractkit/ccip-defi-lending/blob/main/README.md",
    reference: "https://github.com/smartcontractkit/ccip-defi-lending",
    description:
      "The CCIP Cross Chain Name Service (CCNS) exemplified in this project illustrating the implementation of a minimal cross-chain name service using Chainlink CCIP (Cross-Chain Interoperability Protocol). It allows users to register and resolve custom .ccns handles across multiple supported blockchains, providing a decentralized and interoperable naming solution.",
    playground: {
      default: {
        address:
          "https://github.com/smartcontractkit/ccip-defi-lending/blob/main/contracts/Protocol.sol",
        version: "v0.8.19+commit.7dd6d404",
      },
      chains: {
        ["Protocol.sol"]: {
          address:
            "https://github.com/smartcontractkit/ccip-defi-lending/blob/main/contracts/Protocol.sol",
          version: "v0.8.19+commit.7dd6d404",
        },
        ["MockUSDC.sol"]: {
          address:
            "https://github.com/smartcontractkit/ccip-defi-lending/blob/main/contracts/MockUSDC.sol",
        },
        ["Sender.sol"]: {
          address:
            "https://github.com/smartcontractkit/ccip-cross-chain-name-service/blob/main/contracts/Sender.sol",
          version: "v0.8.19+commit.7dd6d404",
        },
      },
    },
  },
]
