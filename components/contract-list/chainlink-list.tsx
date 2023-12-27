"use client";

import { ChainID } from "@/lib/chains/id";
import { ContractCardItems, ContractsList } from "../shared/contracts-list";

const items: ContractCardItems[] = [
    {
        title: "Single Word Response",
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/chainlink/APIConsumer.md",
        reference: "https://docs.chain.link/any-api/get-request/examples/single-word-response",
        description: "The guide outlines making an HTTP GET request from a smart contract using Chainlink to receive a single-word response, highlighting the use of Chainlink Functions and prerequisites for the Chainlink Basic Request Model.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/APIConsumer.sol",
                chainId: ChainID.ETHEREUM_SEPOLIA,
            },
            chains: {
                [ChainID.ETHEREUM_SEPOLIA]: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/APIConsumer.sol",
                },
                [ChainID.POLYGON_MUMBAI]: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/80001/APIConsumer.sol",
                },
                [ChainID.AVALANCHE_FUJI]: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/43113/APIConsumer.sol",
                },
                [ChainID.FANTOM_TESTNET]: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/4002/APIConsumer.sol",
                },
            }
        },
    },
    {
        title: "Multi Word Response",
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/chainlink/MultiWordConsumer.md",
        reference: "https://docs.chain.link/any-api/get-request/examples/multi-variable-responses",
        description: "The guide outlines making an HTTP GET request from a smart contract using Chainlink to receive a single-word response, highlighting the use of Chainlink Functions and prerequisites for the Chainlink Basic Request Model.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/MultiWordConsumer.sol",
            },
            chains: {
                [ChainID.ETHEREUM_SEPOLIA]: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/MultiWordConsumer.sol",
                },
                [ChainID.POLYGON_MUMBAI]:
                {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/80001/MultiWordConsumer.sol",
                },
                [ChainID.AVALANCHE_FUJI]: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/43113/MultiWordConsumer.sol",
                },
                [ChainID.FANTOM_TESTNET]: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/4002/MultiWordConsumer.sol",
                },
            }
        },
    },
    {
        title: "Array Response",
        reference: "https://docs.chain.link/any-api/get-request/examples/array-response",
        description: "This guide shows you how to use Chainlink in a smart contract to fetch information from an external API that returns a list of items in JSON format. In a friendly example using Coingecko, it demonstrates extracting specific details, like the 'id' of the first item, and explains the essential steps involved",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/FetchFromArray.sol",
            },
            chains: {
                [ChainID.ETHEREUM_SEPOLIA]: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/FetchFromArray.sol",
                },
                [ChainID.POLYGON_MUMBAI]: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/80001/FetchFromArray.sol",
                },
                [ChainID.AVALANCHE_FUJI]: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/43113/FetchFromArray.sol",
                },
                [ChainID.FANTOM_TESTNET]: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/4002/FetchFromArray.sol",
                },
            }
        },
    },
    {
        source: "https://github.com/smartcontractkit/chainlink/blob/master/contracts/src/v0.6/Oracle.sol",
        title: "Large Response",
        description: "This guide shows you how to use Chainlink in a smart contract to fetch information from an external API that returns a list of items in JSON format. In a friendly example using Coingecko, it demonstrates extracting specific details, like the 'id' of the first item, and explains the essential steps involved",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/GenericLargeResponse.sol",
            },
            chains: {
                [ChainID.ETHEREUM_SEPOLIA]: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/GenericLargeResponse.sol",
                },
                [ChainID.POLYGON_MUMBAI]: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/GenericLargeResponse.sol",
                },
                [ChainID.AVALANCHE_FUJI]: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/43113/GenericLargeResponse.sol",
                },
                [ChainID.FANTOM_TESTNET]: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/4002/GenericLargeResponse.sol",
                },
            }
        },
        reference: "https://docs.chain.link/any-api/get-request/examples/large-responses"
    },
    {
        source: "https://github.com/smartcontractkit/chainlink/blob/master/contracts/src/v0.6/Oracle.sol",
        title: "Existing Job Request",
        description: "Using a predefined Chainlink job configured to access the Etherscan gas tracker API, this contract demonstrates how to integrate the job into a smart contract to efficiently retrieve gas prices, enhancing contract simplicity and conciseness.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/GetGasPrice.sol",
            },
            chains: {
                [ChainID.ETHEREUM_SEPOLIA]: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/GetGasPrice.sol",
                },
                [ChainID.POLYGON_MUMBAI]: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/GetGasPrice.sol",
                },
                [ChainID.AVALANCHE_FUJI]: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/43113/GetGasPrice.sol",
                },
                [ChainID.FANTOM_TESTNET]: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/4002/GetGasPrice.sol",
                },
            }
        },
        reference: "https://docs.chain.link/any-api/get-request/examples/existing-job-request"
    },
    {
        title: "Chainlink VRF",
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/chainlink/VRFD20.md",
        reference: "https://docs.chain.link/vrf/v2/getting-started",
        description: "This contracts illustrates the implementation of Chainlink VRF (Verifiable Random Function) in smart contracts to generate randomness on blockchains, utilizing a Request and Receive cycle.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/VRFD20.sol",
            }
        },
    },
    {
        title: "Chainlink VRF v2",
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/chainlink/VRFv2DirectFundingConsumer.md",
        reference: "https://docs.chain.link/vrf/v2/direct-funding/examples/get-a-random-number",
        description: "A Chainlink VRF v2-compatible smart contract on the Sepolia test network, emphasizing security considerations and providing an example contract for requesting and receiving random values.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/VRFv2DirectFundingConsumer.sol",
            }
        },
    },
];

interface ChainlinkListProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

export const ChainlinkList = ({ children, className }: ChainlinkListProps) => {
    return (
        <ContractsList items={items} />
    )
}
