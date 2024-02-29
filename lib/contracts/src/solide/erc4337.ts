import { ContractSchema } from "@/lib/schema/contract"

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
]
