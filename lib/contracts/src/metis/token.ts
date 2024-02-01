import { ChainID } from "@/lib/chains/id"

const Hermes_CONTRACT = "0xb27BbeaACA2C00d6258C3118BAB6b5B6975161c8"
const aMetmDai_CONTRACT = "0xeF547E238d689BAa811E597105A596bBE2Fe0761"
const Athena_Token_CONTRACT = "0xA4eE142e34d0676Edc2b760DD0016003D99a4ceC"
const Aave_DefaultReserveInterestRateStrategy_CONTRACT =
  "0xfe8FF9a19E251fe6cf2e8cBf0959ACa9624A97d1"
const StarLedgerNFT_CONTRACT = "0x013f3A02De41Bb822bf463ac34F86A2B4936541f"

export const items = [
  {
    title: "Hermes Token",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/metis/HermesToken.md",
    description:
      "Hermes token (HERMES) adhering to the ERC-20 standard. With a focus on simplicity and versatility, it enables seamless token transfers, approvals, and features a controlled minting mechanism.",
    playground: {
      default: {
        address: Hermes_CONTRACT,
        chainId: ChainID.METIS_ANDROMEDA,
      },
    },
  },
  // {
  //     title: "Aave Metis mDAI (aMetmDAI)",
  //     tutorial: "",
  //     reference: "https://docs.aave.com/developers/tokens/atoken",
  //     description: "",
  //     playground: {
  //         default: {
  //             address: aMetmDai_CONTRACT,
  //             chainId: ChainID.METIS_ANDROMEDA,
  //         }
  //     },
  // },
  {
    title: "Aave/Metis Default Reserve Interest Rate Strategy",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/metis/DefaultReserveInterestRateStrategy.md",
    reference:
      "https://docs.aave.com/developers/deployed-contracts/v3-mainnet/metis#tokens",
    description:
      "Developed by Aave, this smart contract dynamically calculates interest rates, addressing challenges in scalability and transaction speed while introducing the governance token `METIS` to empower users and promote decentralized finance (DeFi) within the Metis L2 ecosystem. With customizable parameters and seamless compatibility with the Ethereum Layer 1 network, the contract facilitates efficient interest rate strategies.",
    playground: {
      default: {
        address: Aave_DefaultReserveInterestRateStrategy_CONTRACT,
        chainId: ChainID.METIS_ANDROMEDA,
      },
    },
  },
  {
    title: "Athena Token (ATH)",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/metis/AthenaToken.md",
    reference:
      "https://explorer.metis.io/token/0xA4eE142e34d0676Edc2b760DD0016003D99a4ceC",
    description:
      "The ATH token, developed by the Vector Team, stands at the core of the Athena Finance protocol within the Metis ecosystem, introducing controlled token minting and governance capabilities. Adhering to the ERC-20 standard, ATH ensures compatibility with diverse decentralized applications while implementing stringent security measures to prevent unauthorized minting and maintain a maximum supply of 100 million tokens.",
    playground: {
      default: {
        address: Athena_Token_CONTRACT,
        chainId: ChainID.METIS_ANDROMEDA,
      },
    },
  },
  {
    title: "Star Ledger NFT",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/metis/StarLedgerNFT.md",
    description:
      "NFT collection of 5000 stars, each intricately crafted from real astronomical data. Leveraging the efficiency of Metis L2, the contract introduces a seamless and gas-efficient experience for users, offering accessible minting methods, presale functionality, and comprehensive administrative control.",
    playground: {
      default: {
        address: StarLedgerNFT_CONTRACT,
        chainId: ChainID.METIS_ANDROMEDA,
      },
    },
  },
]
