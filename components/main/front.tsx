"use client"

import { siteConfig } from "@/config/site"
import { Button } from "../ui/button"
import { useTheme } from "next-themes"
import { grayScale025, grayScale200 } from "@/lib/fonts"
import { Copy } from "lucide-react"
import { SolideURL } from "@/lib/utils"
import { useRouter } from "next/navigation"

interface FrontProps
    extends React.HTMLAttributes<HTMLDivElement> {

}

export const Front = ({ }: FrontProps) => {
    const router = useRouter(); 
    const { theme } = useTheme();
    
    const styles = {
        backgroundSize: "10px 10px",
        backgroundImage: `radial-gradient(
        ${grayScale200(theme)} 1px, 
        ${grayScale025(theme)} 1px)`,
    }

    return (
        <div className="flex flex-col items-center py-8 gap-12 md:gap-20" style={styles}>
            <div className="flex items-center gap-2">
                <p className="text-3xl m-0 font-medium mt-1">{siteConfig.name}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-8 mb-14 px-4">
                <h1 className="text-center text-3xl lg:text-5xl max-w-md lg:max-w-2xl px-3 m-0">
                    Everything thing you need to build your next smart contract
                </h1>
                <p className="m-0 text-center max-w-xl px-3">
                    Lightweight Solidity IDE that can be integrated anywhere. Learn and found,
                    all the contracts and library you need to build your next smart contract.
                </p>
                <div className="flex flex-col gap-5 items-center mb-2">
                    <div className="mx-2 flex border-2 border-gray-300 rounded-xl px-3 sm:px-5 py-1 gap-2">
                        <p className="m-0 text-center text-sm sm:text-base">{SolideURL}</p>
                        <Copy />
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 items-center justify-center">
                    <Button onClick={() => router.push("play")}>Get Started</Button>
                </div>
            </div>
        </div>
    )
}