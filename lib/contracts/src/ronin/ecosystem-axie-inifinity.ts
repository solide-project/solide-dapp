import { items as getRoninEcosystemContract } from "./ronin-ecosystem"
import { ContractSchema } from "@/lib/schema"

export const items = async (): Promise<ContractSchema[]> =>
    await getRoninEcosystemContract({
        protocols: ["axie"],
        title: "Axie Infinity",
        tutorial: "",
        reference: "https://whitepaper.axieinfinity.com/",
        description: "Axie Infinity is a blockchain-based, play-to-earn online game that gained significant popularity in the cryptocurrency and blockchain community collect and breed fantasy creatures called Axies, which are NFTs representing characters in the game.",
    })
