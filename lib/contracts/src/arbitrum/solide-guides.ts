import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/contracts"

const mainTitle: string = "Arbitrum Tutorial"

export const items: ContractSchema[] = [
  {
    title: "Arbitrum (ARB) on Ethereum",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/ethereum/ArbToken.md",
    reference: "https://arbitrum.io",
    description:
      "Arbitrum native token is Ethereum Layer 1 (L1) token designed to seamlessly connect with both the Arbitrum Nova network. By implementing essential features such as token minting, burning, and registration on both networks, the contract ensures efficient cross-network transactions and facilitates integration between the Arbitrum Layer 2 (L2) and Nova networks. With a focus on security considerations and adherence to ERC-20 standards, this contract serves as a robust foundation for developers aiming to create decentralized applications spanning the Arbitrum Nova ecosystems.",
    playground: {
      default: {
        address: "0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1",
        chainId: ChainID.ETHEREUM_MAINNET,
      },
    },
  },
  {
    title: "Delayed Inbox Proxy (Nova)",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/ethereum/DelayedInbox.md",
    reference:
      "https://docs.arbitrum.io/tx-lifecycle#1b--or-from-l1-via-the-delayed-inbox",
    description:
      "The Inbox smart contract is an important message contract that facilitates the smooth transfer of messages from Layer 1 to Layer 2. Whether through direct sends or retryable tickets, it ensures secure message delivery and interfaces with sequencers for enhanced reliability.",
    playground: {
      default: {
        address: "0x1b2676d32e2f7430a564dd4560641f990dfe3d6a",
        chainId: ChainID.ETHEREUM_MAINNET,
      },
      chains: {
        ["Inbox.sol"]: {
          address: "0x1b2676d32e2f7430a564dd4560641f990dfe3d6a",
          displaychain: ChainID.ETHEREUM_MAINNET,
        },
        ["TransparentUpgradeableProxy.sol"]: {
          address: "0xc4448b71118c9071bcb9734a0eac55d18a153949",
          displaychain: ChainID.ETHEREUM_MAINNET,
        },
      },
    },
  },
  {
    title: "Delayed Inbox",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/ethereum/DelayedInbox.md",
    reference:
      "https://docs.arbitrum.io/tx-lifecycle#1b--or-from-l1-via-the-delayed-inbox",
    description:
      "The Inbox smart contract is an important message contract that facilitates the smooth transfer of messages from Layer 1 to Layer 2. Whether through direct sends or retryable tickets, it ensures secure message delivery and interfaces with sequencers for enhanced reliability.",
    playground: {
      default: {
        address: "0x5aed5f8a1e3607476f1f81c3d8fe126deb0afe94",
        chainId: ChainID.ETHEREUM_MAINNET,
      },
      chains: {
        [ChainID.ARBITRUM_ONE]: {
          address: "0x5aed5f8a1e3607476f1f81c3d8fe126deb0afe94",
          displaychain: ChainID.ETHEREUM_MAINNET,
        },
        [ChainID.ARBITRUM_NOVA]: {
          address: "0x1b2676d32e2f7430a564dd4560641f990dfe3d6a",
          displaychain: ChainID.ETHEREUM_MAINNET,
        },
      },
    },
  },
  {
    title: "Outbox",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/ethereum/Outbox.md",
    reference:
      "https://docs.arbitrum.io/for-devs/useful-addresses#cross-chain-messaging-contracts",
    description:
      "Like the Inbox contract in the Arbitrum Rollup, the Outbox contract serves as a vital communication hub between the Arbitrum Layer 2 (L2) and Ethereum Layer 1 (L1) networks. Its key features include the execution of transactions originating from the L2 network on the L1 network. By securely processing transactions and ensuring accurate outcomes, the `Outbox` contributes to the interoperability and efficiency of the Arbitrum solution within the broader Ethereum ecosystem.",
    playground: {
      default: {
        address: "0x0B9857ae2D4A3DBe74ffE1d7DF045bb7F96E4840",
        chainId: ChainID.ETHEREUM_MAINNET,
      },
      chains: {
        [ChainID.ARBITRUM_ONE]: {
          address: "0x0B9857ae2D4A3DBe74ffE1d7DF045bb7F96E4840",
          displaychain: ChainID.ETHEREUM_MAINNET,
        },
        [ChainID.ARBITRUM_NOVA]: {
          address: "0xD4B80C3D7240325D18E645B49e6535A3Bf95cc58",
          displaychain: ChainID.ETHEREUM_MAINNET,
        },
      },
    },
  },
  {
    title: "L1 Dai Gateway",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/ethereum/Outbox.md",
    reference:
      "https://docs.arbitrum.io/for-devs/useful-addresses#third-party-gateways",
    description:
      "The contract serves as a crucial bridge facilitating the secure transfer of DAI tokens between the Ethereum Layer 1 (L1) and Arbitrum Layer 2 (L2) networks. Offering features such as outbound and inbound transfer handling, closure capabilities, and robust security measures, the contract ensures the interoperability and efficient movement of DAI tokens within the Arbitrum L2 protocol. Developers can leverage this gateway to enhance decentralized applications, enabling users to seamlessly transfer DAI tokens between Ethereum layers.",
    playground: {
      default: {
        address: "0xD3B5b60020504bc3489D6949d545893982BA3011",
        chainId: ChainID.ETHEREUM_MAINNET,
      },
      chains: {
        [ChainID.ETHEREUM_MAINNET]: {
          address: "0xD3B5b60020504bc3489D6949d545893982BA3011",
        },
        [ChainID.ARBITRUM_ONE]: {
          address: "0x467194771dAe2967Aef3ECbEDD3Bf9a310C76C65",
        },
      },
    },
  },
  {
    title: "L1 Livepeer Gateway",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/ethereum/L1LPTGateway.md",
    reference:
      "https://docs.arbitrum.io/for-devs/useful-addresses#third-party-gateways",
    description:
      "The `L1LPTGateway` smart contract is a pivotal component facilitating the transfer of Livepeer (LPT) between Ethereum's Layer 1 and the Arbitrum Rollup Layer 2 network. With features like retryable tickets for outbound transfers, a pausing mechanism for added control, and configurable counterparts, the contract ensures secure and efficient interoperability. It enables users to seamlessly migrate LPT tokens, enhancing the overall functionality and connectivity of decentralized applications across different Ethereum layers.",
    playground: {
      default: {
        address: "0x6142f1C8bBF02E6A6bd074E8d564c9A5420a0676",
        chainId: ChainID.ETHEREUM_MAINNET,
      },
      chains: {
        [ChainID.ETHEREUM_MAINNET]: {
          address: "0x6142f1C8bBF02E6A6bd074E8d564c9A5420a0676",
        },
        [ChainID.ARBITRUM_ONE]: {
          address: "0x6D2457a4ad276000A615295f7A80F79E48CcD318",
        },
      },
    },
  },
  {
    title: "L1 ERC20 Gateway",
    tutorial: "",
    reference:
      "https://docs.arbitrum.io/for-devs/useful-addresses#core-contracts-1",
    description: "",
    playground: {
      default: {
        address: "0xa3A7B6F88361F48403514059F1F16C8E78d60EeC",
        chainId: ChainID.ETHEREUM_MAINNET,
      },
      chains: {
        [ChainID.ETHEREUM_MAINNET]: {
          address: "0xa3A7B6F88361F48403514059F1F16C8E78d60EeC",
        },
        [ChainID.ARBITRUM_ONE]: {
          address: "0x09e9222E96E7B4AE2a407B98d48e330053351EEe",
        },
      },
    },
  },
  {
    title: "Challenger Manager",
    tutorial: "",
    reference:
      "https://docs.arbitrum.io/for-devs/useful-addresses#core-contracts-1",
    description: "",
    playground: {
      default: {
        address: "0x1c78b622961f27ccc2f9ba65e2ba5d5eb301a445",
        chainId: ChainID.ETHEREUM_MAINNET,
      },
      chains: {
        [ChainID.ETHEREUM_MAINNET]: {
          address: "0x1c78b622961f27ccc2f9ba65e2ba5d5eb301a445",
        },
        [ChainID.ARBITRUM_NOVA]: {
          address: "0x21903d3F8176b1a0c17E953Cd896610Be9fFDFa8",
        },
      },
    },
  },
  {
    title: "One Step Prover 0",
    tutorial: "",
    reference:
      "https://docs.arbitrum.io/for-devs/useful-addresses#fraud-proof-contracts",
    description: "",
    playground: {
      default: {
        address: "0xe5896783a2F463446E1f624e64Aa6836BE4C6f58",
        chainId: ChainID.ETHEREUM_MAINNET,
      },
      chains: {
        [ChainID.ARBITRUM_ONE]: {
          address: "0xe5896783a2F463446E1f624e64Aa6836BE4C6f58",
          displaychain: ChainID.ETHEREUM_MAINNET,
        },
        [ChainID.ARBITRUM_NOVA]: {
          address: "0xA59075221b50C598aED0Eae0bB9869639513af0D",
          displaychain: ChainID.ETHEREUM_MAINNET,
        },
        [ChainID.ETHEREUM_GOERLI]: {
          address: "0xCaA89A8A8771Dfd95020FbA805f2dC774d2E625D",
          displaychain: ChainID.ETHEREUM_GOERLI,
        },
        [ChainID.ETHEREUM_SEPOLIA]: {
          address: "0x84EDD049A8a54fB6ED6c239Ad46f5B021F150700",
          displaychain: ChainID.ETHEREUM_SEPOLIA,
        },
      },
    },
  },
  {
    title: "One Step Prover Host Io",
    tutorial: "",
    reference:
      "https://docs.arbitrum.io/for-devs/useful-addresses#fraud-proof-contracts",
    description: "",
    playground: {
      default: {
        address: "0x3E1f62AA8076000c3218493FE3e0Ae40bcB9A1DF",
        chainId: ChainID.ETHEREUM_MAINNET,
      },
      chains: {
        [ChainID.ARBITRUM_ONE]: {
          address: "0x3E1f62AA8076000c3218493FE3e0Ae40bcB9A1DF",
          displaychain: ChainID.ETHEREUM_MAINNET,
        },
        [ChainID.ARBITRUM_NOVA]: {
          address: "0x7AdcA86896c4220f19B2f7f9746e7A99E57B0Fc5",
          displaychain: ChainID.ETHEREUM_MAINNET,
        },
        [ChainID.ETHEREUM_GOERLI]: {
          address: "0xe46a0585C3Cb05AaE200161534Af1aE5Dff61294",
          displaychain: ChainID.ETHEREUM_GOERLI,
        },
        [ChainID.ETHEREUM_SEPOLIA]: {
          address: "0x08a289543e8e3423db585DcFF8fa0a6E4b515961",
          displaychain: ChainID.ETHEREUM_SEPOLIA,
        },
      },
    },
  },
  {
    title: "One Step Proof Entry",
    tutorial: "",
    reference:
      "https://docs.arbitrum.io/for-devs/useful-addresses#fraud-proof-contracts",
    description: "",
    playground: {
      default: {
        address: "0x3E1f62AA8076000c3218493FE3e0Ae40bcB9A1DF",
        chainId: ChainID.ETHEREUM_MAINNET,
      },
      chains: {
        [ChainID.ARBITRUM_ONE]: {
          address: "0x3E1f62AA8076000c3218493FE3e0Ae40bcB9A1DF",
          displaychain: ChainID.ETHEREUM_MAINNET,
        },
        [ChainID.ARBITRUM_NOVA]: {
          address: "0x7AdcA86896c4220f19B2f7f9746e7A99E57B0Fc5",
          displaychain: ChainID.ETHEREUM_MAINNET,
        },
        [ChainID.ETHEREUM_GOERLI]: {
          address: "0xe46a0585C3Cb05AaE200161534Af1aE5Dff61294",
          displaychain: ChainID.ETHEREUM_GOERLI,
        },
        [ChainID.ETHEREUM_SEPOLIA]: {
          address: "0x08a289543e8e3423db585DcFF8fa0a6E4b515961",
          displaychain: ChainID.ETHEREUM_SEPOLIA,
        },
      },
    },
  },
  {
    title: `0x: Exchange Proxy Governor`,
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/other/ZeroExGoverance.md",
    reference:
      "https://docs.0xprotocol.org/en/latest/architecture/governor.html",
    description:
      "A time-locked multi-signature wallet designed for secure governance. It enables the execution of critical administrative functions, including ownership transfers, and system administration. Through a multisignature mechanism and careful consideration of custom time locks, the contract ensures that changes are subject to consensus among authorized parties, enhancing the security and reliability of the 0x Protocol on Arbitrum blockchain.",
    playground: {
      default: {
        address: "0x1fe80d5ad9464dba2d60b88e449305f184823f8a",
        chainId: ChainID.ARBITRUM_ONE,
      },
    },
  },
  {
    title: `Biconomy Token (BICO)`,
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/other/BiconomyToken.md",
    reference: "",
    description:
      "The token for Biconomy on Arbitrum offering ERC-20 compatibility with a focus on interoperability between Layer 1 and Layer 2 of the Ethereum network. If not available in the corresponding Layer 1 contract, ensuring adaptability to variations in ERC-20 implementations.",
    outdated: "This smart contract is considered outdate and not maintained",
    playground: {
      default: {
        address: "0x3f770ac673856f105b586bb393d122721265ad46",
        chainId: ChainID.ARBITRUM_ONE,
      },
    },
  },
  {
    title: `Token Bridge: StandardArbERC20`,
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/other/StandardArbERC20.md",
    reference:
      "https://github.com/OffchainLabs/token-bridge-contracts/blob/main/contracts/tokenbridge/arbitrum/StandardArbERC20.sol",
    description:
      "From the OffchainLabs token-bridge-contracts repository, the smart contract is designed for managing ERC20 tokens on the Arbitrum Layer 2 scaling solution. It supports efficient token transfers between Layer 1 and Layer 2. With dynamic initialization and adaptive getter handling, the contract ensures compatibility, flexibility, and adaptability within the Arbitrum ecosystem, serving as a fundamental tool for ERC20 token management.",
    playground: {
      default: {
        address:
          "https://github.com/OffchainLabs/token-bridge-contracts/blob/main/contracts/tokenbridge/arbitrum/StandardArbERC20.sol",
      },
    },
  },
  {
    title: `1Inch: Aggregation Router V5`,
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/other/AggregationRouterV5.md",
    reference:
      "https://docs.1inch.io/docs/aggregation-protocol/smart-contract/AggregationRouterV5/",
    description:
      "The AggregationRouterV5 contract, is part of the 1inch Network which orchestrates a diverse array of routers for token swaps and incorporates the Limit Orders Protocol for advanced trading capabilities. It introduces features like fund rescue functionality to retrieve mistakenly sent tokens and an emergency contract destruction mechanism for urgent situations.",
    playground: {
      default: {
        address: "0x1111111254eeb25477b68fb85ed929f73a960582",
        chainId: ChainID.ARBITRUM_ONE,
      },
    },
  },
  {
    title: `Lyra Finance: Distributor`,
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/other/MultiDistributor.md",
    reference: "",
    description:
      "The MultiDistributor smart contract, created by Lyra Finance, serves as a comprehensive token distribution solution, allowing whitelisted addresses to efficiently create batches of token claims for specified users. Users can redeem their claims, and the contract provides insightful querying functions for users to assess claimable amounts and associated batch IDs, contributing to a transparent and secure token distribution process.",
    playground: {
      default: {
        address: "0x835f827e3d4ab11dd0b4a0b894b43b308a0e41ff",
        chainId: ChainID.ARBITRUM_ONE,
      },
    },
  },
  {
    title: `Paraswap v5: Augustus Swapper`,
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/other/MultiDistributor.md",
    reference: "https://v5.paraswap.io/#/",
    description:
      "ParaSwap contracts aims to provide users with the most favorable market prices by aggregating liquidity from various lending protocols with tokens adhering to the ERC-20 standard. This focus on compatibility with popular networks and standards enhances the platform's accessibility and utility for decentralized trading on Arbitrum.",
    playground: {
      default: {
        address: "0xdef171fe48cf0115b1d80b88dc8eab59176fee57",
        chainId: ChainID.ARBITRUM_ONE,
      },
    },
  },
  {
    title: `Galxe OAT: StarNFTV4`,
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/other/StarNFTV4.md",
    reference: "https://github.com/generalgalactic/ERC721S",
    description:
      'The StarNFTV4 smart contract by an Project Galaxy and of the ERC-721 standard, introducing a unique NFT structure called "Star" with individual owners and associated campaign IDs. It provides comprehensive functionalities for minting, transferring, and burning stars, with additional features such as flexible metadata management, minter access control, and customizable contract parameters. The contract prioritizes security considerations and ERC-721 compliance.',
    playground: {
      default: {
        address: "0x8659a4876369b94515a86048fe7f99daba6b9a7d",
        chainId: ChainID.ARBITRUM_ONE,
      },
    },
  },
  {
    title: `One Step Prover Math`,
    tutorial: "",
    reference:
      "https://github.com/OffchainLabs/nitro-contracts/blob/main/src/osp/OneStepProverMath.sol",
    description:
      "OneStepProverMath is a Fraud proof smart contract facilitating mathematical and logical operations within a VM, specifically designed for Arbitrum's layer 2 scaling solutions on Ethereum, incorporating functions for arithmetic, logical, and bitwise operations on 32-bit and 64-bit integers with error-handling mechanisms.",
    playground: {
      default: {
        address:
          "https://github.com/OffchainLabs/nitro-contracts/blob/main/src/osp/OneStepProverMath.sol",
      },
      chains: {
        [ChainID.ARBITRUM_ONE]: {
          address: "0xb556F3Bb0FdCFeAf81a1c393e024a69a3327B676",
          displaychain: ChainID.ETHEREUM_MAINNET,
        },
        [ChainID.ARBITRUM_NOVA]: {
          address: "0x7a6C0503107858f82a790E481024134092e19979",
          displaychain: ChainID.ETHEREUM_MAINNET,
        },
        [ChainID.ETHEREUM_GOERLI]: {
          address: "0xFe18aB9B105a8C13Fbd67a0DaCb1C70e84Bb5d5E",
        },
        [ChainID.ETHEREUM_SEPOLIA]: {
          address: "0xfEe5c93D21b1b036eD6C250ca08F274a1a7d42F4",
        },
      },
    },
  },
  {
    title: `One Step Prover Memory`,
    tutorial: "",
    reference:
      "https://github.com/OffchainLabs/nitro-contracts/blob/main/src/osp/OneStepProverMemory.sol",
    description:
      "OneStepProverMemory contract is a fraud proof contract for handling secure memory operations, including reads, writes, and size adjustments, within a virtual machine executing WebAssembly modules, incorporating Merkle proofs for verification.",
    playground: {
      default: {
        address:
          "https://github.com/OffchainLabs/nitro-contracts/blob/main/src/osp/OneStepProverMemory.sol",
      },
    },
  },
  {
    title: `${mainTitle}: Greeter`,
    tutorial:
      "https://github.com/OffchainLabs/arbitrum-tutorials/blob/master/packages/greeter/README.md|https://github.com/OffchainLabs/arbitrum-tutorials/blob/master/packages/token-withdraw/README.md",
    reference:
      "https://github.com/OffchainLabs/arbitrum-tutorials/tree/blob/master/packages/greeter",
    description:
      "The Greeter Tutorial provides a straightforward demonstration of Arbitrum's Layer 1 to Layer 2 message passing system, also known as 'retryable tickets'. This tutorial involves deploying two contracts, one on Layer 1 and the other on Layer 2, showcasing the process of sending a message from the Layer 1 contract to the Layer 2 contract for automatic execution. The accompanying script and contracts illustrate the interaction with Arbitrum's core bridge contracts, including the creation of retryable messages, the calculation and forwarding of fees from Layer 1 to Layer 2, and the utilization of Arbitrum's Layer 1-to-Layer 2 message address aliasing.",
    playground: {
      default: {
        address:
          "https://github.com/OffchainLabs/arbitrum-tutorials/blob/master/packages/greeter/contracts/ethereum/GreeterL1.sol",
        remappings: {
          "@openzeppelin/contracts/": "@openzeppelin/contracts@4.5.0/",
          "@openzeppelin/contracts-upgradeable/": "@openzeppelin/contracts-upgradeable@4.5.0/"
        }
      },
      chains: {
        ["GreeterL1.sol"]: {
          address:
            "https://github.com/OffchainLabs/arbitrum-tutorials/blob/master/packages/greeter/contracts/ethereum/GreeterL1.sol",
          remappings: {
            "@openzeppelin/contracts/": "@openzeppelin/contracts@4.5.0/",
            "@openzeppelin/contracts-upgradeable/": "@openzeppelin/contracts-upgradeable@4.5.0/"
          }
        },
        ["GreeterL2.sol"]: {
          address:
            "https://github.com/OffchainLabs/arbitrum-tutorials/blob/master/packages/greeter/contracts/ethereum/GreeterL2.sol",
          remappings: {
            "@openzeppelin/contracts/": "@openzeppelin/contracts@4.5.0/",
            "@openzeppelin/contracts-upgradeable/": "@openzeppelin/contracts-upgradeable@4.5.0/"
          }
        },
      },
    },
  },
  {
    title: `${mainTitle}: Arbitrum Address`,
    tutorial:
      "https://github.com/OffchainLabs/arbitrum-tutorials/blob/master/packages/address-table/README.md",
    reference:
      "https://github.com/OffchainLabs/arbitrum-tutorials/blob/master/packages/address-table",
    description:
      "The ArbitrumVIP smart contract is a basic implementation demonstrating a VIP point system on the Arbitrum blockchain. Users accrue VIP points based on their addresses, influencing their perceived coolness within the system. Leveraging the Arbitrum Address Table precompiled contract for efficient address management, the contract showcases key features such as the VIP point system and integration with external contracts.",
    playground: {
      default: {
        address:
          "https://github.com/OffchainLabs/arbitrum-tutorials/blob/master/packages/address-table/contracts/ArbitrumVIP.sol",
      },
    },
  },
  {
    title: `${mainTitle}: L1 Custom Gateway`,
    tutorial:
      "https://github.com/OffchainLabs/arbitrum-tutorials/blob/master/packages/l1-confirmation-checker/README.md",
    reference:
      "https://github.com/OffchainLabs/arbitrum-tutorials/blob/master/packages/l1-confirmation-checker",
    description:
      "The L1CustomGateway smart contract is an implementation of a custom gateway deployed on Layer 1 (L1) of the Arbitrum blockchain. Facilitating token transfers between Layer 1 and Layer 2 (L2), the contract supports outbound and inbound transfers, allowing users to deposit and withdraw custom tokens across the Arbitrum network. Key features include customizable deposit settings, ownership control, and the ability to set token bridge information, providing flexibility for integration with Layer 2 applications.",
    playground: {
      default: {
        address:
          "https://github.com/OffchainLabs/arbitrum-tutorials/blob/master/packages/custom-gateway-bridging/contracts/L1CustomGateway.sol",
      },
    },
  },
  {
    title: `${mainTitle}: L1 Token`,
    tutorial: "",
    reference: "",
    description:
      "The L1Token smart contract is an ERC-20 token deployed on Layer 1 (L1) of the Arbitrum blockchain. Serving as a custom token, it interacts with the L1CustomGateway and L1GatewayRouter contracts to enable token transfers between Layer 1 and Layer 2 (L2) of the Arbitrum network. The contract includes functionalities for registering the token on L2, ensuring seamless integration with the cross-chain token bridge.",
    playground: {
      default: {
        address:
          "https://github.com/OffchainLabs/arbitrum-tutorials/blob/master/packages/custom-token-bridging/contracts/L1Token.sol",
      },
    },
  },
  {
    title: `${mainTitle}: L2 Token`,
    tutorial: "",
    reference: "",
    description:
      "The L2Token smart contract represents an ERC-20 token deployed on Layer 2 (L2) of the Arbitrum blockchain. It is designed to interact with the corresponding L2 gateway contract, allowing for the minting and burning of tokens when transitioning between Layer 1 and Layer 2. The contract ensures that these operations can only be initiated by the designated L2 gateway, providing a secure mechanism for cross-chain token transfers.",
    playground: {
      default: {
        address:
          "https://github.com/OffchainLabs/arbitrum-tutorials/blob/master/packages/custom-token-bridging/contracts/L2Token.sol",
      },
    },
  },
]
