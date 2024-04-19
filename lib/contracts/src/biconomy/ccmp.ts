import { ContractSchema } from "@/lib/contracts"

export const items: ContractSchema[] = [
  {
    title: "Biconomy CCMP: CCMPExecutor",
    tutorial: "https://github.com/bcnmy/ccmp-contracts/blob/main/README.md",
    reference: "https://github.com/bcnmy/ccmp-contracts/tree/main",
    description:
      "The CCMP contracts facilitates cross-chain communication, allowing smart contracts on one blockchain to send messages to and execute logic on another chain through the CCMPGateway contract. This process involves specifying destination chain ID, adapter name, message payloads, and gas fee payments. Decentralized relayers handle message validation, fee negotiation, and token transfers, ensuring seamless cross-chain interoperability for decentralized applications.",
    playground: {
      default: {
        address:
          "https://github.com/bcnmy/ccmp-contracts/blob/main/contracts/CCMPExecutor.sol",
      },
    },
  },
]
