import { ChainID } from "@/lib/chains/id"
import { items as solideContractItems } from "@/lib/contracts/src/ethereum/solide-contracts"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> => {
  return await solideContractItems({
    url: "https://raw.githubusercontent.com/solide-project/solide-guides/master/src/metis/MaiaDAO/1088.json",
    chainId: ChainID.METIS_ANDROMEDA,
    mainTitle: "Maia DAO",
    tutorial:
      "https://github.com/Maia-DAO/ecosystem-docs/blob/main/versioned_docs/version-Contracts/01-introduction.md",
    reference: "https://v2-docs.maiadao.io/protocols/Contracts/introduction",
    description:
      "Maia is a decentralized autonomous organization (DAO) and DeFi powerhouse that features various financial instruments, including Decentralized Strategy Vaults, the Hermes Omnichain AMM and YLM, TALOS Transparent Automated Liquidity Omnichain Strategies, and the Ulysses Omnichain Liquidity Protocol. The native token, $MAIA, operates as a utility and governance token, driving coordination within the Maian ecosystem and entitling stakers to profits from the Maian Treasury.",
  })
}
