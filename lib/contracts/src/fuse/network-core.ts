import { ContractSchema } from "@/lib/schema/contract"

import { getContractsByGithub } from "../../utils/get-contracs-by-github"

export const items = async (): Promise<ContractSchema[]> => {
  return await getContractsByGithub({
    title: "Fuse Network Core",
    url: "https://api.github.com/repos/fuseio/fuse-network/contents/contracts",
    tutorial: "https://github.com/fuseio/fuse-network/blob/master/CONTRACTS.md",
    description:
      "The Consensus contract facilitates Delegated Proof-of-Stake (DPoS) on the Fuse network, managing validator sets through random snapshots and handling staking dynamics. The Block Reward contract ensures the fair distribution of rewards to validators and triggers snapshot/cycle logic, while the Voting contract oversees proposals and balloting for network contract changes. The Proxy Storage contract manages contract implementations, holding addresses for potential upgrades through ballot approval.",
  })
}
