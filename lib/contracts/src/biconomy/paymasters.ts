import { ChainID } from "@/lib/chains/id"
import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> => [
  ...(await getContractsByGithub({
    title: "Biconomy Paymaster Contracts",
    url: "https://api.github.com/repos/bcnmy/biconomy-paymasters/contents/contracts",
    tutorial:
      "https://github.com/bcnmy/biconomy-paymasters/blob/main/README.md",
    reference: "https://github.com/bcnmy/biconomy-paymasters",
    description:
      "Biconomy's Paymaster contracts revolutionize the Web3 user experience by addressing the significant hurdle of gas fees through two key modes: conditional gas sponsorship and enabling users to pay in any ERC20 token. Unlike existing paymaster services, Biconomy's solution offers a novel hybrid approach, seamlessly blending gas sponsorship with token-based payments.",
    remappings: {
      "@openzeppelin/contracts/": "@openzeppelin/contracts@4.8.0/",
    },
    version: "v0.8.17+commit.8df45f5f",
  })),
  {
    title: "Biconomy Paymaster USDC",
    tutorial: "",
    reference: "",
    description: "",
    playground: {
      default: {
        address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        chainId: ChainID.ETHEREUM_MAINNET,
      },
    },
  },
]
