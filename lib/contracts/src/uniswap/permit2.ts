import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Uniswap Permit2",
    url: "https://api.github.com/repos/Uniswap/permit2/contents/src",
    tutorial:
      "https://github.com/Uniswap/permit2/blob/main/README.md|https://github.com/Uniswap/docs/blob/main/docs/contracts/permit2/overview.md",
    reference: "https://docs.uniswap.org/contracts/permit2/overview",
    description:
      "Permit2 is a suite of contracts designed to facilitate permit-style approvals for ERC20 and ERC721 tokens, extending beyond the constraints of EIP2612. Introducing low-overhead, next-generation token approval mechanisms, it offers signature-based approvals and token transfers, enabling applications to achieve a unified transaction flow.",
    version: "v0.8.17+commit.8df45f5f",
    outdated:
      "Note Permits contracts require viaIR complication which is not yet supported by Solide",
    docRemappings: {
      SignatureTransfer:
        "https://github.com/Uniswap/docs/blob/main/docs/contracts/permit2/reference/signature-transfer.md",
      AllowanceTransfer:
        "https://github.com/Uniswap/docs/blob/main/docs/contracts/permit2/reference/allowance-transfer.md",
    },
  })
