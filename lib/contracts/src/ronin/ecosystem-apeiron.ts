import { items as getRoninEcosystemContract } from "./ronin-ecosystem"
import { ContractSchema } from "@/lib/schema"

export const items = async (): Promise<ContractSchema[]> =>
    await getRoninEcosystemContract({
        protocols: ["apeiron", "star_orbital"],
        title: "Apeiron",
        tutorial: "https://github.com/FoonieMagus/ApeironBattleDemo_IssueList/blob/b3d39691265937bec7819c57e2ba53dab2592059/README.md",
        reference: "https://whitepaper.apeironnft.com/apeironnft/what-is-apeiron",
        description: "Apeiron, is a card game on the Ronin blockchain dedicated to supporting gamers, allows players to have true ownership of in-game assets, fostering a sense of control and participation in the overall ecosystem.",
    })
