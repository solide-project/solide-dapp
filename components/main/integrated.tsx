"use client";

import { Boxes, Code, Droplet, FileBadge2, Layers, LucideScroll, Scroll } from "lucide-react";
import { useTheme } from "next-themes";
import { Header } from "../shared/header";

interface IntegratedProps
    extends React.HTMLAttributes<HTMLDivElement> {

}

const items = [{
    icon: <Scroll size={48} />,
    title: "EVM and Metamask",
    description: "Integrated with Metamask, so you can deploy from all EVM chains.",
}, {
    icon: <FileBadge2 size={48} />,
    title: "Contracts",
    description: "Compatible with Chainlink Oracle Contract, OpenZeppelin, and many more open source contracts.",
}, {
    icon: <Code size={48} />,
    title: "Extension",
    description: "Lightweight Solidity IDE, that can be integrated into your website, tutorials. Use Solide to demo smart contract, teach Solidity, or just to play around.",
}];

export const Integrated = ({ }: IntegratedProps) => {
    const { theme } = useTheme();

    return (
        <div className="container max-w-[90%] lg:max-w-7xl m-auto py-24 lg:py-48">
            <div className="grid grid-cols-12 gap-5 text-center">
                {items.map((item, index) => {
                    return (
                        <div key={index} className="col-span-12 md:col-span-4">
                            <div className="flex items-center justify-center py-4">
                                {item.icon}
                            </div>
                            <Header className="py-4">{item.title}</Header>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const code = `
<iframe
src="http://localhost:3000/app?url=https://raw.githubusercontent.com/SovaSniper/contracts/main/API-Consumer.sol"
height="400" width="300"
style={{ "width": "100%", "overflow": "hidden" }} />
`.trim();