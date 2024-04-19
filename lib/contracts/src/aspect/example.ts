import { ContractSchema } from "@/lib/contracts"

const examples: any[] = [
  {
    key: "reentrance",
    title: "Reentrancy Attacks with Aspect",
    description: "Against Reentrancy Attacks with Aspect",
    aspect: [
      "aspect/guard-by-count.ts",
      "aspect/guard-by-lock.ts",
      "aspect/guard-by-trace.ts",
    ],
  },
  {
    key: "operation",
    title: "Aspect Operation Call Case",
    description: "Aspect Operation Call Case",
    aspect: ["aspect/index.ts"],
  },
  {
    key: "storage_mirror",
    title: "Aspect to mirror storage data",
    description: "Aspect to mirror a Transaction via JITCall",
    aspect: ["assembly/index.ts"],
  },
  {
    key: "transientStorage",
    title: "Aspect to store transient data",
    description: "Aspect bind storage Contract, Contract call Aspect Context",
    aspect: ["aspect/index.ts"],
  },
  {
    key: "session-key",
    title: "Aspect to generate session key",
    description: "Scheduled salary payment to a specific account",
    aspect: ["aspect/index.ts"],
  },
]

const mainTitle = "Artela Example"

export const items = (): ContractSchema[] => {
  const ret: ContractSchema[] = []
  examples.forEach((example: any) => {
    example.aspect.forEach((aspect: string) => {
      ret.push({
        title: `${mainTitle}: ${example.title}`,
        tutorial: `https://github.com/artela-network/aspect-example/blob/main/${example.key}/README.md`,
        reference: `https://github.com/artela-network/aspect-example/blob/main/${example.key}`,
        description: `Aspect example from the Artela network demonstrates how to integrate an Aspect with a smart contract: ${example.description}`,
        playground: {
          default: {
            address: `https://github.com/artela-network/aspect-example/blob/main/${example.key}/${aspect}`,
          },
        },
        type: "aspect",
      })
    })
  })

  return ret
}
