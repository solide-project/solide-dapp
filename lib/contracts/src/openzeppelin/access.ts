import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
    await getContractsByGithub({
        title: "Access Implementation",
        url: "https://api.github.com/repos/OpenZeppelin/openzeppelin-contracts/contents/contracts/access",
        tutorial: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/README.adoc",
        reference: "https://docs.openzeppelin.com/contracts/5.x/api/access",
        description: "Smart contract access control mechanisms range from comprehensive hierarchical role management (AccessManager) to delegated permission control (AccessManaged), per-contract role-based access (AccessControl), and a basic single-owner model (Ownable)",
    })