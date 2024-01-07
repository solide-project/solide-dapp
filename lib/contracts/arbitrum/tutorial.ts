import { ContractCardItems } from "@/components/shared/contracts-list"

const mainTitle: string = "Arbitrum Tutorial"

export const items: ContractCardItems[] = [
    {
        title: `${mainTitle}: Greeter`,
        tutorial: "https://github.com/OffchainLabs/arbitrum-tutorials/blob/master/packages/greeter/README.md|https://github.com/OffchainLabs/arbitrum-tutorials/blob/master/packages/token-withdraw/README.md",
        reference: "https://github.com/OffchainLabs/arbitrum-tutorials/tree/master/packages/greeter",
        description: "The Greeter Tutorial provides a straightforward demonstration of Arbitrum's Layer 1 to Layer 2 message passing system, also known as 'retryable tickets'. This tutorial involves deploying two contracts, one on Layer 1 and the other on Layer 2, showcasing the process of sending a message from the Layer 1 contract to the Layer 2 contract for automatic execution. The accompanying script and contracts illustrate the interaction with Arbitrum's core bridge contracts, including the creation of retryable messages, the calculation and forwarding of fees from Layer 1 to Layer 2, and the utilization of Arbitrum's Layer 1-to-Layer 2 message address aliasing.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/OffchainLabs/arbitrum-tutorials/master/packages/greeter/contracts/ethereum/GreeterL1.sol",
            },
            chains: {
                ["GreeterL1.sol"]: {
                    address: "https://raw.githubusercontent.com/OffchainLabs/arbitrum-tutorials/master/packages/greeter/contracts/ethereum/GreeterL1.sol",
                },
                ["GreeterL2.sol"]: {
                    address: "https://raw.githubusercontent.com/OffchainLabs/arbitrum-tutorials/master/packages/greeter/contracts/ethereum/GreeterL2.sol",
                }
            }
        },
    },
    {
        title: `${mainTitle}: Arbitrum Address`,
        tutorial: "https://github.com/OffchainLabs/arbitrum-tutorials/blob/master/packages/address-table/README.md",
        reference: "https://github.com/OffchainLabs/arbitrum-tutorials/blob/master/packages/address-table",
        description: "The ArbitrumVIP smart contract is a basic implementation demonstrating a VIP point system on the Arbitrum blockchain. Users accrue VIP points based on their addresses, influencing their perceived coolness within the system. Leveraging the Arbitrum Address Table precompiled contract for efficient address management, the contract showcases key features such as the VIP point system and integration with external contracts.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/OffchainLabs/arbitrum-tutorials/master/packages/address-table/contracts/ArbitrumVIP.sol",
            },
        },
    },
    {
        title: `${mainTitle}: L1 Custom Gateway`,
        tutorial: "https://github.com/OffchainLabs/arbitrum-tutorials/blob/master/packages/l1-confirmation-checker/README.md",
        reference: "https://github.com/OffchainLabs/arbitrum-tutorials/blob/master/packages/l1-confirmation-checker",
        description: "The L1CustomGateway smart contract is an implementation of a custom gateway deployed on Layer 1 (L1) of the Arbitrum blockchain. Facilitating token transfers between Layer 1 and Layer 2 (L2), the contract supports outbound and inbound transfers, allowing users to deposit and withdraw custom tokens across the Arbitrum network. Key features include customizable deposit settings, ownership control, and the ability to set token bridge information, providing flexibility for integration with Layer 2 applications.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/OffchainLabs/arbitrum-tutorials/master/packages/custom-gateway-bridging/contracts/L1CustomGateway.sol",
            },
        },
    },
    {
        title: `${mainTitle}: L1 Token`,
        tutorial: "",
        reference: "",
        description: "The L1Token smart contract is an ERC-20 token deployed on Layer 1 (L1) of the Arbitrum blockchain. Serving as a custom token, it interacts with the L1CustomGateway and L1GatewayRouter contracts to enable token transfers between Layer 1 and Layer 2 (L2) of the Arbitrum network. The contract includes functionalities for registering the token on L2, ensuring seamless integration with the cross-chain token bridge.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/OffchainLabs/arbitrum-tutorials/master/packages/custom-token-bridging/contracts/L1Token.sol",
            },
        },
    },
    {
        title: `${mainTitle}: L2 Token`,
        tutorial: "",
        reference: "",
        description: "The L2Token smart contract represents an ERC-20 token deployed on Layer 2 (L2) of the Arbitrum blockchain. It is designed to interact with the corresponding L2 gateway contract, allowing for the minting and burning of tokens when transitioning between Layer 1 and Layer 2. The contract ensures that these operations can only be initiated by the designated L2 gateway, providing a secure mechanism for cross-chain token transfers.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/OffchainLabs/arbitrum-tutorials/master/packages/custom-token-bridging/contracts/L2Token.sol",
            },
        },
    },
]