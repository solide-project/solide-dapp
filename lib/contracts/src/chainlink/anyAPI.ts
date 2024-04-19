import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/contracts"

const mainTitle: string = "Any API"
export const items: ContractSchema[] = [
  {
    title: `${mainTitle}: Single Word Response`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/chainlink/APIConsumer.md",
    reference:
      "https://docs.chain.link/any-api/get-request/examples/single-word-response",
    description:
      "The guide outlines making an HTTP GET request from a smart contract using Chainlink to receive a single-word response, highlighting the use of Chainlink Functions and prerequisites for the Chainlink Basic Request Model.",
    outdated: "This smart contract is considered outdate and not maintained",
    playground: {
      default: {
        address:
          "https://github.com/SovaSniper/contracts/blob/master/chainlink/11155111/APIConsumer.sol",
        chainId: ChainID.ETHEREUM_SEPOLIA,
      },
      chains: {
        [ChainID.ETHEREUM_SEPOLIA]: {
          address:
            "https://github.com/SovaSniper/contracts/blob/master/chainlink/11155111/APIConsumer.sol",
        },
        [ChainID.POLYGON_MUMBAI]: {
          address:
            "https://github.com/SovaSniper/contracts/blob/master/chainlink/80001/APIConsumer.sol",
        },
        [ChainID.AVALANCHE_FUJI]: {
          address:
            "https://github.com/SovaSniper/contracts/blob/master/chainlink/43113/APIConsumer.sol",
        },
        [ChainID.FANTOM_TESTNET]: {
          address:
            "https://github.com/SovaSniper/contracts/blob/master/chainlink/4002/APIConsumer.sol",
        },
      },
    },
  },
  {
    title: `${mainTitle}: Multi Word Response`,
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/chainlink/MultiWordConsumer.md",
    reference:
      "https://docs.chain.link/any-api/get-request/examples/multi-variable-responses",
    description:
      "The guide outlines making an HTTP GET request from a smart contract using Chainlink to receive a single-word response, highlighting the use of Chainlink Functions and prerequisites for the Chainlink Basic Request Model.",
    outdated: "This smart contract is considered outdate and not maintained",
    playground: {
      default: {
        address:
          "https://github.com/SovaSniper/contracts/blob/master/chainlink/11155111/MultiWordConsumer.sol",
      },
      chains: {
        [ChainID.ETHEREUM_SEPOLIA]: {
          address:
            "https://github.com/SovaSniper/contracts/blob/master/chainlink/11155111/MultiWordConsumer.sol",
        },
        [ChainID.POLYGON_MUMBAI]: {
          address:
            "https://github.com/SovaSniper/contracts/blob/master/chainlink/80001/MultiWordConsumer.sol",
        },
        [ChainID.AVALANCHE_FUJI]: {
          address:
            "https://github.com/SovaSniper/contracts/blob/master/chainlink/43113/MultiWordConsumer.sol",
        },
        [ChainID.FANTOM_TESTNET]: {
          address:
            "https://github.com/SovaSniper/contracts/blob/master/chainlink/4002/MultiWordConsumer.sol",
        },
      },
    },
  },
  {
    title: "Array Response",
    reference:
      "https://docs.chain.link/any-api/get-request/examples/array-response",
    description:
      "This guide shows you how to use Chainlink in a smart contract to fetch information from an external API that returns a list of items in JSON format. In a friendly example using Coingecko, it demonstrates extracting specific details, like the 'id' of the first item, and explains the essential steps involved",
    outdated: "This smart contract is considered outdate and not maintained",
    playground: {
      default: {
        address:
          "https://github.com/SovaSniper/contracts/blob/master/chainlink/11155111/FetchFromArray.sol",
      },
      chains: {
        [ChainID.ETHEREUM_SEPOLIA]: {
          address:
            "https://github.com/SovaSniper/contracts/blob/master/chainlink/11155111/FetchFromArray.sol",
        },
        [ChainID.POLYGON_MUMBAI]: {
          address:
            "https://github.com/SovaSniper/contracts/blob/master/chainlink/80001/FetchFromArray.sol",
        },
        [ChainID.AVALANCHE_FUJI]: {
          address:
            "https://github.com/SovaSniper/contracts/blob/master/chainlink/43113/FetchFromArray.sol",
        },
        [ChainID.FANTOM_TESTNET]: {
          address:
            "https://github.com/SovaSniper/contracts/blob/master/chainlink/4002/FetchFromArray.sol",
        },
      },
    },
  },
  {
    title: "Large Response",
    description:
      "This guide shows you how to use Chainlink in a smart contract to fetch information from an external API that returns a list of items in JSON format. In a friendly example using Coingecko, it demonstrates extracting specific details, like the 'id' of the first item, and explains the essential steps involved",
    outdated: "This smart contract is considered outdate and not maintained",
    playground: {
      default: {
        address:
          "https://github.com/SovaSniper/contracts/blob/master/chainlink/11155111/GenericLargeResponse.sol",
      },
      chains: {
        [ChainID.ETHEREUM_SEPOLIA]: {
          address:
            "https://github.com/SovaSniper/contracts/blob/master/chainlink/11155111/GenericLargeResponse.sol",
        },
        [ChainID.POLYGON_MUMBAI]: {
          address:
            "https://github.com/SovaSniper/contracts/blob/master/chainlink/11155111/GenericLargeResponse.sol",
        },
        [ChainID.AVALANCHE_FUJI]: {
          address:
            "https://github.com/SovaSniper/contracts/blob/master/chainlink/43113/GenericLargeResponse.sol",
        },
        [ChainID.FANTOM_TESTNET]: {
          address:
            "https://github.com/SovaSniper/contracts/blob/master/chainlink/4002/GenericLargeResponse.sol",
        },
      },
    },
    reference:
      "https://docs.chain.link/any-api/get-request/examples/large-responses",
  },
  {
    title: "Existing Job Request",
    description:
      "Using a predefined Chainlink job configured to access the Etherscan gas tracker API, this contract demonstrates how to integrate the job into a smart contract to efficiently retrieve gas prices, enhancing contract simplicity and conciseness.",
    outdated: "This smart contract is considered outdate and not maintained",
    playground: {
      default: {
        address:
          "https://github.com/SovaSniper/contracts/blob/master/chainlink/11155111/GetGasPrice.sol",
      },
      chains: {
        [ChainID.ETHEREUM_SEPOLIA]: {
          address:
            "https://github.com/SovaSniper/contracts/blob/master/chainlink/11155111/GetGasPrice.sol",
        },
        [ChainID.POLYGON_MUMBAI]: {
          address:
            "https://github.com/SovaSniper/contracts/blob/master/chainlink/11155111/GetGasPrice.sol",
        },
        [ChainID.AVALANCHE_FUJI]: {
          address:
            "https://github.com/SovaSniper/contracts/blob/master/chainlink/43113/GetGasPrice.sol",
        },
        [ChainID.FANTOM_TESTNET]: {
          address:
            "https://github.com/SovaSniper/contracts/blob/master/chainlink/4002/GetGasPrice.sol",
        },
      },
    },
    reference:
      "https://docs.chain.link/any-api/get-request/examples/existing-job-request",
  },
]
