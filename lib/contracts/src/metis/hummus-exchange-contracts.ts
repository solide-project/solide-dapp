import { ChainID } from "@/lib/chains/id"
import { items as solideContractItems } from "@/lib/contracts/src/ethereum/solide-contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> => {
  return await solideContractItems({
    url: "https://raw.githubusercontent.com/solide-project/solide-guides/master/src/metis/HummusExchange/1088.json",
    chainId: ChainID.METIS_ANDROMEDA,
    mainTitle: "Hummus Exchange",
    tutorial: "",
    reference: "https://hummus-exchange.gitbook.io/hummus-exchange",
    description:
      "The Hummus Exchange protocol on the Metis blockchain is a cutting-edge single-side AMM, prioritizing censorship resistance, security, self-custody, and capital efficiency, allowing seamless exchange of stable cryptocurrencies with unique features like single-token provision to eliminate impermanent loss risk for liquidity providers and ensure ultra-low slippage for traders.",
  })
}
