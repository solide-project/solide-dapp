import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/contracts"
import { camelToWord } from "@/lib/utils"

const mainTitle = "Fuse Wallet Contracts"

export const items = async (): Promise<ContractSchema[]> => {
  const response = await fetch(
    "https://raw.githubusercontent.com/fuseio/fuse-wallet-contracts/main/utils/versions/fuse.prod/latest.json"
  )
  const data = await response.json()

  const ret: ContractSchema[] = []
  data.modules.forEach((item: { address: string; name: string }) => {
    const formattedName = camelToWord(item.name)
    ret.push({
      title: `${mainTitle}: ${formattedName}`,
      tutorial:
        "https://github.com/fuseio/fuse-wallet-contracts/blob/main/README.md",
      reference: "https://github.com/fuseio/fuse-wallet-contracts/tree/main",
      description: `Wallet Contract ${item.name} on Fuse Mainnet . Facilitating low-cost global payments, Fuse ensures a swift, affordable, and borderless payment experience through its stablecoin-first payment stack. Emphasizing openness, Fuse provides an open-source API/SDKs and an EVM blockchain environment, allowing users to avoid vendor lock-ins across all levels of engagement.`,
      playground: {
        default: {
          address: item.address,
          chainId: ChainID.FUSE_MAINNET,
        },
      },
    })
  })
  return ret
}
