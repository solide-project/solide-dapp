import { ContractSchema } from "@/lib/schema/contract"

const mainTitle: string = "Solide Aspect Boilerplate"

export const items: ContractSchema[] = [
    {
        title: `${mainTitle}: Hello World`,
        tutorial:
            "https://github.com/artela-network/artela-docs/blob/main/docs/develop/get-started/dev-aspect/index.md",
        reference: "https://docs.artela.network/develop/get-started/dev-aspect#32-access-state-changes-of-smart-contract",
        description:
            "Simple Hello World Aspect Boilerplate",
        playground: {
            default: {
                address: "https://github.com/solide-project/solide-guides/blob/master/src/aspect/other/HelloWorld/hello-world.ts",
            },
        },
        type: "aspect",
    },
]