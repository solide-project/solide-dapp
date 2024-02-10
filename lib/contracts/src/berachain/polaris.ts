import { ContractSchema } from "@/lib/schema"
import { getContractsByGithub } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> => await getContractsByGithub({
  title: "Berachain Precompile Testing Contracts",
  url: "https://api.github.com/repos/berachain/polaris/contents/contracts/src/cosmos/precompile/testing",
  tutorial: "https://github.com/berachain/polaris/blob/main/README.md",
  reference: "https://polaris.berachain.dev/docs",
  description:
    "Smart contracts used to test precompile contracts. Precompile contracts, standardized for operations like elliptic curve calculations and hashing, ensure security, interoperability, and substantial gas cost savings. In Polaris Ethereum, precompiled contracts stand out by seamlessly integrating with the cosmos-sdk application and consensus layers, providing access to a broader range of functionalities and the ability to execute arbitrary code via the EVM.",
})
