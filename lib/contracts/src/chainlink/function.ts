import { ContractSchema } from "@/lib/schema/contract"

const mainTitle: string = "Functions"
export const items: ContractSchema[] = [
  {
    title: `${mainTitle}: Calling an API Oracle`,
    tutorial: "",
    reference:
      "https://docs.chain.link/chainlink-functions/tutorials/api-query-parameters",
    description: "",
    playground: {
      default: {
        address:
          "https://github.com/SovaSniper/contracts/blob/master/chainlink/function/FunctionsConsumerExample.sol",
        version: "v0.8.19+commit.7dd6d404",
      },
    },
  },
  {
    title: `${mainTitle}: Automate Functions with Custom Logic`,
    tutorial: "",
    reference:
      "https://docs.chain.link/chainlink-functions/tutorials/automate-functions-custom-logic#customautomatedfunctionsconsumersol",
    description: "",
    playground: {
      default: {
        address:
          "https://github.com/SovaSniper/contracts/blob/master/chainlink/function/CustomAutomatedFunctionsConsumerExample.sol",
        version: "v0.8.19+commit.7dd6d404",
      },
    },
  },
]
