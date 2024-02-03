import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> => {
  return await getContractsByGithub({
    title: "0x Protocol ERC20",
    url: "https://api.github.com/repos/0xProject/protocol/contents/contracts/treasury/contracts/erc20/src",
    tutorial:
      "https://github.com/0xProject/protocol/blob/development/contracts/erc20/README.md",
    description:
      "The ERC20 Tokens package comprises implementations of several ERC20 tokens, notably WETH (Wrapped Ether) and ZRX. These contracts adhere to the ERC20 standard, providing functionalities such as transfer and balance inquiry.",
  })
}
