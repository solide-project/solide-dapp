import { ContractSchema } from "@/lib/schema/contract"

const mainTitle: string = "Solide Aspect Boilerplate"

export const items: ContractSchema[] = [
  {
    title: `${mainTitle}: Hello World`,
    tutorial:
      "https://github.com/artela-network/artela-docs/blob/main/docs/develop/get-started/dev-aspect/index.md",
    reference:
      "https://docs.artela.network/develop/get-started/dev-aspect#32-access-state-changes-of-smart-contract",
    description:
      "The Aspect is implemented by creating a class that adheres to the IPostContractCallJP interface, with a method 'postContractCall' defining actions after a contract call. In this scenario, the Aspect checks the transaction data, and if the 'world' function is called (identified by its method signature \"30b67baa\"), it triggers a revert, preventing the execution of that function.",
    playground: {
      default: {
        address:
          "https://github.com/solide-project/solide-guides/blob/master/src/aspect/other/HelloWorld/hello-world.ts",
      },
    },
    type: "aspect",
  },
]
