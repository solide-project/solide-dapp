const Tether_CONTRACT = "0xdac17f958d2ee523a2206206994597c13d831ec7"
const Link_CONTRACT = "0x514910771af9ca656af840dff83e8264ecf986ca"
const WrappedEth_CONTRACT = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
const SynthetixsAUD_CONTRACT = "0xF48e200EAF9906362BB1442fca31e0835773b8B4"
const Foreign_Exchange_CONTRACT = "0x5c0ab2d9b5a7ed9f470386e82bb36a3613cdd4b5"

export const items = [
  {
    title: "Tether Token (USDT)",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/ethereum/TetherToken.md",
    description:
      "Tether (USDT) is a widely used stablecoin implemented as an Ethereum-based smart contract, providing a blockchain representation of fiat currencies, with each token pegged to the value of one US dollar.",
    playground: {
      default: {
        address: Tether_CONTRACT,
      },
    },
  },
  {
    title: "Link Token (LINK)",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/ethereum/LinkToken.md",
    description:
      "The LINK token is the native cryptocurrency of the Chainlink decentralized oracle network, serving as a utility token to pay for data retrieval and smart contract execution services, enabling secure and reliable connections between smart contracts and external data sources.",
    playground: {
      default: {
        address: Link_CONTRACT,
      },
    },
  },
  {
    title: "Wrapped Ether (WETH9)",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/ethereum/WrappedEther.md",
    description:
      "Wrapped Ether (WETH9) is an Ethereum-based ERC-20 token representing Ether (ETH) on the Ethereum blockchain, allowing it to be traded and utilized in decentralized finance (DeFi) applications with the same ease as other ERC-20 tokens.",
    playground: {
      default: {
        address: WrappedEth_CONTRACT,
      },
    },
  },
  {
    title: "Synthetix Australian Dollars (sAUD)",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/ethereum/SynthetixsAUD.md",
    description:
      "Tracks the price of Australian Dollars (AUD) through price feeds supplied by an oracle.",
    playground: {
      default: {
        address: SynthetixsAUD_CONTRACT,
      },
    },
  },
  {
    title: "Chainlink Data Feed (Foreign Exchange): (GBP / USD)",
    tutorial: "",
    description: "",
    playground: {
      default: {
        address: Foreign_Exchange_CONTRACT,
      },
    },
  },
]
