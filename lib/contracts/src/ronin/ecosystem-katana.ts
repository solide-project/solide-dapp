import { ContractSchema } from "@/lib/contracts"

import { items as getRoninEcosystemContract } from "./ronin-ecosystem"

export const items = async (): Promise<ContractSchema[]> =>
  await getRoninEcosystemContract({
    protocols: ["katana"],
    title: "Ronin Katana DEX",
    tutorial:
      "https://github.com/axieinfinity/ronin-documentation/blob/main/docs/apps/katana.md",
    reference: "https://axie-infinity.gitbook.io/katana-docs",
    description:
      "Katana DEX is a decentralized exchange (DEX) built on the Ronin blockchain, functioning as an automated market maker (AMM) that enables easy swapping of various ERC-20 assets. Users can seamlessly connect their wallets to Katana DEX through the provided buttons on the Swap page, allowing them to view their assets and recent transactions. The platform empowers users to provide liquidity to liquidity pools, contributing equal values of two tokens to enhance liquidity.",
  })
