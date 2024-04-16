"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

interface SupportProps extends React.HTMLAttributes<HTMLDivElement> { }

const items = [
  {
    src: "esp-light.svg",
    dark: "esp-dark.svg",
    alt: "Ethereum Support Program Logo",
    link: "https://esp.ethereum.foundation/",
    size: 124,
  },
  {
    src: "artela-light.svg",
    dark: "artela-dark.svg",
    alt: "Artela Network",
    link: "https://artela.network/",
    size: 196,
  },
  {
    src: "flock-light.svg",
    dark: "flock-dark.svg",
    alt: "Flock.io",
    link: "https://beta.flock.io/",
    size: 178,
  },
  {
    src: "chainsafe-light.png",
    dark: "chainsafe-dark.png",
    alt: "Chainsafe",
    link: "https://chainsafe.io/",
    size: 178,
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
        Supported by
      </div>
      <div className="flex items-center justify-center space-x-4 lg:space-x-16 my-8">
        {items.map((item, index) => (
          <Link key={index} href={item.link} target="_blank">
            <img
              src={!isDarkMode ? `/images/${item.src}` : `/images/${item.dark}`}
              height={item.size}
              width={item.size}
              alt={item.alt}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
