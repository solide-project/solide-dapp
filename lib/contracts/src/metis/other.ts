import { ChainID } from "@/lib/chains/id"

const OVM_GasPriceOracle_CONTRACT = "0x420000000000000000000000000000000000000f"
const MetisOFTToken_CONTRACT = "0xE110AF9Bc0C40bEAA8b797c5B45D8b4299BD5ab7"
const AthenaFinanceMasterchef_CONTRACT =
  "0x934a4Fc502a785032162c8AEF89Ad68385Ef31Dc"
const GnosisSafeL2_CONTRACT = "0xfb1bffC9d739B8D520DaF37dF666da4C687191EA"
const USDTTokenLP_CONTRACT = "0x2b60473a7C41Deb80EDdaafD5560e963440eb632"

export const items = [
  {
    title: "Metis L2 Gas Price Oracle",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/metis/OVM_GasPriceOracle.md",
    reference: "https://docs.metis.io/dev/protocol-in-detail#_ec7f5764w7sq",
    description:
      "The OVM_GasPriceOracle contract plays a critical role in determining the current Layer 2 (L2) gas price, which is instrumental in setting transaction fees. The contract's variables, including the L2 gas price, L1 base fee, overhead costs, and scaling factors, collectively contribute to the fee calculation, reflecting the network's congestion level.",
    playground: {
      default: {
        address: OVM_GasPriceOracle_CONTRACT,
        chainId: ChainID.METIS_ANDROMEDA,
      },
    },
  },
  {
    title: "Metis OFT token LayerZero",
    tutorial: "",
    reference: "https://docs.metis.io/dev/bridge/layerzero",
    description:
      "The contract seems to be related to Omnichain Fungible Tokens (OFT) with a fee mechanism, as indicated by the inheritance.  This contract likely plays a role in the Metis blockchain ecosystem, providing functionality for native token operations, including potential interactions with LayerZero.",
    playground: {
      default: {
        address: MetisOFTToken_CONTRACT,
        chainId: ChainID.METIS_ANDROMEDA,
      },
    },
  },
  {
    title: "Athena Finance Masterchef",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/metis/AthenaMasterChef.md",
    reference:
      "https://docs.athenafinance.io/athena-finance-protocol/contracts#protocol-contracts",
    description:
      "The MasterChef contract is a decentralized finance (DeFi) protocol designed for managing multiple reward pools, utilizing a unique timestamp-based mechanism for dynamic ATH token distribution. With features like emergency withdrawals, ownership transition plans, and multi-pool management, it aims to offer users a secure and flexible staking experience.",
    playground: {
      default: {
        address: AthenaFinanceMasterchef_CONTRACT,
        chainId: ChainID.METIS_ANDROMEDA,
      },
    },
  },
  {
    title: "Gnosis Safe L2",
    tutorial: "",
    description:
      "The Gnosis Safe smart contract is a versatile and secure multisignature wallet on the Metis blockchain, designed to facilitate collaborative ownership and management of digital assets. Multiple owners can collectively control the wallet, requiring a predefined number of confirmations to execute transactions. The contract ensures robust security through features like signature validation, hash approval mechanisms, and gas cost management.",
    playground: {
      default: {
        address: GnosisSafeL2_CONTRACT,
        chainId: ChainID.METIS_ANDROMEDA,
      },
    },
  },
  {
    title: "Stargate protocol USDT Liquidity Pool (LP)",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/metis/StargateUSDTLP.md",
    reference: "",
    description:
      "The Gnosis Safe smart contract is a versatile and secure multisignature wallet on the Metis blockchain, designed to facilitate collaborative ownership and management of digital assets. Multiple owners can collectively control the wallet, requiring a predefined number of confirmations to execute transactions. The contract ensures robust security through features like signature validation, hash approval mechanisms, and gas cost management.",
    playground: {
      default: {
        address: USDTTokenLP_CONTRACT,
        chainId: ChainID.METIS_ANDROMEDA,
      },
    },
  },
  {
    title: "MVM_Coinbase",
    tutorial: "",
    reference: "",
    description: "",
    playground: {
      default: {
        address: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
        chainId: ChainID.METIS_ANDROMEDA,
      },
    },
  },
  {
    title: "Aave Pool Addresses Provider",
    tutorial: "",
    reference: "",
    description: "",
    playground: {
      default: {
        address: "0xB9FABd7500B2C6781c35Dd48d54f81fc2299D7AF",
        chainId: ChainID.METIS_ANDROMEDA,
      },
    },
  },
  {
    title: "Aave Pool Addresses Provider",
    tutorial: "",
    reference: "",
    description: "",
    playground: {
      default: {
        address: "0x1E876cCe41B7b844FDe09E38Fa1cf00f213bFf56",
        chainId: ChainID.METIS_ANDROMEDA,
      },
    },
  },
]
