import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/schema/contract"

const mainTitle: string = "Data Feed"
export const items: ContractSchema[] = [
  {
    title: `${mainTitle}: Proof of Reverse Data Feed Example`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/chainlink/datafeed/HistoricalDataConsumerV3/README.md",
    reference: "https://docs.chain.link/data-feeds/proof-of-reserve",
    description:
      "The ReserveConsumerV3 smart contract facilitates seamless interaction with Chainlink Proof of Reserve Feeds, empowering developers to effortlessly access and utilize reserve status data for various assets. Offering support for both off-chain and cross-chain attestation methods, the contract ensures flexibility and customization. With straightforward integration and customizable configurations, developers can confidently leverage the contract to retrieve the latest reserve information in a secure and adaptable manner.",
    playground: {
      default: {
        address:
          "https://github.com/solide-project/solide-guides/blob/master/src/chainlink/datafeed/HistoricalDataConsumerV3/HistoricalDataConsumerV3.sol",
      },
    },
  },
  {
    title: `${mainTitle}: NFT Floor Price Data Feed Example`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/chainlink/datafeed/NFTFloorPriceConsumerV3/README.md",
    reference: "https://docs.chain.link/data-feeds/nft-floor-price",
    description:
      "The `NFTFloorPriceConsumerV3` smart contract serves as a reliable interface for accessing Chainlink NFT Floor Price Feeds, offering conservative floor price estimates for NFT collections. Leveraging Chainlink's oracle infrastructure and Coinbase Cloud's aggregation algorithm, the contract provides developers with high-quality NFT data, suitable for diverse decentralized finance applications. Its key features include flexibility in feed selection, compatibility with AggregatorV3Interface, and support for both testnet and Ethereum mainnet environments, ensuring seamless integration and accurate NFT pricing within decentralized ecosystems.",
    playground: {
      default: {
        address:
          "https://github.com/solide-project/solide-guides/blob/master/src/chainlink/datafeed/NFTFloorPriceConsumerV3/NFTFloorPriceConsumerV3.sol",
      },
    },
  },
  {
    title: `${mainTitle}: Getting Historical Data from Data Feed Example`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/chainlink/datafeed/ReserveConsumerV3/README.md",
    reference: "https://docs.chain.link/data-feeds/historical-data",
    description:
      "The `HistoricalDataConsumerV3` smart contract allows developers to access historical data from Chainlink Data Feeds by utilizing the AggregatorV3Interface. With a focus on providing insights into past round data, the contract enables users to retrieve recorded answers associated with specific round IDs. By leveraging a proxy contract abstraction, it ensures flexibility and compatibility with various networks and different versions of underlying aggregators, offering a valuable tool for decentralized applications requiring historical price feed analysis.",
    playground: {
      default: {
        address:
          "https://github.com/solide-project/solide-guides/blob/master/src/chainlink/datafeed/ReserveConsumerV3/ReserveConsumerV3.sol",
      },
    },
  },
  {
    title: `${mainTitle}: Getting Historical Data from Data Feed Example`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/chainlink/datafeed/HistoricalDataConsumerV3/README.md",
    reference: "https://docs.chain.link/data-feeds/historical-data",
    description:
      "The `HistoricalDataConsumerV3` smart contract allows developers to access historical data from Chainlink Data Feeds by utilizing the AggregatorV3Interface. With a focus on providing insights into past round data, the contract enables users to retrieve recorded answers associated with specific round IDs. By leveraging a proxy contract abstraction, it ensures flexibility and compatibility with various networks and different versions of underlying aggregators, offering a valuable tool for decentralized applications requiring historical price feed analysis.",
    playground: {
      default: {
        address: "0xA8B9A447C73191744D5B79BcE864F343455E1150",
      },
    },
  },
  {
    title: `${mainTitle}: LINK-USD 24hr Realized Volatility`,
    tutorial: "",
    reference:
      "https://docs.chain.link/data-feeds/rates-feeds/addresses?network=ethereum&page=1#sepolia-testnet",
    description:
      "Rate and Volatility Feed Addresses of LINK/USD Pair on Ethereum Sepolia Testnet",
    playground: {
      default: {
        address: "0xfD59B51F25E0Ab790a4F0c483BaC194FA0479D29",
        chainId: ChainID.ETHEREUM_SEPOLIA,
      },
    },
  },
  {
    title: `${mainTitle}: 90-Day ETH APR`,
    tutorial: "",
    reference:
      "https://docs.chain.link/data-feeds/rates-feeds/addresses?network=ethereum&page=1#sepolia-testnet",
    description:
      "Rate and Volatility Feed Addresses of 90-Day ETH APR on Ethereum Sepolia Testnet",
    playground: {
      default: {
        address: "0x7422A64372f95F172962e2C0f371E0D9531DF276",
        chainId: ChainID.ETHEREUM_SEPOLIA,
      },
    },
  },
]
