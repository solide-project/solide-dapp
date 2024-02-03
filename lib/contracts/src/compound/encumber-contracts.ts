import { ContractSchema } from "@/lib/schema/contract"

import { getContractsByGithub } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> => {
  return await getContractsByGithub({
    title: "Encumber Factory Contracts",
    url: "https://api.github.com/repos/compound-finance/encumber-factory/contents/src",
    tutorial: "https://github.com/compound-finance/encumber-factory/blob/main/README.md",
    reference: "https://github.com/compound-finance/encumber-factory",
    description:
      "The Encumber contract addresses the introduction of ERC7246, an enhancement to the ERC20 standard, enabling token holders to \"encumber\" a portion of their token balance for collateralization without transferring custody. The factory creates a wrapper token with the ERC7246 interface for existing ERC20 tokens. This wrapped token maintains a one-to-one exchange ratio with the underlying token and supports EIP-2612 and EIP-1271 for off-chain signature approvals. Notable limitations include lack of support for rebasing tokens, fee tokens, and potential ERC20 approve double-spending issues.",
  })
}