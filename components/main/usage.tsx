"use client";

import { grayScale025, grayScale200 } from "@/lib/fonts";
import { SolideURL } from "@/lib/utils";
import { useTheme } from "next-themes";
import { CodeBlock } from "../shared/code-block";

interface UsageProps
    extends React.HTMLAttributes<HTMLDivElement> {

}

export const Usage = ({ }: UsageProps) => {
    const { theme } = useTheme();
    return (
        <div className="py-8 lg:py-16" style={{
            backgroundColor: `${grayScale200(theme)}`,
            backgroundImage: `linear-gradient(${grayScale200(theme)}  1px, transparent 1px), 
                linear-gradient(to right, 
                    ${grayScale200(theme)}  1px, 
                    ${grayScale025(theme)}  1px)`,
            backgroundSize: "20px 20px",
        }}>
            <p className="text-center text-xl m-0 font-semibold uppercase my-6 text-primary">Extension</p>

            <div className="container">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
                        <CodeBlock className="!lg:w-[640px]" code={code} />
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <div className="flex items-center justify-center">
                            <iframe
                                className="border rounded-lg"
                                src={`${SolideURL}/?url=https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/APIConsumer.sol`}
                                height="400" width="300"
                                style={{ "width": "100%", "overflow": "hidden" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const code = `
<iframe
    src="${SolideURL}?url=https://raw.githubusercontent.com/SovaSniper/contracts/main/API-Consumer.sol"
    height="400" width="300"
    style={{ "width": "100%", "overflow": "hidden" }} />
`.trim();