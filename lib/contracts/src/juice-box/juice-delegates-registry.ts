import { ContractSchema } from "@/lib/schema/contract"
import { getContractsByGithub } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> => await getContractsByGithub({
  title: "Juice Box V3 Core Contracts",
  url: "https://api.github.com/repos/jbx-protocol/juice-delegates-registry/contents/src",
  tutorial: "https://github.com/jbx-protocol/juice-docs/blob/809265e97fa6144c7566c2495da973c5660a59c6/docs/dev/extensions/juice-delegates-registry/jbdelegatesregistry.md|https://github.com/jbx-protocol/juice-delegates-registry/blob/main/readme.md",
  reference: "https://www.npmjs.com/package/@jbx-protocol/juice-delegates-registry",
  description: "The JBDelegatesRegistry contract serves as a registry for Juicebox Delegate deployers, facilitating front-end integration by tracking deployers and their associated delegates. Deployers are responsible for registering their delegates in the registry, ensuring they implement IERC165."
})