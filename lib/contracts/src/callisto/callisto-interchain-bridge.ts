import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
  await getContractsByGithub({
    title: "Callisto Interchain Bridge",
    url: "https://api.github.com/repos/CallistoNetwork/Callisto-Interchain-Bridge/contents/smart-contracts",
    tutorial:
      "https://github.com/CallistoNetwork/Callisto-Interchain-Bridge/blob/master/README.md",
    reference: "https://callisto.network/introducing-callisto-bridge",
    description:
      "The CallistoSwap contract swaps between the Callisto Network, Binance Smart Chain, and Ethereum blockchains. It utilizes multisig authority and threshold-based approval mechanisms to ensure security and integrity in the asset transfer process. The contract allows users to mint wrapped tokens on one blockchain by locking assets on another blockchain via a bridge mechanism, and vice versa. It also supports fee collection and donation functionalities. Authorities can approve asset transfers, and once the threshold number of approvals is reached, the transfer is executed.",
    version: "v0.5.1+commit.c8a2cb62",
  })
