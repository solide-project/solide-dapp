"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface SupportProps extends React.HTMLAttributes<HTMLDivElement> { }

const items = [
  {
    src: "esp-light.svg",
    dark: "esp-dark.svg",
    alt: "Ethereum Support Program Logo",
    link: "https://esp.ethereum.foundation/",
    size: 124,
    description: "Ethereum Support Program Recipient",
  },
  {
    src: "artela-light.svg",
    dark: "artela-dark.svg",
    alt: "Artela Network",
    link: "https://artela.network/",
    size: 196,
    description: "Artela Aspect Use Cases Buildathon Finalist with an Aspect IDE",
  },
  {
    src: "flock-light.svg",
    dark: "flock-dark.svg",
    alt: "Flock.io",
    link: "https://beta.flock.io/",
    size: 178,
    description: "AI Co Creation with FLock Winner",
  },
  {
    src: "chainsafe-light.png",
    dark: "chainsafe-dark.png",
    alt: "Chainsafe",
    link: "https://chainsafe.io/",
    size: 178,
    description: "Decentralized Intelligence Season 2 Winner",
  },
  // {
  //   src: "drpc-light.svg",
  //   dark: "drpc-dark.svg",
  //   alt: "dRPC",
  //   link: "https://drpc.org/?ref=12dbf8",
  //   size: 178,
  //   description: "dRPC Startup Program",
  // },
  {
    src: "tron-light.svg",
    dark: "tron-dark.svg",
    alt: "dRPC",
    link: "https://trondao.org/",
    size: 196,
    description: "TRON Grand Hackathon - HackaTRON Season 6 Winner",
  },
  {
    src: "rsk-light.svg",
    dark: "rsk-light.svg",
    alt: "rsk",
    link: "https://rootstock.io/",
    size: 224,
    description: "Bitcoin Meets Solidity - Hackathon by Rootstock Winner",
  },
  {
    src: "viction-light.svg",
    dark: "viction-light.svg",
    alt: "viction",
    link: "https://rootstock.io/",
    size: 224,
    description: "Viction Ambassador",
  },
]

export const Support = ({ className }: SupportProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const { theme } = useTheme()

  useEffect(() => {
    setIsDarkMode(theme === "dark")
  }, [theme])

  return (
    <div className={cn("rounded-lg w-full my-16", className)}>
      <div className="text-xl leading-[1.1] sm:text-2xl md:text-4xl text-center font-bold">
        Our Partnerships & Grants & Awards
      </div>
      <div className="grid grid-cols-4 gap-4 lg:gap-12 my-8">
        {items.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger className="flex items-center justify-center">
              <Link href={item.link} target="_blank">
                <img
                  src={!isDarkMode ? `/images/${item.src}` : `/images/${item.dark}`}
                  height={item.size}
                  width={item.size}
                  alt={item.alt}
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <div className="container">
                <p>{item.description ? item.description : ""}</p>
              </div>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
