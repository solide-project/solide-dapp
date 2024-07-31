"use client"

import Image from "next/image";
import OrbitingCircles from "@/components/ui/orbiting-circles";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const items = [
    {
        src: "esp-logo.svg",
        dark: "esp-logo.svg",
        alt: "Ethereum Support Program Logo",
        description: "Ethereum Support Program Recipient",
        link: "https://esp.ethereum.foundation/",
        size: 64,
        duration: 24,
        delay: 8,
        radius: 80,
    },
    {
        src: "rsk-logo.svg",
        dark: "rsk-logo.svg",
        alt: "rsk",
        link: "https://rootstock.io/",
        description: "Bitcoin Meets Solidity - Hackathon by Rootstock Winner",
        size: 24,
        duration: 24,
        delay: 16,
        radius: 80,
    },
    {
        src: "viction-logo.svg",
        dark: "viction-logo.svg",
        alt: "viction",
        link: "https://rootstock.io/",
        description: "Viction Ambassador",
        size: 32,
        duration: 24,
        delay: 24,
        radius: 80,
    },
    {
        src: "tron-logo.svg",
        dark: "tron-logo.svg",
        alt: "tron dao",
        link: "https://trondao.org/",
        description: "TRON Grand Hackathon - HackaTRON Season 6 Winner",
        size: 52,
        duration: 30,
        delay: 6,
        radius: 190,
        reverse: true
    },
    {
        src: "chainsafe-logo.png",
        dark: "chainsafe-logo.png",
        alt: "Chainsafe",
        link: "https://chainsafe.io/",
        description: "Decentralized Intelligence Season 2 Winner",
        size: 18,
        duration: 30,
        delay: 12,
        radius: 190,
        reverse: true
    },
    {
        src: "flock-logo.svg",
        dark: "flock-logo.svg",
        alt: "Flock.io",
        link: "https://beta.flock.io/",
        description: "AI Co Creation with FLock Winner",
        size: 32,
        duration: 30,
        delay: 18,
        radius: 190,
        reverse: true
    },
    {
        src: "artela-logo.svg",
        dark: "artela-logo.svg",
        alt: "Ethereum Support Program Logo",
        link: "https://esp.ethereum.foundation/",
        description: "Ethereum Support Program Recipient",
        size: 24,
        duration: 30,
        delay: 24,
        radius: 190,
        reverse: true
    },
    {
        src: "arb-logo.svg",
        dark: "arb-logo.svg",
        alt: "Arbitrum Logo",
        link: "https://arbitrum.io/",
        description: "Stylus Blitz Hackathon Winnder",
        size: 36,
        duration: 30,
        delay: 30,
        radius: 190,
        reverse: true
    }]

function OrbitingCirclesSupport() {
    return <>
        <div className="text-xl leading-[1.1] sm:text-2xl md:text-4xl text-center font-bold my-16">
            Our Partnerships & Grants & Awards
            <div className="italic text-sm">Click on icon to see information</div>
        </div>
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
            {items.map((item, index) => (
                <OrbitingCircles key={index} item={item}
                    className="border-none bg-transparent size-30px"
                    duration={item.duration}
                    delay={item.delay}
                    radius={item.radius}
                    reverse={item.reverse || false}>
                    <div className="bg-white/10 p-4 rounded-full flex items-center justify-center hover:cursor-pointer">
                        <Popover>
                            <PopoverTrigger>
                                <Image src={`/images/${item.src}`} alt={item.alt} width={0} height={0}
                                    style={{ height: `${item.size}px`, width: '100%' }} />
                            </PopoverTrigger>
                            <PopoverContent className="">
                                {item.description ? item.description : ""}
                            </PopoverContent>
                        </Popover>
                    </div>
                </OrbitingCircles>
            ))}
        </div>
    </>
}

export default OrbitingCirclesSupport