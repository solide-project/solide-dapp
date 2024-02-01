const ArbitrumBridge_CONTRACT = "0x1066cecc8880948fe55e427e94f1ff221d626591"
const OptimismPortal_CONTRACT = "0x5fb30336a8d0841cf15d452afa297cb6d10877d7"
const AaveContract_CONTRACT = "0x54586bE62E3c3580375aE3723C145253060Ca0C2"
const CompoundTimelock_CONTRACT = "0x6d903f6003cca6255D85CcA4D3B5E5146dC33925"
const BalancerVault_CONTRACT = "0xba12222222228d8ba445958a75a0704d566bf2c8"
const SushiBentoBox_CONTRACT = "0xF5BCE5077908a1b7370B9ae04AdC565EBd643966"
const AnkrStakingToken_CONTRACT = "0xd315b7664b99e559c3e209628453de182e77e411"

export const items = [
  {
    title: "Aave Oracle",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/ethereum/AaveOracle.md",
    reference: "https://docs.aave.com/developers/core-contracts/aaveoracle",
    //https://github.com/aave/aave-v3-core/blob/master/contracts/misc/AaveOracle.sol
    description:
      "Aave Protocol V3, designed to fetch and manage asset prices using Chainlink Aggregators as the primary source. The contract ensures reliable pricing data for decentralized applications within the Aave ecosystem that integrates critical price information into Aave's decentralized lending and borrowing infrastructure.",
    playground: {
      default: {
        address: AaveContract_CONTRACT,
      },
    },
  },
  {
    title: "Compound Timelock",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/ethereum/CompoundTimelock.md",
    reference:
      "https://github.com/compound-finance/compound-protocol/blob/master/contracts/Timelock.sol",
    description:
      "Time-delayed execution system with an admin control mechanism, enabling the scheduling, cancellation, and execution of transactions.",
    playground: {
      default: {
        address: CompoundTimelock_CONTRACT,
      },
    },
  },
  {
    title: "Balancer Vault",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/ethereum/BalancerVault.md",
    reference: "https://docs.balancer.fi/concepts/vault",
    description:
      "The Vault is Balancer's central hub, managing tokens and powering core operations like swaps and joins in its pools. By separating token accounting and pool logic, the Vault simplifies pool contracts and ensures their independence, protecting against potential threats. Its unique feature of consolidating all tokens in one contract reduces gas costs for batch swaps, making multi-hop transactions more efficient.",
    playground: {
      default: {
        address: BalancerVault_CONTRACT,
      },
    },
  },
  {
    title: "Optimism Portal",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/ethereum/OptimismPortal.md",
    description:
      "OptimismPortal is a crucial part of the Optimism Layer 2 scaling solution for Ethereum, facilitating secure communication between L1 and L2. It manages deposits, withdrawals, and ensures non-replayable messages with features like aliasing contract addresses and gas limit validation. The contract is essential for the Optimism network, providing a robust infrastructure for efficient cross-domain communication.",
    playground: {
      default: {
        address: OptimismPortal_CONTRACT,
      },
    },
  },
  {
    title: "Arbitrum Bridge",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/ethereum/ArbitrumBridge.md",
    description:
      "The Arbitrum Bridge facilitates interoperability between the Ethereum and Arbitrum blockchains, allowing users to seamlessly transfer assets and interact with decentralized applications (DApps) across both networks.",
    playground: {
      default: {
        address: ArbitrumBridge_CONTRACT,
      },
    },
  },
  {
    title: "Sushi Bento Box",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/ethereum/ArbitrumBridge.md",
    description:
      "The Arbitrum Bridge facilitates interoperability between the Ethereum and Arbitrum blockchains, allowing users to seamlessly transfer assets and interact with decentralized applications (DApps) across both networks.",
    playground: {
      default: {
        address: SushiBentoBox_CONTRACT,
      },
    },
  },
  {
    title: "Ankr Ethereum Staking Token",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/ethereum/ArbitrumBridge.md",
    description:
      "The Arbitrum Bridge facilitates interoperability between the Ethereum and Arbitrum blockchains, allowing users to seamlessly transfer assets and interact with decentralized applications (DApps) across both networks.",
    playground: {
      default: {
        address: AnkrStakingToken_CONTRACT,
      },
    },
  },
]
