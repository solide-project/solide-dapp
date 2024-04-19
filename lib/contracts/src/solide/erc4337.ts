import { ContractSchema } from "@/lib/contracts"

export const items: ContractSchema[] = [
  {
    title: `ERC4337 Account Abstraction: Token Paymaster 💸`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/solide/TokenPaymaster/README.md|https://github.com/ethereum/ercs/blob/master/ERCS/erc-4337.md",
    reference:
      "https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/samples/TokenPaymaster.sol",
    description:
      "The TokenPaymaster provided by Infinitism is a smart contract that facilitates the payment of gas fees using ERC-20 tokens in the context of the ERC-4337 standard. It covers gas costs for user operations, allowing users to pay fees with tokens. The contract refunds excess tokens if the actual gas cost is lower than the initially provided amount. Key functionalities include caching and updating token prices, validating user operations, transferring tokens for transaction fees, and performing post-operation tasks such as refunding excess tokens.",
    playground: {
      default: {
        address:
          "https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/samples/TokenPaymaster.sol",
      },
    },
  },
  {
    title: `Solmate: Create3 Library 📜`,
    tutorial:
      "https://github.com/solide-project/docs/blob/master/blog/solidity/create3/_part-1.md|https://github.com/solide-project/docs/blob/master/blog/solidity/create3/_part-2.md",
    reference:
      "https://docs.solide0x.tech/blog/solidity/create3",
    description:
      "Create3, a new toolset designed to streamline smart contract interactions, developers now have access to a simplified and more efficient approach. This article delves into the capabilities of Create3 and explores how it revolutionizes Ethereum smart contract development.",
    playground: {
      default: {
        address:
          "https://github.com/solide-project/solide-guides/blob/master/src/solide/Create/Deployer.sol",
      },
    },
  },
]
