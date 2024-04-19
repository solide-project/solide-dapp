import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/contracts"

const uniswapXTitle: string = "Uniswap X"
const uniswapv3Title: string = "Uniswap v3"
const uniswapv4Title: string = "Uniswap v4"
const permit2itle: string = "Permit 2"

export const items: ContractSchema[] = [
  {
    title: `${uniswapv4Title}: Pool Manager`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/src/uniswap/v4/PoolManager.md",
    reference:
      "https://github.com/Uniswap/v4-core/blob/main/src/PoolManager.sol",
    description:
      "The PoolManager smart contract, part of Uniswap's v4-core, is responsible for managing liquidity pools. Featuring advanced functionalities such as dynamic fee adjustments, a locker system for secure access control, and support for various token operations, including swapping and ERC1155 token handling. Its modular design and security measures make it a key element in Uniswap's ecosystem, ensuring efficient and secure decentralized financial operations.",
    playground: {
      default: {
        address:
          "https://github.com/Uniswap/v4-core/blob/main/src/PoolManager.sol",
      },
    },
  },
  {
    title: `${uniswapXTitle}: Exclusive Dutch Order Reactor`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/uniswap/x/ExclusiveDutchOrderReactor.md",
    reference:
      "https://github.com/Uniswap/UniswapX/blob/main/src/reactors/ExclusiveDutchOrderReactor.sol",
    description:
      "The smart contract serves as a critical module for managing exclusive Dutch orders in the Uniswap ecosystem. Through inheritance from BaseReactor and integration with various libraries, it facilitates the secure execution of Dutch auction orders, ensuring compliance with specific timing constraints and decay properties.",
    playground: {
      default: {
        address:
          "https://github.com/Uniswap/UniswapX/blob/main/src/reactors/ExclusiveDutchOrderReactor.sol",
      },
    },
  },
  {
    title: `${uniswapXTitle}: Order Quoter`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/uniswap/x/ExclusiveDutchOrderReactor.md",
    reference:
      "https://github.com/Uniswap/UniswapX/blob/main/src/lens/OrderQuoter.sol",
    description:
      "The OrderQuoter smart contract is a versatile off-chain utility contract for pre-validating generic orders within the Uniswap ecosystem. By implementing the IReactorCallback interface, it efficiently quotes orders, provides input and output token amounts, and handles revert reasons, ensuring secure and informed off-chain order processing. The contract's key features include reactor address extraction, revert reason parsing, and a mechanism to handle single-order callbacks, contributing to the overall reliability of UniswapX's order execution system.",
    playground: {
      default: {
        address:
          "https://github.com/Uniswap/UniswapX/blob/main/src/lens/OrderQuoter.sol",
      },
    },
  },
  {
    title: `${uniswapXTitle}: Swap Router 02 Executor`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/uniswap/x/SwapRouter02Executor.md",
    reference:
      "https://github.com/Uniswap/UniswapX/blob/main/src/sample-executors/SwapRouter02Executor.sol",
    description:
      "The SwapRouter02Executor serves as an essential bridge to Uniswap's SwapRouter02, enabling the execution of trades and batch operations. Leveraging SafeTransferLib for secure ERC20 token operations and implementing robust access controls. With features for WETH handling, multicalls, and access control, SwapRouter02Executor provides a comprehensive and secure solution for interacting with Uniswap's trading infrastructure within the UniswapX ecosystem.",
    playground: {
      default: {
        address:
          "https://github.com/Uniswap/UniswapX/blob/main/src/sample-executors/SwapRouter02Executor.sol",
      },
    },
  },
  {
    title: `${uniswapXTitle}: Exclusive Filler Validation`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/uniswap/x/ExclusiveFillerValidation.md",
    reference:
      "https://github.com/Uniswap/UniswapX/blob/main/src/sample-validation-contracts/ExclusiveFillerValidation.sol",
    description:
      "The ExclusiveFillerValidation smart contract ensures the secure execution of order fills by enforcing exclusive rights for a designated 'exclusive filler' within specified timeframes. The contract's key feature is the external view function `validate`, which verifies the authorized filler's identity and checks if the current block timestamp falls within the exclusive period, thereby safeguarding the integrity of the order filling process.",
    playground: {
      default: {
        address:
          "https://github.com/Uniswap/UniswapX/blob/main/src/sample-validation-contracts/ExclusiveFillerValidation.sol",
      },
    },
  },
  {
    title: `${uniswapv3Title}: Single Swap`,
    tutorial:
      "https://github.com/Uniswap/docs/blob/main/docs/contracts/v3/guides/swaps/single-swaps.md",
    reference:
      "https://docs.uniswap.org/contracts/v3/guides/swaps/single-swaps#a-complete-single-swap-contract",
    description:
      "Facilitates single swaps on the Uniswap protocol, allowing users to exchange DAI for WETH9 with both exact input and exact output functionalities.",
    playground: {
      default: {
        address:
          "https://github.com/solide-project/contracts/blob/master/uniswap/v3/SingleSwap.sol",
      },
    },
  },
  {
    title: `${uniswapv3Title}: Multihop Swaps`,
    tutorial:
      "https://github.com/Uniswap/docs/blob/main/docs/contracts/v3/guides/swaps/multihop-swaps.md",
    reference:
      "https://docs.uniswap.org/contracts/v3/guides/swaps/multihop-swaps",
    description:
      "Facilitates multi-hop swaps on the Uniswap v3 protocol, allowing users to perform exact input and exact output swaps involving multiple tokens, such as swapping DAI for WETH9 through intermediary USDC swaps, with the contract implementing the necessary functionalities for these operations.",
    playground: {
      default: {
        address:
          "https://github.com/solide-project/contracts/blob/master/uniswap/v3/MultihopSwap.sol",
      },
    },
  },
  {
    title: `${permit2itle}: Signature Transfer`,
    tutorial:
      "https://github.com/Uniswap/docs/blob/main/docs/contracts/permit2/reference/signature-transfer.md",
    reference:
      "https://docs.uniswap.org/contracts/permit2/reference/signature-transfer",
    description:
      "The SignatureTransfer smart contract facilitates secure token transfers through signature validation. It introduces functions like `permitTransferFrom` and `permitWitnessTransferFrom` for single and batched token transfers, each with varying levels of validation and witness parameters. The contract employs advanced nonce management, leveraging unordered nonces with a nonceBitmap to prevent replay attacks, and supports a variety of signature types, ensuring robust security measures in token transactions.",
    playground: {
      default: {
        address:
          "https://github.com/Uniswap/permit2/main/src/SignatureTransfer.sol",
        version: "v0.8.17+commit.8df45f5f",
      },
    },
  },
  {
    title: `${permit2itle}: Allowance Transfer`,
    tutorial:
      "https://github.com/Uniswap/docs/blob/main/docs/contracts/permit2/reference/signature-transfer.md",
    reference:
      "https://docs.uniswap.org/contracts/permit2/reference/allowance-transfer",
    description:
      "The AllowanceTransfer smart contract provides functionality for managing token allowances and transfers. It introduces methods like `approve` and `permit` for setting token permissions through signature validation, as well as `transferFrom` for executing token transfers with the necessary permissions. The contract employs a sophisticated nonce schema, where nonces are incremented per owner, token, and spender, enhancing security against replay attacks in token transactions.",
    playground: {
      default: {
        address:
          "https://github.com/Uniswap/permit2/main/src/AllowanceTransfer.sol",
        version: "v0.8.17+commit.8df45f5f",
      },
    },
  },
  {
    title: `${uniswapv3Title}: Uniswap V3 Pool`,
    tutorial:
      "https://github.com/Uniswap/docs/blob/main/docs/contracts/v3/reference/core/UniswapV3Pool.md",
    reference:
      "https://docs.uniswap.org/contracts/v3/reference/core/UniswapV3Pool",
    description:
      "A time-locked multi-signature wallet designed for secure governance. It enables the execution of critical administrative functions, including ownership transfers, and system administration. Through a multisignature mechanism and careful consideration of custom time locks, the contract ensures that changes are subject to consensus among authorized parties, enhancing the security and reliability of the 0x Protocol on Arbitrum blockchain.",
    playground: {
      default: {
        address:
          "https://github.com/Uniswap/v3-core/main/contracts/UniswapV3Pool.sol",
      },
    },
  },
  {
    title: `${uniswapv4Title}: Full Range`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/uniswap/v4/FullRange.md",
    reference:
      "https://github.com/Uniswap/v4-periphery/blob/main/contracts/hooks/examples/FullRange.sol",
    description:
      "FullRange is a sophisticated smart contract offering a unified solution for liquidity management. Combining the functionalities of adding and removing liquidity, handling swaps, and implementing robust slippage protection, the contract operates within a dynamic tick range to ensure versatility across various market conditions. ",
    outdated:
      "v4 is not yet released, please use this contract as a reference only as compilation may break.",
    playground: {
      default: {
        address:
          "https://github.com/Uniswap/v4-periphery/blob/main/contracts/hooks/examples/GeomeanOracle.sol",
      },
    },
  },
  {
    title: `${uniswapv4Title}: Geomean Oracle`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/uniswap/v4/GeomeanOracle.md",
    reference:
      "https://github.com/Uniswap/v4-periphery/blob/main/contracts/hooks/examples/GeomeanOracle.sol",
    description:
      "The FullRange smart contract is designed for managing liquidity in Uniswap V4 pools. It offers functions for adding and removing liquidity, incorporates callback mechanisms for interaction with a pool manager, with a focus on flexibility, efficiency, and security, FullRange provides comprehensive tools for users to engage with decentralized liquidity pools on the Uniswap V4 platform.",
    outdated:
      "v4 is not yet released, please use this contract as a reference only as compilation may break.",
    playground: {
      default: {
        address:
          "https://github.com/Uniswap/v4-periphery/blob/main/contracts/hooks/examples/GeomeanOracle.sol",
      },
    },
  },
  {
    title: `${uniswapv4Title}: Limit Order`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/uniswap/v4/LimitOrder.md",
    reference:
      "https://github.com/Uniswap/v4-periphery/blob/main/contracts/hooks/examples/LimitOrder.sol",
    description:
      "The LimitOrder contract empowers users to place, fill, and withdraw limit orders within the Uniswap V4 ecosystem. With features like precise epoch and liquidity management, tick range validation, and secure handling of ERC1155 tokens, it ensures a reliable and secure environment for managing decentralized finance trades. Developers can leverage its comprehensive functionality to enhance decentralized trading strategies on Uniswap V4.",
    outdated:
      "v4 is not yet released, please use this contract as a reference only as compilation may break.",
    playground: {
      default: {
        address:
          "https://github.com/Uniswap/v4-periphery/blob/main/contracts/hooks/examples/LimitOrder.sol",
      },
    },
  },
  {
    title: `${uniswapv4Title}: TWAMM (Time-Weighted Average Market Maker)`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/uniswap/v4/TWAMM.md",
    reference:
      "https://github.com/Uniswap/v4-periphery/blob/main/contracts/hooks/examples/TWAMM.sol",
    description:
      "The TWAMM (Time-Weighted Average Market Maker) smart contract provides a framework for managing long-term orders within Uniswap liquidity pools. he contract enables users to submit and manage orders executed over time, introducing advanced functionalities like executing orders at specified intervals, updating existing orders, and claiming owed tokens, enhancing the flexibility and strategic capabilities of liquidity providers within the Uniswap ecosystem.",
    outdated:
      "v4 is not yet released, please use this contract as a reference only as compilation may break.",
    playground: {
      default: {
        address:
          "https://github.com/Uniswap/v4-periphery/blob/main/contracts/hooks/examples/TWAMM.sol",
      },
    },
  },
  {
    title: `${uniswapv4Title}: TWAMM (Time-Weighted Average Market Maker)`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/uniswap/v4/VolatilityOracle.md",
    reference:
      "https://github.com/Uniswap/v4-periphery/blob/main/contracts/hooks/examples/VolatilityOracle.sol",
    description:
      "The VolatilityOracle smart contract is a dynamic fee manager designed to calculate transaction fees for liquidity pool transactions based on market volatility. By incrementing fees over time since deployment, it enables Uniswap to adapt its fee structure dynamically. The contract also integrates with Uniswap's pool initialization process, enforcing the use of dynamic fees and providing a secure mechanism for fee adjustments in response to changing market conditions.",
    outdated:
      "v4 is not yet released, please use this contract as a reference only as compilation may break.",
    playground: {
      default: {
        address:
          "https://github.com/Uniswap/v4-periphery/blob/main/contracts/hooks/examples/VolatilityOracle.sol",
      },
    },
  },
]
