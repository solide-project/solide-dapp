import { ContractSchema } from "@/lib/schema"

export const items: ContractSchema[] = [
  {
    title: "Aave Stablecoin: Gho Token",
    tutorial:
      "https://github.com/aave/docs-gho/blob/main/docs/concepts/how-gho-works/gho-implementation.md",
    reference: "https://docs.aave.com/developers/whats-new/gho",
    description:
      "GHO is a decentralized overcollateralized stablecoin that is initially only minted from assets supplied to the Aave Protocol. GHO's value is programmatically aligned to the U.S. Dollar, which will be maintained through market efficiency.",
    playground: {
      default: {
        address:
          "https://github.com/aave/gho-core/blob/main/src/contracts/gho/GhoToken.sol",
      },
    },
  },
]
