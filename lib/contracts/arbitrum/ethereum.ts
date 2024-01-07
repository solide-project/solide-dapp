import { ContractCardItems } from "@/components/shared/contracts-list";
import { ChainID } from "@/lib/chains/id";

const mainTitle: string = "Any API"

export const items: ContractCardItems[] = [
    {
        title: "Arbitrum (ARB) on Ethereum",
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/ethereum/ArbToken.md",
        reference: "https://arbitrum.io",
        description: "Arbitrum native token is Ethereum Layer 1 (L1) token designed to seamlessly connect with both the Arbitrum Nova network. By implementing essential features such as token minting, burning, and registration on both networks, the contract ensures efficient cross-network transactions and facilitates integration between the Arbitrum Layer 2 (L2) and Nova networks. With a focus on security considerations and adherence to ERC-20 standards, this contract serves as a robust foundation for developers aiming to create decentralized applications spanning the Arbitrum Nova ecosystems.",
        playground: {
            default: {
                address: "0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1",
                chainId: ChainID.ETHEREUM_MAINNET,
            },
        },
    },
    {
        title: "Delayed Inbox Proxy (Nova)",
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/ethereum/DelayedInbox.md",
        reference: "https://docs.arbitrum.io/tx-lifecycle#1b--or-from-l1-via-the-delayed-inbox",
        description: "The Inbox smart contract is an important message contract that facilitates the smooth transfer of messages from Layer 1 to Layer 2. Whether through direct sends or retryable tickets, it ensures secure message delivery and interfaces with sequencers for enhanced reliability.",
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
                }
            }
        },
    },
    {
        title: "Delayed Inbox",
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/ethereum/DelayedInbox.md",
        reference: "https://docs.arbitrum.io/tx-lifecycle#1b--or-from-l1-via-the-delayed-inbox",
        description: "The Inbox smart contract is an important message contract that facilitates the smooth transfer of messages from Layer 1 to Layer 2. Whether through direct sends or retryable tickets, it ensures secure message delivery and interfaces with sequencers for enhanced reliability.",
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
                }
            }
        },
    },
    {
        title: "Outbox",
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/ethereum/Outbox.md",
        reference: "https://docs.arbitrum.io/for-devs/useful-addresses#cross-chain-messaging-contracts",
        description: "Like the Inbox contract in the Arbitrum Rollup, the Outbox contract serves as a vital communication hub between the Arbitrum Layer 2 (L2) and Ethereum Layer 1 (L1) networks. Its key features include the execution of transactions originating from the L2 network on the L1 network. By securely processing transactions and ensuring accurate outcomes, the `Outbox` contributes to the interoperability and efficiency of the Arbitrum solution within the broader Ethereum ecosystem.",
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
                }
            }
        },
    },
    {
        title: "L1 Dai Gateway",
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/ethereum/Outbox.md",
        reference: "https://docs.arbitrum.io/for-devs/useful-addresses#third-party-gateways",
        description: "The contract serves as a crucial bridge facilitating the secure transfer of DAI tokens between the Ethereum Layer 1 (L1) and Arbitrum Layer 2 (L2) networks. Offering features such as outbound and inbound transfer handling, closure capabilities, and robust security measures, the contract ensures the interoperability and efficient movement of DAI tokens within the Arbitrum L2 protocol. Developers can leverage this gateway to enhance decentralized applications, enabling users to seamlessly transfer DAI tokens between Ethereum layers.",
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
            }
        },
    },
    {
        title: "L1 Livepeer Gateway",
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/ethereum/L1LPTGateway.md",
        reference: "https://docs.arbitrum.io/for-devs/useful-addresses#third-party-gateways",
        description: "The `L1LPTGateway` smart contract is a pivotal component facilitating the transfer of Livepeer (LPT) between Ethereum's Layer 1 and the Arbitrum Rollup Layer 2 network. With features like retryable tickets for outbound transfers, a pausing mechanism for added control, and configurable counterparts, the contract ensures secure and efficient interoperability. It enables users to seamlessly migrate LPT tokens, enhancing the overall functionality and connectivity of decentralized applications across different Ethereum layers.",
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
            }
        },
    },
    {
        title: "L1 ERC20 Gateway",
        tutorial: "",
        reference: "https://docs.arbitrum.io/for-devs/useful-addresses#core-contracts-1",
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
            }
        },
    },
    {
        title: "Challenger Manager",
        tutorial: "",
        reference: "https://docs.arbitrum.io/for-devs/useful-addresses#core-contracts-1",
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
            }
        },
    },
    {
        title: "One Step Prover 0",
        tutorial: "",
        reference: "https://docs.arbitrum.io/for-devs/useful-addresses#fraud-proof-contracts",
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
                [ChainID.ETHEREUM_SEPOLIA]:{
                    address: "0x84EDD049A8a54fB6ED6c239Ad46f5B021F150700",
                    displaychain: ChainID.ETHEREUM_SEPOLIA,
                },
            }
        },
    },
    {
        title: "One Step Prover Host Io",
        tutorial: "",
        reference: "https://docs.arbitrum.io/for-devs/useful-addresses#fraud-proof-contracts",
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
            }
        },
    },
    {
        title: "One Step Proof Entry",
        tutorial: "",
        reference: "https://docs.arbitrum.io/for-devs/useful-addresses#fraud-proof-contracts",
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
            }
        },
    },
]