import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
    await getContractsByGithub({
        title: "Lens Core Base Contract",
        url: "https://api.github.com/repos/lens-protocol/core/contents/contracts/base",
        tutorial:
            "https://github.com/jbx-protocol/juice-docs/blob/809265e97fa6144c7566c2495da973c5660a59c6/docs/dev/extensions/juice-ownable/jbownable.md",
        reference: "https://docs.juicebox.money/dev/extensions/juice-ownable",
        description: "",
        docRemappings: {
            JBOwnableOverrides:
                "https://github.com/jbx-protocol/juice-docs/blob/809265e97fa6144c7566c2495da973c5660a59c6/docs/dev/extensions/juice-ownable/jbownableoverrides.md",
            JBTiered721Delegate:
                "https://github.com/jbx-protocol/juice-docs/blob/809265e97fa6144c7566c2495da973c5660a59c6/docs/dev/extensions/juice-721-delegate/jbtiered721delegate.md",
        },
    })
