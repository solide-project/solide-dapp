import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> => {
  const response = await fetch(
    "https://raw.githubusercontent.com/BuildOnViction/tomoscan/ee9e0afd90bf06ac9c3ede1ca7785d07fa2cb7a6/server/src/contracts/contractAddress.json"
  )
  const data: Record<string, string> = await response.json()

  const chain = ChainID.VICTION_MAINNET
  const ret: ContractSchema[] = []
  Object.entries(data)
    .filter(([key, _]) => !key.startsWith("BlockSigner"))
    .forEach(([key, value]) => {
      ret.push({
        title: `Viction: ${key}`,
        tutorial: "",
        reference: "",
        description: `Viction Contract: ${key}`,
        playground: {
          default: {
            address: value,
            chainId: chain,
          },
        },
      })
    })

  return ret
}
