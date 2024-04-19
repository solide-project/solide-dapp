import { ChainID } from "@/lib/chains/id"
import { ContractSchema } from "@/lib/contracts"

export const items: ContractSchema[] = [
  {
    title: `Axelar Gateway`,
    tutorial: "",
    reference: "",
    description: "",
    playground: {
      default: {
        address: "0xB779eF158DEB952E960E27810bb867794Ef0c783",
        chainId: ChainID.IMMUTABLE_MAINNET,
      },
    },
  },
  {
    title: `Bancor Converter Registry`,
    tutorial: "",
    reference: "",
    description: "",
    playground: {
      default: {
        address: "0xd8E1E7009802c914b0d39B31Fc1759A865b727B1",
        chainId: ChainID.IMMUTABLE_MAINNET,
      },
    },
  },
]
