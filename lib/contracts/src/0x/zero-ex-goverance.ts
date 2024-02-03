import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> => {
  return await getContractsByGithub({
    title: "0x Protocol Governance",
    url: "https://api.github.com/repos/0xProject/protocol/contents/contracts/governance/src",
    tutorial:
      "https://github.com/0xProject/protocol/blob/development/contracts/governance/README.md",
    description:
      "The Governance package for 0x Protocol and Treasury is implemented with decentralized principles, employing various contracts like ZRXWrappedToken, ZeroExVotesProxy, and ZeroExVotes. The design features separate governors for Protocol and Treasury, utilizing Timelock instances. Wrapped ZRX tokens are issued 1-to-1 with ZRX, supporting delegation without locking mechanisms. Governance settings, quorum calculations, and voting strategies differ for Protocol and Treasury, and the system supports linear and quadratic voting approaches.",
  })
}
