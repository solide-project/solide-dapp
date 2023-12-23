"use client";

import { CopyCode } from "@/components/shared/copy-code";
import { Header } from "@/components/shared/header";
import { Button } from "@/components/ui/button";
import { grayScale200 } from "@/lib/fonts"
import { Copy, Github } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link"
import { ContractCardItems, ContractsList } from "../shared/contracts-list";

const items: ContractCardItems[] = [
    {
        source: "https://github.com/smartcontractkit/chainlink/blob/master/contracts/src/v0.6/Oracle.sol",
        title: "Single Word Response",
        description: "The guide outlines making an HTTP GET request from a smart contract using Chainlink to receive a single-word response, highlighting the use of Chainlink Functions and prerequisites for the Chainlink Basic Request Model.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/APIConsumer.sol",
            },
            chains: {
                11155111: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/APIConsumer.sol",
                },
                80001: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/80001/APIConsumer.sol",
                }
            }
        },
        reference: "https://docs.chain.link/any-api/get-request/examples/single-word-response"
    },
    {
        source: "https://github.com/smartcontractkit/chainlink/blob/master/contracts/src/v0.6/Oracle.sol",
        title: "Multi Word Response",
        description: "The guide outlines making an HTTP GET request from a smart contract using Chainlink to receive a single-word response, highlighting the use of Chainlink Functions and prerequisites for the Chainlink Basic Request Model.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/MultiWordConsumer.sol",
            },
            chains: {
                11155111: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/MultiWordConsumer.sol",
                },
                80001:
                {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/80001/MultiWordConsumer.sol",
                },
            }
        },
        reference: "https://docs.chain.link/any-api/get-request/examples/multi-variable-responses"
    },
    {
        source: "https://github.com/smartcontractkit/chainlink/blob/master/contracts/src/v0.6/Oracle.sol",
        title: "Array Response",
        description: "This guide shows you how to use Chainlink in a smart contract to fetch information from an external API that returns a list of items in JSON format. In a friendly example using Coingecko, it demonstrates extracting specific details, like the 'id' of the first item, and explains the essential steps involved",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/FetchFromArray.sol",
            },
            chains: {
                11155111: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/FetchFromArray.sol",
                },
                80001: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/80001/FetchFromArray.sol",
                },
            }
        },
        reference: "https://docs.chain.link/any-api/get-request/examples/array-response"
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
                11155111: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/GenericLargeResponse.sol",
                },
                80001: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/GenericLargeResponse.sol",
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
                11155111: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/GetGasPrice.sol",
                },
                80001: {
                    address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/80001/GetGasPrice.sol",
                }
            }
        },
        reference: "https://docs.chain.link/any-api/get-request/examples/existing-job-request"
    },
    {
        source: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/VD20.sol",
        title: "Chainlink VRF",
        description: "This contracts illustrates the implementation of Chainlink VRF (Verifiable Random Function) in smart contracts to generate randomness on blockchains, utilizing a Request and Receive cycle.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/VD20.sol",
            }
        },
        reference: "https://docs.chain.link/vrf/v2/getting-started"
    },
    {
        source: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/VRFv2DirectFundingConsumer.sol",
        title: "Chainlink VRF v2",
        description: "A Chainlink VRF v2-compatible smart contract on the Sepolia test network, emphasizing security considerations and providing an example contract for requesting and receiving random values.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/VRFv2DirectFundingConsumer.sol",
            }
        },
        reference: "https://docs.chain.link/vrf/v2/direct-funding/examples/get-a-random-number"
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
