"use client"

import { SOLIDE_URL } from "@/lib/utils"
import { CodeBlock } from "@/components/main/client/shared/code-block"

interface UsageProps extends React.HTMLAttributes<HTMLDivElement> { }

export const SampleIntegration = ({ }: UsageProps) => {
  return (
    <div id="ide" className="py-4 lg:py-8 grid-pattern">
      <p className="text-center text-xl m-0 font-bold uppercase my-4 text-primary">
        Lightweight Extensibility IDE
      </p>

      <div className="container">
        <CodeBlock className="border overflow-x-auto w-full text-sm lg:text-base !px-16" code={code} />
      </div>

      <div className="container">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
            <CodeBlock className="border overflow-x-auto w-full text-sm lg:text-base" code={code} />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="flex items-center justify-center">
              <iframe
                className="border rounded-lg"
                src={`${SOLIDE_URL}/?url=https://github.com/SovaSniper/contracts/blob/master/chainlink/datafeed/HistoricalDataConsumerV3.sol`}
                height="400"
                width="300"
                style={{ width: "100%", overflow: "hidden" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const code = `
<iframe
    src="${SOLIDE_URL}?url=https://github.com/SovaSniper/contracts/main/API-Consumer.sol"
    height="400" width="300"
    style={{ "width": "100%", "overflow": "hidden" }} />
`.trim()
