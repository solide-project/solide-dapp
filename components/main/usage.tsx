"use client";

import { grayScale025, grayScale200 } from "@/lib/fonts";
import { SolideURL } from "@/lib/utils";
import { useTheme } from "next-themes";

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
            <p className="text-center text-xl m-0 font-light uppercase my-2">Extension</p>

            <div className="container max-w-[90%] lg:max-w-7xl m-auto py-16 lg:py-16 lg:pl-12 flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
                        <div>
                            {code}
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <iframe
                            src={`${SolideURL}/?url=https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/11155111/APIConsumer.sol`}
                            height="400" width="300"
                            style={{ "width": "100%", "overflow": "hidden" }} />
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