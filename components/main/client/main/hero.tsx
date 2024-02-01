"use client"

import { useRouter } from "next/navigation"
import { SOLIDE_URL } from "@/lib/utils"

import { CopyCode } from "../shared/copy-code"
import { Button } from "@/components/ui/button"

interface FrontProps extends React.HTMLAttributes<HTMLDivElement> { }

export const Hero = ({ }: FrontProps) => {
    const router = useRouter()

    return (
        <div>
            <div
                className="flex flex-col items-center py-8 gap-12 md:gap-20 dotted-pattern"
            >
                <div className="flex items-center gap-2">
                    <p className="text-3xl m-0 font-medium mt-1">Solide</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-8 mb-14 px-4">
                    <h1 className="text-center text-3xl lg:text-5xl max-w-md lg:max-w-2xl px-3 m-0">
                        Exploring smart contracts one ecosystem at a time.
                    </h1>
                    <p className="m-0 text-center max-w-xl px-3">
                        Solide is an innovative open-source EVM based IDE and Knowledge Hub for smart contract development, 
                        offering a versatile learning environment. With features like seamless protocol integration, 
                        collaborative growth, and a commitment to continuous development, Solide empowers developers of 
                        all skill levels to experiment, build, and comprehend smart contracts with ease.
                    </p>
                    <div className="flex flex-col gap-5 items-center mb-2">
                        <CopyCode className="bg-background" payload={SOLIDE_URL} />
                    </div>
                    <div className="flex flex-wrap gap-4 items-center justify-center">
                        <Button onClick={() => router.push("play")}>Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
