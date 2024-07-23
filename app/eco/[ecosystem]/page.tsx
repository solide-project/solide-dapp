import { getProtcolInfo, getRPCInfo } from "@/lib/data"
import { ContractSchema } from "@/lib/contracts"
import { ContractPage } from "@/components/ecosystem/contract-page"
import { getContracts } from "@/lib/contracts/api"

export default async function Page({
    params,
}: {
    params: { ecosystem: string };
}) {
    let items: ContractSchema[] = await getContracts(params.ecosystem)

    if (items.length === 0) {
        return <div>
            Invalid Ecosystem
        </div>
    }

    const info = getProtcolInfo(params.ecosystem)
    return <ContractPage
        protocol={info}
        items={items}
        rpcSetting={getRPCInfo(params.ecosystem)}
    />
}