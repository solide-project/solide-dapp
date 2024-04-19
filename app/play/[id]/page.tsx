import { getPlayground } from "@/lib/contracts/play/get-playground"
import { dec, generatePlayIds } from "@/lib/contracts/utils/hash"
import { generateUri } from "@/lib/helpers/construct-link"
import { ContractInfo } from "@/components/main/client/contract-card/components/contract-info"
import { MarkdownPlayground } from "@/components/main/client/contract-card/components/load-playground/markdown-playground"
import { ContractSchema, SolideIDESchema} from "@/lib/contracts"

export default async function Page({ params }: any) {
  if (!params.id) {
    return <div>Don&apos;t exist</div>
  }

  const text = getPlayground(params.id)

  try {
    var data = dec(text).toString()
    var item: ContractSchema = JSON.parse(data)
    const contract: SolideIDESchema = item.playground.default
    const uri = generateUri({ item: contract, type: item.type })
    return (
      <div className="my-16 px-2">
        <div className="flex items-center space-x-4">
          <div className="py-4 text-xl lg:text-2xl font-medium">
            {item.title}
          </div>
          <ContractInfo info={item.outdated} />
        </div>
        <div className="flex items-center justify-center my-4">
          <iframe
            className="rounded-lg"
            src={uri}
            width="100%"
            height="500px"
            allow="clipboard-write"
          />
        </div>
        <div id="doc">
          <MarkdownPlayground className="container px-8 lg:px-32" tutorials={item.tutorial} />
        </div>

        <hr className="my-8" />
        {/* <div>{JSON.stringify(generatePlayIds())}</div> */}
      </div>
    )
  } catch (e) {
    console.log(e)
  }

  return <div>Invalid Id</div>
}
