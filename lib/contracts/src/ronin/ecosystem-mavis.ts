import { ContractSchema } from "@/lib/contracts"

import { items as getRoninEcosystemContract } from "./ronin-ecosystem"

export const items = async (): Promise<ContractSchema[]> =>
  await getRoninEcosystemContract({
    protocols: ["mavis"],
    title: "Mavis Store",
    tutorial: "",
    reference: "https://store.skymavis.com/about",
    description:
      "Mavis smart contracts power the marketplace for gaming gear, emphasizing a diverse selection of in-game items related to Axie Infinity and the Ronin blockchain ecosystem. It is also designed to address the challenges and opportunities within the web3 gaming space. Mavis Store aims to provide an easy and secure purchasing experience, accepting various payment methods, including both cryptocurrencies and fiat currencies.",
  })
