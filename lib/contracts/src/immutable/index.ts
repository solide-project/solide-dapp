import { items as PROTOCOL_CONTRACTS } from "@/lib/contracts/src/immutable/protocol"

export const getContracts = async () => {
    return [...PROTOCOL_CONTRACTS];
}
