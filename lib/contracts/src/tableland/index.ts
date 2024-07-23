import { items as SOLIDE_GUIDES_ITEMS } from "@/lib/contracts/src/tableland/solide-guides"

export const getContracts = async () => {
    return [...SOLIDE_GUIDES_ITEMS];
}